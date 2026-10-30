#!/usr/bin/env node
// ====================================================================
// Fusion Food Family Lab — 4-Tier Opaque-Box E2E Test Suite Runner
// Executable with: agy-node run_e2e_tests.js (or node run_e2e_tests.js)
// Conforms strictly to ORIGINAL_REQUEST.md & TEST_INFRA.md
// ====================================================================

const path = require('path');
const http = require('http');
const {
  AssertionEngine,
  MockCloudflareServer,
  ChromeCDPRunner,
  TestReporter
} = require('./e2e_tests/framework');

const { runTier1Tests } = require('./e2e_tests/tier1_feature_coverage');
const { runTier2Tests } = require('./e2e_tests/tier2_boundary_corner');
const { runTier3Tests } = require('./e2e_tests/tier3_cross_feature');
const { runTier4Tests } = require('./e2e_tests/tier4_real_world');

// Helper to find a free port
function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = http.createServer();
    srv.listen(0, '127.0.0.1', () => {
      const port = srv.address().port;
      srv.close(() => resolve(port));
    });
    srv.on('error', reject);
  });
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    tier: 'all',
    chrome: true,
    help: false
  };

  args.forEach(arg => {
    if (arg === '--help' || arg === '-h') options.help = true;
    else if (arg.startsWith('--tier=')) options.tier = arg.split('=')[1];
    else if (arg === '--no-chrome') options.chrome = false;
  });

  return options;
}

function printHelp() {
  console.log(`
Fusion Food Family Lab — E2E Test Runner

Usage:
  agy-node run_e2e_tests.js [options]

Options:
  --tier=<1|2|3|4|all>   Run specific test tier (default: all)
  --no-chrome            Run static, parity, and API tests without spawning Chrome
  --help, -h             Show this help message

Test Tiers:
  Tier 1: Feature Coverage (F1 - F15, >= 75 assertions)
  Tier 2: Boundary & Corner Cases (F1 - F15, >= 75 assertions)
  Tier 3: Cross-Feature Combinations (Pairwise, >= 15 assertions)
  Tier 4: Real-World Application Scenarios (>= 5 full workflows)
  Total Target: >= 170 test assertions
`);
}

async function main() {
  const options = parseArgs();

  if (options.help) {
    printHelp();
    process.exit(0);
  }

  const projectRoot = path.resolve(__dirname);
  const engine = new AssertionEngine();
  const reporter = new TestReporter();

  console.log('='.repeat(80));
  console.log('   FUSION FOOD FAMILY LAB — 4-TIER OPAQUE-BOX E2E TEST RUNNER');
  console.log('='.repeat(80));
  console.log(`Project Root: ${projectRoot}`);
  console.log(`Node Runtime: ${process.version}`);
  console.log(`Selected Tier: ${options.tier}`);

  // 1. Start Cloudflare Mock REST API Server
  const apiPort = await getFreePort();
  const mockServer = new MockCloudflareServer(apiPort);
  const mockApiUrl = await mockServer.start();
  console.log(`[INFRA] Mock Cloudflare D1 API server started at: ${mockApiUrl}`);

  // 2. Launch Chrome CDP Runner if enabled
  let cdp = null;
  if (options.chrome) {
    const cdpPort = await getFreePort();
    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    cdp = new ChromeCDPRunner(chromePath, cdpPort);
    const targetUrl = `file:///${path.join(projectRoot, 'index.html').replace(/\\/g, '/')}`;

    try {
      console.log(`[INFRA] Launching headless Chrome CDP on port ${cdpPort}...`);
      await cdp.launch(targetUrl, 390, 844);
      console.log(`[INFRA] Chrome connected via CDP WebSocket. Listening for errors & exceptions.`);
    } catch (e) {
      console.warn(`[WARN] Headless Chrome could not be launched (${e.message}). Proceeding with static/mock execution.`);
      cdp = null;
    }
  }

  const runOptions = {
    projectRoot,
    cdp,
    mockApiUrl
  };

  try {
    // Run Selected Tiers
    if (options.tier === 'all' || options.tier === '1') {
      await runTier1Tests(engine, reporter, runOptions);
    }

    if (options.tier === 'all' || options.tier === '2') {
      await runTier2Tests(engine, reporter, runOptions);
    }

    if (options.tier === 'all' || options.tier === '3') {
      await runTier3Tests(engine, reporter, runOptions);
    }

    if (options.tier === 'all' || options.tier === '4') {
      await runTier4Tests(engine, reporter, runOptions);
    }
  } catch (err) {
    console.error('[CRITICAL RUNNER ERROR]', err);
  } finally {
    // Clean up processes
    if (cdp) {
      cdp.kill();
      console.log('[INFRA] Chrome process terminated.');
    }
    await mockServer.stop();
    console.log('[INFRA] Mock Cloudflare API server stopped.');
  }

  // Print final test report
  const allPassed = reporter.printSummary(engine);

  process.exit(allPassed ? 0 : 1);
}

main().catch(err => {
  console.error('[FATAL]', err);
  process.exit(1);
});
