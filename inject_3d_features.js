const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let content = fs.readFileSync(appJsPath, 'utf8');

// 1. Definition of ThreeJSCulinaryManager
const threeManagerCode = `
// ========================================================
// THREE.JS CULINARY 3D MANAGER (MILESTONE M2)
// Handles 4 Procedural 3D Elements, Clamped DPR, ResizeObserver,
// and Tab Visibility Pausing (Zero Layout Shift, CLS = 0)
// ========================================================
class ThreeJSCulinaryManager {
  constructor(app) {
    this.app = app;
    this.instances = new Map();
    this.isTabHidden = false;
    this.resizeObservers = new Map();
    this.initVisibilityListener();
  }

  initVisibilityListener() {
    // Tab visibility handling (pause loops when tab hidden)
    document.addEventListener('visibilitychange', () => {
      this.isTabHidden = document.hidden;
      if (this.isTabHidden) {
        this.pauseAll();
      } else {
        this.resumeAll();
      }
    });

    // Window resize handler
    window.addEventListener('resize', () => {
      this.handleGlobalResize();
    });
  }

  isSupported() {
    return typeof THREE !== 'undefined' && !!(window.WebGLRenderingContext || window.WebGL2RenderingContext);
  }

  createRenderer(container) {
    if (!this.isSupported()) return null;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 200;
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    if (window.ResizeObserver) {
      const ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          if (width === 0 || height === 0) continue;
          this.handleInstanceResize(container.id, width, height);
        }
      });
      ro.observe(container);
      this.resizeObservers.set(container.id, ro);
    }
    return renderer;
  }

  handleInstanceResize(id, width, height) {
    const inst = this.instances.get(id);
    if (!inst) return;
    if (inst.camera && inst.renderer) {
      inst.camera.aspect = width / height;
      inst.camera.updateProjectionMatrix();
      inst.renderer.setSize(width, height, false);
    }
  }

  handleGlobalResize() {
    this.instances.forEach((inst, id) => {
      const el = document.getElementById(id);
      if (el && inst.camera && inst.renderer) {
        const w = el.clientWidth;
        const h = el.clientHeight;
        if (w > 0 && h > 0) {
          inst.camera.aspect = w / h;
          inst.camera.updateProjectionMatrix();
          inst.renderer.setSize(w, h, false);
        }
      }
    });
  }

  dispose(id) {
    const inst = this.instances.get(id);
    if (!inst) return;
    if (inst.animId) cancelAnimationFrame(inst.animId);
    if (this.resizeObservers.has(id)) {
      this.resizeObservers.get(id).disconnect();
      this.resizeObservers.delete(id);
    }
    if (inst.renderer && inst.renderer.domElement && inst.renderer.domElement.parentNode) {
      inst.renderer.domElement.parentNode.removeChild(inst.renderer.domElement);
    }
    if (inst.scene) {
      inst.scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
    }
    if (inst.renderer) {
      inst.renderer.dispose();
    }
    this.instances.delete(id);
  }

  pauseAll() {
    this.instances.forEach(inst => {
      inst.paused = true;
    });
  }

  resumeAll() {
    this.instances.forEach(inst => {
      inst.paused = false;
      if (inst.animate && !inst.running) {
        inst.running = true;
        inst.animate();
      }
    });
  }

  // ----------------------------------------------------
  // ELEMENT 1: TUMBLING GOLDEN POTATO (Hot Potato Rush)
  // ----------------------------------------------------
  mountHotPotato3D(container) {
    if (!this.isSupported() || !container) return null;
    this.dispose(container.id);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 460;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 140);

    const renderer = this.createRenderer(container);
    if (!renderer) return null;
    renderer.domElement.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:5;';
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.95);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xFFF7ED, 1.4);
    dirLight.position.set(60, 100, 80);
    scene.add(dirLight);

    const coalGlow = new THREE.PointLight(0xFF4500, 2.2, 200);
    coalGlow.position.set(0, -70, 40);
    scene.add(coalGlow);

    // Procedural Deformed Dodecahedron Potato
    const geo = new THREE.DodecahedronGeometry(22, 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      const vz = pos.getZ(i);
      const noise = 1 + 0.15 * Math.sin(vx * 0.14) * Math.cos(vy * 0.16) * Math.sin(vz * 0.14);
      pos.setXYZ(i, vx * noise, vy * 1.35 * noise, vz * noise);
    }
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: 0xD4A373,
      roughness: 0.72,
      metalness: 0.1,
      emissive: 0x000000
    });
    const potatoMesh = new THREE.Mesh(geo, mat);
    potatoMesh.position.set(0, 0, 0);
    scene.add(potatoMesh);

    // Golden Spark Particles when Crispy
    const sparkGeo = new THREE.BufferGeometry();
    const sparkCount = 35;
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount * 3; i += 3) {
      sparkPos[i] = (Math.random() - 0.5) * 55;
      sparkPos[i + 1] = (Math.random() - 0.5) * 65;
      sparkPos[i + 2] = (Math.random() - 0.5) * 55;
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xFBBF24,
      size: 3.2,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparks);

    const inst = {
      id: container.id,
      scene,
      camera,
      renderer,
      potatoMesh,
      mat,
      sparks,
      sparkMat,
      coalGlow,
      paused: false,
      running: true,
      rotVx: 0.02,
      rotVy: 0.03,
      heatState: 'raw',
      animate: () => {
        if (inst.paused) {
          inst.running = false;
          return;
        }
        inst.animId = requestAnimationFrame(inst.animate);
        inst.potatoMesh.rotation.x += inst.rotVx;
        inst.potatoMesh.rotation.y += inst.rotVy;
        if (inst.heatState === 'golden' || inst.heatState === 'crispy') {
          inst.sparks.rotation.y += 0.04;
        }
        renderer.render(scene, camera);
      }
    };

    inst.animate();
    this.instances.set(container.id, inst);
    return inst;
  }

  updateHotPotato(state, vx = 2, vy = 1) {
    const inst = this.instances.get('hp-canvas-container');
    if (!inst) return;
    inst.rotVx = (vx || 1.5) * 0.035;
    inst.rotVy = (vy || 1.0) * 0.028;
    inst.heatState = state;

    if (state === 'burnt') {
      inst.mat.color.setHex(0x2D1A10);
      inst.mat.emissive.setHex(0x3B0800);
      inst.mat.emissiveIntensity = 0.5;
      inst.sparkMat.opacity = 0.1;
      inst.coalGlow.intensity = 1.0;
    } else if (state === 'golden' || state === 'crispy') {
      inst.mat.color.setHex(0xF59E0B);
      inst.mat.emissive.setHex(0xFFB703);
      inst.mat.emissiveIntensity = 0.45;
      inst.sparkMat.opacity = 0.9;
      inst.coalGlow.intensity = 3.2;
    } else {
      inst.mat.color.setHex(0xD4A373);
      inst.mat.emissive.setHex(0x000000);
      inst.mat.emissiveIntensity = 0;
      inst.sparkMat.opacity = 0;
      inst.coalGlow.intensity = 2.0;
    }
  }

  // ----------------------------------------------------
  // ELEMENT 2: GLOWING TANDOOR COALS (Kitchen Lab)
  // ----------------------------------------------------
  mountTandoor3D(container) {
    if (!this.isSupported() || !container) return null;
    if (this.instances.has(container.id)) return this.instances.get(container.id);

    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 280;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(0, 3.8, 7.6);
    camera.lookAt(0, -0.4, 0);

    const renderer = this.createRenderer(container);
    if (!renderer) return null;
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;';
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Terracotta Clay Hearth Wall
    const wallGeo = new THREE.CylinderGeometry(3.6, 4.4, 4.0, 32, 1, true);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x8D3B1B,
      roughness: 0.88,
      side: THREE.BackSide
    });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.y = 0.4;
    scene.add(wall);

    // 36 Randomized Ember Rock Meshes
    const coalsGroup = new THREE.Group();
    const coalMaterials = [];
    for (let i = 0; i < 36; i++) {
      const radius = Math.sqrt(Math.random()) * 2.7;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -1.5 + Math.random() * 0.42;
      const scale = 0.32 + Math.random() * 0.36;

      const cGeo = new THREE.DodecahedronGeometry(scale, 1);
      const cMat = new THREE.MeshStandardMaterial({
        color: 0x180808,
        emissive: 0xFF2A00,
        emissiveIntensity: 0.85 + Math.random() * 0.4,
        roughness: 0.94
      });
      coalMaterials.push(cMat);
      const coal = new THREE.Mesh(cGeo, cMat);
      coal.position.set(x, y, z);
      coal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      coalsGroup.add(coal);
    }
    scene.add(coalsGroup);

    // Flickering Hearth PointLight
    const fireLight = new THREE.PointLight(0xFF5500, 3.2, 16);
    fireLight.position.set(0, -0.6, 0);
    scene.add(fireLight);

    const ambientLight = new THREE.AmbientLight(0x221111, 0.8);
    scene.add(ambientLight);

    // Rising Ember Spark Particles
    const sparkCount = 75;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkVels = [];
    for (let i = 0; i < sparkCount; i++) {
      const r = Math.random() * 2.4;
      const a = Math.random() * Math.PI * 2;
      sparkPos[i * 3] = Math.cos(a) * r;
      sparkPos[i * 3 + 1] = -1.4 + Math.random() * 3.2;
      sparkPos[i * 3 + 2] = Math.sin(a) * r;
      sparkVels.push({
        vy: 0.025 + Math.random() * 0.035,
        vx: (Math.random() - 0.5) * 0.012,
        vz: (Math.random() - 0.5) * 0.012
      });
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xFFAA33,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparks);

    // Interactive Heat Controls Bar
    const controlsBar = document.createElement('div');
    controlsBar.className = 'tandoor-heat-controls';
    controlsBar.innerHTML = \`
      <button class="tandoor-heat-btn" data-heat="simmer">🔥 Gentle Simmer</button>
      <button class="tandoor-heat-btn active" data-heat="roast">⚡ Tandoori Roast</button>
      <button class="tandoor-heat-btn" data-heat="sear">💥 Inferno Sear</button>
    \`;
    container.appendChild(controlsBar);

    let heatLevel = 'roast';
    controlsBar.querySelectorAll('.tandoor-heat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        controlsBar.querySelectorAll('.tandoor-heat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        heatLevel = btn.getAttribute('data-heat');
        sound.playTick();
      });
    });

    let time = 0;
    const inst = {
      id: container.id,
      scene,
      camera,
      renderer,
      paused: false,
      running: true,
      animate: () => {
        if (inst.paused) {
          inst.running = false;
          return;
        }
        inst.animId = requestAnimationFrame(inst.animate);
        time += 0.05;

        // Dynamic light flicker
        const flickerBase = heatLevel === 'sear' ? 4.8 : heatLevel === 'simmer' ? 1.8 : 3.0;
        fireLight.intensity = flickerBase + (Math.sin(time * 8.5) * 0.45) + (Math.random() * 0.35);

        // Pulsing coals
        const pulse = 0.8 + 0.35 * Math.sin(time * 3.2);
        coalMaterials.forEach((m, idx) => {
          m.emissiveIntensity = (pulse + (idx % 4) * 0.12) * (heatLevel === 'sear' ? 1.5 : heatLevel === 'simmer' ? 0.7 : 1.0);
        });

        // Rising spark particles
        const pArr = sparkGeo.attributes.position.array;
        for (let i = 0; i < sparkCount; i++) {
          pArr[i * 3 + 1] += sparkVels[i].vy * (heatLevel === 'sear' ? 1.8 : heatLevel === 'simmer' ? 0.6 : 1.0);
          pArr[i * 3] += sparkVels[i].vx;
          pArr[i * 3 + 2] += sparkVels[i].vz;
          if (pArr[i * 3 + 1] > 2.2) {
            pArr[i * 3 + 1] = -1.5;
            const r = Math.random() * 2.2;
            const a = Math.random() * Math.PI * 2;
            pArr[i * 3] = Math.cos(a) * r;
            pArr[i * 3 + 2] = Math.sin(a) * r;
          }
        }
        sparkGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      }
    };

    inst.animate();
    this.instances.set(container.id, inst);
    return inst;
  }

  // ----------------------------------------------------
  // ELEMENT 3: 3D VEGETARIAN INGREDIENTS (Build-a-Dish)
  // ----------------------------------------------------
  mountBuildDish3D(container, initialIngredient = 'King Oyster Mushroom') {
    if (!this.isSupported() || !container) return null;
    this.dispose(container.id);

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 240;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 6.5);
    camera.lookAt(0, 0, 0);

    const renderer = this.createRenderer(container);
    if (!renderer) return null;
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;cursor:grab;';
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const hud = document.createElement('div');
    hud.className = 'model-3d-hud';
    hud.innerHTML = \`
      <span class="model-3d-badge" id="dish-3d-name-badge">🍄 \${initialIngredient}</span>
      <span class="model-3d-badge" style="color:var(--accent-green);background:rgba(6,78,59,0.7);">Pure Veg 3D</span>
    \`;
    container.appendChild(hud);

    const hint = document.createElement('div');
    hint.className = 'model-3d-hint';
    hint.innerText = '🖱️ Drag to rotate 360° • Click pantry item to view';
    container.appendChild(hint);

    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.95);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xFFFFFF, 1.2);
    light.position.set(10, 20, 15);
    scene.add(light);

    const stageLight = new THREE.PointLight(0x0284C7, 1.5, 20);
    stageLight.position.set(0, -3, 3);
    scene.add(stageLight);

    const ingredientGroup = new THREE.Group();
    scene.add(ingredientGroup);

    const buildModel = (name) => {
      ingredientGroup.clear();
      const n = (name || '').toLowerCase();

      if (n.includes('mushroom') || n.includes('shroom')) {
        // King Oyster Mushroom
        const stemGeo = new THREE.CylinderGeometry(0.5, 0.72, 2.2, 24);
        const stemMat = new THREE.MeshStandardMaterial({ color: 0xFDFBF7, roughness: 0.65 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.y = -0.2;
        ingredientGroup.add(stem);

        const capGeo = new THREE.SphereGeometry(1.15, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const capMat = new THREE.MeshStandardMaterial({ color: 0xA07855, roughness: 0.75 });
        const cap = new THREE.Mesh(capGeo, capMat);
        cap.position.y = 0.9;
        ingredientGroup.add(cap);
      } else if (n.includes('lime') || n.includes('lemon')) {
        // Fresh Lime Half
        const peelGeo = new THREE.SphereGeometry(1.2, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const peelMat = new THREE.MeshStandardMaterial({ color: 0x22C55E, roughness: 0.45 });
        const peel = new THREE.Mesh(peelGeo, peelMat);
        ingredientGroup.add(peel);

        const pulpGeo = new THREE.CircleGeometry(1.18, 24);
        const pulpMat = new THREE.MeshStandardMaterial({ color: 0x86EFAC, roughness: 0.35, side: THREE.DoubleSide });
        const pulp = new THREE.Mesh(pulpGeo, pulpMat);
        pulp.rotation.x = Math.PI / 2;
        ingredientGroup.add(pulp);
      } else if (n.includes('chili') || n.includes('chilli') || n.includes('pepper')) {
        // Yellow Bhavnagri Chili
        const bodyGeo = new THREE.ConeGeometry(0.55, 2.8, 20);
        const bodyMat = new THREE.MeshStandardMaterial({ color: 0xFACC15, roughness: 0.38 });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.rotation.z = Math.PI * 0.95;
        body.position.y = 0.2;
        ingredientGroup.add(body);

        const stemGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.55, 12);
        const stemMat = new THREE.MeshStandardMaterial({ color: 0x15803D, roughness: 0.5 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.y = 1.35;
        ingredientGroup.add(stem);
      } else if (n.includes('paneer') || n.includes('cheese') || n.includes('tofu')) {
        // Pure Dairy Paneer Cube
        const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
        const cubeMat = new THREE.MeshStandardMaterial({ color: 0xF8FAFC, roughness: 0.65 });
        const cube = new THREE.Mesh(cubeGeo, cubeMat);
        ingredientGroup.add(cube);
      } else {
        // Roasted Chana / Makhana
        const chanaGeo = new THREE.DodecahedronGeometry(0.9, 2);
        const cPos = chanaGeo.attributes.position;
        for (let i = 0; i < cPos.count; i++) {
          const noise = 1 + 0.12 * Math.sin(cPos.getX(i) * 3) * Math.cos(cPos.getY(i) * 3);
          cPos.setXYZ(i, cPos.getX(i) * noise, cPos.getY(i) * noise, cPos.getZ(i) * noise);
        }
        chanaGeo.computeVertexNormals();
        const chanaMat = new THREE.MeshStandardMaterial({ color: 0xD97706, roughness: 0.8 });
        const chana = new THREE.Mesh(chanaGeo, chanaMat);
        ingredientGroup.add(chana);
      }
    };

    buildModel(initialIngredient);

    // Pointer Drag 360 Rotation
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;

    renderer.domElement.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
      renderer.domElement.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPointerX;
      const deltaY = e.clientY - prevPointerY;
      ingredientGroup.rotation.y += deltaX * 0.015;
      ingredientGroup.rotation.x += deltaY * 0.015;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
      if (renderer.domElement) renderer.domElement.style.cursor = 'grab';
    });

    let time = 0;
    const inst = {
      id: container.id,
      scene,
      camera,
      renderer,
      ingredientGroup,
      buildModel,
      paused: false,
      running: true,
      animate: () => {
        if (inst.paused) {
          inst.running = false;
          return;
        }
        inst.animId = requestAnimationFrame(inst.animate);
        time += 0.02;
        if (!isDragging) {
          ingredientGroup.rotation.y += 0.012;
          ingredientGroup.position.y = Math.sin(time) * 0.12;
        }
        renderer.render(scene, camera);
      }
    };

    inst.animate();
    this.instances.set(container.id, inst);
    return inst;
  }

  updateBuildDishIngredient(name) {
    const inst = this.instances.get('dish-3d-canvas-container');
    if (!inst) return;
    inst.buildModel(name);
    const badge = document.getElementById('dish-3d-name-badge');
    if (badge) badge.innerText = name;
  }

  animateIngredientJump(name) {
    const inst = this.instances.get('dish-3d-canvas-container');
    if (!inst) return;
    this.updateBuildDishIngredient(name);
    let jumpFrames = 0;
    const jumpAnim = () => {
      jumpFrames++;
      inst.ingredientGroup.position.y = Math.sin((jumpFrames / 20) * Math.PI) * 0.8;
      inst.ingredientGroup.rotation.x += 0.15;
      if (jumpFrames < 20) {
        requestAnimationFrame(jumpAnim);
      } else {
        inst.ingredientGroup.position.y = 0;
      }
    };
    jumpAnim();
  }

  // ----------------------------------------------------
  // ELEMENT 4: MOLECULAR SPICE MODELS (Science Wheel)
  // ----------------------------------------------------
  mountScienceMolecule3D(container, topicIdx = 0) {
    if (!this.isSupported() || !container) return null;
    this.dispose(container.id);

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 220;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);
    camera.lookAt(0, 0, 0);

    const renderer = this.createRenderer(container);
    if (!renderer) return null;
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;cursor:grab;';
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.95);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xFFFFFF, 1.2);
    dirLight.position.set(15, 25, 20);
    scene.add(dirLight);

    const moleculeGroup = new THREE.Group();
    scene.add(moleculeGroup);

    // CPK Colors
    const CPK = {
      C: 0x333333, // Charcoal Carbon
      H: 0xE2E8F0, // White Hydrogen
      O: 0xEF4444, // Red Oxygen
      N: 0x3B82F6, // Blue Nitrogen
      Na: 0xF97316 // Orange Sodium
    };

    // 6 Molecule presets
    const MOLECULES = [
      {
        name: 'Citric Acid (C6H8O7)',
        atoms: [
          { type: 'C', x: 0, y: 0, z: 0 },
          { type: 'C', x: -1.2, y: 0.5, z: 0 },
          { type: 'C', x: 1.2, y: 0.5, z: 0 },
          { type: 'O', x: 0, y: -1.2, z: 0 },
          { type: 'O', x: -2.0, y: -0.3, z: 0 },
          { type: 'O', x: 2.0, y: -0.3, z: 0 },
          { type: 'H', x: 0, y: -1.8, z: 0.3 }
        ],
        bonds: [[0, 1], [0, 2], [0, 3], [1, 4], [2, 5], [3, 6]]
      },
      {
        name: 'Glucose (C6H12O6)',
        atoms: [
          { type: 'C', x: -1.1, y: 0.7, z: 0 },
          { type: 'C', x: 0, y: 1.3, z: 0 },
          { type: 'C', x: 1.1, y: 0.7, z: 0 },
          { type: 'C', x: 1.1, y: -0.7, z: 0 },
          { type: 'C', x: 0, y: -1.3, z: 0 },
          { type: 'O', x: -1.1, y: -0.7, z: 0 }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]
      },
      {
        name: 'Lecithin Phospholipid',
        atoms: [
          { type: 'Na', x: 0, y: 1.5, z: 0 },
          { type: 'O', x: 0, y: 0.6, z: 0 },
          { type: 'C', x: -0.8, y: -0.2, z: 0 },
          { type: 'C', x: 0.8, y: -0.2, z: 0 },
          { type: 'C', x: -1.4, y: -1.4, z: 0 },
          { type: 'C', x: 1.4, y: -1.4, z: 0 }
        ],
        bonds: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 5]]
      },
      {
        name: 'Sucrose (C12H22O11)',
        atoms: [
          { type: 'C', x: -1.6, y: 0, z: 0 },
          { type: 'O', x: 0, y: 0.3, z: 0 },
          { type: 'C', x: 1.6, y: 0, z: 0 },
          { type: 'O', x: -1.6, y: 1.2, z: 0 },
          { type: 'O', x: 1.6, y: 1.2, z: 0 }
        ],
        bonds: [[0, 1], [1, 2], [0, 3], [2, 4]]
      },
      {
        name: 'Sodium Carbonate (Na2CO3)',
        atoms: [
          { type: 'C', x: 0, y: 0, z: 0 },
          { type: 'O', x: 0, y: 1.3, z: 0 },
          { type: 'O', x: -1.1, y: -0.7, z: 0 },
          { type: 'O', x: 1.1, y: -0.7, z: 0 },
          { type: 'Na', x: -2.2, y: -0.9, z: 0 },
          { type: 'Na', x: 2.2, y: -0.9, z: 0 }
        ],
        bonds: [[0, 1], [0, 2], [0, 3], [2, 4], [3, 5]]
      },
      {
        name: 'Capsaicin & Curcumin (C18H27NO3)',
        atoms: [
          { type: 'C', x: -2.2, y: 0, z: 0 },
          { type: 'C', x: -1.3, y: 0.9, z: 0 },
          { type: 'C', x: -0.2, y: 0.5, z: 0 },
          { type: 'N', x: 0.8, y: 0.8, z: 0 },
          { type: 'C', x: 1.8, y: 0.2, z: 0 },
          { type: 'O', x: 1.8, y: -1.0, z: 0 },
          { type: 'C', x: 2.8, y: 0.8, z: 0 }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [4, 6]]
      }
    ];

    const molData = MOLECULES[topicIdx % MOLECULES.length];

    const atomMeshes = [];
    molData.atoms.forEach(atom => {
      const radius = atom.type === 'H' ? 0.28 : atom.type === 'O' ? 0.38 : atom.type === 'N' ? 0.4 : 0.44;
      const aGeo = new THREE.SphereGeometry(radius, 20, 20);
      const aMat = new THREE.MeshStandardMaterial({
        color: CPK[atom.type] || CPK.C,
        roughness: 0.35,
        metalness: 0.15
      });
      const mesh = new THREE.Mesh(aGeo, aMat);
      mesh.position.set(atom.x, atom.y, atom.z);
      moleculeGroup.add(mesh);
      atomMeshes.push(mesh);
    });

    molData.bonds.forEach(([i1, i2]) => {
      const a1 = molData.atoms[i1];
      const a2 = molData.atoms[i2];
      const p1 = new THREE.Vector3(a1.x, a1.y, a1.z);
      const p2 = new THREE.Vector3(a2.x, a2.y, a2.z);
      const dist = p1.distanceTo(p2);
      const bGeo = new THREE.CylinderGeometry(0.08, 0.08, dist, 12);
      const bMat = new THREE.MeshStandardMaterial({ color: 0x94A3B8, roughness: 0.4 });
      const bond = new THREE.Mesh(bGeo, bMat);

      bond.position.copy(p1).add(p2).multiplyScalar(0.5);
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
      moleculeGroup.add(bond);
    });

    // Pointer Drag 360 Rotation
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    renderer.domElement.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      renderer.domElement.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      moleculeGroup.rotation.y += dx * 0.015;
      moleculeGroup.rotation.x += dy * 0.015;
      prevX = e.clientX;
      prevY = e.clientY;
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
      if (renderer.domElement) renderer.domElement.style.cursor = 'grab';
    });

    const inst = {
      id: container.id,
      scene,
      camera,
      renderer,
      moleculeGroup,
      paused: false,
      running: true,
      animate: () => {
        if (inst.paused) {
          inst.running = false;
          return;
        }
        inst.animId = requestAnimationFrame(inst.animate);
        if (!isDragging) {
          moleculeGroup.rotation.y += 0.012;
          moleculeGroup.rotation.x += 0.006;
        }
        renderer.render(scene, camera);
      }
    };

    inst.animate();
    this.instances.set(container.id, inst);
    return inst;
  }
}
`;

// Insert ThreeJSCulinaryManager right before class FusionApp
content = content.replace('class FusionApp {', threeManagerCode + '\nclass FusionApp {');

fs.writeFileSync(appJsPath, content, 'utf8');
console.log('Successfully injected ThreeJSCulinaryManager into app.js');
