# 🥘 Fusion Food Family Lab
> **Interactive Global Fusion Cuisine & Culinary Science for Kids & Parents**  
> *100% Pure Vegetarian Adaptations with Indian Bazaar Substitutes*

Welcome to the **Fusion Food Family Lab**! This interactive web platform brings together global fusion culinary traditions (Japanese-Peruvian Nikkei, Tex-Mex, Indo-Italian, Indo-French, and Indo-Japanese) and translates them into vegetarian-friendly cooking simulations, food science explorations, phonetic pronunciation challenges, and family trivia.

---

## 🚀 Quick Start
1. Double-click **`Start-FusionFood.bat`** or open **`index.html`** in any web browser (Chrome, Edge, Opera, Firefox, Safari).
2. Works completely **offline** with zero npm/node installations, zero build steps, and zero external API dependencies.

---

## 🎮 5 Admin-Toggleable Interactive Games

### 1. 🥘 Build-a-Dish (Pantry Rush & Recipe Simulation)
* **Step-by-Step Cooking Lab**: Observe real ingredient transformations through Base Prep, Marinade, Sizzle/Bake, and Garnish phases.
* **Timed Pantry Rush**: Tap authentic vegetarian ingredients while avoiding non-vegetarian or mismatched impostor ingredients (e.g., fish sauce, blue cheese, raw meat).
* **Kid & Parent Tags**: Safe steps (whisking, decorating) are flagged for kids, while hot stovetop/oven steps feature parent supervision tags.

### 2. 🗣️ Pronunciation Challenge & Phonetic Matching
* **International Accents**: Master authentic IPA notations and phonetic syllables (`/ti.ɾaˈði.to/` -> *tee-rah-DEE-toh*).
* **Interactive Syllable Builder**: Reorder scrambled syllables into the exact sequence.
* **Audio Speech Synthesis**: Hear authentic pronunciation using the browser's built-in Web Speech API.
* **Voice Practice Mic Check**: Test your speech via the microphone for bonus XP.

### 3. 🧠 Family Tag-Team Trivia Quiz
* **10 Curated Questions**: Dive into culinary history, Indian bazaar substitutes, and food chemistry.
* **Gentle Soft Timer**: Earn bonus speed XP without any negative penalties for taking time to discuss.
* **"Parent Hint" Button**: Brainstorm together with helpful real-world cooking hints.

### 4. 🗺️ India Availability Map & City Quest
* **Interactive SVG Map**: Explore regional fusion adoption across 6 key metro hubs (Mumbai, Delhi-NCR, Bengaluru, Goa, Pune, Hyderabad).
* **Availability Matrix**: Filter dishes by *Emerging/Niche*, *Moderate*, and *High* availability.
* **Bazaar Quests**: Discover authentic local markets (Crawford Market, INA Market, Russell Market) that stock replacement ingredients!

### 5. 🎡 Spin the Wheel & Culinary Food Science
* **Dynamic Physics Wheel**: Spin across 6 core food chemistry concepts:
  * *Citrus Acid Denaturation* (How lime juice "cooks" ceviche)
  * *The Maillard Reaction* (The browning chemistry behind tandoor naanzas)
  * *Molecular Emulsification* (How cashew paste bonds cream and acidic tomatoes)
  * *Osmosis & Sugar Gradients* (Why gulab jamuns must be balanced in cheesecakes)
  * *Alkaline Starch Chemistry* (Why kansui makes ramen noodles bouncy)
  * *Fat-Soluble Spice Volatiles* (Why tadka in hot oil/ghee awakens spices)
* **Rapid Science Challenge**: Answer an instant food chemistry mini-question to win +50 Bonus XP!

---

## 📖 Kitchen Lab: Replicate in India
Every fusion dish includes a full Indian kitchen adaptation:
* **Nikkei Ceviche**: King Oyster Mushrooms or Hearts of Palm + Yellow Bhavnagri chili + Roasted salted chana.
* **Tofu Tiradito**: Silken firm tofu ribbons + yellow bell pepper puree + toasted sesame oil.
* **Paneer Tikka Tacos**: Charcoal-grilled malai paneer + Makki di Roti / corn tortillas + makhani glaze + hung curd crema.
* **Paneer Tikka Quesadilla**: Amul mozzarella + tawa grilled tortillas + mint-coriander chutney.
* **Creamy Makhani Penne**: Desi plum tomato reduction + cashew paste + kasuri methi + paneer cubes.
* **Naanza (Naan Pizza)**: Garlic butter naan crust + tikka marinara + molten cheese + bell peppers.
* **Eggless Gulab Jamun Cheesecake**: Digestive biscuit crumb crust + saffron cardamom cream cheese + mini gulab jamuns.
* **Spiced Veggie Curry Ramen**: Springy ramen noodles + coconut-curry kombu broth + seared tofu + tandoori chili crisp.
* **One-Click Shopping List**: Copy ingredients directly to clipboard for your next grocery trip.

---

## 🏆 Family Leaderboard & 6-Tier Chef Rank Ladder
* **Switchable Profiles**: Toggle between **Kid Chef Maya** 🧒 and **Parent Sous-Chef** 👨‍🍳 with one click.
* **6 Culinary Ranks**:
  1. *Kitchen Apprentice* (0–250 XP)
  2. *Spice Explorer* (251–600 XP)
  3. *Street Food Alchemist* (601–1100 XP)
  4. *Fusion Sous Chef* (1101–1700 XP)
  5. *Executive Fusion Master* (1701–2500 XP)
  6. *Michelin Star Sorcerer* (2501+ XP)
* **Trophy Badges & Streaks**: Daily streak multipliers and personal best tracking saved automatically to `localStorage`.

---

## 🔒 Secret Admin Controls
* Click the **Lock Icon (🔒)** in the site header or footer.
* Enter Secret Admin PIN (configured by admin).
* Toggle any of the 5 games on or off.
* Reset family high scores or streak records.

---

## 🎨 Visual & Audio System
* **Warm Illustrated Cookbook Styling**: Tactile cream/parchment background, terracotta saffron accents, and recipe tape accents.
* **Theme Modes**: Seamless toggle between **Light Mode** (Parchment & Terracotta) and **Dark Mode** (Cast Iron Espresso & Saffron Glow).
* **Web Audio API Synthesizer**: Chimes, clicks, wheel ticks, error buzzes, and victory fanfares generated via native code (with master mute toggle 🔇).
* **Celebration Confetti**: Full-screen particle physics celebrations on game completions and tier rank-ups!


---

## ☁️ Cloudflare Production Deployment

Fusion Food uses **Cloudflare Pages for the website and Pages Functions**, with an optional standalone **API-only Worker**. Both API deployments use the D1 binding named `DB`.

### Production build

This project has no frontend package manager or bundler. Prepare a clean allowlisted output directory:

```bash
node scripts/build-pages.mjs
node scripts/validate-cloudflare.mjs
```

Deploy Pages from `dist/`, never from the repository root:

```bash
npx wrangler@4 pages deploy dist --project-name=fusionfood --branch=main
```

The Pages Functions source stays in the top-level `functions/` directory for Wrangler to bundle. The `dist/` directory contains only `index.html`, `styles.css`, `bundle.js`, `_headers`, and `_redirects`. Database schemas, Worker source, tests, scripts and Wrangler configuration are not public assets.

When configuring Cloudflare Pages Git integration, set the build command to `node scripts/build-pages.mjs` and build output directory to `dist`. Do not use the repository root as the output directory.

### Required secrets

The Admin PIN is not shipped in browser JavaScript. Before using the online Admin panel, set both secrets on the Pages project:

```bash
npx wrangler@4 pages secret put ADMIN_PIN --project-name=fusionfood
npx wrangler@4 pages secret put ADMIN_SESSION_SECRET --project-name=fusionfood
```

Use a new private PIN (do not reuse the old hardcoded demo PIN) and a random `ADMIN_SESSION_SECRET` of at least 32 characters. Generate a session secret with:

```bash
node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"
```

For the standalone API Worker, set the same secrets for that Worker too:

```bash
npx wrangler@4 secret put ADMIN_PIN --config=wrangler.worker.toml
npx wrangler@4 secret put ADMIN_SESSION_SECRET --config=wrangler.worker.toml
npx wrangler@4 deploy --config=wrangler.worker.toml
```

Admin sessions use a signed two-hour `HttpOnly`, `Secure`, `SameSite=Strict` cookie. The PIN is not saved in local browser storage. Offline `file://` mode keeps local-only admin controls, which do not authenticate to the deployed API.

### D1 setup

The existing D1 database is configured by ID in both Wrangler files. For a **new, empty** database only, initialize it once:

```bash
npx wrangler@4 d1 execute foodfusionweb --remote --file=./schema.sql
```

Do not run this against a database containing production data without a verified backup. The GitHub workflow does not automatically reinitialize or seed D1.

### GitHub Actions

Configure repository secrets:

- `CLOUDFLARE_API_TOKEN` — scoped to the account with Pages and Workers deployment permissions.
- `CLOUDFLARE_ACCOUNT_ID` — the target Cloudflare account ID.

Pushes and pull requests run the build, parity check, regression suite and Wrangler Worker dry run. Only pushes to `main` deploy Pages and the API Worker. Deployment errors are not ignored.

### CORS and custom domains

`CORS_ORIGIN` is the primary Pages origin. For a custom domain, add its exact HTTPS origin to the `CORS_ALLOWED_ORIGINS` Pages/Worker variable (comma-separated when there are multiple origins). Do not use wildcard origins. CORS is not a substitute for authentication.
