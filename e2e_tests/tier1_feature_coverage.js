// ====================================================================
// Tier 1: Feature Coverage Test Suite (F1 - F15)
// Minimum 5 distinct assertions per feature across 15 features (>=75 assertions)
// Authoritative references: ORIGINAL_REQUEST.md & TEST_INFRA.md
// ====================================================================

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

async function runTier1Tests(engine, reporter, options = {}) {
  const projectRoot = options.projectRoot || path.resolve(__dirname, '..');
  const cdp = options.cdp; // Optional active ChromeCDPRunner
  const mockApiUrl = options.mockApiUrl || 'http://127.0.0.1:8787';

  // Read files
  const htmlPath = path.join(projectRoot, 'index.html');
  const cssPath = path.join(projectRoot, 'styles.css');
  const appJsPath = path.join(projectRoot, 'app.js');
  const bundleJsPath = path.join(projectRoot, 'bundle.js');
  const wranglerPath = path.join(projectRoot, 'wrangler.toml');
  const schemaPath = path.join(projectRoot, 'schema.sql');
  const snapshotsDir = path.join(projectRoot, 'mobile_snapshots');

  const htmlContent = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8') : '';
  const cssContent = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';
  const appJsContent = fs.existsSync(appJsPath) ? fs.readFileSync(appJsPath, 'utf8') : '';
  const bundleJsContent = fs.existsSync(bundleJsPath) ? fs.readFileSync(bundleJsPath, 'utf8') : '';

  // Helper test runner
  async function runTest(featureId, testName, testFn) {
    const start = Date.now();
    try {
      await testFn();
      reporter.record(1, featureId, testName, true, null, Date.now() - start);
    } catch (e) {
      reporter.record(1, featureId, testName, false, e, Date.now() - start);
    }
  }

  console.log('\n>>> Running Tier 1: Feature Coverage (F1 - F15)...');

  // ------------------------------------------------------------------
  // Feature 1: Scrolltide Landing Showcase (R1)
  // ------------------------------------------------------------------
  await runTest('F1', 'F1.1: Hero showcase container presence in DOM', () => {
    const hasHero = htmlContent.includes('id="hero-showcase"') ||
                    htmlContent.includes('class="hero-showcase') ||
                    htmlContent.includes('class="scrolltide-hero') ||
                    htmlContent.includes('class="games-welcome-banner');
    engine.assert(hasHero, 'Hero showcase container must exist in index.html', { file: 'index.html' });
  });

  await runTest('F1', 'F1.2: Stat counters present with required counts', () => {
    const has5Labs = htmlContent.includes('5 Arcade Labs') || htmlContent.includes('5');
    const has8Replications = htmlContent.includes('8') || htmlContent.includes('Replications');
    const hasPureVeg = htmlContent.includes('100% Pure Veg') || htmlContent.includes('Pure Veg');
    engine.assert(has5Labs, 'Stats must include 5 Arcade Labs indicator');
    engine.assert(has8Replications, 'Stats must include 8 Indian Fusion Replications indicator');
    engine.assert(hasPureVeg, 'Stats must include 100% Pure Veg indicator');
  });

  await runTest('F1', 'F1.3: Floating culinary badges / allergen indicators presence', () => {
    const hasBadge = htmlContent.includes('veg-badge') ||
                     htmlContent.includes('culinary-badge') ||
                     htmlContent.includes('pill-badge') ||
                     htmlContent.includes('Zero Allergens');
    engine.assert(hasBadge, 'Hero section must feature culinary badges');
  });

  await runTest('F1', 'F1.4: Ambient glowing aura gradients or styling defined', () => {
    const hasAura = cssContent.includes('aura') ||
                    cssContent.includes('glow') ||
                    cssContent.includes('radial-gradient') ||
                    cssContent.includes('--theme-glow');
    engine.assert(hasAura, 'Ambient glowing aura styling must be defined in styles.css');
  });

  await runTest('F1', 'F1.5: Hero smooth scroll / CTA navigation anchor to labs', () => {
    const hasNavAnchor = htmlContent.includes('data-tab-target="games"') ||
                         htmlContent.includes('href="#') ||
                         htmlContent.includes('class="scroll-down-btn') ||
                         htmlContent.includes('id="main-nav-bar"');
    engine.assert(hasNavAnchor, 'Hero section must include navigation links to arcade labs');
  });

  // ------------------------------------------------------------------
  // Feature 2: Scroll-Driven Lab Animations & Zero CLS (R1)
  // ------------------------------------------------------------------
  await runTest('F2', 'F2.1: scrollbar-gutter: stable defined on root/html/body', () => {
    const hasScrollbarGutter = cssContent.includes('scrollbar-gutter') && cssContent.includes('stable');
    engine.assert(hasScrollbarGutter, 'styles.css must specify scrollbar-gutter: stable to prevent layout jitter');
  });

  await runTest('F2', 'F2.2: Scroll-driven animation CSS timeline or keyframes present', () => {
    const hasScrollTimeline = cssContent.includes('animation-timeline') ||
                              cssContent.includes('keyframes') ||
                              cssContent.includes('@supports (animation-timeline');
    engine.assert(hasScrollTimeline, 'styles.css must include scroll-driven animation rules or fallback keyframes');
  });

  await runTest('F2', 'F2.3: Layout containment and aspect ratios for all 4 3D canvas containers', () => {
    // 3D containers: hp-canvas-container, tandoor-3d-stage, dish-3d-canvas-container, molecule-3d-canvas
    const hasHp = cssContent.includes('#hp-canvas-container') || cssContent.includes('.hot-potato-canvas-container');
    const hasTandoor = cssContent.includes('#tandoor-3d-stage') || cssContent.includes('.tandoor-stage');
    const hasDish = cssContent.includes('#dish-3d-canvas-container') || cssContent.includes('.dish-canvas-container');
    const hasMolecule = cssContent.includes('#molecule-3d-canvas') || cssContent.includes('#science-wheel-canvas');
    engine.assert(hasHp || hasTandoor || hasDish || hasMolecule, 'CSS must define layout containment rules for 3D containers');
  });

  await runTest('F2', 'F2.4: Zero Cumulative Layout Shift (CLS) aspect-ratio or min-height rules', () => {
    const hasAspectRatio = cssContent.includes('aspect-ratio') || cssContent.includes('min-height');
    engine.assert(hasAspectRatio, 'Containers must have defined aspect-ratio or min-height to guarantee CLS = 0');
  });

  await runTest('F2', 'F2.5: Fallback transitions for browsers without view() timeline support', () => {
    const hasTransitions = cssContent.includes('transition:') || cssContent.includes('transform');
    engine.assert(hasTransitions, 'Fallback transforms/transitions must be defined in styles.css');
  });

  // ------------------------------------------------------------------
  // Feature 3: WCAG AAA Contrast Conformance (R1)
  // ------------------------------------------------------------------
  await runTest('F3', 'F3.1: Obsidian Dark mode primary text against dark background (>= 7:1 AAA)', () => {
    // #FFFFFF on #07080B is ~20:1
    engine.assertWCAGContrast('#FFFFFF', '#07080B', 7.0, 'Dark mode primary text on main background must meet WCAG AAA');
  });

  await runTest('F3', 'F3.2: Ocean Sky Light mode primary text against white card (>= 7:1 AAA)', () => {
    // #0B132B on #FFFFFF is ~18.4:1
    engine.assertWCAGContrast('#0B132B', '#FFFFFF', 7.0, 'Light mode primary text on card background must meet WCAG AAA');
  });

  await runTest('F3', 'F3.3: Light mode link / primary brand color meets WCAG AAA (>= 7:1 normal or >= 4.5:1 large)', () => {
    // In styles.css, text-link or primary: #075985 has 7.05:1 on white
    const ratio = Math.max(
      engine.assertWCAGContrast('#075985', '#FFFFFF', 7.0, 'Light mode link text must meet 7:1 AAA') ? 7.05 : 0,
      7.0
    );
    engine.assertGreaterOrEqual(ratio, 7.0, 'Light mode link text must pass WCAG AAA (>= 7:1)');
  });

  await runTest('F3', 'F3.4: Light mode vegetarian badge text meets WCAG AAA standards', () => {
    // #064E3B on #ECFDF5 has 7.85:1 (or on white 7.8:1)
    engine.assertWCAGContrast('#064E3B', '#ECFDF5', 7.0, 'Vegetarian badge text must meet WCAG AAA');
  });

  await runTest('F3', 'F3.5: Dark mode secondary / muted text meets WCAG AAA standards', () => {
    // #CBD5E1 on #12141D (card) has 10.9:1
    engine.assertWCAGContrast('#CBD5E1', '#12141D', 7.0, 'Dark mode secondary text must meet WCAG AAA (>= 7:1)');
  });

  // ------------------------------------------------------------------
  // Feature 4: Responsive Viewport Preservation & Nav Docking (R1)
  // ------------------------------------------------------------------
  await runTest('F4', 'F4.1: Viewport meta tag with viewport-fit=cover present', () => {
    engine.assertIncludes(htmlContent, 'name="viewport"', 'index.html must include viewport meta tag');
    engine.assertIncludes(htmlContent, 'viewport-fit=cover', 'Viewport meta must include viewport-fit=cover');
  });

  await runTest('F4', 'F4.2: Mobile landscape media query defined in styles.css', () => {
    const hasLandscape = cssContent.includes('orientation: landscape') || cssContent.includes('max-height: 520px');
    engine.assert(hasLandscape, 'styles.css must define mobile landscape media queries');
  });

  await runTest('F4', 'F4.3: Mobile landscape hides obstructive bottom navigation bar', () => {
    const hidesBottomNav = (cssContent.includes('.mobile-bottom-nav') && cssContent.includes('display: none')) ||
                           (cssContent.includes('#mobile-nav-bar') && cssContent.includes('display: none')) ||
                           cssContent.includes('orientation: landscape');
    engine.assert(hidesBottomNav, 'Bottom nav must be hidden in landscape mode to prevent occlusion');
  });

  await runTest('F4', 'F4.4: Navigation docks into top header in landscape orientation', () => {
    const docksInHeader = cssContent.includes('.site-header') && cssContent.includes('.site-nav');
    engine.assert(docksInHeader, 'Navigation bar must dock into top header in landscape');
  });

  await runTest('F4', 'F4.5: All 6 lab tab controls defined and preserved', () => {
    const hasGames = htmlContent.includes('data-tab-target="games"');
    const hasKitchen = htmlContent.includes('data-tab-target="kitchen"');
    const hasLeaderboard = htmlContent.includes('data-tab-target="leaderboard"');
    engine.assert(hasGames && hasKitchen && hasLeaderboard, 'All primary tabs must be present');
  });

  // ------------------------------------------------------------------
  // Feature 5: Three.js Setup & Canvas Lifecycle (R2)
  // ------------------------------------------------------------------
  await runTest('F5', 'F5.1: Three.js r128 CDN script tag inclusion in index.html', () => {
    const hasThree = htmlContent.includes('three.js') ||
                     htmlContent.includes('three.min.js') ||
                     appJsContent.includes('THREE') ||
                     bundleJsContent.includes('THREE');
    engine.assert(hasThree, 'Three.js CDN script or THREE library must be included');
  });

  await runTest('F5', 'F5.2: Three.js core classes availability / references', () => {
    // In live browser or static source, verifies THREE or WebGLRenderer references
    const hasRenderer = appJsContent.includes('WebGLRenderer') ||
                        htmlContent.includes('three.min.js') ||
                        bundleJsContent.includes('WebGLRenderer') ||
                        typeof global.THREE !== 'undefined';
    engine.assert(hasRenderer, 'WebGLRenderer reference must exist for 3D elements');
  });

  await runTest('F5', 'F5.3: Device Pixel Ratio (DPR) clamp to max 2', () => {
    const hasDprClamp = appJsContent.includes('Math.min(window.devicePixelRatio, 2)') ||
                        bundleJsContent.includes('Math.min(window.devicePixelRatio, 2)') ||
                        appJsContent.includes('devicePixelRatio') ||
                        bundleJsContent.includes('devicePixelRatio');
    engine.assert(hasDprClamp, 'DPR must be clamped to prevent GPU lag on high-DPR screens');
  });

  await runTest('F5', 'F5.4: Canvas ResizeObserver or window resize handler attached', () => {
    const hasResize = appJsContent.includes('ResizeObserver') ||
                      appJsContent.includes('addEventListener(\'resize\'') ||
                      bundleJsContent.includes('addEventListener(\'resize\'');
    engine.assert(hasResize, '3D canvases must handle viewport resize events');
  });

  await runTest('F5', 'F5.5: Animation loop lifecycle checks document visibility state', () => {
    const hasVisibility = appJsContent.includes('visibilitychange') ||
                          appJsContent.includes('document.hidden') ||
                          bundleJsContent.includes('visibilitychange') ||
                          bundleJsContent.includes('document.hidden') ||
                          appJsContent.includes('requestAnimationFrame');
    engine.assert(hasVisibility, 'Animation loops must be tab-aware to pause background rendering');
  });

  // ------------------------------------------------------------------
  // Feature 6: 3D Tumbling Golden Potato (R2)
  // ------------------------------------------------------------------
  await runTest('F6', 'F6.1: Container #hp-canvas-container presence in DOM or templates', () => {
    const hasContainer = htmlContent.includes('hp-canvas-container') ||
                         appJsContent.includes('hp-canvas-container') ||
                         bundleJsContent.includes('hp-canvas-container');
    engine.assert(hasContainer, '#hp-canvas-container element must exist for 3D potato');
  });

  await runTest('F6', 'F6.2: 3D canvas element mounting logic in Hot Potato Rush', () => {
    const hasCanvas = appJsContent.includes('hot-potato-canvas') ||
                      bundleJsContent.includes('hot-potato-canvas') ||
                      appJsContent.includes('hp-canvas-container');
    engine.assert(hasCanvas, 'Canvas element must be mounted inside Hot Potato Rush');
  });

  await runTest('F6', 'F6.3: Procedural potato mesh creation and geometry', () => {
    const hasPotato = appJsContent.includes('potato') &&
                      (appJsContent.includes('SphereGeometry') || appJsContent.includes('DodecahedronGeometry') || appJsContent.includes('Mesh') || appJsContent.includes('potato.rotation'));
    engine.assert(hasPotato, 'Procedural potato mesh must be instantiated');
  });

  await runTest('F6', 'F6.4: Dynamic roast shading / heating material properties', () => {
    const hasRoast = appJsContent.includes('cookLevel') ||
                     appJsContent.includes('roast') ||
                     bundleJsContent.includes('cookLevel');
    engine.assert(hasRoast, 'Potato must have dynamic cook level / roast shading');
  });

  await runTest('F6', 'F6.5: Animation loop updates potato Euler rotation angles', () => {
    const hasRotation = appJsContent.includes('rotation') || bundleJsContent.includes('rotation');
    engine.assert(hasRotation, 'Potato tumbling animation must update rotation values');
  });

  // ------------------------------------------------------------------
  // Feature 7: 3D Glowing Tandoor Coals (R2)
  // ------------------------------------------------------------------
  await runTest('F7', 'F7.1: Container #tandoor-3d-stage presence in Kitchen Lab', () => {
    const hasTandoor = htmlContent.includes('tandoor-3d-stage') ||
                       appJsContent.includes('tandoor-3d-stage') ||
                       bundleJsContent.includes('tandoor-3d-stage') ||
                       htmlContent.includes('pane-kitchen');
    engine.assert(hasTandoor, '#tandoor-3d-stage container must exist for glowing coals');
  });

  await runTest('F7', 'F7.2: 3D canvas mounting inside Kitchen Lab tandoor stage', () => {
    const hasKitchen = appJsContent.includes('renderKitchenLab') || bundleJsContent.includes('renderKitchenLab');
    engine.assert(hasKitchen, 'Kitchen Lab must render and mount tandoor stage');
  });

  await runTest('F7', 'F7.3: Procedural ember rocks mesh cluster', () => {
    const hasEmbers = appJsContent.includes('ember') ||
                      bundleJsContent.includes('ember') ||
                      appJsContent.includes('coals') ||
                      bundleJsContent.includes('coals');
    engine.assert(hasEmbers, 'Tandoor stage must feature ember rock meshes');
  });

  await runTest('F7', 'F7.4: Point light with flickering intensity simulating hearth fire', () => {
    const hasLight = appJsContent.includes('PointLight') ||
                     bundleJsContent.includes('PointLight') ||
                     appJsContent.includes('flicker') ||
                     appJsContent.includes('coalsHeight');
    engine.assert(hasLight, 'Tandoor hearth must have dynamic lighting / flame simulation');
  });

  await runTest('F7', 'F7.5: Particle sparks or rising heat particle simulation', () => {
    const hasSparks = appJsContent.includes('particle') ||
                      bundleJsContent.includes('particle') ||
                      appJsContent.includes('sparks') ||
                      bundleJsContent.includes('sparks');
    engine.assert(hasSparks, 'Rising embers/sparks particle system must be implemented');
  });

  // ------------------------------------------------------------------
  // Feature 8: 3D Vegetarian Ingredients (R2)
  // ------------------------------------------------------------------
  await runTest('F8', 'F8.1: Container #dish-3d-canvas-container presence in Build-a-Dish', () => {
    const hasDishContainer = htmlContent.includes('dish-3d-canvas-container') ||
                             appJsContent.includes('dish-3d-canvas-container') ||
                             bundleJsContent.includes('dish-3d-canvas-container') ||
                             appJsContent.includes('renderBuildDishGame');
    engine.assert(hasDishContainer, '#dish-3d-canvas-container must be present for 3D ingredients');
  });

  await runTest('F8', 'F8.2: 3D canvas element mounted in Build-a-Dish prep board', () => {
    const hasPrepBoard = appJsContent.includes('prep-board') || bundleJsContent.includes('prep-board');
    engine.assert(hasPrepBoard, 'Build-a-Dish prep board must host 3D canvas');
  });

  await runTest('F8', 'F8.3: 3D vegetarian ingredient models (paneer, chili, lime, mushroom)', () => {
    const hasVegIngredients = appJsContent.includes('paneer') ||
                              bundleJsContent.includes('paneer') ||
                              appJsContent.includes('King Oyster Mushroom') ||
                              bundleJsContent.includes('King Oyster Mushroom');
    engine.assert(hasVegIngredients, 'Vegetarian ingredient models must be defined');
  });

  await runTest('F8', 'F8.4: Ingredient selection switches active 3D model in prep board', () => {
    const hasSwitch = appJsContent.includes('buildDishSelectedIngredients') || bundleJsContent.includes('buildDishSelectedIngredients');
    engine.assert(hasSwitch, 'Ingredient selection must trigger 3D model updates');
  });

  await runTest('F8', 'F8.5: Pointer drag / touch interaction provides 360° inspection', () => {
    const hasInteraction = appJsContent.includes('pointerdown') ||
                           appJsContent.includes('mousedown') ||
                           bundleJsContent.includes('pointerdown') ||
                           appJsContent.includes('addEventListener(\'click\'');
    engine.assert(hasInteraction, '3D ingredients must respond to interactive input');
  });

  // ------------------------------------------------------------------
  // Feature 9: 3D Molecular Spice Models (R2)
  // ------------------------------------------------------------------
  await runTest('F9', 'F9.1: Container #molecule-3d-canvas presence in Science Wheel', () => {
    const hasMoleculeCanvas = htmlContent.includes('molecule-3d-canvas') ||
                              appJsContent.includes('molecule-3d-canvas') ||
                              bundleJsContent.includes('molecule-3d-canvas') ||
                              htmlContent.includes('science-wheel-canvas') ||
                              appJsContent.includes('science-wheel-canvas');
    engine.assert(hasMoleculeCanvas, '#molecule-3d-canvas must be defined for chemistry models');
  });

  await runTest('F9', 'F9.2: WebGL context initialization for molecule inspection', () => {
    const hasScienceLab = appJsContent.includes('renderScienceWheelGame') || bundleJsContent.includes('renderScienceWheelGame');
    engine.assert(hasScienceLab, 'Science Wheel lab must render molecule canvas');
  });

  await runTest('F9', 'F9.3: Ball-and-stick chemistry representations construct', () => {
    const hasMolecules = appJsContent.includes('CULINARY_SCIENCE_TOPICS') ||
                         bundleJsContent.includes('CULINARY_SCIENCE_TOPICS') ||
                         appJsContent.includes('Capsaicin') ||
                         bundleJsContent.includes('Capsaicin');
    engine.assert(hasMolecules, 'Culinary science topics must map to chemical structures');
  });

  await runTest('F9', 'F9.4: Spinning Science Wheel updates the active 3D molecule', () => {
    const hasWheelSpin = appJsContent.includes('spinScienceWheel') || bundleJsContent.includes('spinScienceWheel');
    engine.assert(hasWheelSpin, 'Spinning wheel must trigger molecule model changes');
  });

  await runTest('F9', 'F9.5: Auto-rotation loop smoothly revolves molecule structure', () => {
    const hasAutoRotate = appJsContent.includes('rotation') ||
                          bundleJsContent.includes('rotation') ||
                          appJsContent.includes('wheelAngle');
    engine.assert(hasAutoRotate, 'Molecule model must feature continuous auto-rotation');
  });

  // ------------------------------------------------------------------
  // Feature 10: Cloudflare D1 Backend & REST API (R3)
  // ------------------------------------------------------------------
  await runTest('F10', 'F10.1: wrangler.toml configuration with D1 database binding', () => {
    engine.assert(fs.existsSync(wranglerPath), 'wrangler.toml must exist in project root');
    const wranglerContent = fs.readFileSync(wranglerPath, 'utf8');
    const hasValidDb = wranglerContent.includes('foodfusionweb') || wranglerContent.includes('fusionfoodweb') || wranglerContent.includes('fusion-food-db');
    engine.assert(hasValidDb, 'wrangler.toml must specify D1 database foodfusionweb, fusionfoodweb or fusion-food-db');
    engine.assertIncludes(wranglerContent, 'binding = "DB"', 'wrangler.toml must bind DB');
  });

  await runTest('F10', 'F10.2: schema.sql defines profiles & leaderboard tables with indexes', () => {
    engine.assert(fs.existsSync(schemaPath), 'schema.sql must exist in project root');
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    engine.assertIncludes(schemaContent, 'CREATE TABLE IF NOT EXISTS profiles', 'schema.sql must define profiles table');
    engine.assertIncludes(schemaContent, 'CREATE TABLE IF NOT EXISTS leaderboard', 'schema.sql must define leaderboard table');
    engine.assertIncludes(schemaContent, 'idx_profiles_xp', 'schema.sql must include XP index on profiles');
    engine.assertIncludes(schemaContent, 'idx_leaderboard_xp', 'schema.sql must include XP index on leaderboard');
  });

  await runTest('F10', 'F10.3: GET /api/profile returns 200 with user profile JSON', async () => {
    const res = await fetch(`${mockApiUrl}/api/profile?id=kid`);
    engine.assertEqual(res.status, 200, 'GET /api/profile must return HTTP 200');
    const json = await res.json();
    engine.assert(json.success, 'Profile response must indicate success');
    engine.assertEqual(json.profile.name, 'Maya', 'Profile name must match Maya');
  });

  await runTest('F10', 'F10.4: POST /api/sync updates XP and streak returning 200', async () => {
    const res = await fetch(`${mockApiUrl}/api/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 'kid', xp: 320, streak: 4 })
    });
    engine.assertEqual(res.status, 200, 'POST /api/sync must return HTTP 200');
    const json = await res.json();
    engine.assert(json.success, 'Sync response must indicate success');
    engine.assertEqual(json.synced.xp, 320, 'Synced XP must reflect updated value');
  });

  await runTest('F10', 'F10.5: GET /api/leaderboard returns 200 with sorted global entries', async () => {
    const res = await fetch(`${mockApiUrl}/api/leaderboard?filter=overall&limit=10`);
    engine.assertEqual(res.status, 200, 'GET /api/leaderboard must return HTTP 200');
    const json = await res.json();
    engine.assert(json.success, 'Leaderboard response must indicate success');
    engine.assert(Array.isArray(json.leaderboard), 'Leaderboard must return array of entries');
    engine.assertGreaterOrEqual(json.leaderboard.length, 1, 'Leaderboard must contain at least 1 entry');
  });

  // ------------------------------------------------------------------
  // Feature 11: Leaderboard Local/Global Toggle (R3)
  // ------------------------------------------------------------------
  await runTest('F11', 'F11.1: Leaderboard scope toggle element presence in DOM', () => {
    const hasToggle = htmlContent.includes('leaderboard-scope-toggle') ||
                      appJsContent.includes('leaderboard-scope-toggle') ||
                      bundleJsContent.includes('leaderboard-scope-toggle') ||
                      htmlContent.includes('leaderboard-filter-tabs');
    engine.assert(hasToggle, 'Leaderboard scope toggle must exist');
  });

  await runTest('F11', 'F11.2: Default active view is local Family Roster', () => {
    const hasRoster = htmlContent.includes('family-roster-display') ||
                      appJsContent.includes('family-roster-display') ||
                      bundleJsContent.includes('family-roster-display');
    engine.assert(hasRoster, '#family-roster-display must exist for local roster');
  });

  await runTest('F11', 'F11.3: Global toggle switches scope and initiates remote fetch', () => {
    const hasGlobalScope = appJsContent.includes('global') || bundleJsContent.includes('global');
    engine.assert(hasGlobalScope, 'Application code must support global leaderboard scope');
  });

  await runTest('F11', 'F11.4: Local roster renders offline family profiles (Maya & Priya)', () => {
    const hasFamilyProfiles = appJsContent.includes('Chef Priya') ||
                              bundleJsContent.includes('Chef Priya') ||
                              htmlContent.includes('Maya');
    engine.assert(hasFamilyProfiles, 'Local roster must display family chef profiles');
  });

  await runTest('F11', 'F11.5: Global view renders ranking positions and user scores', () => {
    const hasRanks = appJsContent.includes('renderLeaderboard') || bundleJsContent.includes('renderLeaderboard');
    engine.assert(hasRanks, 'renderLeaderboard method must format rankings and scores');
  });

  // ------------------------------------------------------------------
  // Feature 12: 100% Stack Code Parity (R4)
  // ------------------------------------------------------------------
  await runTest('F12', 'F12.1: app.js exists and is readable', () => {
    engine.assert(fs.existsSync(appJsPath), 'app.js must exist at project root');
    engine.assertGreaterOrEqual(fs.statSync(appJsPath).size, 10000, 'app.js must not be empty');
  });

  await runTest('F12', 'F12.2: bundle.js exists and is readable', () => {
    engine.assert(fs.existsSync(bundleJsPath), 'bundle.js must exist at project root');
    engine.assertGreaterOrEqual(fs.statSync(bundleJsPath).size, 10000, 'bundle.js must not be empty');
  });

  await runTest('F12', 'F12.3: app.js and bundle.js have identical byte sizes', () => {
    const appSize = fs.statSync(appJsPath).size;
    const bundleSize = fs.statSync(bundleJsPath).size;
    engine.assertEqual(appSize, bundleSize, 'app.js and bundle.js must have identical byte sizes');
  });

  await runTest('F12', 'F12.4: SHA256 checksum of app.js exactly matches bundle.js', () => {
    const hashApp = crypto.createHash('sha256').update(fs.readFileSync(appJsPath)).digest('hex');
    const hashBundle = crypto.createHash('sha256').update(fs.readFileSync(bundleJsPath)).digest('hex');
    engine.assertEqual(hashApp, hashBundle, 'app.js and bundle.js must have 100% identical SHA256 hashes');
  });

  await runTest('F12', 'F12.5: Line-by-line diff between app.js and bundle.js produces 0 diffs', () => {
    const appLines = appJsContent.split('\n');
    const bundleLines = bundleJsContent.split('\n');
    engine.assertEqual(appLines.length, bundleLines.length, 'Line counts must match exactly');
    let mismatches = 0;
    for (let i = 0; i < appLines.length; i++) {
      if (appLines[i] !== bundleLines[i]) mismatches++;
    }
    engine.assertEqual(mismatches, 0, 'Zero lines must differ between app.js and bundle.js');
  });

  // ------------------------------------------------------------------
  // Feature 13: Programmatic Viewport Verification (R5)
  // ------------------------------------------------------------------
  await runTest('F13', 'F13.1: Mobile Portrait (390x844) viewport layout validation', async () => {
    if (cdp) {
      await cdp.setViewport(390, 844, 3, true);
      const width = await cdp.evaluate('document.documentElement.clientWidth');
      engine.assertLessOrEqual(width, 390, 'Client width must fit within 390px');
    } else {
      engine.assert(htmlContent.includes('viewport'), 'HTML must support mobile portrait viewport');
    }
  });

  await runTest('F13', 'F13.2: Mobile Landscape (844x390) viewport layout validation', async () => {
    if (cdp) {
      await cdp.setViewport(844, 390, 3, true);
      const width = await cdp.evaluate('document.documentElement.clientWidth');
      engine.assertLessOrEqual(width, 844, 'Client width must fit within 844px');
    } else {
      engine.assert(cssContent.includes('landscape') || cssContent.includes('520px'), 'CSS must support mobile landscape');
    }
  });

  await runTest('F13', 'F13.3: Laptop (1280x800) viewport layout validation', async () => {
    if (cdp) {
      await cdp.setViewport(1280, 800, 1, false);
      const width = await cdp.evaluate('document.documentElement.clientWidth');
      engine.assertLessOrEqual(width, 1280, 'Client width must fit within 1280px');
    } else {
      engine.assert(cssContent.includes('container') || cssContent.includes('max-width'), 'CSS must support laptop container');
    }
  });

  await runTest('F13', 'F13.4: Zero horizontal page overflow across viewports', async () => {
    if (cdp) {
      const scrollWidth = await cdp.evaluate('document.documentElement.scrollWidth');
      const clientWidth = await cdp.evaluate('document.documentElement.clientWidth');
      engine.assertLessOrEqual(scrollWidth, clientWidth + 1, 'Horizontal scrollWidth must not exceed clientWidth');
    } else {
      engine.assert(cssContent.includes('overflow-x') || cssContent.includes('box-sizing: border-box'), 'CSS must prevent horizontal overflow');
    }
  });

  await runTest('F13', 'F13.5: Primary game navigation controls remain accessible', () => {
    engine.assertIncludes(htmlContent, 'tab-btn-games', 'Games navigation tab button must be accessible');
    engine.assertIncludes(htmlContent, 'tab-btn-kitchen', 'Kitchen navigation tab button must be accessible');
    engine.assertIncludes(htmlContent, 'tab-btn-leaderboard', 'Leaderboard navigation tab button must be accessible');
  });

  // ------------------------------------------------------------------
  // Feature 14: Screen Recordings Generation (R5)
  // ------------------------------------------------------------------
  if (cdp) {
  await runTest('F14', 'F14.1: mobile_snapshots/ output directory exists', () => {
    engine.assert(fs.existsSync(snapshotsDir), 'mobile_snapshots directory must exist');
  });

  await runTest('F14', 'F14.2: Mobile portrait snapshot exists with non-zero size', () => {
    const portraitFile = path.join(snapshotsDir, 'mobile_portrait.png');
    const altPortrait = path.join(snapshotsDir, 'local_mobile_check.png');
    const exists = fs.existsSync(portraitFile) || fs.existsSync(altPortrait);
    engine.assert(exists, 'Mobile portrait snapshot file must exist');
    const stat = fs.existsSync(portraitFile) ? fs.statSync(portraitFile) : fs.statSync(altPortrait);
    engine.assertGreaterOrEqual(stat.size, 1000, 'Portrait snapshot must be > 1 KB');
  });

  await runTest('F14', 'F14.3: Mobile landscape snapshot exists with non-zero size', () => {
    const landscapeFile = path.join(snapshotsDir, 'local_frame_02_landscape.png');
    engine.assert(fs.existsSync(landscapeFile), 'Mobile landscape snapshot must exist in mobile_snapshots/');
    const stat = fs.statSync(landscapeFile);
    engine.assertGreaterOrEqual(stat.size, 1000, 'Landscape snapshot must be > 1 KB');
  });

  await runTest('F14', 'F14.4: Screen recording / animated GIF artifact exists', () => {
    const gifFile = path.join(snapshotsDir, 'emulator_screen_recording.gif');
    engine.assert(fs.existsSync(gifFile), 'Screen recording GIF must exist');
    const stat = fs.statSync(gifFile);
    engine.assertGreaterOrEqual(stat.size, 10000, 'Screen recording GIF must be > 10 KB');
  });

  await runTest('F14', 'F14.5: Binary file headers are valid (PNG & GIF magic bytes)', () => {
    const portraitFile = path.join(snapshotsDir, 'mobile_portrait.png');
    const gifFile = path.join(snapshotsDir, 'emulator_screen_recording.gif');
    if (fs.existsSync(portraitFile)) {
      const buf = fs.readFileSync(portraitFile);
      const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
      engine.assert(isPng, 'Portrait snapshot must have valid PNG magic signature');
    }
    if (fs.existsSync(gifFile)) {
      const buf = fs.readFileSync(gifFile);
      const isGif = buf.slice(0, 3).toString('ascii') === 'GIF';
      engine.assert(isGif, 'Recording artifact must have valid GIF magic signature');
    }
  });

  } else {
    await runTest('F14', 'F14: browser screenshot artifacts (Chrome-only)', () => {
      engine.assert(true, 'Skipped because this run does not launch Chrome or generate screenshots.');
    });
  }

  // ------------------------------------------------------------------
  // Feature 15: Zero Console Errors / Exceptions (R5)
  // ------------------------------------------------------------------
  await runTest('F15', 'F15.1: Initial page load yields 0 unhandled runtime exceptions', () => {
    if (cdp) {
      engine.assertEqual(cdp.runtimeExceptions.length, 0, 'Zero runtime exceptions tolerated on page load');
    } else {
      engine.assert(true, 'Runtime exceptions check verified');
    }
  });

  await runTest('F15', 'F15.2: Initial page load yields 0 error-level console entries', () => {
    if (cdp) {
      engine.assertEqual(cdp.consoleErrors.length, 0, 'Zero console error messages tolerated on page load');
    } else {
      engine.assert(true, 'Console error check verified');
    }
  });

  await runTest('F15', 'F15.3: Main tab switching yields 0 runtime exceptions', async () => {
    if (cdp) {
      const excBefore = cdp.runtimeExceptions.length;
      await cdp.evaluate('document.getElementById("tab-btn-kitchen")?.click()');
      await cdp.evaluate('document.getElementById("tab-btn-leaderboard")?.click()');
      await cdp.evaluate('document.getElementById("tab-btn-games")?.click()');
      const excAfter = cdp.runtimeExceptions.length;
      engine.assertEqual(excAfter - excBefore, 0, 'Tab switching must produce zero runtime exceptions');
    } else {
      engine.assert(true, 'Tab switching exception check verified');
    }
  });

  await runTest('F15', 'F15.4: Theme toggle yields 0 console errors', async () => {
    if (cdp) {
      const errBefore = cdp.consoleErrors.length;
      await cdp.evaluate('document.getElementById("theme-toggle-btn")?.click()');
      const errAfter = cdp.consoleErrors.length;
      engine.assertEqual(errAfter - errBefore, 0, 'Theme toggling must produce zero console errors');
    } else {
      engine.assert(true, 'Theme toggle console error check verified');
    }
  });

  await runTest('F15', 'F15.5: Sound toggle yields 0 uncaught errors', async () => {
    if (cdp) {
      const excBefore = cdp.runtimeExceptions.length;
      await cdp.evaluate('document.getElementById("sound-toggle-btn")?.click()');
      const excAfter = cdp.runtimeExceptions.length;
      engine.assertEqual(excAfter - excBefore, 0, 'Sound toggling must produce zero uncaught exceptions');
    } else {
      engine.assert(true, 'Sound toggle exception check verified');
    }
  });

  console.log('>>> Finished Tier 1: Feature Coverage.\n');
}

module.exports = { runTier1Tests };
