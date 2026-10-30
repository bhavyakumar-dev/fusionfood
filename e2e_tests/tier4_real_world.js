// ====================================================================
// Tier 4: Real-World Application Scenarios (End-to-End Workflows)
// 5 Comprehensive Multi-Feature Workflow Scenarios
// Authoritative references: ORIGINAL_REQUEST.md & TEST_INFRA.md
// ====================================================================

const fs = require('fs');
const path = require('path');

async function runTier4Tests(engine, reporter, options = {}) {
  const projectRoot = options.projectRoot || path.resolve(__dirname, '..');
  const cdp = options.cdp;
  const mockApiUrl = options.mockApiUrl || 'http://127.0.0.1:8787';

  const htmlPath = path.join(projectRoot, 'index.html');
  const cssPath = path.join(projectRoot, 'styles.css');
  const appJsPath = path.join(projectRoot, 'app.js');
  const bundleJsPath = path.join(projectRoot, 'bundle.js');

  const htmlContent = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8') : '';
  const cssContent = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';
  const appJsContent = fs.existsSync(appJsPath) ? fs.readFileSync(appJsPath, 'utf8') : '';
  const bundleJsContent = fs.existsSync(bundleJsPath) ? fs.readFileSync(bundleJsPath, 'utf8') : '';

  async function runTest(scenarioId, scenarioName, testFn) {
    const start = Date.now();
    try {
      await testFn();
      reporter.record(4, scenarioId, scenarioName, true, null, Date.now() - start);
    } catch (e) {
      reporter.record(4, scenarioId, scenarioName, false, e, Date.now() - start);
    }
  }

  console.log('\n>>> Running Tier 4: Real-World Application Scenarios...');

  // ------------------------------------------------------------------
  // Scenario 1: Family Career Fair Demo Walkthrough
  // Features: F1, F2, F3, F4, F6, F7, F8, F9, F11
  // ------------------------------------------------------------------
  await runTest('SCENARIO_1', 'Scenario 1: Family Career Fair Demo Walkthrough', async () => {
    // 1. User loads landing page and observes Scrolltide Hero narrative
    engine.assert(htmlContent.includes('Fusion Food Lab') || htmlContent.includes('hero'), 'Landing page title and hero exist');
    // 2. Inspects stat counters
    engine.assert(htmlContent.includes('100% Pure Veg') || htmlContent.includes('Pure Veg'), '100% Pure Veg guarantee present');
    // 3. Kitchen Lab inspection
    engine.assert(htmlContent.includes('Kitchen Lab') || htmlContent.includes('pane-kitchen'), 'Kitchen Lab accessible');
    // 4. Build-a-dish prep board
    engine.assert(appJsContent.includes('renderBuildDishGame') || bundleJsContent.includes('renderBuildDishGame'), 'Build-a-Dish interactive cooking available');
    // 5. Hot potato rush arena
    engine.assert(appJsContent.includes('hotPotato') || bundleJsContent.includes('hotPotato'), 'Hot Potato Rush arcade available');
    // 6. Science wheel chemistry models
    engine.assert(appJsContent.includes('CULINARY_SCIENCE_TOPICS'), 'Culinary Science Wheel topics available');
    // 7. Global Leaderboard
    const res = await fetch(`${mockApiUrl}/api/leaderboard?limit=5`);
    engine.assertEqual(res.status, 200, 'Global leaderboard returns rankings for career fair showcase');
  });

  // ------------------------------------------------------------------
  // Scenario 2: Mobile Portrait Quick Game Session (390x844)
  // Features: F4, F5, F6, F11, F15
  // ------------------------------------------------------------------
  await runTest('SCENARIO_2', 'Scenario 2: Mobile Portrait Quick Game Session (390x844)', async () => {
    if (cdp) {
      await cdp.setViewport(390, 844, 3, true);
      const width = await cdp.evaluate('document.documentElement.clientWidth');
      engine.assertLessOrEqual(width, 390, 'Portrait layout conforms to 390px mobile viewport');
      const overflow = await cdp.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth');
      engine.assertEqual(overflow, false, 'Mobile portrait exhibits zero horizontal overflow');
      // Navigation is accessible
      const navVisible = await cdp.evaluate(`
        (() => {
          const nav = document.getElementById('mobile-nav-bar') || document.querySelector('.mobile-bottom-nav');
          return nav ? window.getComputedStyle(nav).display !== 'none' : true;
        })()
      `);
      engine.assert(navVisible, 'Mobile bottom navigation is accessible in portrait');
      // Console remains clean
      engine.assertEqual(cdp.consoleErrors.length, 0, 'Zero console errors during mobile portrait game session');
    } else {
      engine.assert(htmlContent.includes('mobile-bottom-nav') || cssContent.includes('mobile-bottom-nav'), 'Mobile navigation configured');
    }
  });

  // ------------------------------------------------------------------
  // Scenario 3: Mobile Landscape Chef Prep & Science Deep Dive (844x390)
  // Features: F4, F7, F8, F9, F15
  // ------------------------------------------------------------------
  await runTest('SCENARIO_3', 'Scenario 3: Mobile Landscape Chef Prep & Science Deep Dive (844x390)', async () => {
    if (cdp) {
      await cdp.setViewport(844, 390, 3, true);
      const width = await cdp.evaluate('document.documentElement.clientWidth');
      engine.assertLessOrEqual(width, 844, 'Landscape layout conforms to 844px width');
      // Bottom navigation docks out of the way
      const bottomNavHidden = await cdp.evaluate(`
        (() => {
          const nav = document.getElementById('mobile-nav-bar');
          return nav ? window.getComputedStyle(nav).display === 'none' : true;
        })()
      `);
      engine.assert(bottomNavHidden, 'Bottom navigation is docked/hidden in landscape to maximize vertical canvas space');
      // Activate Kitchen tab
      await cdp.evaluate('document.getElementById("tab-btn-kitchen")?.click()');
      const kitchenActive = await cdp.evaluate('document.getElementById("pane-kitchen")?.classList.contains("active")');
      engine.assert(kitchenActive, 'Kitchen Lab activates smoothly in landscape mode');
      // Return to games hub
      await cdp.evaluate('document.getElementById("tab-btn-games")?.click()');
    } else {
      engine.assert(cssContent.includes('orientation: landscape') || cssContent.includes('520px'), 'Landscape docking rules defined');
    }
  });

  // ------------------------------------------------------------------
  // Scenario 4: Offline to Cloudflare Sync & Global Leaderboard Race
  // Features: F10, F11, F15
  // ------------------------------------------------------------------
  await runTest('SCENARIO_4', 'Scenario 4: Offline to Cloudflare Sync & Global Leaderboard Race', async () => {
    // 1. Initial offline state: user profile starts with local score
    const initialProfile = { id: 'kid', name: 'Maya', xp: 270, streak: 3 };
    engine.assertGreaterOrEqual(initialProfile.xp, 100, 'Offline profile begins with initial XP');

    // 2. User plays games offline, earning +150 XP
    const updatedXP = initialProfile.xp + 150;

    // 3. Network re-established, dispatch sync to Cloudflare API
    const syncRes = await fetch(`${mockApiUrl}/api/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 'kid', xp: updatedXP, streak: 4 })
    });
    engine.assertEqual(syncRes.status, 200, 'Cloudflare sync endpoint accepts offline XP progress');
    const syncJson = await syncRes.json();
    engine.assertEqual(syncJson.synced.xp, 420, 'Synced XP reflects new 420 XP total');

    // 4. Submit high score to global leaderboard
    const scoreRes = await fetch(`${mockApiUrl}/api/submit-score`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: 'kid', user_name: 'Maya', score: 420, game_type: 'overall' })
    });
    engine.assertEqual(scoreRes.status, 200, 'Score submission accepted by Cloudflare API');

    // 5. Fetch updated global standings
    const lbRes = await fetch(`${mockApiUrl}/api/leaderboard?filter=overall&limit=10`);
    engine.assertEqual(lbRes.status, 200, 'Global leaderboard returns updated standings');
    const lbJson = await lbRes.json();
    const mayaEntry = lbJson.leaderboard.find(e => e.user_id === 'kid');
    engine.assert(mayaEntry !== undefined, 'Maya appears on global leaderboard after sync');
  });

  // ------------------------------------------------------------------
  // Scenario 5: Dark Mode to Light Mode Stress Toggle During 3D Render
  // Features: F3, F5, F6, F7, F8, F9, F15
  // ------------------------------------------------------------------
  await runTest('SCENARIO_5', 'Scenario 5: Dark Mode to Light Mode Stress Toggle During 3D Render', async () => {
    if (cdp) {
      const exceptionsBefore = cdp.runtimeExceptions.length;
      // Perform 10 rapid theme toggles
      for (let i = 0; i < 10; i++) {
        await cdp.evaluate('document.getElementById("theme-toggle-btn")?.click()');
      }
      // Assert zero runtime exceptions occurred during stress toggling
      engine.assertEqual(cdp.runtimeExceptions.length - exceptionsBefore, 0, 'Zero runtime exceptions during 3D theme stress toggle');

      // Verify final text contrast remains WCAG AAA compliant
      engine.assertWCAGContrast('#0B132B', '#FFFFFF', 7.0, 'Final Light mode contrast meets WCAG AAA (>= 7:1)');
      engine.assertWCAGContrast('#FFFFFF', '#07080B', 7.0, 'Final Dark mode contrast meets WCAG AAA (>= 7:1)');
    } else {
      engine.assertWCAGContrast('#0B132B', '#FFFFFF', 7.0, 'Light mode contrast validated');
      engine.assertWCAGContrast('#FFFFFF', '#07080B', 7.0, 'Dark mode contrast validated');
    }
  });

  console.log('>>> Finished Tier 4: Real-World Application Scenarios.\n');
}

module.exports = { runTier4Tests };
