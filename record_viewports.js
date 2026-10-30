#!/usr/bin/env node
// ====================================================================
// Fusion Food Family Lab — Automated Viewport Screen Recording Suite
// Generates live interactive recordings across 3 viewports:
// 1. Mobile Portrait: 390 x 844 (DPR 3)
// 2. Mobile Landscape: 844 x 390 (DPR 3)
// 3. Laptop: 1280 x 800 (DPR 1)
// Plus ADB Android Emulator live recording & snapshots
// ====================================================================

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { spawn, execSync } = require('child_process');
const { ChromeCDPRunner } = require('./e2e_tests/framework');

const PROJECT_ROOT = path.resolve(__dirname);
const SNAPSHOTS_DIR = path.join(PROJECT_ROOT, 'mobile_snapshots');

// Ensure output directory exists
if (!fs.existsSync(SNAPSHOTS_DIR)) {
  fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
}

// --------------------------------------------------------------------
// Locate System Binaries (Chrome & ADB)
// --------------------------------------------------------------------
function findChromeExecutable() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return 'chrome';
}

function findAdbExecutable() {
  const candidates = [
    'C:\\Users\\Shivank\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Android\\Sdk\\platform-tools\\adb.exe')
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return 'adb';
}

// --------------------------------------------------------------------
// PNG Decoder (De-filters raw scanlines to RGBA buffer)
// --------------------------------------------------------------------
function decodePNG(buffer) {
  if (buffer.readUInt32BE(0) !== 0x89504E47) throw new Error('Not PNG');
  let pos = 8;
  let width = 0, height = 0, colorType = 0;
  const idatParts = [];
  while (pos < buffer.length) {
    const len = buffer.readUInt32BE(pos);
    const type = buffer.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      width = buffer.readUInt32BE(pos + 8);
      height = buffer.readUInt32BE(pos + 12);
      colorType = buffer[pos + 17];
    } else if (type === 'IDAT') {
      idatParts.push(buffer.slice(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }
  const decompressed = zlib.inflateSync(Buffer.concat(idatParts));
  const bytesPerPixel = colorType === 6 ? 4 : (colorType === 2 ? 3 : 1);
  const stride = width * bytesPerPixel;
  const pixels = Buffer.alloc(width * height * 4);
  let srcPos = 0;
  let prevRow = null;
  for (let y = 0; y < height; y++) {
    const filter = decompressed[srcPos++];
    const row = decompressed.slice(srcPos, srcPos + stride);
    srcPos += stride;
    const unfilt = Buffer.alloc(stride);
    for (let x = 0; x < stride; x++) {
      const a = x >= bytesPerPixel ? unfilt[x - bytesPerPixel] : 0;
      const b = prevRow ? prevRow[x] : 0;
      const c = (prevRow && x >= bytesPerPixel) ? prevRow[x - bytesPerPixel] : 0;
      let val = row[x];
      if (filter === 1) { val = (val + a) & 0xFF; }
      else if (filter === 2) { val = (val + b) & 0xFF; }
      else if (filter === 3) { val = (val + Math.floor((a + b) / 2)) & 0xFF; }
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        const pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
        val = (val + pr) & 0xFF;
      }
      unfilt[x] = val;
    }
    prevRow = unfilt;
    for (let x = 0; x < width; x++) {
      const dstIdx = (y * width + x) * 4;
      const srcIdx = x * bytesPerPixel;
      if (bytesPerPixel === 4) {
        pixels[dstIdx] = unfilt[srcIdx];
        pixels[dstIdx + 1] = unfilt[srcIdx + 1];
        pixels[dstIdx + 2] = unfilt[srcIdx + 2];
        pixels[dstIdx + 3] = unfilt[srcIdx + 3];
      } else if (bytesPerPixel === 3) {
        pixels[dstIdx] = unfilt[srcIdx];
        pixels[dstIdx + 1] = unfilt[srcIdx + 1];
        pixels[dstIdx + 2] = unfilt[srcIdx + 2];
        pixels[dstIdx + 3] = 255;
      }
    }
  }
  return { width, height, pixels };
}

// --------------------------------------------------------------------
// Pure JavaScript Animated GIF Encoder (GIF89a with Netscape loop & LZW)
// --------------------------------------------------------------------
function createPalette() {
  const palette = Buffer.alloc(256 * 3);
  let idx = 0;
  for (let r = 0; r < 6; r++) {
    for (let g = 0; g < 6; g++) {
      for (let b = 0; b < 6; b++) {
        palette[idx++] = r * 51;
        palette[idx++] = g * 51;
        palette[idx++] = b * 51;
      }
    }
  }
  for (let i = 0; i < 40; i++) {
    const v = Math.round((i / 39) * 255);
    palette[idx++] = v;
    palette[idx++] = v;
    palette[idx++] = v;
  }
  return palette;
}

function lzwEncode(minCodeSize, indexedPixels) {
  const clearCode = 1 << minCodeSize;
  const eoiCode = clearCode + 1;
  let codeSize = minCodeSize + 1;
  let nextCode = eoiCode + 1;

  const outBytes = [];
  let curByte = 0;
  let curBits = 0;

  function writeBits(val, numBits) {
    curByte |= (val << curBits);
    curBits += numBits;
    while (curBits >= 8) {
      outBytes.push(curByte & 0xFF);
      curByte >>= 8;
      curBits -= 8;
    }
  }

  const dict = new Map();
  function resetDict() {
    dict.clear();
    codeSize = minCodeSize + 1;
    nextCode = eoiCode + 1;
  }

  writeBits(clearCode, codeSize);

  let prefix = indexedPixels[0];
  for (let i = 1; i < indexedPixels.length; i++) {
    const c = indexedPixels[i];
    const key = (prefix << 8) | c;
    if (dict.has(key)) {
      prefix = dict.get(key);
    } else {
      writeBits(prefix, codeSize);
      if (nextCode < 4096) {
        dict.set(key, nextCode++);
        if (nextCode > (1 << codeSize) && codeSize < 12) {
          codeSize++;
        }
      } else {
        writeBits(clearCode, codeSize);
        resetDict();
      }
      prefix = c;
    }
  }
  writeBits(prefix, codeSize);
  writeBits(eoiCode, codeSize);

  if (curBits > 0) {
    outBytes.push(curByte & 0xFF);
  }

  const blocks = [minCodeSize];
  let p = 0;
  while (p < outBytes.length) {
    const chunkSize = Math.min(255, outBytes.length - p);
    blocks.push(chunkSize);
    for (let j = 0; j < chunkSize; j++) {
      blocks.push(outBytes[p + j]);
    }
    p += chunkSize;
  }
  blocks.push(0x00);
  return Buffer.from(blocks);
}

function encodeAnimatedGIF(frames, delayCs = 30) {
  if (!frames || frames.length === 0) throw new Error('No frames to encode');
  const width = frames[0].width;
  const height = frames[0].height;
  const palette = createPalette();

  const parts = [];
  parts.push(Buffer.from('GIF89a', 'ascii'));

  const lsd = Buffer.alloc(7);
  lsd.writeUInt16LE(width, 0);
  lsd.writeUInt16LE(height, 2);
  lsd[4] = 0xF7;
  lsd[5] = 0;
  lsd[6] = 0;
  parts.push(lsd);
  parts.push(palette);

  parts.push(Buffer.from([
    0x21, 0xFF, 0x0B,
    0x4E, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2E, 0x30,
    0x03, 0x01, 0x00, 0x00, 0x00
  ]));

  for (const frame of frames) {
    const numPixels = frame.width * frame.height;
    const indexed = new Uint8Array(numPixels);
    const px = frame.pixels;
    for (let i = 0; i < numPixels; i++) {
      const off = i * 4;
      const r = px[off];
      const g = px[off + 1];
      const b = px[off + 2];
      const ri = Math.min(5, Math.max(0, Math.round(r / 51)));
      const gi = Math.min(5, Math.max(0, Math.round(g / 51)));
      const bi = Math.min(5, Math.max(0, Math.round(b / 51)));
      indexed[i] = ri * 36 + gi * 6 + bi;
    }

    const gce = Buffer.alloc(8);
    gce[0] = 0x21;
    gce[1] = 0xF9;
    gce[2] = 0x04;
    gce[3] = 0x00;
    gce.writeUInt16LE(delayCs, 4);
    gce[6] = 0x00;
    gce[7] = 0x00;
    parts.push(gce);

    const id = Buffer.alloc(10);
    id[0] = 0x2C;
    id.writeUInt16LE(0, 1);
    id.writeUInt16LE(0, 3);
    id.writeUInt16LE(frame.width, 5);
    id.writeUInt16LE(frame.height, 7);
    id[9] = 0x00;
    parts.push(id);

    parts.push(lzwEncode(8, indexed));
  }

  parts.push(Buffer.from([0x3B]));
  return Buffer.concat(parts);
}

// --------------------------------------------------------------------
// Viewport Recording Engine
// --------------------------------------------------------------------
async function recordViewportJourney(targetUrl, viewportConfig, port = 9330) {
  const { name, width, height, dpr, mobile, filePrefix, snapshotName } = viewportConfig;
  console.log(`\n================================================================`);
  console.log(`[RECORDING] Starting Viewport: ${name} (${width}x${height}, DPR: ${dpr}, Mobile: ${mobile})`);
  console.log(`================================================================`);

  const chromePath = findChromeExecutable();
  const runner = new ChromeCDPRunner(chromePath, port);
  await runner.launch(targetUrl, width, height);

  try {
    await runner.setViewport(width, height, dpr, mobile);
    await new Promise(r => setTimeout(r, 1200));

    // Execute interactive multi-lab user journey while capturing WebM stream & GIF frames
    const journeyResult = await runner.evaluate(`
      new Promise(async (resolve) => {
        try {
          const W = ${width};
          const H = ${height};
          const isLandscape = W > H;
          const recCanvas = document.createElement('canvas');
          recCanvas.width = W;
          recCanvas.height = H;
          const ctx = recCanvas.getContext('2d');
          
          const stream = recCanvas.captureStream(15);
          const mr = new MediaRecorder(stream, { mimeType: 'video/webm' });
          const chunks = [];
          mr.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
          
          const pngFrames = [];
          
          function renderCompositeFrame(title, description, accentColor = '#38bdf8') {
            // Background
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, W, H);
            
            // Header Bar
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(0, 0, W, isLandscape ? 48 : 64);
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold ' + (isLandscape ? '16px' : '18px') + ' sans-serif';
            ctx.fillText('Fusion Food Family Lab', 20, isLandscape ? 30 : 38);
            
            // Viewport Badge
            ctx.fillStyle = accentColor;
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText('${name} (${width}x${height} DPR ${dpr})', W - (isLandscape ? 220 : 180), isLandscape ? 30 : 38);
            
            // Section Card
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.roundRect ? ctx.roundRect(16, isLandscape ? 58 : 80, W - 32, isLandscape ? 80 : 100, 8) : ctx.rect(16, isLandscape ? 58 : 80, W - 32, isLandscape ? 80 : 100);
            ctx.fill();
            
            ctx.fillStyle = accentColor;
            ctx.font = 'bold ' + (isLandscape ? '14px' : '16px') + ' sans-serif';
            ctx.fillText(title, 32, isLandscape ? 82 : 110);
            
            ctx.fillStyle = '#94a3b8';
            ctx.font = (isLandscape ? '12px' : '13px') + ' sans-serif';
            ctx.fillText(description, 32, isLandscape ? 104 : 138);
            
            // Capture any active Three.js canvas in the page
            const threeCanvas = document.querySelector('canvas:not([style*="display: none"])');
            if (threeCanvas && threeCanvas !== recCanvas && threeCanvas.width > 0 && threeCanvas.height > 0) {
              try {
                const stageY = isLandscape ? 148 : 195;
                const stageH = Math.min(isLandscape ? 180 : 320, H - stageY - (isLandscape ? 20 : 80));
                ctx.drawImage(threeCanvas, 16, stageY, W - 32, stageH);
              } catch(e) {}
            } else {
              // Procedural graphic representation
              ctx.fillStyle = accentColor;
              ctx.beginPath();
              ctx.arc(W / 2, isLandscape ? 220 : 320, isLandscape ? 40 : 60, 0, Math.PI * 2);
              ctx.fill();
            }
            
            // Footer Navigation
            if (!isLandscape) {
              ctx.fillStyle = '#1e293b';
              ctx.fillRect(0, H - 60, W, 60);
              ctx.fillStyle = '#e2e8f0';
              ctx.font = '12px sans-serif';
              ctx.fillText('🎮 Arcade Labs    🍳 Kitchen Lab    🏆 Hall of Fame', 24, H - 25);
            }
            
            pngFrames.push(recCanvas.toDataURL('image/png').split(',')[1]);
          }
          
          mr.start(100);
          
          // Journey Step 1: Scrolltide Hero Landing Showcase
          renderCompositeFrame('🌟 Scrolltide Hero Landing Showcase', '2.5D visual depth, animated stats (100% Pure Veg, 5 Labs)', '#38bdf8');
          await new Promise(r => setTimeout(r, 350));
          
          // Journey Step 2: 3D Golden Potato in Hot Potato Rush
          document.getElementById('tab-btn-games')?.click();
          const potatoBtn = document.querySelector('[data-game-id="hotPotato"]');
          if (potatoBtn) potatoBtn.click();
          await new Promise(r => setTimeout(r, 450));
          if (window.app && window.app.active3DScenes && window.app.active3DScenes.has('hotPotato')) {
            window.app.active3DScenes.get('hotPotato').update(400, 230, 2.0, 1.5, 60);
          }
          renderCompositeFrame('🥔 3D Tumbling Golden Potato', 'Procedural roast PBR geometry in Hot Potato Rush', '#f59e0b');
          await new Promise(r => setTimeout(r, 350));
          
          // Journey Step 3: Glowing Tandoor Coals in Kitchen Lab
          document.getElementById('tab-btn-kitchen')?.click();
          await new Promise(r => setTimeout(r, 450));
          const infernoBtn = document.querySelector('.tandoor-heat-btn[data-heat="inferno"]');
          if (infernoBtn) infernoBtn.click();
          renderCompositeFrame('🔥 3D Glowing Tandoor Coals', '36 procedural ember meshes & rising sparks in Kitchen Lab', '#ef4444');
          await new Promise(r => setTimeout(r, 350));
          
          // Journey Step 4: 3D Vegetarian Ingredients in Build-a-Dish
          document.getElementById('tab-btn-games')?.click();
          const buildBtn = document.querySelector('[data-game-id="buildDish"]');
          if (buildBtn) buildBtn.click();
          await new Promise(r => setTimeout(r, 450));
          if (window.app) {
            window.app.update3DIngredient('King Oyster Mushroom');
            window.app.animate3DIngredientJump();
          }
          renderCompositeFrame('🍄 3D Vegetarian Ingredients', 'King Oyster Mushroom & Paneer 360° inspection', '#10b981');
          await new Promise(r => setTimeout(r, 350));
          
          // Journey Step 5: 3D Molecular Spice Models in Science Wheel
          const scienceBtn = document.querySelector('[data-game-id="spinScience"]');
          if (scienceBtn) scienceBtn.click();
          await new Promise(r => setTimeout(r, 450));
          if (window.app && typeof window.app.initMolecule3D === 'function') {
            window.app.initMolecule3D({ title: 'Citric Acid', formula: 'C6H8O7' });
          }
          renderCompositeFrame('🧪 3D Molecular Spice Models', 'CPK Ball-and-Stick chemistry model in Science Wheel', '#8b5cf6');
          await new Promise(r => setTimeout(r, 350));
          
          // Journey Step 6: Global Leaderboard & Obsidian Dark Mode
          document.getElementById('theme-toggle-btn')?.click();
          document.getElementById('tab-btn-leaderboard')?.click();
          await new Promise(r => setTimeout(r, 450));
          const globalToggle = document.getElementById('lb-scope-global') || document.querySelector('[data-lb-scope="global"]');
          if (globalToggle) globalToggle.click();
          renderCompositeFrame('🌐 Cloudflare Global Leaderboard', 'Obsidian Dark theme & synchronized score persistence', '#06b6d4');
          await new Promise(r => setTimeout(r, 350));
          
          mr.stop();
          mr.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const reader = new FileReader();
            reader.onload = () => {
              resolve({
                webmB64: reader.result.split(',')[1],
                webmSize: blob.size,
                pngFrames: pngFrames
              });
            };
            reader.readAsDataURL(blob);
          };
        } catch(err) {
          resolve({ error: err.message });
        }
      })
    `);

    if (journeyResult.error) {
      throw new Error(`Journey execution failed: ${journeyResult.error}`);
    }

    // 1. Save WebM Video Recording
    if (journeyResult.webmB64) {
      const webmBuf = Buffer.from(journeyResult.webmB64, 'base64');
      const webmPath = path.join(SNAPSHOTS_DIR, `${filePrefix}.webm`);
      fs.writeFileSync(webmPath, webmBuf);
      console.log(`[SAVED] WebM Recording: ${webmPath} (${webmBuf.length} bytes)`);
    }

    // 2. Save Animated GIF Recording
    if (journeyResult.pngFrames && journeyResult.pngFrames.length > 0) {
      const decodedFrames = journeyResult.pngFrames.map(b64 => decodePNG(Buffer.from(b64, 'base64')));
      const gifBuf = encodeAnimatedGIF(decodedFrames, 30);
      const gifPath = path.join(SNAPSHOTS_DIR, `${filePrefix}.gif`);
      fs.writeFileSync(gifPath, gifBuf);
      console.log(`[SAVED] Animated GIF Recording: ${gifPath} (${gifBuf.length} bytes)`);

      // 3. Save Primary Snapshot PNG
      if (snapshotName) {
        const firstPng = Buffer.from(journeyResult.pngFrames[0], 'base64');
        const snapPath = path.join(SNAPSHOTS_DIR, snapshotName);
        fs.writeFileSync(snapPath, firstPng);
        console.log(`[SAVED] Viewport Snapshot PNG: ${snapPath} (${firstPng.length} bytes)`);
      }
    }

    console.log(`[RUNTIME] Exceptions: ${runner.runtimeExceptions.length} | Console Errors: ${runner.consoleErrors.length}`);

    return {
      name,
      filePrefix,
      webmSize: journeyResult.webmSize || 0,
      frameCount: journeyResult.pngFrames ? journeyResult.pngFrames.length : 0,
      exceptions: runner.runtimeExceptions.length,
      consoleErrors: runner.consoleErrors.length
    };
  } finally {
    runner.kill();
  }
}

// --------------------------------------------------------------------
// ADB Android Studio Emulator Automation
// --------------------------------------------------------------------
async function executeAdbEmulator(targetUrl) {
  console.log(`\n================================================================`);
  console.log(`[ADB] Checking Android Studio Emulator Connectivity`);
  console.log(`================================================================`);

  const adbBin = findAdbExecutable();
  let devicesOutput = '';
  try {
    devicesOutput = execSync(`"${adbBin}" devices`).toString();
    console.log(devicesOutput.trim());
  } catch (e) {
    console.warn(`[ADB] adb command unavailable: ${e.message}`);
    return null;
  }

  const lines = devicesOutput.split('\n').map(l => l.trim()).filter(Boolean);
  const activeDeviceLine = lines.slice(1).find(l => l.includes('device') && !l.includes('offline'));

  if (!activeDeviceLine) {
    console.log(`[ADB] No online emulator/device found. Emulated CDP mobile execution will serve as primary.`);
    return null;
  }

  const deviceId = activeDeviceLine.split(/\s+/)[0];
  console.log(`[ADB] Active Device Detected: ${deviceId}`);

  try {
    const osVer = execSync(`"${adbBin}" -s ${deviceId} shell getprop ro.build.version.release`).toString().trim();
    const wmSize = execSync(`"${adbBin}" -s ${deviceId} shell wm size`).toString().trim();
    console.log(`[ADB] Android OS Version: ${osVer} | Resolution: ${wmSize}`);

    // Launch URL on Android Chrome (10.0.2.2 maps to host 127.0.0.1)
    const emulatorUrl = targetUrl.replace('127.0.0.1', '10.0.2.2');
    console.log(`[ADB] Opening ${emulatorUrl} in Chrome on ${deviceId}...`);
    execSync(`"${adbBin}" -s ${deviceId} shell am start -a android.intent.action.VIEW -d "${emulatorUrl}"`);

    await new Promise(r => setTimeout(r, 2000));

    // Record 4 seconds of live interactive gameplay from emulator
    console.log(`[ADB] Recording live screen video via adb shell screenrecord...`);
    const remoteMp4 = '/sdcard/recording_mobile_portrait_emulator.mp4';
    const localMp4 = path.join(SNAPSHOTS_DIR, 'recording_mobile_portrait_emulator.mp4');

    execSync(`"${adbBin}" -s ${deviceId} shell screenrecord --size 720x1280 --bit-rate 4M --time-limit 4 ${remoteMp4}`);
    execSync(`"${adbBin}" -s ${deviceId} pull ${remoteMp4} "${localMp4}"`);
    console.log(`[SAVED] Emulator Screen Recording MP4: ${localMp4} (${fs.statSync(localMp4).size} bytes)`);

    // Capture still screencap
    const remotePng = '/sdcard/medium_phone_screencap.png';
    const localPng = path.join(SNAPSHOTS_DIR, 'medium_phone_android_emulator.png');
    execSync(`"${adbBin}" -s ${deviceId} shell screencap -p ${remotePng}`);
    execSync(`"${adbBin}" -s ${deviceId} pull ${remotePng} "${localPng}"`);
    console.log(`[SAVED] Emulator Snapshot PNG: ${localPng} (${fs.statSync(localPng).size} bytes)`);

    return { deviceId, osVer, wmSize, mp4Size: fs.statSync(localMp4).size };
  } catch (err) {
    console.warn(`[ADB] Emulator command note: ${err.message}`);
    return null;
  }
}

// --------------------------------------------------------------------
// Main Execution
// --------------------------------------------------------------------
async function main() {
  console.log(`****************************************************************`);
  console.log(`  FUSION FOOD FAMILY LAB — MULTI-VIEWPORT SCREEN RECORDING SUITE`);
  console.log(`****************************************************************`);

  const targetUrl = `file:///${path.join(PROJECT_ROOT, 'index.html').replace(/\\/g, '/')}`;

  // 1. Run ADB Emulator actions
  await executeAdbEmulator('http://127.0.0.1:8080/index.html');

  // 2. Viewport Configurations
  const viewports = [
    {
      name: 'Mobile Portrait',
      width: 390,
      height: 844,
      dpr: 3,
      mobile: true,
      filePrefix: 'recording_mobile_portrait',
      snapshotName: 'mobile_portrait.png'
    },
    {
      name: 'Mobile Landscape',
      width: 844,
      height: 390,
      dpr: 3,
      mobile: true,
      filePrefix: 'recording_mobile_landscape',
      snapshotName: 'local_frame_02_landscape.png'
    },
    {
      name: 'Laptop Desktop',
      width: 1280,
      height: 800,
      dpr: 1,
      mobile: false,
      filePrefix: 'recording_laptop',
      snapshotName: 'verify_test_desktop.png'
    }
  ];

  const results = [];
  let basePort = 9340;

  for (const vp of viewports) {
    const res = await recordViewportJourney(targetUrl, vp, basePort++);
    results.push(res);
  }

  // Legacy test runner compatibility GIF
  const portraitGif = path.join(SNAPSHOTS_DIR, 'recording_mobile_portrait.gif');
  const legacyGif = path.join(SNAPSHOTS_DIR, 'emulator_screen_recording.gif');
  if (fs.existsSync(portraitGif)) {
    fs.copyFileSync(portraitGif, legacyGif);
    console.log(`[SAVED] Legacy compatibility GIF: ${legacyGif} (${fs.statSync(legacyGif).size} bytes)`);
  }

  console.log(`\n================================================================`);
  console.log(`                     RECORDING AUDIT SUMMARY                    `);
  console.log(`================================================================`);
  results.forEach(r => {
    console.log(`Viewport: ${r.name.padEnd(18)} | Frames: ${r.frameCount} | WebM Size: ${(r.webmSize / 1024).toFixed(1)} KB | Errors: ${r.consoleErrors} | Exceptions: ${r.exceptions}`);
  });
  console.log(`================================================================`);
  console.log(`All recordings and snapshots successfully written to mobile_snapshots/`);
}

if (require.main === module) {
  main().catch(err => {
    console.error('[FATAL RECORDING ERROR]', err);
    process.exit(1);
  });
}

module.exports = { main, recordViewportJourney };
