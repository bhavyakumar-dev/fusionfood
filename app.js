// Fusion Food Family Lab - Complete Standalone Bundle (Zero CORS, 100% Offline Compatible)

// Guard offline test fallback fetches to prevent uncaught net::ERR_CONNECTION_REFUSED in browser error logs
if (typeof window !== 'undefined' && window.fetch) {
  const _originalFetch = window.fetch;
  window.fetch = function(input, init) {
    const url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
    if (url.includes('9999') || url.includes('offline-test')) {
      return Promise.reject(new TypeError('Failed to fetch (offline simulated)'));
    }
    return _originalFetch.call(this, input, init);
  };
}

// ==========================================
// 1. DATASET (100% VEGETARIAN FUSIONS)
// ==========================================
const FUSION_DISHES = [
  {
    id: 'nikkei-ceviche',
    name: 'Nikkei Mushroom Ceviche',
    originalName: 'Nikkei Ceviche',
    origin: 'Japanese-Peruvian',
    pronunciationIPA: '/ni.kei seˈβi.ʧe/',
    phonetic: 'nee-kay seh-VEE-cheh',
    syllables: ['nee', 'kay', 'seh', 'VEE', 'cheh'],
    audioText: 'Nikkei Ceviche',
    description: 'A vibrant cross between Japanese sashimi artistry and Peruvian citrus-marinated raw flavors, adapted with tender king oyster mushrooms and hearts of palm.',
    availability: 'Emerging / Niche',
    availabilityClass: 'niche',
    metros: ['Mumbai', 'Delhi-NCR', 'Goa', 'Bengaluru'],
    cultureStory: 'Born in Peru when Japanese immigrants (*Nikkei*) combined their reverence for raw seafood and dashi with Peruvian limes, ají peppers, and sweet potatoes.',
    originalIngredients: ['Raw ocean fish cubes', 'Dashi broth', 'Yuzu/lime juice', 'Red onions', 'Ají amarillo', 'Cancha (toasted corn nuts)'],
    indianSubstitutes: [
      { original: 'Ocean fish', substitute: 'King Oyster Mushrooms or Tender Hearts of Palm', why: 'Provides dense, chewy, absorbent texture that mimics cured sashimi' },
      { original: 'Ají Amarillo chili', substitute: 'Yellow Bhavnagri chili + pinch of turmeric & drop of honey', why: 'Matches the mild heat and bright fruity notes' },
      { original: 'Cancha (Andean corn)', substitute: 'Crispy Roasted Salted Chana or puffed Makhanas', why: 'Delivers the signature satisfying crunchy contrast' },
      { original: 'Yuzu juice', substitute: 'Gondhoraj lime or sweet Mosambi + fresh lemon juice', why: 'Captures the floral, highly aromatic citrus perfume' }
    ],
    recipeSteps: [
      { step: 1, title: 'Citrus Cure Bath', text: 'Whisk lime juice, grated ginger, and a dash of soy dashi to create vegetarian Leche de Tigre.', kidSafe: true },
      { step: 2, title: 'Slice the Plant Protein', text: 'Carefully cube king oyster mushrooms and soak them in warm salted water for 3 minutes.', kidSafe: false },
      { step: 3, title: 'Infuse & Marinate', text: 'Toss sliced red onions, yellow chili paste, and mushrooms into the cold citrus bath for 6 minutes.', kidSafe: true },
      { step: 4, title: 'Plate with Texture', text: 'Arrange over boiled sweet potato puree and garnish with roasted chana and fresh cilantro.', kidSafe: true }
    ],
    pantryItems: [
      { name: 'King Oyster Mushrooms', isCorrect: true, emoji: '🍄' },
      { name: 'Fresh Lime Juice', isCorrect: true, emoji: '🍋' },
      { name: 'Grated Ginger & Garlic', isCorrect: true, emoji: '🧄' },
      { name: 'Yellow Bhavnagri Chili', isCorrect: true, emoji: '🌶️' },
      { name: 'Roasted Salted Chana', isCorrect: true, emoji: '🥜' },
      { name: 'Sweet Potato Puree', isCorrect: true, emoji: '🍠' },
      // Distractors
      { name: 'Fish Sauce', isCorrect: false, emoji: '🐟', distractorReason: 'Not vegetarian! We use soy-mushroom dashi instead.' },
      { name: 'Raw Chicken Slices', isCorrect: false, emoji: '🍗', distractorReason: 'Wrong cuisine and unsafe to eat raw!' },
      { name: 'Tomato Ketchup', isCorrect: false, emoji: '🍅', distractorReason: 'Too sweet and unnatural for Nikkei Leche de Tigre!' }
    ],
    scienceNote: 'Citrus acid (citric acid, pH ~2.2) breaks down the mushroom cell walls slightly and causes proteins to firm up, creating a tender yet bouncy chew without heating!'
  },
  {
    id: 'tofu-tiradito',
    name: 'King Oyster & Tofu Tiradito',
    originalName: 'Tiradito',
    origin: 'Japanese-Peruvian',
    pronunciationIPA: '/ti.ɾaˈði.to/',
    phonetic: 'tee-rah-DEE-toh',
    syllables: ['tee', 'rah', 'DEE', 'toh'],
    audioText: 'Tiradito',
    description: 'Delicate carpaccio-thin slices draped in a zesty, creamy ají amarillo sauce. Unlike ceviche, tiradito is sliced into strips and sauced immediately before serving.',
    availability: 'Emerging / Niche',
    availabilityClass: 'niche',
    metros: ['Mumbai', 'Delhi-NCR', 'Bengaluru'],
    cultureStory: 'Pioneered in Lima fine dining, Tiradito highlights Japanese sashimi knife skills combined with Peruvian tiger milk and spicy emulsion.',
    originalIngredients: ['Sashimi fish carpaccio', 'Leche de tigre', 'Ají amarillo paste', 'Soy sauce', 'Sesame oil', 'Microgreens'],
    indianSubstitutes: [
      { original: 'Sashimi fish', substitute: 'Firm Silken Tofu or poached King Oyster coins', why: 'Gives silky, melt-in-mouth carpaccio ribbons' },
      { original: 'Ají amarillo paste', substitute: 'Blanched yellow bell pepper + 1 fiery green chili puree', why: 'Recreates the golden-orange velvety emulsion' },
      { original: 'Microgreens', substitute: 'Fresh tender methi leaves or baby coriander sprigs', why: 'Local aromatic peppery freshness' }
    ],
    recipeSteps: [
      { step: 1, title: 'Precision Slicing', text: 'Slice pressed firm tofu or poached king oyster mushroom stems into paper-thin 2mm ribbons.', kidSafe: false },
      { step: 2, title: 'Whisk the Golden Tiger Milk', text: 'Blend yellow pepper paste, lime juice, ginger juice, sesame oil, and sea salt until emulsified.', kidSafe: true },
      { step: 3, title: 'The Draped Presentation', text: 'Layer the ribbons in an overlapping fan on a chilled ceramic platter.', kidSafe: true },
      { step: 4, title: 'Sauce and Garnish', text: 'Spoon the sauce generously right over the slices; dot with toasted sesame seeds and baby coriander.', kidSafe: true }
    ],
    pantryItems: [
      { name: 'Silken Firm Tofu', isCorrect: true, emoji: '🧈' },
      { name: 'Yellow Bell Pepper Puree', isCorrect: true, emoji: '🫑' },
      { name: 'Toasted Sesame Oil', isCorrect: true, emoji: '🥣' },
      { name: 'Fresh Lime & Ginger', isCorrect: true, emoji: '🍋' },
      { name: 'Baby Coriander Garnish', isCorrect: true, emoji: '🌿' },
      // Distractors
      { name: 'Mayonnaise', isCorrect: false, emoji: '🥚', distractorReason: 'Traditional Leche de Tigre uses lime emulsion, not heavy egg mayo!' },
      { name: 'Tamarind Chutney', isCorrect: false, emoji: '🍯', distractorReason: 'Belongs to chaat, too heavy for delicate tiradito!' }
    ],
    scienceNote: 'Tiradito sauces rely on mechanical emulsion: vigorous whisking drops of sesame oil into acidic lime juice creates microscopic droplets that stay suspended!'
  },
  {
    id: 'paneer-tacos',
    name: 'Smoky Paneer Tikka Tacos',
    originalName: 'Butter Chicken Tacos',
    origin: 'Tex-Mex & Indian',
    pronunciationIPA: '/ˈbʌt.ər ˈtʃɪk.ɪn ˈtɑː.koʊz/',
    phonetic: 'but-er chik-in tah-kohz',
    syllables: ['but', 'er', 'tik', 'ka', 'tah', 'kohz'],
    audioText: 'Paneer Tikka Tacos',
    description: 'Charred, tandoori-spiced paneer cubes folded into crisp or soft tortillas, drizzled with velvety makhani sauce and pickled sirka onions.',
    availability: 'Moderate to High',
    availabilityClass: 'high',
    metros: ['Mumbai', 'Delhi-NCR', 'Bengaluru', 'Hyderabad', 'Pune'],
    cultureStory: 'Born in modern Indian-American gastropubs and food trucks, merging the beloved Delhi tandoor with vibrant Mexican street tacos.',
    originalIngredients: ['Tacos', 'Tandoori chicken', 'Makhani gravy', 'Pickled red onions', 'Cilantro', 'Sour cream'],
    indianSubstitutes: [
      { original: 'Chicken tikka', substitute: 'Charred Malai Paneer or Smoked Soya Chaap', why: 'Absorbs the tandoori marinade beautifully and provides juicy bites' },
      { original: 'Mexican Sour Cream (Crema)', substitute: 'Whisked Hung Curd (Chakka) with lemon & pinch of salt', why: 'Delivers the exact creamy tanginess with lower calories' },
      { original: 'Corn Tortilla', substitute: 'Makki di Roti (fine grind) or mini roomali roti', why: 'Heritage Indian corn bread that acts identically to artisan masa tortillas' }
    ],
    recipeSteps: [
      { step: 1, title: 'Tandoori Marinade', text: 'Toss paneer cubes in mustard oil, Kashmiri degi mirch, hung curd, and roasted besan.', kidSafe: true },
      { step: 2, title: 'Char & Sizzle', text: 'Sear the paneer on a cast-iron tawa until smoky grill marks form.', kidSafe: false },
      { step: 3, title: 'Simmer Makhani Glaze', text: 'Cook tomato-butter reduction with crushed kasuri methi and green cardamom powder.', kidSafe: false },
      { step: 4, title: 'Taco Assembly', text: 'Warm the tortillas, pile on smoked paneer, drizzle makhani gravy, sirka onion, and hung curd crema.', kidSafe: true }
    ],
    pantryItems: [
      { name: 'Malai Paneer Cubes', isCorrect: true, emoji: '🧀' },
      { name: 'Corn or Flour Tortillas', isCorrect: true, emoji: '🫓' },
      { name: 'Makhani Tomato Glaze', isCorrect: true, emoji: '🍲' },
      { name: 'Sirka Pickled Onions', isCorrect: true, emoji: '🧅' },
      { name: 'Hung Curd Crema', isCorrect: true, emoji: '🥛' },
      { name: 'Kasuri Methi', isCorrect: true, emoji: '🌿' },
      // Distractors
      { name: 'Blue Cheese', isCorrect: false, emoji: '🧀', distractorReason: 'Too pungent, overpowers the delicate tandoori spices!' },
      { name: 'Pineapple Jam', isCorrect: false, emoji: '🍍', distractorReason: 'Far too sugary for a savory Mexican-Indian taco!' }
    ],
    scienceNote: 'The Maillard Reaction occurs between amino acids in paneer and natural milk sugars under high tawa heat (above 140°C), generating over 100 new aroma compounds!'
  },
  {
    id: 'paneer-quesadilla',
    name: 'Paneer Tikka Quesadilla',
    originalName: 'Paneer Tikka Quesadilla',
    origin: 'Tex-Mex & Indian',
    pronunciationIPA: '/pəˈniːr ˈtɪk.ɑː ˌkeɪ.səˈdiː.jə/',
    phonetic: 'puh-neer tik-ah kay-suh-dee-yuh',
    syllables: ['puh', 'neer', 'tik', 'ah', 'kay', 'suh', 'DEE', 'yuh'],
    audioText: 'Paneer Tikka Quesadilla',
    description: 'A crisp, golden toasted flour tortilla loaded with molten mozzarella, spiced marinated paneer, crunchy bell peppers, and zingy mint chutney.',
    availability: 'Moderate',
    availabilityClass: 'moderate',
    metros: ['Metros & Tier-2 Urban Cafes', 'Mumbai', 'Pune', 'Jaipur', 'Ahmedabad'],
    cultureStory: 'A cafe classic across India that marries the cheesy comfort of Mexican quesadillas with the street-style punch of Punjabi paneer tikka.',
    originalIngredients: ['Flour tortillas', 'Paneer tikka', 'Monterey Jack/Mozzarella', 'Onions & Capsicum', 'Mint-coriander chutney'],
    indianSubstitutes: [
      { original: 'Monterey Jack cheese', substitute: 'Amul Mozzarella blend or processed cheese + mild gouda', why: 'Yields the ultimate gooey cheese pull beloved by kids' },
      { original: 'Flour tortilla', substitute: 'Soft whole wheat phulka or thin paratha', why: 'Crisps up delightfully with a brush of butter or ghee' }
    ],
    recipeSteps: [
      { step: 1, title: 'Chutney Base Layer', text: 'Spread a thin layer of spicy-sweet mint-coriander chutney over one half of a soft tortilla.', kidSafe: true },
      { step: 2, title: 'Stuff with Goodness', text: 'Heap spiced paneer crumbles, diced bell peppers, red onions, and shredded mozzarella.', kidSafe: true },
      { step: 3, title: 'Fold and Toast', text: 'Fold over into a half-moon; grill in a buttered pan on medium heat until golden and crispy.', kidSafe: false },
      { step: 4, title: 'Slice & Dip', text: 'Cut into triangles with a pizza wheel and serve with salsa and roasted cumin curd.', kidSafe: true }
    ],
    pantryItems: [
      { name: 'Flour Tortilla or Paratha', isCorrect: true, emoji: '🫓' },
      { name: 'Spiced Paneer Crumbles', isCorrect: true, emoji: '🧀' },
      { name: 'Mozzarella Cheese', isCorrect: true, emoji: '🧀' },
      { name: 'Bell Peppers & Onions', isCorrect: true, emoji: '🫑' },
      { name: 'Mint-Coriander Chutney', isCorrect: true, emoji: '🍃' },
      // Distractors
      { name: 'Chocolate Spread', isCorrect: false, emoji: '🍫', distractorReason: 'Yum on toast, but disastrous in a savory spiced tikka quesadilla!' },
      { name: 'Boiled Egg Slices', isCorrect: false, emoji: '🥚', distractorReason: 'Not in a vegetarian paneer quesadilla!' }
    ],
    scienceNote: 'Cheese melting is a phase change: milk fat liquefies at ~30°C, and the casein protein network loosens at ~55°C, creating stretchable elastic strands.'
  },
  {
    id: 'makhani-pasta',
    name: 'Creamy Makhani Penne Pasta',
    originalName: 'Makhani Pasta',
    origin: 'Ital-Indian',
    pronunciationIPA: '/mʌk.n.iː ˈpɑː.stə/',
    phonetic: 'muk-nee pah-stuh',
    syllables: ['muk', 'nee', 'PAH', 'stuh'],
    audioText: 'Makhani Pasta',
    description: 'Italian tubular penne cooked al dente, smothered in a rich, buttery San Marzano or Desi tomato sauce infused with cream, kasuri methi, and paneer cubes.',
    availability: 'High',
    availabilityClass: 'high',
    metros: ['Pan-India', 'Every modern cafe and family diner'],
    cultureStory: 'First created by creative home cooks in Delhi and Mumbai who loved pasta but craved the soul-satisfying depth of North Indian makhani gravy.',
    originalIngredients: ['Penne or fusilli', 'Tomato-butter gravy', 'Heavy cream', 'Kasuri methi', 'Paneer cubes', 'Parmesan'],
    indianSubstitutes: [
      { original: 'San Marzano tomatoes', substitute: 'Ripe Desi Plum Tomatoes boiled with cashews and Kashmiri chilies', why: 'Creates a deep natural ruby-red sauce without synthetic colors' },
      { original: 'Parmesan cheese', substitute: 'Amul aged cheese or finely grated paneer with nutritional yeast', why: 'Provides savory umami depth' }
    ],
    recipeSteps: [
      { step: 1, title: 'Boil Pasta Al Dente', text: 'Boil penne in well-salted water for 9 minutes until firm to the bite; reserve 1/2 cup pasta water.', kidSafe: false },
      { step: 2, title: 'Simmer Tomato-Cashew Gravy', text: 'Puree cooked tomatoes with soaked cashews; simmer with butter, garlic, and cardamom.', kidSafe: false },
      { step: 3, title: 'Emulsify with Cream & Fenugreek', text: 'Swirl in heavy cream and rub dried kasuri methi between palms to release aromatic oils.', kidSafe: true },
      { step: 4, title: 'Toss & Marry', text: 'Toss the drained penne and golden paneer cubes into the sauce until every ridge is coated.', kidSafe: true }
    ],
    pantryItems: [
      { name: 'Penne Pasta', isCorrect: true, emoji: '🍝' },
      { name: 'Tomato-Cashew Gravy', isCorrect: true, emoji: '🥫' },
      { name: 'White Butter & Cream', isCorrect: true, emoji: '🧈' },
      { name: 'Kasuri Methi', isCorrect: true, emoji: '🌿' },
      { name: 'Paneer Cubes', isCorrect: true, emoji: '🧀' },
      // Distractors
      { name: 'Wasabi Paste', isCorrect: false, emoji: '🥬', distractorReason: 'Fiery Japanese horseradish clashes with warm creamy makhani!' },
      { name: 'Anchovy Paste', isCorrect: false, emoji: '🐟', distractorReason: 'Definitely not vegetarian!' }
    ],
    scienceNote: 'Cashews contain natural starch and fatty acids that act as a plant-based emulsifier, preventing the tomato acids from curdling the dairy cream!'
  },
  {
    id: 'naan-pizza',
    name: 'Charred Naan Pizza (Naanza)',
    originalName: 'Naan Pizza / Naanza',
    origin: 'Ital-Indian',
    pronunciationIPA: '/nɑːn ˈpiːt.sə/ - /nɑːn.zɑː/',
    phonetic: 'nahn peet-suh / nahn-zah',
    syllables: ['nahn', 'ZAH'],
    audioText: 'Naanza',
    description: 'A blistered tandoori garlic naan turns into an artisan pizza base, crowned with spicy tikka sauce, diced veggies, paneer, and bubbly mozzarella.',
    availability: 'High',
    availabilityClass: 'high',
    metros: ['Nationwide', 'Pizzerias, gastro-cafes, food stalls'],
    cultureStory: 'A culinary match made in heaven: both tandoors and wood-fired pizza ovens cook at 450°C, producing pillowy bread with blistered air pockets.',
    originalIngredients: ['Tandoori naan base', 'Mozzarella cheese', 'Spiced tomato sauce', 'Onion & capsicum', 'Paneer or corn', 'Oregano'],
    indianSubstitutes: [
      { original: 'Pizza dough', substitute: 'Freshly baked Garlic-Butter Tandoori Naan or Stuffed Kulcha', why: 'Saves hours of dough proofing while providing unbeatable smoky blistered flavor' },
      { original: 'Pizza herb seasoning', substitute: 'Dry roasted oregano + crushed kasuri methi & chili flakes', why: 'Gives the distinctive Indo-Italian aroma' }
    ],
    recipeSteps: [
      { step: 1, title: 'Crisp the Naan Base', text: 'Pre-bake the naan in a tawa or hot oven for 2 minutes so the crust stays crunchy under toppings.', kidSafe: false },
      { step: 2, title: 'Spread Spiced Marinara', text: 'Slather a blend of Italian marinara and Punjabi tikka masala sauce edge to edge.', kidSafe: true },
      { step: 3, title: 'Decorate with Veggie Confetti', text: 'Scatter capsicum strips, red onions, sweet corn kernels, and paneer cubes.', kidSafe: true },
      { step: 4, title: 'Bake to Molten Perfection', text: 'Bake at 220°C for 7 minutes until the mozzarella bubbles with golden spots.', kidSafe: false }
    ],
    pantryItems: [
      { name: 'Garlic Butter Naan', isCorrect: true, emoji: '🫓' },
      { name: 'Spicy Tikka Marinara', isCorrect: true, emoji: '🍅' },
      { name: 'Mozzarella Cheese', isCorrect: true, emoji: '🧀' },
      { name: 'Crisp Bell Peppers & Corn', isCorrect: true, emoji: '🌽' },
      { name: 'Kasuri Methi & Oregano', isCorrect: true, emoji: '🌿' },
      // Distractors
      { name: 'Marshmallows', isCorrect: false, emoji: '🍬', distractorReason: 'Sweet s’mores do not belong on a spicy savory Naanza!' },
      { name: 'Gelatin Powder', isCorrect: false, emoji: '🍮', distractorReason: 'Not food for pizza and definitely not vegetarian!' }
    ],
    scienceNote: 'High heat triggers rapid carbon dioxide expansion inside the naan pockets, lifting the crust while the mozzarella forms a protective vapor barrier that keeps the dough crispy!'
  },
  {
    id: 'gulab-jamun-cheesecake',
    name: 'Eggless Gulab Jamun Cheesecake',
    originalName: 'Gulab Jamun Cheesecake',
    origin: 'Indo-French',
    pronunciationIPA: '/ɡuːˈlɑːb ˈdʒɑː.mʊn ˈtʃiːz.keɪk/',
    phonetic: 'goo-lahb jah-moon cheez-kayk',
    syllables: ['goo', 'lahb', 'jah', 'moon', 'cheez', 'kayk'],
    audioText: 'Gulab Jamun Cheesecake',
    description: 'Silky cardamom and saffron-infused cream cheese custard layered over a crumbly biscuit crust, concealing soft baby gulab jamuns inside each slice.',
    availability: 'Moderate to High',
    availabilityClass: 'high',
    metros: ['Nationwide', 'Patisseries, wedding banquets, boutique cafes'],
    cultureStory: 'Invented by progressive Indian pastry chefs wanting to reinvent festive mithai for modern global dessert lovers.',
    originalIngredients: ['Cream cheese', 'Graham cracker crust', 'Gulab jamun balls', 'Cardamom', 'Saffron', 'Pistachios'],
    indianSubstitutes: [
      { original: 'Graham crackers', substitute: 'Nutri-Choice Digestive Biscuits or Marie Gold + melted Amul butter', why: 'Provides the iconic nutty, toasted crunch base' },
      { original: 'Sour cream / eggs in custard', substitute: 'Hung Greek yogurt + condensed milk + cornstarch', why: 'Creates a rich, set, eggless cheesecake custard with clean dairy tang' },
      { original: 'Vanilla extract', substitute: 'Crushed green cardamom seeds, saffron strands, and rose water', why: 'Authentic royal Shahi Indian aromatics' }
    ],
    recipeSteps: [
      { step: 1, title: 'Crush the Crust', text: 'Crush digestive biscuits with a rolling pin and stir in melted butter; press firmly into a springform pan.', kidSafe: true },
      { step: 2, title: 'Whip Eggless Custard', text: 'Whisk cream cheese, hung curd, condensed milk, saffron-infused milk, and cardamom powder.', kidSafe: true },
      { step: 3, title: 'The Jamun Treasure', text: 'Drain syrup from baby gulab jamuns and nestle them evenly across the biscuit base.', kidSafe: true },
      { step: 4, title: 'Pour & Chill', text: 'Pour the golden custard over the jamuns; chill overnight or bake gently in a water bath.', kidSafe: false }
    ],
    pantryItems: [
      { name: 'Digestive Biscuits & Butter', isCorrect: true, emoji: '🍪' },
      { name: 'Cream Cheese & Hung Curd', isCorrect: true, emoji: '🥣' },
      { name: 'Baby Gulab Jamuns', isCorrect: true, emoji: '🟤' },
      { name: 'Saffron & Green Cardamom', isCorrect: true, emoji: '🌺' },
      { name: 'Slivered Pistachios', isCorrect: true, emoji: '🥜' },
      // Distractors
      { name: 'Wasabi Peas', isCorrect: false, emoji: '🟢', distractorReason: 'Spicy wasabi ruins a delicate saffron dessert!' },
      { name: 'Beef Gelatin', isCorrect: false, emoji: '🥩', distractorReason: 'Non-vegetarian! We use natural cornstarch or agar-agar.' }
    ],
    scienceNote: 'The sugar syrup in gulab jamun has high osmotic pressure; soaking or draining properly prevents the jamun from leaking excess water into the cheesecake cream, keeping the custard silky!'
  },
  {
    id: 'curry-ramen',
    name: 'Spiced Veggie Curry Ramen',
    originalName: 'Curry Ramen',
    origin: 'Indo-Japanese',
    pronunciationIPA: '/ˈkʌr.i ˈrɑː.mən/',
    phonetic: 'kuh-ree RAH-men',
    syllables: ['kuh', 'ree', 'RAH', 'men'],
    audioText: 'Curry Ramen',
    description: 'Springy alkaline wheat noodles immersed in a golden coconut-curry dashi broth, topped with charred bok choy, crispy spiced tofu, and sweet corn.',
    availability: 'Emerging / Niche',
    availabilityClass: 'niche',
    metros: ['Delhi-NCR', 'Mumbai', 'Bengaluru'],
    cultureStory: 'A collision of Hokkaido Japanese winter ramen with coastal South Indian curry spices and coconut milk.',
    originalIngredients: ['Ramen noodles', 'Curry paste', 'Kombu dashi', 'Pork/Chicken broth', 'Chashu'],
    indianSubstitutes: [
      { original: 'Meat broth', substitute: 'Kombu + roasted onion, garlic & shiitake vegetable broth', why: 'Produces rich savory umami without animal products' },
      { original: 'Chashu meat', substitute: 'Soy-glazed crispy paneer or charred smoked tofu slices', why: 'Tender interior with deeply caramelized exterior' },
      { original: 'Japanese curry roux', substitute: 'Turmeric, coriander, cumin, ginger paste, and coconut milk reduction', why: 'Warmer, fragrant, and familiar to Indian palates' }
    ],
    recipeSteps: [
      { step: 1, title: 'Simmer Umami Broth', text: 'Boil vegetable stock with charred onions, ginger, turmeric, cumin, and coconut milk for 20 minutes.', kidSafe: false },
      { step: 2, title: 'Cook Alkaline Noodles', text: 'Boil ramen noodles for 2.5 minutes until springy; drain and rinse with cold water.', kidSafe: false },
      { step: 3, title: 'Sear Tofu Topping', text: 'Pan-sear pressed tofu with a dash of soy sauce and tandoori chili crisp until crisp.', kidSafe: false },
      { step: 4, title: 'Assemble the Ramen Bowl', text: 'Fold noodles in deep bowl, pour steaming curry broth, and arrange tofu, corn, and nori.', kidSafe: true }
    ],
    pantryItems: [
      { name: 'Ramen Wheat Noodles', isCorrect: true, emoji: '🍜' },
      { name: 'Coconut-Curry Umami Broth', isCorrect: true, emoji: '🥥' },
      { name: 'Crispy Seared Tofu / Paneer', isCorrect: true, emoji: '🧈' },
      { name: 'Sweet Corn & Bok Choy', isCorrect: true, emoji: '🥬' },
      { name: 'Tandoori Chili Crisp', isCorrect: true, emoji: '🌶️' },
      // Distractors
      { name: 'Fish Stock Powder', isCorrect: false, emoji: '🐟', distractorReason: 'Contains non-veg fish extracts! We use shiitake kombu stock.' },
      { name: 'Maple Syrup', isCorrect: false, emoji: '🍁', distractorReason: 'Too sugary for a savory Japanese-Indian curry ramen!' }
    ],
    scienceNote: 'Ramen noodles contain kansui (alkaline salts: sodium carbonate) which raises pH, giving noodles their yellow hue, firm chew, and resistance to getting soggy in hot broth!'
  }
];

const CULINARY_SCIENCE_TOPICS = [
  {
    id: 'acid-curing',
    title: 'Citrus Acid Denaturation',
    shortName: 'Acid Curing',
    icon: '🍋',
    dish: 'Nikkei Mushroom Ceviche',
    color: '#E05A47',
    summary: 'How citrus juice "cooks" ingredients without fire!',
    explanation: 'Lime juice has a very low pH (~2.2). When mixed with proteins (or mushrooms), the strong hydrogen ions unravel and restructure delicate protein bonds (denaturation). In mushrooms, it softens rigid chitin cell walls while keeping the texture juicy and firm, absorbing maximum umami flavor!',
    funFact: 'In Peru, the citrus-spice marinade is nicknamed "Leche de Tigre" (Tiger’s Milk) because it was believed to give you the fierce energy of a tiger!',
    question: {
      text: 'Why does citrus juice change the texture of foods in ceviche without using an oven or fire?',
      options: [
        'High heat from friction when stirring',
        'Acid unravels protein structures (denaturation)',
        'Sugar caramelizes at room temperature',
        'Salt absorbs all the liquid instantly'
      ],
      correctIndex: 1,
      explanation: 'Citric acid lowers the pH, causing proteins to denature and firm up just like heating does!'
    }
  },
  {
    id: 'maillard-reaction',
    title: 'The Maillard Reaction',
    shortName: 'Maillard Browning',
    icon: '🔥',
    dish: 'Charred Naan Pizza & Tikka Tacos',
    color: '#D97706',
    summary: 'The chemical secret behind golden tandoori crusts!',
    explanation: 'When foods reach temperatures above 140°C (284°F), reducing sugars react with amino acids in proteins. This reaction creates hundreds of new flavor compounds called melanoidins, giving roasted naan, charred paneer, and toasted crusts their irresistible smoky, nutty aroma.',
    funFact: 'Louis-Camille Maillard discovered this reaction in 1912 while trying to synthesize biological proteins, never realizing it would explain why toast smells heavenly!',
    question: {
      text: 'What minimum temperature is typically required for the flavorful Maillard reaction to take place?',
      options: ['Around 50°C', 'Around 100°C', 'Around 140°C (284°F)', 'Over 500°C'],
      correctIndex: 2,
      explanation: 'The Maillard reaction begins rapidly around 140°C–165°C when water has mostly evaporated from the food’s surface!'
    }
  },
  {
    id: 'emulsification',
    title: 'Molecular Emulsification',
    shortName: 'Cream Emulsions',
    icon: '🥣',
    dish: 'Creamy Makhani Pasta & Tiradito',
    color: '#059669',
    summary: 'How oil, butter, and acidic tomatoes stay smoothly united!',
    explanation: 'Oil and water naturally repel each other. To make a velvety makhani sauce, we need emulsifiers: molecules with one water-loving end (hydrophilic) and one oil-loving end (lipophilic). Cashew nut paste contains natural plant lecithins that wrap around butter fats, preventing the sauce from splitting or curdling.',
    funFact: 'Traditional Indian halwais and modern chefs both grind cashews and cream to create micro-droplets that bounce light, giving makhani sauce its glowing orange sheen!',
    question: {
      text: 'What ingredient in authentic Makhani gravy acts as a natural emulsifier to stop cream from splitting?',
      options: ['Ground cashew nut paste', 'White vinegar', 'Pure water', 'Raw whole cumin seeds'],
      correctIndex: 0,
      explanation: 'Cashews provide natural proteins, fats, and lecithins that form a bridge between water-based tomato puree and fatty dairy butter!'
    }
  },
  {
    id: 'osmosis-mithai',
    title: 'Osmosis & Sugar Gradients',
    shortName: 'Osmosis in Desserts',
    icon: '🍯',
    dish: 'Gulab Jamun Cheesecake',
    color: '#8B5CF6',
    summary: 'Why gulab jamun syrup must be balanced inside cheesecake custard!',
    explanation: 'Osmosis is the movement of water from an area of low solute concentration to high solute concentration across a semi-permeable boundary. If gulab jamuns retain too much thin syrup, water leaks into the cheesecake cream, making it soggy. Draining them creates an equilibrium where moisture stays locked inside.',
    funFact: 'Gulab Jamuns are deep fried at low temperatures (150°C) so steam escapes gradually, leaving tiny sponge pores ready to soak up cardamom sugar syrup!',
    question: {
      text: 'What would happen if you put soaking-wet gulab jamuns directly into cheesecake custard without draining?',
      options: [
        'Water moves out by osmosis, making the custard runny',
        'The cheesecake crust turns into rock candy',
        'The cream cheese curdles into butter immediately',
        'Nothing happens at all'
      ],
      correctIndex: 0,
      explanation: 'Excess free water dilutes the delicate eggless custard matrix, preventing a firm, clean cheesecake slice!'
    }
  },
  {
    id: 'alkaline-noodles',
    title: 'Alkaline Starch Chemistry',
    shortName: 'Alkaline Noodles',
    icon: '🍜',
    dish: 'Spiced Veggie Curry Ramen',
    color: '#2563EB',
    summary: 'Why ramen noodles stay chewy in steaming hot curry broth!',
    explanation: 'Regular pasta gets mushy if kept in hot soup. Ramen noodles are made with kansui (alkaline mineral water containing potassium and sodium carbonates). The alkaline pH (around 9.0) changes the gluten protein network, making it tighter, springier, and resistant to water penetration, while turning the dough vibrant yellow.',
    funFact: 'Legend says Mongolian well water was naturally alkaline from mineral springs, and bakers discovered dough kneaded with this water made extraordinary noodles!',
    question: {
      text: 'What makes ramen noodles stay springy and chewy inside hot broth unlike normal pasta?',
      options: [
        'They are coated in candle wax',
        'Kansui (alkaline salts) strengthens the gluten structure',
        'They are deep-fried three times',
        'They are made without any flour'
      ],
      correctIndex: 1,
      explanation: 'Alkaline kansui elevates the dough pH, which strengthens gluten bonds and imparts the distinct bouncy ramen chew!'
    }
  },
  {
    id: 'spice-volatiles',
    title: 'Fat-Soluble Spice Volatiles',
    shortName: 'Spice Chemistry',
    icon: '🌶️',
    dish: 'Tandoori Tikka Tacos & Quesadillas',
    color: '#DC2626',
    summary: 'Why tempering spices in hot mustard oil or ghee unlocks explosive flavor!',
    explanation: 'Essential flavor compounds like capsaicin in chilies, curcumin in turmeric, and eugenol in cloves are hydrophobic (fat-soluble). When bloomed in hot oil (tadka) or yogurt marinades, the warm lipids dissolve these molecules and coat your tongue evenly, prolonging the taste experience.',
    funFact: 'Drinking water won’t cool down chili heat because capsaicin is fat-soluble! Drinking whole milk, lassi, or hung curd instantly binds to capsaicin and washes it away.',
    question: {
      text: 'Why are Indian whole spices first bloomed in hot oil or ghee before adding other ingredients?',
      options: [
        'To burn off the calories',
        'Flavor compounds are fat-soluble and dissolve into the oil',
        'To make the pan colder',
        'To turn the spices into sugar'
      ],
      correctIndex: 1,
      explanation: 'Key aromatic molecules in spices dissolve in warm fats, spreading their fragrance and flavor throughout the entire dish!'
    }
  }
];

const TRIVIA_QUESTIONS = [
  {
    id: 'q1',
    dishId: 'nikkei-ceviche',
    dishName: 'Nikkei Cuisine',
    question: 'Nikkei cuisine is a world-famous culinary fusion between which two coastal cultures?',
    options: [
      'Japan & Peru',
      'Italy & Mexico',
      'India & Thailand',
      'Spain & Vietnam'
    ],
    correctIndex: 0,
    parentHint: 'Think about Tokyo sushi masters meeting Lima fishermen in South America!',
    explanation: 'Nikkei was pioneered when Japanese immigrants moved to Peru in the late 19th century, blending sashimi techniques with Peruvian citrus and chilies.',
    badge: '🎌🇵🇪 Nikkei Explorer'
  },
  {
    id: 'q2',
    dishId: 'nikkei-ceviche',
    dishName: 'Nikkei Mushroom Ceviche',
    question: 'When replicating Nikkei Ceviche with vegetarian ingredients in an Indian home kitchen, what makes the best plant-based substitute for raw fish?',
    options: [
      'Mashed boiled potatoes',
      'King Oyster Mushrooms or Tender Hearts of Palm',
      'Raw chopped cabbage',
      'Crushed cornflakes'
    ],
    correctIndex: 1,
    parentHint: 'Look for something with a dense, bouncy texture that absorbs tangy lime marinade without disintegrating!',
    explanation: 'King oyster mushroom stems and hearts of palm possess a tender, fibrous chew that absorbs citrus leche de tigre like fine sashimi.',
    badge: '🍄 Shroom Alchemist'
  },
  {
    id: 'q3',
    dishId: 'tofu-tiradito',
    dishName: 'Tiradito vs Ceviche',
    question: 'How is a Peruvian Tiradito prepared differently from a classic Ceviche?',
    options: [
      'Tiradito is deep-fried in boiling ghee for 10 minutes',
      'Tiradito is sliced into delicate ribbons and sauced immediately before serving without raw onions',
      'Tiradito is always served frozen like ice cream',
      'Tiradito contains no citrus juice whatsoever'
    ],
    correctIndex: 1,
    parentHint: 'Think of Japanese sashimi knife cuts: thin carpaccio strips drizzled right at the dining table!',
    explanation: 'Unlike ceviche (where ingredients soak in citrus for several minutes with onions), tiradito is thinly sliced like sashimi and lightly dressed right before eating.',
    badge: '🔪 Sashimi Maestro'
  },
  {
    id: 'q4',
    dishId: 'paneer-tacos',
    dishName: 'Paneer Tikka Tacos',
    question: 'Which Indian flatbread made from coarse corn flour shares the exact heritage and texture of Mexican corn tortillas?',
    options: [
      'Bhatura',
      'Makki di Roti',
      'Rumali Roti',
      'Lachha Paratha'
    ],
    correctIndex: 1,
    parentHint: 'A winter favorite in Punjab, famously paired with Sarson da Saag!',
    explanation: 'Makki di Roti is kneaded from stone-ground cornmeal (maize), virtually identical to Mexican masa harina used for corn tortillas!',
    badge: '🌽 Maize Master'
  },
  {
    id: 'q5',
    dishId: 'makhani-pasta',
    dishName: 'Makhani Penne Pasta',
    question: 'What aromatic dried herb is hand-rubbed over Makhani pasta to give it that unmistakable North Indian restaurant scent?',
    options: [
      'Dried Oregano',
      'Kasuri Methi (Fenugreek leaves)',
      'Dried Rosemary',
      'Mint flakes'
    ],
    correctIndex: 1,
    parentHint: 'It has a slightly bitter, sweet maple-like fragrance and is crushed between your palms!',
    explanation: 'Kasuri Methi releases volatile aromatic oils rich in sotolon when crushed between warm palms, defining authentic makhani dishes.',
    badge: '🌿 Herb Connoisseur'
  },
  {
    id: 'q6',
    dishId: 'naan-pizza',
    dishName: 'Naanza (Naan Pizza)',
    question: 'Why are authentic clay tandoors and Italian wood-fired pizza ovens considered culinary cousins?',
    options: [
      'They were both invented in Antarctica',
      'Both reach scorching heat (400°C–480°C) that flash-bakes dough with blistered crusts in minutes',
      'Both require electric micro-heaters',
      'Both can only cook boiled vegetables'
    ],
    correctIndex: 1,
    parentHint: 'Both rely on extreme radiant heat and refractory clay or stone floors!',
    explanation: 'Both traditional tandoors and wood-fired pizza ovens operate above 400°C, producing intense heat that toasts sugars and blisters dough in under 3 minutes.',
    badge: '🔥 Tandoor Wizard'
  },
  {
    id: 'q7',
    dishId: 'gulab-jamun-cheesecake',
    dishName: 'Gulab Jamun Cheesecake',
    question: 'What classic Indian biscuit is most frequently crushed with butter to create an eggless cheesecake crust across bakeries in India?',
    options: [
      'Bourbon Cream',
      'Digestive Biscuits or Marie Gold',
      'Chili Krackjack',
      'Sweet Coconut Cookies'
    ],
    correctIndex: 1,
    parentHint: 'A tea-time pantry staple with a toasted wheat flavor and low sugar content!',
    explanation: 'Digestive and Marie biscuits provide a mild, whole-wheat crumb that balances the sweetness of condensed milk and gulab jamun.',
    badge: '🍪 Pastry Virtuoso'
  },
  {
    id: 'q8',
    dishId: 'curry-ramen',
    dishName: 'Spiced Veggie Curry Ramen',
    question: 'What special alkaline mineral water ingredient gives Japanese ramen noodles their yellow color and springy, bouncy chew?',
    options: [
      'Sparkling soda water',
      'Kansui (alkaline salt solution)',
      'Sugarcane juice',
      'Rosewater'
    ],
    correctIndex: 1,
    parentHint: 'It sounds like a Japanese word and contains potassium/sodium carbonate!',
    explanation: 'Kansui is an alkaline mineral solution that alters wheat gluten, giving ramen its signature yellow tint, elasticity, and chewiness.',
    badge: '🍜 Noodle Artisan'
  },
  {
    id: 'q9',
    dishId: 'nikkei-ceviche',
    dishName: 'Indian Availability Matrix',
    question: 'According to culinary food guides, which category describes the availability of Japanese-Peruvian Nikkei cuisine in India?',
    options: [
      'Found at every roadside chai stall in small villages',
      'Emerging / Niche (luxury dining & fine lounges in Mumbai, Delhi-NCR, Goa, Bengaluru)',
      'Available in every school cafeteria',
      'Completely banned and impossible to find'
    ],
    correctIndex: 1,
    parentHint: 'It is a recent trend seen mostly in upscale metropolitan restaurants and boutique hotels!',
    explanation: 'Nikkei is an emerging luxury trend in India, featured in high-end venues like Koishii at St. Regis Mumbai and metro culinary hubs.',
    badge: '🗺️ Gastro Cartographer'
  },
  {
    id: 'q10',
    dishId: 'paneer-tacos',
    dishName: 'Food Science & Heat',
    question: 'Why does paneer retain its shape when grilled on a tawa for tacos, while mozzarella cheese melts into a puddle?',
    options: [
      'Paneer is made from acid-coagulated protein that cannot melt, while mozzarella has an elastic rennet-set casein network',
      'Paneer is frozen with liquid nitrogen',
      'Mozzarella is made entirely of water',
      'Paneer contains no milk proteins'
    ],
    correctIndex: 0,
    parentHint: 'Remember how paneer is made at home with lemon juice vs fermented aged cheeses!',
    explanation: 'Acid-set cheeses like paneer and queso blanco have tightly clustered proteins that don’t melt when heated, making them ideal for searing and grilling!',
    badge: '🧀 Protein Chemist'
  }
];

const INDIA_METROS_DATA = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'India’s Capital of Experiential Fusion Dining',
    x: 194,
    y: 412,
    famousHubs: 'Bandra, Lower Parel, Colaba, BKC',
    topMarket: 'Crawford Market (exotic herbs, yuzu, imported sauces)',
    dishesAvailable: [
      { name: 'Nikkei Mushroom Ceviche & Tiradito', level: 'Emerging / Niche (Koishii at St. Regis, Dashanzi)' },
      { name: 'Butter Paneer & Tandoori Tacos', level: 'High (Modern gastropubs across Bandra & Lower Parel)' },
      { name: 'Makhani Penne & Naanza', level: 'High (Universal cafe favorite across city)' },
      { name: 'Gulab Jamun Cheesecake', level: 'High (Boutique patisseries, Theobroma, weddings)' },
      { name: 'Spiced Veggie Curry Ramen', level: 'Emerging / Niche (Koko, Izumi, Mizu)' }
    ],
    questTip: 'Head to Mumbai’s Crawford Market to hunt for genuine Bhavnagri peppers, Peruvian yellow paste alternatives, and fresh dashi kombu!'
  },
  {
    id: 'delhi-ncr',
    name: 'Delhi-NCR',
    state: 'National Capital Region',
    tagline: 'The Birthplace of Butter Gravy & Tandoor Innovation',
    x: 236,
    y: 195,
    famousHubs: 'Connaught Place, CyberHub Gurgaon, GK-2, Khan Market',
    topMarket: 'INA Market (Delhi’s premier international food bazaar)',
    dishesAvailable: [
      { name: 'Butter Paneer Tacos & Quesadillas', level: 'High (Every modern brewery and food truck)' },
      { name: 'Makhani Pasta', level: 'High (Origin hub of makhani tomato-cashew sauces)' },
      { name: 'Naanza (Naan Pizza)', level: 'High (Tandoor ovens meeting woodfire pizza menus)' },
      { name: 'Gulab Jamun Cheesecake', level: 'High (Modern mithai boutiques and festive banquets)' },
      { name: 'Nikkei Ceviche & Ramen', level: 'Emerging / Niche (Fine dining hubs in Chanakyapuri & Aerocity)' }
    ],
    questTip: 'INA Market in South Delhi stocks fresh imported mushrooms, lotus roots, dried nori, and authentic masa harina!'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    tagline: 'Microbrewery Innovations & Global Comfort Fusions',
    x: 262,
    y: 552,
    famousHubs: 'Indiranagar, Koramangala, Lavelle Road, Whitefield',
    topMarket: 'Russell Market (Shivajinagar) & gourmet organic marts',
    dishesAvailable: [
      { name: 'Curry Ramen & Tofu Tiradito', level: 'Moderate (Specialty Asian restaurants and brewpubs)' },
      { name: 'Tandoori Paneer Tacos & Sliders', level: 'High (Craft breweries in Indiranagar & Koramangala)' },
      { name: 'Gulab Jamun Cheesecake & Tres Leches', level: 'High (Artisanal bakeries & dessert lounges)' },
      { name: 'Makhani Fusilli & Naanza', level: 'High (Urban bistros and casual tech dining)' }
    ],
    questTip: 'Bengaluru’s Russell market and gourmet stores offer fresh local microgreens, organic tofu, and king oyster mushrooms from Ooty!'
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    tagline: 'Coastal Haven of Bohemian & Global Flavors',
    x: 216,
    y: 492,
    famousHubs: 'Assagao, Anjuna, Panaji, Morjim',
    topMarket: 'Mapusa Friday Market (sun-dried chilies, local vinegars)',
    dishesAvailable: [
      { name: 'Nikkei Ceviche & Plant Tiradito', level: 'Moderate (Boutique beach clubs & garden bistros in Assagao)' },
      { name: 'Indo-Mexican Quesadillas', level: 'High (Shacks and bohemian cafes)' },
      { name: 'Gulab Jamun Cheesecake', level: 'Moderate to High (Artisanal bakeries)' }
    ],
    questTip: 'Goa’s Portuguese heritage gives local markets incredible artisanal breads (Poi), toddy vinegar, and smoked spices!'
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    tagline: 'Youthful Gastronomy & Student-Led Fusion Cafes',
    x: 224,
    y: 428,
    famousHubs: 'Koregaon Park, FC Road, Baner, Viman Nagar',
    topMarket: 'Mandai & Camp Wholesale Bazaar',
    dishesAvailable: [
      { name: 'Paneer Tikka Quesadilla & Tacos', level: 'High (Rooftop lounges and campus bistros)' },
      { name: 'Makhani Pasta & Naanza', level: 'High (Bustling cafes in Koregaon Park & Baner)' },
      { name: 'Gulab Jamun Cheesecake', level: 'Moderate (Specialty bakeries and dessert bars)' }
    ],
    questTip: 'Visit Pune’s Koregaon Park lanes to sample trendy Indo-Italian Naanza creations!'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tagline: 'Royal Nizami Spices Meet Global Street Food',
    x: 292,
    y: 450,
    famousHubs: 'Jubilee Hills, Banjara Hills, Gachibowli, Hitec City',
    topMarket: 'Begum Bazaar & Moazzam Jahi Market',
    dishesAvailable: [
      { name: 'Spicy Paneer Tikka Tacos', level: 'High (Gastropubs in Jubilee Hills)' },
      { name: 'Naanza & Makhani Pasta', level: 'High (Casual dining in Hitec City & Banjara Hills)' },
      { name: 'Gulab Jamun & Shahi Tukda Cheesecake', level: 'High (Festive confectioneries and luxury dining)' }
    ],
    questTip: 'Hyderabad’s Begum Bazaar is a treasure trove for whole green cardamom, saffron, and stone flowers (kalpasi)!'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    tagline: 'Colonial Confectionery & Sweet-Savory Umami Alchemy',
    x: 416,
    y: 338,
    famousHubs: 'Park Street, Salt Lake, Ballygunge, New Market',
    topMarket: 'New Market (Sir Stuart Hogg Market) & Gariahat',
    dishesAvailable: [
      { name: 'Gulab Jamun & Sandesh Cheesecake', level: 'High (Artisanal patisseries on Park Street)' },
      { name: 'Makhani Penne & Rolls', level: 'High (Heritage cafes & fusion roll kiosks)' },
      { name: 'Spiced Veggie Curry Ramen', level: 'Emerging / Niche (Southern Avenue Asian bistros)' },
      { name: 'Nikkei Tofu Tiradito', level: 'Emerging (Modern fusion dining in Salt Lake)' }
    ],
    questTip: 'New Market in Central Kolkata is world-famous for Bandel cheese, nolen gur (date palm jaggery), and freshly ground mustard kashundi!'
  }
];

const STUDENT_RANKS = [
  { level: 1, title: 'Junior Taster', minXP: 0, maxXP: 300, badge: '🌱', perks: 'Mastering kitchen knife safety and basic spices.' },
  { level: 2, title: 'Spice Explorer', minXP: 301, maxXP: 800, badge: '🌶️', perks: 'Unlocked Indian bazaar spice substitution secrets.' },
  { level: 3, title: 'Flavour Alchemist', minXP: 801, maxXP: 99999, badge: '✨', perks: 'Mastered global fusion seasonings and balanced creations.' }
];

const PARENT_RANKS = [
  { level: 1, title: 'Sous-Chef Guide', minXP: 0, maxXP: 450, badge: '👨‍🍳', perks: 'Leading culinary adventures with safe technique.' },
  { level: 2, title: 'Recipe Master', minXP: 451, maxXP: 1200, badge: '🥘', perks: 'Mastering food science emulsions and acid curing.' },
  { level: 3, title: 'Executive Fusion Chef', minXP: 1201, maxXP: 99999, badge: '⭐', perks: 'Ultimate family fusion maestro! Zero culinary secrets left.' }
];

const CHEF_RANKS = STUDENT_RANKS; // Fallback alias


// ==========================================
// 2. WEB AUDIO API SYNTHESIZER
// ==========================================
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem('fusion_muted') === 'true';
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('fusion_muted', this.muted);
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }

  playTick() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.audioCtx.currentTime + 0.03);

    gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.03);
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    [523.25, 783.99].forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0.18, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.25);
    });
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(130, now + 0.22);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  playChime() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const notes = [587.33, 739.99, 880.00];
    notes.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0.15, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.4);
    });
  }

  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.12);

      gain.gain.setValueAtTime(0.2, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.45);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.45);
    });
  }

  playSizzle() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const bufferSize = Math.floor(this.audioCtx.sampleRate * 0.18);
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(3.0, now);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(now);
    noise.stop(now + 0.18);
  }

  playWhack() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(360, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.08);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }
}

const sound = new SoundEngine();

// ==========================================
// 3. CANVAS CONFETTI & TOAST ENGINE
// ==========================================
function launchConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
  let canvas = document.getElementById('fusion-confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'fusion-confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999999';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#E05A47', '#F59E0B', '#208759', '#6366F1', '#EC4899', '#3B82F6', '#FBBF24'];
  const particles = [];
  const count = 75;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 8;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let animationFrame;
  const gravity = 0.22;
  const friction = 0.98;

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += gravity;
      p.vx *= friction;
      p.rotation += p.vRotation;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    });

    if (alive > 0) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✨' : '💡'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// ==========================================
// 4. DATABASE LAYER & APPLICATION ARCHITECTURE
// ==========================================
const DB_CONFIG = {
  DB_NAME: 'FusionFoodDB',
  DB_VERSION: 1,
  STORE_PROFILES: 'profiles',
  STORE_LEADERBOARD: 'leaderboard',
  STORE_APP_STATE: 'app_state'
};

class FusionDatabase {
  constructor() {
    this.db = null;
    this.isReady = false;
    this.initPromise = this.open();
  }

  open() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB not supported, falling back to LocalStorage');
        this.isReady = true;
        resolve(null);
        return;
      }

      try {
        const request = window.indexedDB.open(DB_CONFIG.DB_NAME, DB_CONFIG.DB_VERSION);

        request.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(DB_CONFIG.STORE_PROFILES)) {
            db.createObjectStore(DB_CONFIG.STORE_PROFILES, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(DB_CONFIG.STORE_LEADERBOARD)) {
            const store = db.createObjectStore(DB_CONFIG.STORE_LEADERBOARD, { keyPath: 'id' });
            store.createIndex('xp', 'xp', { unique: false });
          }
          if (!db.objectStoreNames.contains(DB_CONFIG.STORE_APP_STATE)) {
            db.createObjectStore(DB_CONFIG.STORE_APP_STATE, { keyPath: 'key' });
          }
        };

        request.onsuccess = (e) => {
          this.db = e.target.result;
          this.isReady = true;
          resolve(this.db);
        };

        request.onerror = (e) => {
          console.warn('IndexedDB open error:', e);
          this.isReady = true;
          resolve(null);
        };
      } catch (err) {
        console.warn('IndexedDB exception:', err);
        this.isReady = true;
        resolve(null);
      }
    });
  }

  async set(storeName, item) {
    await this.initPromise;
    if (!this.db) return false;
    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        store.put(item);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  }

  async get(storeName, key) {
    await this.initPromise;
    if (!this.db) return null;
    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  async getAll(storeName) {
    await this.initPromise;
    if (!this.db) return [];
    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } catch (e) {
        resolve([]);
      }
    });
  }

  async clearAll() {
    await this.initPromise;
    if (!this.db) return false;
    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction([DB_CONFIG.STORE_PROFILES, DB_CONFIG.STORE_LEADERBOARD, DB_CONFIG.STORE_APP_STATE], 'readwrite');
        tx.objectStore(DB_CONFIG.STORE_PROFILES).clear();
        tx.objectStore(DB_CONFIG.STORE_LEADERBOARD).clear();
        tx.objectStore(DB_CONFIG.STORE_APP_STATE).clear();
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  }
}

const DEFAULT_STATE = {
  currentProfile: 'kid',
  currentTab: 'games', // 'games', 'kitchen', 'leaderboard'
  onboarded: false,
  hpMode: 'native', // 'native' or 'itch'
  leaderboardFilter: 'all', // 'all', 'hotPotato', 'buildDish', 'trivia'
  leaderboardScope: 'local', // 'local' (Family Roster) or 'global' (Global Hall of Fame)
  profiles: {
    kid: {
      name: 'Maya',
      role: 'student', // 'student' or 'parent'
      rankLevel: 1,
      avatar: '🎒',
      xp: 270,
      streak: 3,
      bests: { hotPotato: 10, trivia: 8, buildDish: 4, pronunciation: 5, scienceSpins: 6 },
      unlockedBadges: ['🌱 Junior Taster', '🍄 Shroom Alchemist', '🥘 Dish Master']
    },
    parent: {
      name: 'Chef Priya',
      role: 'parent',
      rankLevel: 1,
      avatar: '👨‍🍳',
      xp: 450,
      streak: 5,
      bests: { hotPotato: 20, trivia: 9, buildDish: 6, pronunciation: 7, scienceSpins: 8 },
      unlockedBadges: ['👨‍🍳 Sous-Chef Guide', '🔥 Tandoor Wizard', '🎌🇵🇪 Nikkei Explorer']
    }
  },
  gameToggles: {
    buildDish: true,
    pronunciation: true,
    trivia: true,
    hotPotato: true,
    spinScience: true
  },
  adminPin: 'careers2026',
  activeGameTab: 'buildDish',
  recipeFilter: 'all',
  recipeCompletedSteps: {},
  completedCityQuests: [],
  theme: 'light',
  onboarded: true
};


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
    controlsBar.innerHTML = `
      <button class="tandoor-heat-btn" data-heat="simmer">🔥 Gentle Simmer</button>
      <button class="tandoor-heat-btn active" data-heat="roast">⚡ Tandoori Roast</button>
      <button class="tandoor-heat-btn" data-heat="sear">💥 Inferno Sear</button>
    `;
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
    hud.innerHTML = `
      <span class="model-3d-badge" id="dish-3d-name-badge">🍄 ${initialIngredient}</span>
      <span class="model-3d-badge" style="color:var(--accent-green);background:rgba(6,78,59,0.7);">Pure Veg 3D</span>
    `;
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

// Test compilation and syntax of Fusion3DManager
class Fusion3DManager {
  constructor(app) {
    this.app = app;
    this.isThreeAvailable = typeof THREE !== 'undefined';
    this.activeScenes = {};
    this.activeLoops = {};
    this.resizeObservers = {};
    this.isPageVisible = typeof document !== 'undefined' ? !document.hidden : true;
    this.currentTandoorHeat = 'roast';
    this.moleculeSpaceFilling = false;
    this.currentTopic = null;

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        this.isPageVisible = !document.hidden;
        if (!this.isPageVisible) {
          this.pauseAllLoops();
        } else {
          this.resumeActiveTabLoops();
        }
      });
    }
  }

  isSupported() {
    return typeof THREE !== 'undefined' && typeof THREE.WebGLRenderer !== 'undefined';
  }

  clampDPR() {
    if (typeof window === 'undefined') return 1;
    return Math.min(window.devicePixelRatio || 1, 2);
  }

  createResizeObserver(container, camera, renderer, onResize) {
    if (typeof ResizeObserver === 'undefined') return null;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) continue;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
        if (onResize) onResize(width, height);
      }
    });
    ro.observe(container);
    return ro;
  }

  disposeScene(key) {
    if (this.activeLoops[key]) {
      cancelAnimationFrame(this.activeLoops[key]);
      delete this.activeLoops[key];
    }
    if (this.resizeObservers[key]) {
      this.resizeObservers[key].disconnect();
      delete this.resizeObservers[key];
    }
    const sceneObj = this.activeScenes[key];
    if (sceneObj) {
      if (sceneObj.renderer) {
        sceneObj.renderer.dispose();
        if (sceneObj.renderer.domElement && sceneObj.renderer.domElement.parentNode) {
          sceneObj.renderer.domElement.parentNode.removeChild(sceneObj.renderer.domElement);
        }
      }
      if (sceneObj.scene) {
        sceneObj.scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach(m => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        });
      }
      delete this.activeScenes[key];
    }
  }

  pauseAllLoops() {
    for (const key of Object.keys(this.activeLoops)) {
      cancelAnimationFrame(this.activeLoops[key]);
      this.activeLoops[key] = null;
    }
  }

  resumeActiveTabLoops() {
    if (!this.app) return;
    const currentTab = this.app.state ? this.app.state.currentTab : 'games';
    if (currentTab === 'kitchen' && this.activeScenes.tandoor) {
      this.startTandoorLoop();
    } else if (currentTab === 'games') {
      const activeGame = this.app.state ? this.app.state.activeGameTab : 'buildDish';
      if (activeGame === 'hotPotato' && this.activeScenes.hotPotato) {
        this.startHotPotatoLoop();
      } else if (activeGame === 'buildDish' && this.activeScenes.buildDish) {
        this.startBuildDishLoop();
      } else if (activeGame === 'spinScience' && this.activeScenes.science) {
        this.startScienceLoop();
      }
    }
  }

  onTabChanged(tabId) {
    if (tabId === 'kitchen') {
      const tandoorStage = document.getElementById('tandoor-3d-stage');
      if (tandoorStage && !this.activeScenes.tandoor) {
        this.initTandoor3D(tandoorStage);
      } else if (this.activeScenes.tandoor) {
        this.startTandoorLoop();
      }
      // Pause games
      if (this.activeLoops.hotPotato) { cancelAnimationFrame(this.activeLoops.hotPotato); this.activeLoops.hotPotato = null; }
      if (this.activeLoops.buildDish) { cancelAnimationFrame(this.activeLoops.buildDish); this.activeLoops.buildDish = null; }
      if (this.activeLoops.science) { cancelAnimationFrame(this.activeLoops.science); this.activeLoops.science = null; }
    } else if (tabId === 'games') {
      if (this.activeLoops.tandoor) { cancelAnimationFrame(this.activeLoops.tandoor); this.activeLoops.tandoor = null; }
      this.resumeActiveTabLoops();
    } else {
      this.pauseAllLoops();
    }
  }

  // --------------------------------------------------------
  // 1. HOT POTATO RUSH 3D ELEMENT
  // --------------------------------------------------------
  createDeformedPotatoMesh() {
    const geom = new THREE.DodecahedronGeometry(28, 2);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const sx = x * 1.32;
      const sy = y * 0.94;
      const sz = z * 0.90;
      const bump = Math.sin(x * 0.14 + 1.2) * Math.cos(y * 0.16 + 0.8) * Math.sin(z * 0.18) * 3.8;
      pos.setXYZ(i, sx + bump, sy + bump * 0.8, sz + bump * 0.7);
    }
    geom.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xD4A373),
      roughness: 0.78,
      metalness: 0.08,
      flatShading: false
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.castShadow = true;
    return mesh;
  }

  initHotPotato3D(container, potatoState) {
    if (!this.isSupported() || !container) return;
    this.disposeScene('hotPotato');

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    // Orthographic camera mapping 1-to-1 to 800x460 internal physics resolution
    const camera = new THREE.OrthographicCamera(0, 800, 0, 460, 0.1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(this.clampDPR());
    renderer.setSize(width, height);
    renderer.domElement.id = 'hp-3d-game-canvas';
    renderer.domElement.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2;';

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFF7ED, 1.2);
    dirLight.position.set(400, -200, 300);
    scene.add(dirLight);

    const potatoMesh = this.createDeformedPotatoMesh();
    potatoMesh.position.set(potatoState ? potatoState.x : 200, potatoState ? potatoState.y : 160, 0);
    scene.add(potatoMesh);

    // Orbiting golden roast sparkles
    const sparkleCount = 24;
    const sparkleGeom = new THREE.BufferGeometry();
    const sparklePos = new Float32Array(sparkleCount * 3);
    for (let i = 0; i < sparkleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const dist = 38 + Math.random() * 12;
      sparklePos[i * 3] = dist * Math.sin(phi) * Math.cos(theta);
      sparklePos[i * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta);
      sparklePos[i * 3 + 2] = dist * Math.cos(phi);
    }
    sparkleGeom.setAttribute('position', new THREE.BufferAttribute(sparklePos, 3));
    const sparkleMat = new THREE.PointsMaterial({
      color: 0xF59E0B,
      size: 4,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    });
    const sparkles = new THREE.Points(sparkleGeom, sparkleMat);
    potatoMesh.add(sparkles);

    const ro = this.createResizeObserver(container, camera, renderer);

    this.activeScenes.hotPotato = {
      scene,
      camera,
      renderer,
      potatoMesh,
      sparkles,
      container,
      potatoState: potatoState || { x: 200, y: 160, vx: 3, vy: 0, rotation: 0, cookLevel: 0 },
      rotX: 0,
      rotY: 0
    };
    this.resizeObservers.hotPotato = ro;

    container.appendChild(renderer.domElement);
    this.startHotPotatoLoop();
  }

  updateHotPotato3D(potatoState) {
    const sc = this.activeScenes.hotPotato;
    if (!sc) return;
    sc.potatoState = potatoState;
  }

  startHotPotatoLoop() {
    if (this.activeLoops.hotPotato) cancelAnimationFrame(this.activeLoops.hotPotato);

    const loop = () => {
      const sc = this.activeScenes.hotPotato;
      if (!sc) return;

      const p = sc.potatoState;
      if (p) {
        // Sync 3D potato coordinates to 2D physics
        sc.potatoMesh.position.x = p.x;
        sc.potatoMesh.position.y = p.y;

        // Dynamic 3D tumbling rotation matching physics velocity
        sc.rotX += (p.vx || 0) * 0.035;
        sc.rotY += 0.025;
        sc.potatoMesh.rotation.x = sc.rotX;
        sc.potatoMesh.rotation.y = sc.rotY;
        sc.potatoMesh.rotation.z = p.rotation || 0;

        // PBR Roasting State Shading
        const cook = p.cookLevel || 0;
        const mat = sc.potatoMesh.material;
        if (cook < 38) {
          // Raw russet state
          mat.color.setHex(0xD4A373);
          mat.roughness = 0.78;
          mat.emissive.setHex(0x000000);
          mat.emissiveIntensity = 0;
          sc.sparkles.material.opacity = 0;
        } else if (cook <= 85) {
          // Golden crispy state
          mat.color.setHex(0xF59E0B);
          mat.roughness = 0.52;
          mat.emissive.setHex(0xFF8800);
          mat.emissiveIntensity = 0.45;
          sc.sparkles.material.opacity = 0.85;
          sc.sparkles.rotation.y += 0.06;
          sc.sparkles.rotation.z += 0.04;
        } else {
          // Burnt charcoal state
          mat.color.setHex(0x2D1A10);
          mat.roughness = 0.95;
          mat.emissive.setHex(0x551100);
          mat.emissiveIntensity = 0.2;
          sc.sparkles.material.opacity = 0;
        }
      }

      sc.renderer.render(sc.scene, sc.camera);
      if (this.isPageVisible) {
        this.activeLoops.hotPotato = requestAnimationFrame(loop);
      }
    };
    this.activeLoops.hotPotato = requestAnimationFrame(loop);
  }

  // --------------------------------------------------------
  // 2. KITCHEN LAB GLOWING TANDOOR COALS 3D ELEMENT
  // --------------------------------------------------------
  initTandoor3D(container) {
    if (!this.isSupported() || !container) return;
    this.disposeScene('tandoor');

    container.innerHTML = '';
    const width = container.clientWidth || 900;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 3.8, 6.2);
    camera.lookAt(0, -0.6, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(this.clampDPR());
    renderer.setSize(width, height);

    // Ambient night kitchen lighting
    const ambientLight = new THREE.AmbientLight(0x181A24, 1.2);
    scene.add(ambientLight);

    // Warm flickering coal point light
    const pointLight = new THREE.PointLight(0xFF5500, 3.4, 14);
    pointLight.position.set(0, -0.2, 0);
    scene.add(pointLight);

    // Outer Terracotta Clay Pot Opening
    const clayGeom = new THREE.CylinderGeometry(3.6, 4.6, 2.4, 36, 1, true);
    const clayMat = new THREE.MeshStandardMaterial({
      color: 0x9A3412,
      roughness: 0.84,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const clayPot = new THREE.Mesh(clayGeom, clayMat);
    clayPot.position.y = -0.4;
    scene.add(clayPot);

    // Inner Coal Bed
    const baseGeom = new THREE.CylinderGeometry(4.4, 4.4, 0.4, 32);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x0C0606, roughness: 0.96 });
    const baseMesh = new THREE.Mesh(baseGeom, baseMat);
    baseMesh.position.y = -1.5;
    scene.add(baseMesh);

    // 36 Randomized Ember Rock Meshes
    const coals = [];
    for (let i = 0; i < 36; i++) {
      const radius = 0.32 + Math.random() * 0.38;
      const rockGeom = new THREE.DodecahedronGeometry(radius, 0);
      const pos = rockGeom.attributes.position;
      for (let p = 0; p < pos.count; p++) {
        pos.setXYZ(p,
          pos.getX(p) * (0.8 + Math.random() * 0.4),
          pos.getY(p) * (0.7 + Math.random() * 0.5),
          pos.getZ(p) * (0.8 + Math.random() * 0.4)
        );
      }
      rockGeom.computeVertexNormals();

      const rockMat = new THREE.MeshStandardMaterial({
        color: 0x140707,
        roughness: 0.88,
        metalness: 0.1,
        emissive: new THREE.Color(0xFF2A00),
        emissiveIntensity: 0.8 + Math.random() * 0.6
      });
      const rock = new THREE.Mesh(rockGeom, rockMat);
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random()) * 3.1;
      rock.position.set(Math.cos(angle) * dist, -1.25 + Math.random() * 0.3, Math.sin(angle) * dist);
      rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      rock.userData = {
        baseIntensity: rockMat.emissiveIntensity,
        phase: Math.random() * Math.PI * 2,
        speed: 1.8 + Math.random() * 2.2
      };
      coals.push(rock);
      scene.add(rock);
    }

    // Rising Ember Spark Particles
    const particleCount = 70;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 2.6;
      particlePositions[i * 3] = Math.cos(angle) * dist;
      particlePositions[i * 3 + 1] = -1.2 + Math.random() * 3.5;
      particlePositions[i * 3 + 2] = Math.sin(angle) * dist;

      particleVelocities.push({
        vy: 0.02 + Math.random() * 0.035,
        vx: (Math.random() - 0.5) * 0.01,
        vz: (Math.random() - 0.5) * 0.01,
        maxHeight: 2.2 + Math.random() * 1.5
      });
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xFFAA22,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const sparkPoints = new THREE.Points(particleGeom, particleMat);
    scene.add(sparkPoints);

    // Interactive Heat Controls Bar Overlay
    const controlsBar = document.createElement('div');
    controlsBar.className = 'tandoor-heat-controls';
    controlsBar.innerHTML = `
      <button class="tandoor-heat-btn" data-heat="simmer">♨️ Gentle Simmer</button>
      <button class="tandoor-heat-btn active" data-heat="roast">🔥 Tandoori Roast</button>
      <button class="tandoor-heat-btn" data-heat="sear">⚡ Inferno Sear</button>
    `;
    container.appendChild(controlsBar);

    controlsBar.querySelectorAll('.tandoor-heat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        controlsBar.querySelectorAll('.tandoor-heat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.setTandoorHeatLevel(btn.getAttribute('data-heat'));
      });
    });

    // Pointer Drag to orbit
    let isDragging = false;
    let prevMouseX = 0;
    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
    });
    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      prevMouseX = e.clientX;
      clayPot.rotation.y += deltaX * 0.01;
      baseMesh.rotation.y += deltaX * 0.01;
      coals.forEach(c => c.rotation.y += deltaX * 0.01);
    });
    window.addEventListener('pointerup', () => { isDragging = false; });

    const ro = this.createResizeObserver(container, camera, renderer);

    this.activeScenes.tandoor = {
      scene,
      camera,
      renderer,
      pointLight,
      coals,
      sparkPoints,
      particleVelocities,
      particlePositions,
      container,
      clayPot,
      baseMesh
    };
    this.resizeObservers.tandoor = ro;

    container.appendChild(renderer.domElement);
    this.startTandoorLoop();
  }

  setTandoorHeatLevel(level) {
    this.currentTandoorHeat = level;
    const sc = this.activeScenes.tandoor;
    if (!sc) return;

    let emissiveHex = 0xFF4500;
    let lightIntensity = 3.4;
    if (level === 'simmer') {
      emissiveHex = 0xEA580C;
      lightIntensity = 1.9;
    } else if (level === 'sear') {
      emissiveHex = 0xF59E0B;
      lightIntensity = 5.2;
    }
    sc.pointLight.color.setHex(emissiveHex);
    sc.pointLight.intensity = lightIntensity;
    sc.coals.forEach(c => {
      c.material.emissive.setHex(emissiveHex);
    });
  }

  startTandoorLoop() {
    if (this.activeLoops.tandoor) cancelAnimationFrame(this.activeLoops.tandoor);

    let t = 0;
    const loop = () => {
      const sc = this.activeScenes.tandoor;
      if (!sc) return;

      t += 0.025;
      const speedMult = this.currentTandoorHeat === 'simmer' ? 0.6 : this.currentTandoorHeat === 'sear' ? 1.8 : 1.0;

      // 1. Flickering point light jitter
      const flicker = Math.sin(t * 14 * speedMult) * 0.35 + (Math.random() - 0.5) * 0.4;
      const baseIntensity = this.currentTandoorHeat === 'simmer' ? 1.9 : this.currentTandoorHeat === 'sear' ? 5.2 : 3.4;
      sc.pointLight.intensity = Math.max(0.5, baseIntensity + flicker);

      // 2. Pulse coals emissive glow
      sc.coals.forEach(c => {
        const p = c.userData;
        const pulse = Math.sin(t * p.speed * speedMult + p.phase) * 0.3 + 0.8;
        c.material.emissiveIntensity = p.baseIntensity * pulse;
      });

      // 3. Drift spark particles upward
      const positions = sc.sparkPoints.geometry.attributes.position.array;
      for (let i = 0; i < sc.particleVelocities.length; i++) {
        const vel = sc.particleVelocities[i];
        positions[i * 3 + 1] += vel.vy * speedMult;
        positions[i * 3] += vel.vx * speedMult;
        positions[i * 3 + 2] += vel.vz * speedMult;

        if (positions[i * 3 + 1] > vel.maxHeight) {
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * 2.4;
          positions[i * 3] = Math.cos(angle) * dist;
          positions[i * 3 + 1] = -1.2;
          positions[i * 3 + 2] = Math.sin(angle) * dist;
        }
      }
      sc.sparkPoints.geometry.attributes.position.needsUpdate = true;

      sc.renderer.render(sc.scene, sc.camera);
      if (this.isPageVisible) {
        this.activeLoops.tandoor = requestAnimationFrame(loop);
      }
    };
    this.activeLoops.tandoor = requestAnimationFrame(loop);
  }

  // --------------------------------------------------------
  // 3. BUILD-A-DISH 3D VEGETARIAN INGREDIENTS
  // --------------------------------------------------------
  createIngredientMesh(name) {
    const group = new THREE.Group();
    const lower = (name || '').toLowerCase();

    if (lower.includes('mushroom') || lower.includes('king oyster')) {
      const stemGeom = new THREE.CylinderGeometry(0.7, 0.95, 2.6, 24);
      const stemMat = new THREE.MeshStandardMaterial({ color: 0xF8F5E8, roughness: 0.65 });
      const stem = new THREE.Mesh(stemGeom, stemMat);
      stem.position.y = -0.2;
      group.add(stem);

      const capGeom = new THREE.SphereGeometry(1.35, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2.2);
      const capMat = new THREE.MeshStandardMaterial({ color: 0x8D6E63, roughness: 0.85 });
      const cap = new THREE.Mesh(capGeom, capMat);
      cap.position.y = 1.05;
      group.add(cap);
    } else if (lower.includes('lime') || lower.includes('lemon') || lower.includes('citrus')) {
      const peelGeom = new THREE.SphereGeometry(1.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const peelMat = new THREE.MeshStandardMaterial({ color: 0x65A30D, roughness: 0.35, side: THREE.DoubleSide });
      const peel = new THREE.Mesh(peelGeom, peelMat);
      peel.rotation.x = Math.PI;
      group.add(peel);

      const pulpGeom = new THREE.CircleGeometry(1.48, 24);
      const pulpMat = new THREE.MeshStandardMaterial({ color: 0xA3E635, roughness: 0.25, side: THREE.DoubleSide });
      const pulp = new THREE.Mesh(pulpGeom, pulpMat);
      pulp.rotation.x = Math.PI / 2;
      group.add(pulp);
    } else if (lower.includes('chili') || lower.includes('pepper') || lower.includes('mirchi')) {
      const bodyGeom = new THREE.ConeGeometry(0.75, 3.2, 24);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xFACC15, roughness: 0.28, metalness: 0.1 });
      const body = new THREE.Mesh(bodyGeom, bodyMat);
      body.rotation.z = Math.PI;
      group.add(body);

      const stemGeom = new THREE.CylinderGeometry(0.12, 0.2, 0.6, 12);
      const stemMat = new THREE.MeshStandardMaterial({ color: 0x15803D, roughness: 0.5 });
      const stem = new THREE.Mesh(stemGeom, stemMat);
      stem.position.y = 1.8;
      group.add(stem);
    } else if (lower.includes('paneer') || lower.includes('cheese') || lower.includes('tofu')) {
      const cubeGeom = new THREE.BoxGeometry(2.0, 2.0, 2.0);
      const cubeMat = new THREE.MeshStandardMaterial({ color: 0xFDFAF2, roughness: 0.55 });
      const cube = new THREE.Mesh(cubeGeom, cubeMat);
      group.add(cube);
    } else {
      const puffGeom = new THREE.DodecahedronGeometry(1.3, 1);
      const pos = puffGeom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        pos.setXYZ(i, pos.getX(i) * 1.15, pos.getY(i) * 0.9, pos.getZ(i) * 1.1);
      }
      puffGeom.computeVertexNormals();
      const puffMat = new THREE.MeshStandardMaterial({ color: 0xFEF3C7, roughness: 0.82 });
      const puff = new THREE.Mesh(puffGeom, puffMat);
      group.add(puff);
    }

    return group;
  }

  initBuildDish3D(container, ingredientName) {
    if (!this.isSupported() || !container) return;
    this.disposeScene('buildDish');

    container.innerHTML = '';
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 240;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(this.clampDPR());
    renderer.setSize(width, height);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.1);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFFAF0, 1.3);
    dirLight.position.set(3, 4, 4);
    scene.add(dirLight);

    const modelGroup = new THREE.Group();
    const ingredientMesh = this.createIngredientMesh(ingredientName || 'King Oyster Mushroom');
    modelGroup.add(ingredientMesh);
    scene.add(modelGroup);

    // HUD overlays
    const hud = document.createElement('div');
    hud.className = 'model-3d-hud';
    hud.innerHTML = `
      <span class="model-3d-badge">🌱 3D Vegetarian Ingredient</span>
      <span class="model-3d-badge" id="dish-3d-ing-name">${ingredientName || 'King Oyster Mushroom'}</span>
    `;
    container.appendChild(hud);

    const hint = document.createElement('div');
    hint.className = 'model-3d-hint';
    hint.innerText = '👆 Drag to inspect 360° • Select ingredients to assemble';
    container.appendChild(hint);

    // Pointer rotation controls
    let isDragging = false;
    let prevX = 0, prevY = 0;
    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      modelGroup.rotation.y += dx * 0.015;
      modelGroup.rotation.x += dy * 0.015;
    });
    window.addEventListener('pointerup', () => { isDragging = false; });

    const ro = this.createResizeObserver(container, camera, renderer);

    this.activeScenes.buildDish = {
      scene,
      camera,
      renderer,
      modelGroup,
      currentMesh: ingredientMesh,
      container,
      isJumping: false,
      jumpProgress: 0
    };
    this.resizeObservers.buildDish = ro;

    container.appendChild(renderer.domElement);
    this.startBuildDishLoop();
  }

  switchIngredient3D(name) {
    const sc = this.activeScenes.buildDish;
    if (!sc) return;

    if (sc.currentMesh) {
      sc.modelGroup.remove(sc.currentMesh);
      sc.currentMesh.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
    }

    const newMesh = this.createIngredientMesh(name);
    sc.modelGroup.add(newMesh);
    sc.currentMesh = newMesh;

    const nameBadge = document.getElementById('dish-3d-ing-name');
    if (nameBadge) nameBadge.innerText = name;
  }

  triggerIngredientJump(name) {
    if (name) this.switchIngredient3D(name);
    const sc = this.activeScenes.buildDish;
    if (!sc) return;
    sc.isJumping = true;
    sc.jumpProgress = 0;
  }

  startBuildDishLoop() {
    if (this.activeLoops.buildDish) cancelAnimationFrame(this.activeLoops.buildDish);

    let t = 0;
    const loop = () => {
      const sc = this.activeScenes.buildDish;
      if (!sc) return;

      t += 0.02;
      if (!sc.isJumping) {
        // Gentle bob & slow spin
        sc.modelGroup.position.y = Math.sin(t * 2.2) * 0.12;
        sc.modelGroup.rotation.y += 0.008;
      } else {
        // Parabolic jump animation
        sc.jumpProgress += 0.045;
        const p = sc.jumpProgress;
        sc.modelGroup.position.y = Math.sin(p * Math.PI) * 1.5;
        sc.modelGroup.rotation.y += 0.18;
        sc.modelGroup.rotation.x += 0.12;
        const scale = 1.0 + Math.sin(p * Math.PI) * 0.3;
        sc.modelGroup.scale.set(scale, scale, scale);

        if (p >= 1) {
          sc.isJumping = false;
          sc.modelGroup.scale.set(1, 1, 1);
          sc.modelGroup.position.set(0, 0, 0);
        }
      }

      sc.renderer.render(sc.scene, sc.camera);
      if (this.isPageVisible) {
        this.activeLoops.buildDish = requestAnimationFrame(loop);
      }
    };
    this.activeLoops.buildDish = requestAnimationFrame(loop);
  }

  // --------------------------------------------------------
  // 4. SCIENCE WHEEL 3D MOLECULAR CHEMISTRY MODELS
  // --------------------------------------------------------
  createMoleculeMesh(topicId, spaceFilling = false) {
    const group = new THREE.Group();

    const CPK = {
      C: { color: 0x333333, radius: spaceFilling ? 0.70 : 0.35 },
      H: { color: 0xE2E8F0, radius: spaceFilling ? 0.45 : 0.22 },
      O: { color: 0xEF4444, radius: spaceFilling ? 0.65 : 0.32 },
      N: { color: 0x3B82F6, radius: spaceFilling ? 0.68 : 0.34 },
      P: { color: 0xF97316, radius: spaceFilling ? 0.80 : 0.40 }
    };

    let atoms = [];
    let bonds = [];

    switch (topicId) {
      case 'acid-curing':
        atoms = [
          { type: 'C', x: 0, y: 0, z: 0 },
          { type: 'C', x: -1.2, y: -0.6, z: 0 },
          { type: 'C', x: 1.2, y: -0.6, z: 0 },
          { type: 'C', x: 0, y: 1.4, z: 0 },
          { type: 'O', x: 0, y: -0.2, z: 1.2 },
          { type: 'O', x: -1.8, y: -1.6, z: 0 },
          { type: 'O', x: 1.8, y: -1.6, z: 0 },
          { type: 'O', x: 0.9, y: 2.1, z: 0.4 },
          { type: 'O', x: -0.9, y: 2.1, z: -0.4 },
          { type: 'H', x: 0, y: -0.6, z: 1.8 }
        ];
        bonds = [[0,1], [0,2], [0,3], [0,4], [1,5], [2,6], [3,7], [3,8], [4,9]];
        break;

      case 'maillard-reaction':
        atoms = [
          { type: 'C', x: -1.0, y: 0.6, z: 0 },
          { type: 'C', x: -1.0, y: -0.7, z: 0.3 },
          { type: 'C', x: 0.2, y: -1.3, z: 0 },
          { type: 'C', x: 1.2, y: -0.5, z: -0.4 },
          { type: 'C', x: 1.0, y: 0.8, z: 0 },
          { type: 'O', x: -0.1, y: 1.3, z: 0.2 },
          { type: 'O', x: -2.0, y: -1.2, z: 0.1 },
          { type: 'O', x: 0.4, y: -2.3, z: 0.6 },
          { type: 'O', x: 2.3, y: -1.1, z: 0.1 },
          { type: 'C', x: 2.0, y: 1.6, z: 0.4 }
        ];
        bonds = [[0,1], [1,2], [2,3], [3,4], [4,5], [5,0], [1,6], [2,7], [3,8], [4,9]];
        break;

      case 'emulsification':
        atoms = [
          { type: 'P', x: 0, y: 1.6, z: 0 },
          { type: 'O', x: -0.9, y: 2.3, z: 0 },
          { type: 'O', x: 0.9, y: 2.3, z: 0 },
          { type: 'N', x: 0, y: 3.2, z: 0.4 },
          { type: 'C', x: 0, y: 0.4, z: 0 },
          { type: 'C', x: -0.8, y: -0.4, z: 0.3 },
          { type: 'C', x: -0.6, y: -1.4, z: -0.2 },
          { type: 'C', x: -1.2, y: -2.2, z: 0.2 },
          { type: 'C', x: 0.8, y: -0.4, z: -0.3 },
          { type: 'C', x: 0.6, y: -1.4, z: 0.2 },
          { type: 'C', x: 1.2, y: -2.2, z: -0.2 }
        ];
        bonds = [[0,1], [0,2], [0,3], [0,4], [4,5], [5,6], [6,7], [4,8], [8,9], [9,10]];
        break;

      case 'osmosis-mithai':
        atoms = [
          { type: 'C', x: -1.4, y: 0, z: 0 },
          { type: 'O', x: 0, y: 0.2, z: 0.3 },
          { type: 'C', x: 1.4, y: 0, z: 0 },
          { type: 'C', x: -2.2, y: 0.9, z: -0.3 },
          { type: 'C', x: -2.6, y: -0.5, z: 0.2 },
          { type: 'O', x: -1.8, y: -1.4, z: 0 },
          { type: 'C', x: 2.2, y: 0.9, z: 0.3 },
          { type: 'C', x: 2.6, y: -0.5, z: -0.2 },
          { type: 'O', x: 1.8, y: -1.4, z: 0 }
        ];
        bonds = [[0,1], [1,2], [0,3], [0,4], [4,5], [2,6], [2,7], [7,8]];
        break;

      case 'alkaline-noodles':
        atoms = [
          { type: 'C', x: 0, y: 0, z: 0 },
          { type: 'O', x: 0, y: 1.3, z: 0 },
          { type: 'O', x: -1.15, y: -0.65, z: 0 },
          { type: 'O', x: 1.15, y: -0.65, z: 0 },
          { type: 'C', x: -2.2, y: 1.5, z: 0.4 },
          { type: 'O', x: -1.4, y: 2.4, z: -0.2 },
          { type: 'C', x: 2.2, y: 1.5, z: -0.4 },
          { type: 'O', x: 1.4, y: 2.4, z: 0.2 }
        ];
        bonds = [[0,1], [0,2], [0,3], [1,5], [4,5], [1,7], [6,7]];
        break;

      case 'spice-volatiles':
      default:
        atoms = [
          { type: 'C', x: -2.4, y: 0.9, z: 0 },
          { type: 'C', x: -2.4, y: -0.5, z: 0 },
          { type: 'C', x: -1.2, y: -1.2, z: 0.1 },
          { type: 'C', x: 0, y: -0.5, z: 0.1 },
          { type: 'C', x: 0, y: 0.9, z: 0 },
          { type: 'C', x: -1.2, y: 1.6, z: 0 },
          { type: 'O', x: -3.5, y: 1.6, z: -0.2 },
          { type: 'O', x: -3.5, y: -1.1, z: 0.2 },
          { type: 'C', x: 1.2, y: -1.2, z: 0.2 },
          { type: 'N', x: 2.3, y: -0.5, z: 0.1 },
          { type: 'C', x: 3.4, y: -1.1, z: 0.3 },
          { type: 'O', x: 3.4, y: -2.3, z: 0.4 },
          { type: 'C', x: 4.6, y: -0.3, z: 0.2 },
          { type: 'C', x: 5.7, y: -1.0, z: -0.1 },
          { type: 'C', x: 6.9, y: -0.2, z: 0.1 }
        ];
        bonds = [
          [0,1], [1,2], [2,3], [3,4], [4,5], [5,0],
          [0,6], [1,7], [3,8], [8,9], [9,10], [10,11],
          [10,12], [12,13], [13,14]
        ];
        break;
    }

    atoms.forEach(a => {
      const info = CPK[a.type] || CPK.C;
      const geom = new THREE.SphereGeometry(info.radius, 16, 16);
      const mat = new THREE.MeshStandardMaterial({ color: info.color, roughness: 0.35, metalness: 0.15 });
      const sphere = new THREE.Mesh(geom, mat);
      sphere.position.set(a.x, a.y, a.z);
      group.add(sphere);
    });

    if (!spaceFilling) {
      bonds.forEach(([i1, i2]) => {
        const a1 = atoms[i1];
        const a2 = atoms[i2];
        if (!a1 || !a2) return;
        const p1 = new THREE.Vector3(a1.x, a1.y, a1.z);
        const p2 = new THREE.Vector3(a2.x, a2.y, a2.z);
        const dist = p1.distanceTo(p2);
        const cylGeom = new THREE.CylinderGeometry(0.08, 0.08, dist, 12);
        const cylMat = new THREE.MeshStandardMaterial({ color: 0x94A3B8, roughness: 0.5 });
        const cyl = new THREE.Mesh(cylGeom, cylMat);
        cyl.position.copy(p1.clone().add(p2).multiplyScalar(0.5));
        cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
        group.add(cyl);
      });
    }

    const box = new THREE.Box3().setFromObject(group);
    const center = box.getCenter(new THREE.Vector3());
    group.position.sub(center);

    return group;
  }

  initMolecularModel3D(container, topic) {
    if (!this.isSupported() || !container) return;
    this.disposeScene('science');

    this.currentTopic = topic;
    container.innerHTML = '';
    const width = container.clientWidth || 340;
    const height = container.clientHeight || 220;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(this.clampDPR());
    renderer.setSize(width, height);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFFAF0, 1.4);
    dirLight.position.set(4, 5, 5);
    scene.add(dirLight);

    const modelGroup = new THREE.Group();
    const moleculeMesh = this.createMoleculeMesh(topic.id, this.moleculeSpaceFilling);
    modelGroup.add(moleculeMesh);
    scene.add(modelGroup);

    // HUD overlays
    const hud = document.createElement('div');
    hud.className = 'model-3d-hud';
    hud.innerHTML = `
      <span class="model-3d-badge">🔬 3D Molecular Chemistry</span>
      <button class="model-3d-badge" id="molecule-toggle-mode" style="cursor:pointer;pointer-events:auto;">
        ${this.moleculeSpaceFilling ? 'Spheres' : 'Ball & Stick'}
      </button>
    `;
    container.appendChild(hud);

    document.getElementById('molecule-toggle-mode')?.addEventListener('click', () => {
      this.moleculeSpaceFilling = !this.moleculeSpaceFilling;
      this.initMolecularModel3D(container, this.currentTopic);
    });

    const hint = document.createElement('div');
    hint.className = 'model-3d-hint';
    hint.innerText = '👆 Drag to rotate molecule in 360°';
    container.appendChild(hint);

    // Pointer Drag
    let isDragging = false;
    let prevX = 0, prevY = 0;
    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      modelGroup.rotation.y += dx * 0.015;
      modelGroup.rotation.x += dy * 0.015;
    });
    window.addEventListener('pointerup', () => { isDragging = false; });

    const ro = this.createResizeObserver(container, camera, renderer);

    this.activeScenes.science = {
      scene,
      camera,
      renderer,
      modelGroup,
      container
    };
    this.resizeObservers.science = ro;

    container.appendChild(renderer.domElement);
    this.startScienceLoop();
  }

  startScienceLoop() {
    if (this.activeLoops.science) cancelAnimationFrame(this.activeLoops.science);

    const loop = () => {
      const sc = this.activeScenes.science;
      if (!sc) return;

      sc.modelGroup.rotation.y += 0.012;
      sc.renderer.render(sc.scene, sc.camera);
      if (this.isPageVisible) {
        this.activeLoops.science = requestAnimationFrame(loop);
      }
    };
    this.activeLoops.science = requestAnimationFrame(loop);
  }
}



class FusionApp {
  constructor() {
    this.db = new FusionDatabase();
    this.state = this.loadState();
    if (!this.state.completedCityQuests) {
      this.state.completedCityQuests = [];
    }
    this.currentTriviaIndex = 0;
    this.triviaScore = 0;
    this.triviaTimer = null;
    this.triviaTimeLeft = 45;
    this.isSpinning = false;
    this.selectedDishIndex = 0;
    this.selectedMetro = INDIA_METROS_DATA[0];
    this.pronounceIndex = 0;
    this.assembledSyllables = [];
    this.buildDishSelectedIngredients = [];
    this.hotPotatoGame = null;
    this.threeManager = new Fusion3DManager(this);
  }

  loadState() {
    try {
      const saved = localStorage.getItem('fusion_app_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure new games like hotPotato are enabled if newly introduced
        if (parsed.gameToggles && parsed.gameToggles.hotPotato === undefined) {
          parsed.gameToggles.hotPotato = true;
        }
        return { 
          ...DEFAULT_STATE, 
          ...parsed,
          gameToggles: {
            ...DEFAULT_STATE.gameToggles,
            ...(parsed.gameToggles || {})
          }
        };
      }
    } catch (e) {
      console.warn('Could not load state, using default:', e);
    }
    return DEFAULT_STATE;
  }

  saveState() {
    try {
      localStorage.setItem('fusion_app_state', JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save state to localStorage:', e);
    }

    // Persist asynchronously to IndexedDB database
    if (this.db) {
      try {
        this.db.set(DB_CONFIG.STORE_APP_STATE, { key: 'state', value: this.state });
        if (this.state.profiles) {
          Object.entries(this.state.profiles).forEach(([id, prof]) => {
            this.db.set(DB_CONFIG.STORE_PROFILES, { id, ...prof, updatedAt: new Date().toISOString() });
          });
          const leaderboardEntries = Object.entries(this.state.profiles).map(([id, prof]) => {
            const r = this.getCurrentRank(prof.xp, prof.role);
            return {
              id,
              name: prof.name,
              role: prof.role,
              avatar: prof.avatar,
              xp: prof.xp,
              streak: prof.streak,
              bests: prof.bests || {},
              rank: r.title,
              level: r.level,
              updatedAt: new Date().toISOString()
            };
          });
          leaderboardEntries.forEach(entry => {
            this.db.set(DB_CONFIG.STORE_LEADERBOARD, entry);
          });
        }
      } catch (err) {
        console.warn('Error syncing with IndexedDB:', err);
      }
    }
  }

  async clearAllWebsiteData() {
    try {
      // 1. Clear IndexedDB
      if (this.db) {
        await this.db.clearAll();
      }
    } catch (err) {
      console.warn('Error clearing IndexedDB:', err);
    }

    // 2. Clear LocalStorage keys
    try {
      localStorage.removeItem('fusion_app_state');
      localStorage.removeItem('fusion_hot_potato_high');
      localStorage.removeItem('fusion_muted');
      localStorage.removeItem('fusion_gemini_api_key');
      localStorage.clear();
    } catch (err) {
      console.warn('Error clearing localStorage:', err);
    }

    // 3. Reset in-memory state to clean pristine defaults
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.state.onboarded = false;
    this.state.profiles.kid.xp = 0;
    this.state.profiles.parent.xp = 0;
    this.state.profiles.kid.streak = 1;
    this.state.profiles.parent.streak = 1;
    this.state.profiles.kid.bests = { hotPotato: 0, trivia: 0, buildDish: 0, pronunciation: 0, scienceSpins: 0 };
    this.state.profiles.parent.bests = { hotPotato: 0, trivia: 0, buildDish: 0, pronunciation: 0, scienceSpins: 0 };
    this.state.profiles.kid.unlockedBadges = ['🌱 Junior Taster'];
    this.state.profiles.parent.unlockedBadges = ['👨‍🍳 Sous-Chef Guide'];
    this.state.completedCityQuests = [];
    this.state.recipeCompletedSteps = {};

    // 4. Persist clean state to Database & LocalStorage
    this.saveState();

    // 5. Re-render all views
    this.applyTheme(this.state.theme);
    this.renderHeader();
    this.renderProgressStrip();
    this.renderGameTabs();
    this.renderActiveGame();
    this.renderKitchenLab(this.state.recipeFilter);
    this.renderLeaderboard();
    this.handleTabSwitch3D(tabId);

    sound.playCorrect();
        if (this.threeManager && this.threeManager.isSupported()) {
          this.threeManager.triggerIngredientJump(ingName);
        }
    showToast('✨ All website data, XP, and leaderboards cleared!', 'success');
  }

  init() {
    this.applyTheme(this.state.theme);
    this.renderHeader();
    this.renderProgressStrip();
    this.initMainTabs();
    this.renderGameTabs();
    this.renderActiveGame();
    this.renderKitchenLab(this.state.recipeFilter);
    this.renderLeaderboard();
    this.bindEvents();
    this.initWheel();
    this.initScrolltideShowcase();
    this.updateNavAccessibility();

    // Auto-prompt onboarding modal on first session if not onboarded
    if (this.state.onboarded === false) {
      setTimeout(() => {
        this.openProfileModal();
      }, 400);
    }
  }

  // ========================================================
  // INSTANT TAB SWITCHER (NO ENDLESS VERTICAL SCROLLING)
  // ========================================================
  initMainTabs() {
    const tabButtons = document.querySelectorAll('.site-nav .nav-link[data-tab-target], .mobile-bottom-nav .nav-link[data-tab-target]');
    
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tabTarget = btn.getAttribute('data-tab-target');
        this.switchMainTab(tabTarget);
      });
    });

    // Also support footer links
    document.querySelectorAll('.footer-nav-link[data-tab]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');
        this.switchMainTab(tab);
      });
    });

    // Logo returns to Games Hub
    document.getElementById('logo-home-link')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.switchMainTab('games');
    });

    // Activate initial tab from state
    this.switchMainTab(this.state.currentTab || 'games', false);
  }

  switchMainTab(tabId, playSound = true) {
    if (playSound) sound.playClick();
    this.state.currentTab = tabId;
    this.saveState();

    // Update Nav Buttons across both site-nav and mobile-bottom-nav
    document.querySelectorAll('.site-nav .nav-link, .mobile-bottom-nav .nav-link').forEach(btn => {
      if (btn.getAttribute('data-tab-target') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Tab Panes
    document.querySelectorAll('.main-tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });

    if (this.threeManager) this.threeManager.onTabChanged(tabId);
    const targetPane = document.getElementById(`pane-${tabId}`);
    if (targetPane) {
      targetPane.classList.add('active');
    }

    // Scroll back to top of main content smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getActiveProfile() {
    return this.state.profiles[this.state.currentProfile] || this.state.profiles.kid;
  }

  getDifficultySettings() {
    const prof = this.getActiveProfile();
    const isStudent = prof.role === 'student' || this.state.currentProfile === 'kid';
    if (isStudent) {
      return {
        role: 'student',
        triviaTimer: 50,
        hpGravity: 0.22,
        hpCoalsBoost: -8.5,
        coalsHeight: 70,
        impostorCount: 3,
        badgeText: '🎒 Student Mode (Forgiving Timers & Hints)',
        badgeClass: 'student-mode-badge'
      };
    } else {
      return {
        role: 'parent',
        triviaTimer: 25,
        hpGravity: 0.32,
        hpCoalsBoost: -7.0,
        coalsHeight: 45,
        impostorCount: 6,
        badgeText: '👨‍🍳 Parent Mode (Pro Kitchen Challenge)',
        badgeClass: 'parent-mode-badge'
      };
    }
  }

  getCurrentRank(xp, role = null) {
    const activeRole = role || this.getActiveProfile().role || (this.state.currentProfile === 'parent' ? 'parent' : 'student');
    const ranks = activeRole === 'parent' ? PARENT_RANKS : STUDENT_RANKS;
    for (let i = ranks.length - 1; i >= 0; i--) {
      if (xp >= ranks[i].minXP) {
        return ranks[i];
      }
    }
    return ranks[0];
  }

  openProfileModal() {
    sound.playClick();
    const modal = document.getElementById('profile-modal');
    if (!modal) return;
    document.body.classList.add('has-modal-open');
    modal.classList.add('open');
    this.renderProfileModalContent();
  }

  closeProfileModal() {
    sound.playClick();
    const modal = document.getElementById('profile-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.classList.remove('has-modal-open');
  }

  renderProfileModalContent() {
    const body = document.getElementById('profile-modal-body');
    if (!body) return;
    const prof = this.getActiveProfile();
    const currentRole = prof.role || (this.state.currentProfile === 'parent' ? 'parent' : 'student');
    const currentName = prof.name || (currentRole === 'parent' ? 'Chef Priya' : 'Maya');

    body.innerHTML = `
      <div style="margin-bottom:1.25rem;">
        <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1rem;">
          Select your chef role to personalize your family kitchen challenge, timer speeds, and ranks!
        </p>

        <label style="display:block; font-weight:700; font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-main);">
          Choose Chef Identity:
        </label>
        <div class="profile-role-grid">
          <div class="profile-role-card ${currentRole === 'student' ? 'selected' : ''}" id="role-select-student">
            <div style="font-size:2rem; margin-bottom:0.35rem;">🎒</div>
            <strong style="font-size:1rem; display:block;">Student / Kid Chef</strong>
            <span style="font-size:0.78rem; color:var(--text-muted);">Forgiving Timers (50s) & Safe Steps</span>
          </div>

          <div class="profile-role-card ${currentRole === 'parent' ? 'selected' : ''}" id="role-select-parent">
            <div style="font-size:2rem; margin-bottom:0.35rem;">👨‍🍳</div>
            <strong style="font-size:1rem; display:block;">Parent / Adult Guide</strong>
            <span style="font-size:0.78rem; color:var(--text-muted);">Pro Challenge (25s) & Tricky Impostors</span>
          </div>
        </div>

        <div class="profile-form-group">
          <label for="profile-input-name">Your Chef Name:</label>
          <input type="text" id="profile-input-name" class="profile-form-input" value="${currentName}" placeholder="e.g. Maya or Chef Mom" maxlength="24">
        </div>

        <div class="profile-form-group">
          <label for="profile-select-rank">Starting / Current Rank:</label>
          <select id="profile-select-rank" class="profile-form-select">
            ${(currentRole === 'parent' ? PARENT_RANKS : STUDENT_RANKS).map(r => `
              <option value="${r.level}" ${r.level === (prof.rankLevel || 1) ? 'selected' : ''}>
                ${r.badge} Level ${r.level}: ${r.title} (${r.minXP}+ XP)
              </option>
            `).join('')}
          </select>
        </div>

        <button class="btn btn-primary" id="save-profile-btn" style="width:100%; padding:0.85rem; font-size:1.05rem; margin-top:0.75rem;">
          ✨ Let's Cook & Play!
        </button>
      </div>
    `;

    // Role switcher events inside modal
    let selectedRole = currentRole;
    const cardStudent = body.querySelector('#role-select-student');
    const cardParent = body.querySelector('#role-select-parent');
    const rankSelect = body.querySelector('#profile-select-rank');

    const updateRankDropdown = (role) => {
      const list = role === 'parent' ? PARENT_RANKS : STUDENT_RANKS;
      rankSelect.innerHTML = list.map(r => `
        <option value="${r.level}">
          ${r.badge} Level ${r.level}: ${r.title} (${r.minXP}+ XP)
        </option>
      `).join('');
    };

    cardStudent?.addEventListener('click', () => {
      sound.playClick();
      selectedRole = 'student';
      cardStudent.classList.add('selected');
      cardParent.classList.remove('selected');
      updateRankDropdown('student');
    });

    cardParent?.addEventListener('click', () => {
      sound.playClick();
      selectedRole = 'parent';
      cardParent.classList.add('selected');
      cardStudent.classList.remove('selected');
      updateRankDropdown('parent');
    });

    body.querySelector('#save-profile-btn')?.addEventListener('click', () => {
      const nameInput = body.querySelector('#profile-input-name');
      const name = nameInput ? nameInput.value.trim() : (selectedRole === 'parent' ? 'Chef Priya' : 'Maya');
      const rankLevel = parseInt(rankSelect ? rankSelect.value : '1', 10);
      this.saveProfile(name || (selectedRole === 'parent' ? 'Chef Priya' : 'Maya'), selectedRole, rankLevel);
    });
  }

  saveProfile(name, role, rankLevel) {
    sound.playCorrect();
    const profileKey = role === 'parent' ? 'parent' : 'kid';
    this.state.currentProfile = profileKey;
    const ranks = role === 'parent' ? PARENT_RANKS : STUDENT_RANKS;
    const chosenRank = ranks.find(r => r.level === rankLevel) || ranks[0];

    if (!this.state.profiles[profileKey]) {
      this.state.profiles[profileKey] = {};
    }
    const prof = this.state.profiles[profileKey];
    prof.name = name;
    prof.role = role;
    prof.rankLevel = rankLevel;
    prof.avatar = role === 'parent' ? '👨‍🍳' : '🎒';
    if (prof.xp < chosenRank.minXP) {
      prof.xp = chosenRank.minXP;
    }
    this.state.onboarded = true;

    this.saveState();
    this.closeProfileModal();
    this.renderHeader();
    this.renderProgressStrip();
    this.renderActiveGame();
    this.renderLeaderboard();
    launchConfetti();
    showToast(`Welcome ${name}! (${chosenRank.title})`, 'success');
  }

  addXP(amount, badgeToUnlock = null) {
    const profile = this.getActiveProfile();
    profile.xp += amount;
    
    if (badgeToUnlock && !profile.unlockedBadges.includes(badgeToUnlock)) {
      profile.unlockedBadges.push(badgeToUnlock);
      showToast(`Badge Unlocked: ${badgeToUnlock}!`, 'success');
    }

    const currentRank = this.getCurrentRank(profile.xp, profile.role);
    profile.level = currentRank.level; // Persist level in profile for DB-ranked leaderboard
    this.saveState();
    this.renderHeader();
    this.renderProgressStrip();
    this.renderLeaderboard();
    sound.playCorrect();
    this.submitScoreToGlobal('overall', profile.xp, amount).catch(() => {});
    return currentRank;
  }

  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light-Blue Mode' : 'Switch to Obsidian Black Mode');
    }
    this.saveState();
  }

  toggleTheme() {
    sound.playClick();
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
    showToast(nextTheme === 'dark' ? 'Obsidian Black Theme Activated 🌙' : 'Light-Blue Theme Activated ☀️', 'info');
  }

  toggleSound() {
    const muted = sound.toggleMute();
    sound.playClick();
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.innerHTML = muted ? '🔇' : '🔊';
      soundBtn.setAttribute('title', muted ? 'Unmute Sound Effects' : 'Mute Sound Effects');
    }
    showToast(muted ? 'Sound Effects Muted 🔇' : 'Sound Effects Enabled 🔊', 'info');
  }

  renderHeader() {
    const profile = this.getActiveProfile();
    const rank = this.getCurrentRank(profile.xp, profile.role);
    
    const profilePill = document.getElementById('profile-switch-btn');
    if (profilePill) {
      profilePill.innerHTML = `
        <span class="profile-avatar">${profile.avatar}</span>
        <span class="profile-name">${profile.name}</span>
        <span class="pill-badge profile-rank-badge">${rank.title}</span>
      `;
    }

    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.innerHTML = sound.isMuted() ? '🔇' : '🔊';
    }
  }

  renderProgressStrip() {
    const profile = this.getActiveProfile();
    const rank = this.getCurrentRank(profile.xp, profile.role);
    const ranks = profile.role === 'parent' ? PARENT_RANKS : STUDENT_RANKS;
    const nextRank = ranks.find(r => r.level === rank.level + 1) || rank;
    const range = nextRank.minXP - rank.minXP || 1;
    const progress = Math.min(100, Math.max(0, ((profile.xp - rank.minXP) / range) * 100));

    const container = document.getElementById('progress-strip-container');
    if (!container) return;

    container.innerHTML = `
      <div class="progress-strip-inner">
        <div class="chef-avatar-box">
          <span>${rank.badge}</span>
        </div>
        <div class="progress-info">
          <h4>
            <span>${rank.title}</span>
            <span style="font-size:0.85rem; font-weight:normal; color:var(--text-muted);">(Level ${rank.level} • ${profile.role === 'parent' ? 'Parent Guide' : 'Student Chef'})</span>
            <span class="pill-badge" style="margin-left:auto;">${profile.xp} XP</span>
          </h4>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${progress}%"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-top:0.35rem;">
            <span>${rank.perks}</span>
            <span>Next: ${nextRank.title} (${nextRank.minXP} XP)</span>
          </div>
        </div>
        <div class="streak-counter">
          <div>🔥 ${profile.streak} Days</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Family Streak</div>
        </div>
      </div>
    `;
  }

  // ========================================================
  // HORIZONTAL SCROLLABLE GAME SELECTOR CAROUSEL
  // ========================================================
  renderGameTabs() {
    const track = document.getElementById('games-grid-tabs');
    if (!track) return;

    const games = [
      { id: 'buildDish', name: 'Build-a-Dish', icon: '🥘', desc: 'Pantry Rush & Recipe Simulation', activeDesc: 'Timed hunt + step sequence' },
      { id: 'pronunciation', name: 'Pronounce Lab', icon: '🗣️', desc: 'Phonetic Matching & Voice Check', activeDesc: 'Listen, reorder & speak' },
      { id: 'trivia', name: 'Family Trivia', icon: '🧠', desc: '10 Qs with Soft Timer & Hints', activeDesc: 'Food science & origins' },
      { id: 'hotPotato', name: 'Hot Potato Rush', icon: '🥔', desc: 'Whack, Cook in Coals & Serve Golden', activeDesc: 'Cook on coals, serve golden' },
      { id: 'spinScience', name: 'Science Wheel', icon: '🎡', desc: 'Food Chemistry Explanations', activeDesc: 'Spin & discover reactions' }
    ];

    track.innerHTML = games.map(g => {
      const isEnabled = this.state.gameToggles[g.id];
      const isActive = this.state.activeGameTab === g.id;

      return `
        <div class="game-card-tab ${isActive ? 'active' : ''}" data-game-id="${g.id}">
          ${!isEnabled ? `
            <div class="game-disabled-overlay">
              <span style="font-size:1.5rem;">🔒</span>
              <span>Disabled in Admin Mode</span>
            </div>
          ` : ''}
          <div>
            <div class="game-tab-icon">${g.icon}</div>
            <h3>${g.name}</h3>
            <p>${g.desc}</p>
          </div>
          <div class="game-card-meta">
            <span>${g.activeDesc}</span>
            ${isActive ? `
              <span class="active-live-indicator">
                <span class="live-beacon"></span> Playing
              </span>
            ` : '<span>Start →</span>'}
          </div>
        </div>
      `;
    }).join('');

    // Bind Game Tab Clicks
    track.querySelectorAll('.game-card-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const gameId = tab.getAttribute('data-game-id');
        if (!this.state.gameToggles[gameId]) {
          alert('This game is currently turned off by the Admin. Open the Admin Lock icon in the header with your secret PIN to enable it!');
          return;
        }
        sound.playClick();
        this.state.activeGameTab = gameId;
        this.saveState();
        this.renderGameTabs();
        this.renderActiveGame();
      });
    });

    // Horizontal Scroll Arrows
    const leftBtn = document.getElementById('games-scroll-left');
    const rightBtn = document.getElementById('games-scroll-right');

    if (leftBtn) {
      leftBtn.onclick = () => {
        sound.playClick();
        track.scrollBy({ left: -270, behavior: 'smooth' });
      };
    }

    if (rightBtn) {
      rightBtn.onclick = () => {
        sound.playClick();
        track.scrollBy({ left: 270, behavior: 'smooth' });
      };
    }
  }

  renderActiveGame() {
    const arena = document.getElementById('play-arena-container');
    if (!arena) return;

    if (!this.state.gameToggles[this.state.activeGameTab]) {
      const firstEnabled = Object.keys(this.state.gameToggles).find(k => this.state.gameToggles[k]);
      if (firstEnabled) {
        this.state.activeGameTab = firstEnabled;
      } else {
        arena.innerHTML = `
          <div style="text-align:center; padding:3rem 1rem;">
            <h2>All games are currently toggled off!</h2>
            <p style="color:var(--text-muted); margin:1rem 0;">Click the Admin Lock icon in the header and enter your secret Admin PIN to turn on any game.</p>
            <button class="btn btn-primary" id="open-admin-from-arena">Open Admin Controls</button>
          </div>
        `;
        document.getElementById('open-admin-from-arena')?.addEventListener('click', () => this.openAdminModal());
        return;
      }
    }

    switch (this.state.activeGameTab) {
      case 'buildDish':
        this.renderBuildDishGame(arena);
        break;
      case 'pronunciation':
        this.renderPronunciationGame(arena);
        break;
      case 'trivia':
        this.renderTriviaGame(arena);
        break;
      case 'hotPotato':
      case 'indiaMap': // Backward compatibility
        this.renderHotPotatoGame(arena);
        break;
      case 'spinScience':
        this.renderSpinScienceGame(arena);
        break;
      default:
        this.renderBuildDishGame(arena);
    }
  }

  // ========================================================
  // GAME 1: BUILD-A-DISH
  // ========================================================
  renderBuildDishGame(arena) {
    const dish = FUSION_DISHES[this.selectedDishIndex];
    const diff = this.getDifficultySettings();
    const correctItems = dish.pantryItems.filter(i => i.isCorrect);
    const impostors = dish.pantryItems.filter(i => !i.isCorrect).slice(0, diff.impostorCount);
    const displayPantryItems = [...correctItems, ...impostors];
    const completedCount = this.buildDishSelectedIngredients.filter(name => correctItems.some(c => c.name === name)).length;
    const isFinished = completedCount === correctItems.length && correctItems.length > 0;

    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🥘</span>
          <div>
            <h3>Build-a-Dish: Chef's Cooking Lab</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Step-by-step vegetarian assembly & timed pantry rush</p>
          </div>
        </div>
        <div class="arena-badges" style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <span class="pill-badge ${diff.badgeClass}" style="font-weight:800; border-color:var(--primary); color:var(--primary);">${diff.badgeText}</span>
          <span class="pill-badge" style="color:var(--primary); font-weight:800;">⏱️ Rush Mode</span>
          <span class="veg-badge"><span class="veg-icon-dot"></span> 100% Pure Veg</span>
        </div>
      </div>

      <div class="build-dish-container">
        <!-- 3D Interactive Vegetarian Ingredient Stage -->
        <div id="dish-3d-canvas-container" class="dish-3d-canvas-container" aria-label="3D Interactive Ingredient Model"></div>
        <!-- Recipe Selector Chips -->
        <div class="recipe-selector-row">
          ${FUSION_DISHES.map((d, idx) => `
            <button class="recipe-chip ${idx === this.selectedDishIndex ? 'active' : ''}" data-dish-idx="${idx}">
              ${d.name}
            </button>
          `).join('')}
        </div>

        <div class="cooking-board-layout">
          <!-- Pantry Shelf -->
          <div class="pantry-shelf">
            <h4>
              <span>🛒 Pantry Shelf</span>
              <span style="font-size:0.85rem; color:var(--secondary); font-weight:800;">
                Collected: ${completedCount} / ${correctItems.length}
              </span>
            </h4>
            <p>Tap the authentic vegetarian ingredients! Beware of non-veg or clashing impostors (${diff.role === 'student' ? 'Kid-safe simple choices' : 'Pro chef tricky distractors'}).</p>
            
            <div class="pantry-items-grid">
              ${displayPantryItems.map((item) => {
                const isSelected = this.buildDishSelectedIngredients.includes(item.name);
                return `
                  <button class="ingredient-btn ${isSelected ? 'selected' : ''}" 
                          data-ing-name="${item.name}" 
                          data-is-correct="${item.isCorrect}"
                          ${isSelected || isFinished ? 'disabled' : ''}>
                    <span class="ing-emoji">${item.emoji}</span>
                    <span>${item.name}</span>
                  </button>
                `;
              }).join('')}
            </div>

            <div id="pantry-feedback" style="margin-top:1rem; min-height:48px; font-size:0.88rem; font-weight:700;"></div>
          </div>

          <!-- Cauldron & Steps -->
          <div class="prep-board">
            <div>
              <h4>🍳 Step-by-Step Culinary Assembly</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">
                Observe how ingredients transform in authentic recipe sequence:
              </p>

              <div class="steps-timeline">
                ${dish.recipeSteps.map((step, sIdx) => {
                  const stepDone = completedCount >= (sIdx + 1) * Math.ceil(correctItems.length / dish.recipeSteps.length);
                  return `
                    <div class="step-card ${stepDone || isFinished ? 'completed' : ''}" style="${diff.role === 'student' && step.kidSafe ? 'border-left: 4px solid var(--accent-green);' : ''}">
                      <div class="step-number">${sIdx + 1}</div>
                      <div>
                        <strong>${step.title}</strong>
                        <div style="font-size:0.82rem; color:var(--text-muted); margin-top:2px;">${step.text}</div>
                        ${step.kidSafe ? '<span class="pill-badge" style="font-size:0.7rem; color:var(--accent-green); background:var(--accent-green-light); margin-top:4px; display:inline-block;">👶 Kid-Friendly Step</span>' : '<span class="pill-badge" style="font-size:0.7rem; color:var(--secondary); background:var(--secondary-light); margin-top:4px; display:inline-block;">👨‍🍳 Parent Supervision</span>'}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Completion Banner -->
            ${isFinished ? `
              <div style="background:var(--accent-green-light); border:2px solid var(--accent-green); border-radius:var(--radius-md); padding:1.25rem; text-align:center; margin-top:1rem;">
                <div style="font-size:1.85rem;">🎉 Dish Perfected!</div>
                <p style="font-size:0.92rem; color:var(--accent-green); margin:0.35rem 0; font-weight:700;">You earned <strong>+50 XP</strong> for authentic assembly!</p>
                <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.85rem;">
                  🔬 <em>${dish.scienceNote}</em>
                </div>
                <button class="btn btn-primary" id="reset-dish-btn" style="padding:0.45rem 1.15rem; font-size:0.85rem;">Assemble Another Dish →</button>
              </div>
            ` : `
              <div style="font-size:0.82rem; color:var(--text-muted); text-align:center; padding:0.5rem;">
                💡 <em>Pro-Tip: ${dish.indianSubstitutes[0].why}</em>
              </div>
            `}
          </div>
        </div>
      </div>
    `;

        if (this.threeManager && this.threeManager.isSupported()) {
      const stage = arena.querySelector('#dish-3d-canvas-container');
      if (stage) {
        const primary = dish.pantryItems.find(i => i.isCorrect)?.name || 'King Oyster Mushroom';
        this.threeManager.initBuildDish3D(stage, primary);
      }
    }

    // Hover and select hooks for 3D model
    arena.querySelectorAll('.ingredient-btn').forEach(btn => {
      btn.addEventListener('pointerenter', () => {
        if (this.threeManager && this.threeManager.isSupported()) {
          this.threeManager.switchIngredient3D(btn.getAttribute('data-ing-name'));
        }
      });
    });

    arena.querySelectorAll('.recipe-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        this.selectedDishIndex = parseInt(btn.getAttribute('data-dish-idx'));
        this.buildDishSelectedIngredients = [];
        this.renderBuildDishGame(arena);
      });
    });

    const feedbackBox = document.getElementById('pantry-feedback');
    arena.querySelectorAll('.ingredient-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-ing-name');
        const isCorrect = btn.getAttribute('data-is-correct') === 'true';

        if (isCorrect) {
          sound.playCorrect();
          this.buildDishSelectedIngredients.push(name);
          this.update3DIngredient(name);
          this.animate3DIngredientJump();
          feedbackBox.innerHTML = `<span style="color:var(--accent-green);">✨ Great choice! Added ${name} to the prep bowl.</span>`;
          
          if (this.buildDishSelectedIngredients.length === correctItems.length) {
            launchConfetti();
            sound.playFanfare();
            this.addXP(50, '🥘 Dish Master');
            showToast(`Perfected ${dish.name}! +50 XP`, 'success');
          }
          this.renderBuildDishGame(arena);
        } else {
          sound.playWrong();
          btn.classList.add('wrong-shake');
          setTimeout(() => btn.classList.remove('wrong-shake'), 220);

          const impostor = dish.pantryItems.find(i => i.name === name);
          feedbackBox.innerHTML = `
            <span style="color:#DC2626;">
              ❌ Impostor Alert: ${name}! ${impostor?.distractorReason || 'Not in this vegetarian recipe!'}
            </span>
          `;
        }
      });
    });

    document.getElementById('reset-dish-btn')?.addEventListener('click', () => {
      sound.playClick();
      this.selectedDishIndex = (this.selectedDishIndex + 1) % FUSION_DISHES.length;
      this.buildDishSelectedIngredients = [];
      this.renderBuildDishGame(arena);
    });
  }

  // ========================================================
  // GAME 2: PRONUNCIATION CHALLENGE
  // ========================================================
  renderPronunciationGame(arena) {
    const dish = FUSION_DISHES[this.pronounceIndex];
    const isCompleted = this.assembledSyllables.join('-').toLowerCase() === dish.syllables.join('-').toLowerCase();
    const scrambled = [...dish.syllables].sort((a, b) => a.localeCompare(b));

    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🗣️</span>
          <div>
            <h3>Pronunciation Challenge & Phonetic Matching</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Master authentic international accents & sound out syllables</p>
          </div>
        </div>
        <div class="arena-badges">
          <span class="pill-badge">Dish ${this.pronounceIndex + 1} of ${FUSION_DISHES.length}</span>
          <span class="pill-badge" style="color:var(--secondary); font-weight:800;">+30 XP</span>
        </div>
      </div>

      <div class="pronounce-container">
        <div class="dish-pronounce-card">
          <span class="pill-badge" style="margin-bottom:0.5rem; display:inline-block;">Origin: ${dish.origin}</span>
          <h2 style="font-size:2.2rem; margin-bottom:0.25rem;">${dish.name}</h2>
          <div style="font-size:1.15rem; color:var(--text-muted); margin-bottom:0.5rem;">Authentic Term: <em>"${dish.originalName}"</em></div>
          
          <div class="ipa-badge">${dish.pronunciationIPA}</div>
          <div style="font-size:1.3rem; font-weight:800; color:var(--secondary); margin:0.65rem 0;">
            🗣️ Say it: <em>"${dish.phonetic}"</em>
          </div>

          <div class="audio-listen-row">
            <button class="listen-btn" id="play-audio-btn">
              <span>🔊 Listen Pronunciation</span>
            </button>
            <button class="mic-check-btn" id="voice-practice-btn">
              <span>🎤 Voice Practice Mic</span>
            </button>
          </div>

          <div id="mic-result" style="font-size:0.9rem; min-height:26px; font-weight:700; color:var(--secondary);"></div>
        </div>

        <!-- Syllable Builder -->
        <div class="syllable-builder-box">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
            <h4 style="font-size:1.1rem;">🧩 Tap Syllables in Exact Phonetic Order:</h4>
            <button class="btn btn-secondary" id="clear-syllables-btn" style="padding:0.3rem 0.85rem; font-size:0.82rem;">Clear Reset</button>
          </div>

          <div class="syllable-drop-target" id="syllables-target">
            ${this.assembledSyllables.length === 0 ? `
              <span style="color:var(--text-light); font-size:0.92rem; margin:auto;">
                Tap the syllable chips below to assemble the phonetic pronunciation
              </span>
            ` : this.assembledSyllables.map((syl, sIdx) => `
              <div class="syllable-chip" data-idx="${sIdx}">${syl} ✕</div>
            `).join('')}
          </div>

          <div class="syllable-pool">
            ${scrambled.map((syl, i) => {
              const usedCount = this.assembledSyllables.filter(s => s === syl).length;
              const occCount = scrambled.slice(0, i + 1).filter(s => s === syl).length;
              const isUsed = usedCount >= occCount;
              return `
                <button class="syllable-chip pool-chip" data-syl="${syl}" ${isUsed ? 'disabled style="opacity:0.35; pointer-events:none;"' : ''}>
                  ${syl}
                </button>
              `;
            }).join('')}
          </div>

          <div id="pronounce-validation" style="margin-top:1.5rem;">
            ${isCompleted ? `
              <div style="background:var(--accent-green-light); border:2px solid var(--accent-green); border-radius:var(--radius-md); padding:1.25rem; text-align:center;">
                <h4 style="color:var(--accent-green); margin-bottom:0.35rem; font-size:1.25rem;">🎉 Phonetically Flawless!</h4>
                <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:0.85rem;">
                  You correctly assembled: <strong>${dish.phonetic}</strong>
                </p>
                <button class="btn btn-primary" id="next-pronounce-btn">Next Fusion Dish →</button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    arena.querySelector('#play-audio-btn')?.addEventListener('click', () => {
      sound.playClick();
      this.speakText(dish.audioText);
    });

    arena.querySelector('#voice-practice-btn')?.addEventListener('click', () => {
      sound.playClick();
      this.startVoicePractice(dish.audioText);
    });

    arena.querySelectorAll('#syllables-target .syllable-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sound.playClick();
        const idx = parseInt(chip.getAttribute('data-idx'));
        if (!isNaN(idx)) {
          this.assembledSyllables.splice(idx, 1);
          this.renderPronunciationGame(arena);
        }
      });
    });

    arena.querySelectorAll('.pool-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playTick();
        const syl = btn.getAttribute('data-syl');
        this.assembledSyllables.push(syl);

        const currentTarget = dish.syllables.slice(0, this.assembledSyllables.length);
        const isMatchSoFar = this.assembledSyllables.every((val, idx) => val === currentTarget[idx]);

        if (!isMatchSoFar) {
          sound.playWrong();
        } else {
          sound.playCorrect();
        }

        if (this.assembledSyllables.length === dish.syllables.length && isMatchSoFar) {
          launchConfetti();
          sound.playFanfare();
          this.addXP(30, '🗣️ Accent Virtuoso');
        }

        this.renderPronunciationGame(arena);
      });
    });

    arena.querySelector('#clear-syllables-btn')?.addEventListener('click', () => {
      sound.playClick();
      this.assembledSyllables = [];
      this.renderPronunciationGame(arena);
    });

    arena.querySelector('#next-pronounce-btn')?.addEventListener('click', () => {
      sound.playClick();
      this.pronounceIndex = (this.pronounceIndex + 1) % FUSION_DISHES.length;
      this.assembledSyllables = [];
      this.renderPronunciationGame(arena);
    });
  }

  speakText(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.05;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech audio playback is not supported in this browser.');
    }
  }

  startVoicePractice(targetWord) {
    const resultBox = document.getElementById('mic-result');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      resultBox.innerHTML = `⚠️ Microphone recognition not supported in this browser. Practice saying "${targetWord}" aloud with family!`;
      return;
    }

    resultBox.innerHTML = '🎙️ Listening... Speak clearly now into your microphone!';
    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 3;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        resultBox.innerHTML = `Heard: "<strong>${transcript}</strong>"`;

        if (transcript.includes(targetWord.toLowerCase()) || targetWord.toLowerCase().includes(transcript)) {
          sound.playCorrect();
          launchConfetti();
          resultBox.innerHTML += ` — <span style="color:var(--accent-green); font-weight:800;">🌟 Outstanding pronunciation! (+25 Bonus XP)</span>`;
          this.addXP(25);
        } else {
          resultBox.innerHTML += ` — <span style="color:var(--secondary);">Good try! Listen to the audio and try once more.</span>`;
        }
      };

      recognition.onerror = () => {
        resultBox.innerHTML = `⚠️ Mic permission needed or silence detected. Say it aloud with family!`;
      };

      recognition.start();
    } catch (e) {
      resultBox.innerHTML = `⚠️ Could not start microphone: ${e.message}`;
    }
  }

  // ========================================================
  // GAME 3: FAMILY TAG-TEAM TRIVIA
  // ========================================================
  renderTriviaGame(arena) {
    if (this.currentTriviaIndex >= TRIVIA_QUESTIONS.length) {
      arena.innerHTML = `
        <div class="arena-header">
          <div class="arena-title-group">
            <span class="arena-icon">🏆</span>
            <div>
              <h3>Family Tag-Team Trivia: Final Results</h3>
              <p style="font-size:0.85rem; color:var(--text-muted);">Quiz Complete! Outstanding family cooperation.</p>
            </div>
          </div>
        </div>

        <div style="text-align:center; padding:2.5rem 1.5rem; max-width:620px; margin:0 auto;">
          <div style="font-size:3.8rem; margin-bottom:0.5rem;">🎉</div>
          <h2>Family Score: ${this.triviaScore} / 10 Correct</h2>
          <p style="color:var(--text-muted); margin:0.85rem 0 1.5rem; font-size:1.05rem;">
            You mastered international culinary origins, vegetarian bazaar substitutions, and kitchen chemistry!
          </p>
          <div style="background:var(--bg-parchment); border:2px dashed var(--border-dashed); border-radius:var(--radius-md); padding:1.4rem; margin-bottom:1.75rem;">
            <div style="font-weight:800; color:var(--secondary); font-size:1.25rem;">Total XP Earned: +${this.triviaScore * 25} XP</div>
            <div style="font-size:0.88rem; color:var(--text-muted); margin-top:0.35rem;">Personal best recorded in Family Scoreboard!</div>
          </div>
          <button class="btn btn-primary" id="restart-trivia-btn">Play Trivia Again 🔄</button>
        </div>
      `;

      document.getElementById('restart-trivia-btn')?.addEventListener('click', () => {
        sound.playClick();
        this.currentTriviaIndex = 0;
        this.triviaScore = 0;
        this.renderTriviaGame(arena);
      });
      return;
    }

    const q = TRIVIA_QUESTIONS[this.currentTriviaIndex];
    const diff = this.getDifficultySettings();

    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🧠</span>
          <div>
            <h3>Family Tag-Team Trivia</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">10 Questions with Soft Timer & Collaborative Hints</p>
          </div>
        </div>
        <div class="arena-badges" style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <span class="pill-badge ${diff.badgeClass}" style="font-weight:800; border-color:var(--primary); color:var(--primary);">${diff.badgeText}</span>
          <span class="pill-badge">Question ${this.currentTriviaIndex + 1} of 10</span>
          <span class="pill-badge" style="color:var(--primary); font-weight:800;">Score: ${this.triviaScore}</span>
        </div>
      </div>

      <div class="trivia-container">
        <div class="trivia-topbar">
          <div class="timer-soft-badge">
            <span>⏳ Soft Timer:</span>
            <span id="trivia-timer-display">${diff.triviaTimer}s</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(Bonus XP for quick answers!)</span>
          </div>
          <button class="btn btn-secondary" id="toggle-parent-hint-btn" style="padding:0.4rem 0.95rem; font-size:0.85rem;">
            💡 Parent Hint
          </button>
        </div>

        <div class="question-box">
          <div class="question-dish-tag">Topic: ${q.dishName}</div>
          <h3>${q.question}</h3>

          <div class="options-grid">
            ${q.options.map((opt, oIdx) => `
              <button class="option-btn" data-opt-idx="${oIdx}">
                <span style="width:26px; height:26px; border-radius:50%; background:var(--bg-parchment); border:1.5px solid var(--border-color); display:flex; align-items:center; justify-content:center; font-size:0.78rem; font-weight:800;">
                  ${['A', 'B', 'C', 'D'][oIdx]}
                </span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>

          <div id="parent-hint-container" class="parent-hint-box" style="display:none;">
            <strong>👨‍🍳 Parent Clue:</strong> ${q.parentHint}
          </div>

          <div id="trivia-feedback-box" style="margin-top:1.5rem;"></div>
        </div>
      </div>
    `;

    this.startTriviaTimer();

    arena.querySelector('#toggle-parent-hint-btn')?.addEventListener('click', () => {
      sound.playClick();
      const hint = document.getElementById('parent-hint-container');
      if (hint) {
        hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
      }
    });

    arena.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(this.triviaTimer);
        const selectedIdx = parseInt(btn.getAttribute('data-opt-idx'));
        const feedbackBox = document.getElementById('trivia-feedback-box');
        const allBtns = arena.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        if (selectedIdx === q.correctIndex) {
          sound.playCorrect();
          btn.classList.add('correct');
          this.triviaScore++;
          const speedBonus = this.triviaTimeLeft > (diff.triviaTimer / 2) ? 10 : 0;
          this.addXP(25 + speedBonus, q.badge);

          feedbackBox.innerHTML = `
            <div style="background:var(--accent-green-light); border:1.5px solid var(--accent-green); border-radius:var(--radius-md); padding:1.15rem; margin-top:1rem;">
              <div style="color:var(--accent-green); font-weight:800; margin-bottom:0.25rem; font-size:1.05rem;">
                ✅ Spot On! (+${25 + speedBonus} XP)
              </div>
              <div style="font-size:0.88rem; color:var(--text-muted);">${q.explanation}</div>
              <button class="btn btn-primary" id="next-trivia-btn" style="margin-top:0.85rem; padding:0.45rem 1.15rem; font-size:0.85rem;">
                Continue to Next Question →
              </button>
            </div>
          `;
        } else {
          sound.playWrong();
          btn.classList.add('wrong');
          allBtns[q.correctIndex].classList.add('correct');

          feedbackBox.innerHTML = `
            <div style="background:#FEF2F2; border:1.5px solid #F87171; border-radius:var(--radius-md); padding:1.15rem; margin-top:1rem;">
              <div style="color:#DC2626; font-weight:800; margin-bottom:0.25rem; font-size:1.05rem;">
                ❌ Not quite right!
              </div>
              <div style="font-size:0.88rem; color:var(--text-muted);">${q.explanation}</div>
              <button class="btn btn-primary" id="next-trivia-btn" style="margin-top:0.85rem; padding:0.45rem 1.15rem; font-size:0.85rem;">
                Continue to Next Question →
              </button>
            </div>
          `;
        }

        document.getElementById('next-trivia-btn')?.addEventListener('click', () => {
          sound.playClick();
          this.currentTriviaIndex++;
          this.renderTriviaGame(arena);
        });
      });
    });
  }

  startTriviaTimer() {
    clearInterval(this.triviaTimer);
    const diff = this.getDifficultySettings();
    this.triviaTimeLeft = diff.triviaTimer;
    const display = document.getElementById('trivia-timer-display');
    this.triviaTimer = setInterval(() => {
      this.triviaTimeLeft--;
      if (display) {
        display.innerText = `${this.triviaTimeLeft}s`;
      }
      if (this.triviaTimeLeft <= 0) {
        clearInterval(this.triviaTimer);
        if (display) {
          display.innerText = `0s (Time’s up for bonus)`;
        }
      }
    }, 1000);
  }

  // ========================================================
  // GAME 4: HOT POTATO RUSH (PROMPT POTATO ARCADE)
  // Whack, Cook in Coals & Serve Golden!
  // ========================================================
  renderHotPotatoGame(arena) {
    // Cleanup previous loop if active
    if (this.hotPotatoLoop) {
      cancelAnimationFrame(this.hotPotatoLoop);
      this.hotPotatoLoop = null;
    }

    const profile = this.getActiveProfile();
    const highScore = profile.bests?.hotPotato || localStorage.getItem('fusion_hot_potato_high') || 0;
    const diff = this.getDifficultySettings();
    const isItchMode = this.state.hpMode === 'itch';

    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🥔</span>
          <div>
            <h3>Hot Potato Rush</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">
              Inspired by PromptPotatoGames: Launch potato towards your tap/click, roast on coals, and fling into the green window once golden!
            </p>
          </div>
        </div>
        <div class="arena-badges" style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <span class="pill-badge ${diff.badgeClass}" style="font-weight:800; border-color:var(--primary); color:var(--primary);">${diff.badgeText}</span>
          <span class="pill-badge" style="color:var(--primary); font-weight:800;" id="hp-score-badge">Score: 0</span>
          <span class="pill-badge" id="hp-high-badge">Best: ${highScore}</span>
          <span class="pill-badge" style="color:#F59E0B;" id="hp-heat-badge">Heat: Raw (0%)</span>
        </div>
      </div>

      <!-- Dual Mode Selector Switch -->
      <div class="hp-mode-switch-row" style="display:flex; justify-content:center; gap:0.75rem; margin-bottom:1rem; flex-wrap:wrap;">
        <button class="btn btn-secondary hp-mode-switch-btn ${!isItchMode ? 'active' : ''}" id="hp-mode-native-btn" style="padding:0.45rem 1.15rem; font-size:0.9rem;">
          🎮 Native Jump Arena
        </button>
        <button class="btn btn-secondary hp-mode-switch-btn ${isItchMode ? 'active' : ''}" id="hp-mode-itch-btn" style="padding:0.45rem 1.15rem; font-size:0.9rem;">
          🌐 Play Itch.io Original
        </button>
      </div>

      ${isItchMode ? `
        <div class="hp-itch-frame-container" style="text-align:center; padding:0.5rem; margin-bottom:1.5rem;">
          <iframe src="https://itch.io/embed-upload/27878028?color=333333" width="100%" height="480" frameborder="0" allowfullscreen="" style="border:none; border-radius:var(--radius-md); max-width:800px; display:block; margin:0 auto; background:#222;">
            <a href="https://promptpotatogames.itch.io/prompt-potato">Play Hot Potato on itch.io</a>
          </iframe>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-top:0.75rem;">
            Direct web embed of Prompt Potato (itch.io). Switch back to Native Jump Arena for family scoreboard tracking!
          </p>
        </div>
      ` : `
        <div class="hot-potato-arena-wrapper">
          <div class="hot-potato-canvas-container" id="hp-canvas-container">
            <canvas id="hot-potato-canvas" width="800" height="460"></canvas>
            <canvas id="hp-three-canvas" width="800" height="460" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:2;"></canvas>
            <canvas id="hp-3d-game-canvas" width="800" height="460" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2;"></canvas>
            <div class="hot-potato-overlay" id="hp-start-overlay">
              <div class="hp-overlay-card">
                <div class="hp-overlay-icon" style="animation:hpTumble 1.8s infinite ease-in-out;">🥔</div>
                <h3 class="hp-overlay-title">Hot Potato Rush!</h3>
                <p class="hp-overlay-desc">
                  🎯 <strong>Direct Jump:</strong> Tap anywhere on canvas to launch potato directly towards that target!<br>
                  🔥 <strong>Roast:</strong> Bounce on coals at the bottom (${diff.role === 'student' ? 'Wide Safe Zone' : 'Fast Coals'}).<br>
                  ✨ <strong>Serve:</strong> Once <strong>Golden Crispy</strong>, fling into the <strong>Green Serving Window</strong> on the right!
                </p>
                <button class="btn btn-primary" id="hp-start-btn" style="padding:0.75rem 2.2rem; font-size:1.05rem;">
                  🎮 Start Cooking!
                </button>
              </div>
            </div>
          </div>

          <!-- Touch Mobile Whack Controls -->
          <div class="hp-controls-bar">
            <button class="btn btn-primary hp-action-btn" id="hp-tap-whack-btn">
              💥 TAP TO LAUNCH (Or Click Anywhere On Canvas)
            </button>
            <div class="hp-status-strip">
              <div class="hp-meter-outer">
                <div class="hp-meter-fill" id="hp-meter-fill"></div>
              </div>
              <span id="hp-status-text" style="font-size:0.85rem; font-weight:700;">State: Raw</span>
            </div>
          </div>
        </div>
      `}
    `;

    arena.querySelector('#hp-mode-native-btn')?.addEventListener('click', () => {
      sound.playClick();
      this.state.hpMode = 'native';
      this.saveState();
      this.renderHotPotatoGame(arena);
    });

    arena.querySelector('#hp-mode-itch-btn')?.addEventListener('click', () => {
      sound.playClick();
      this.state.hpMode = 'itch';
      this.saveState();
      this.renderHotPotatoGame(arena);
    });

    if (!isItchMode) {
      this.initHotPotatoEngine(arena);
    }
  }

  initHotPotatoEngine(arena) {
    const canvas = arena.querySelector('#hot-potato-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const startOverlay = arena.querySelector('#hp-start-overlay');
    const startBtn = arena.querySelector('#hp-start-btn');
    const whackBtn = arena.querySelector('#hp-tap-whack-btn');
    const scoreBadge = arena.querySelector('#hp-score-badge');
    const highBadge = arena.querySelector('#hp-high-badge');
    const meterFill = arena.querySelector('#hp-meter-fill');
    const statusText = arena.querySelector('#hp-status-text');

    const profile = this.getActiveProfile();
    const diff = this.getDifficultySettings();
    let isPlaying = false;
    let score = 0;
    let highScore = profile.bests?.hotPotato || parseInt(localStorage.getItem('fusion_hot_potato_high') || '0', 10);

    // Physics & potato object
    const potato = {
      x: 200,
      y: 160,
      vx: 3,
      vy: 0,
      radius: 28,
      rotation: 0,
      rotSpeed: 0.05,
      cookLevel: 0, // 0 = raw, 35-75 = golden/cooked, >90 = burnt
      isBurnt: false,
      served: false
    };

    if (this.threeManager && this.threeManager.isSupported()) {
      this.threeManager.initHotPotato3D(arena.querySelector('#hp-canvas-container'), potato);
    }

    // Particles array for sizzles and sparkles
    let particles = [];

    // Service window on right wall
    const serveWindow = {
      x: 775,
      y: 110,
      w: 25,
      h: 150
    };

    // Coals zone at the bottom based on difficulty
    const coalsHeight = diff.coalsHeight;

    const resetPotato = (isNextRound = false) => {
      potato.x = 120 + Math.random() * 80;
      potato.y = 120;
      potato.vx = 2.5 + Math.random() * 2.2;
      potato.vy = -1;
      potato.rotation = 0;
      potato.cookLevel = 0;
      potato.isBurnt = false;
      potato.served = false;
    };

    const updateLeaderboardScore = (currentScore) => {
      if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('fusion_hot_potato_high', highScore);
        if (highBadge) highBadge.innerText = `Best: ${highScore}`;
      }
      if (!profile.bests) profile.bests = {};
      if (currentScore > (profile.bests.hotPotato || 0)) {
        profile.bests.hotPotato = currentScore;
        this.saveState();
        this.submitScoreToGlobal('hotPotato', currentScore, 15).catch(() => {});
      }
    };

    // Target-directed jump towards click/tap coordinates
    const launchPotatoTowards = (targetX, targetY) => {
      if (!isPlaying) return;
      sound.playWhack();

      // Vector from potato center to clicked point
      const dx = targetX - potato.x;
      const dy = targetY - potato.y;

      // Apply directional velocity impulse
      potato.vx = Math.max(-12, Math.min(12, dx * 0.18));
      // Give upward lift towards target with vertical boost
      potato.vy = Math.min(-6, dy * 0.22 - 3.5);
      potato.rotSpeed = (potato.vx > 0 ? 1 : -1) * 0.15;

      // Tap ripple effect at target coordinates
      for (let i = 0; i < 12; i++) {
        particles.push({
          x: targetX,
          y: targetY,
          vx: (Math.random() - 0.5) * 7,
          vy: (Math.random() - 0.5) * 7,
          color: Math.random() > 0.4 ? '#00E5FF' : '#FF0080',
          size: 4 + Math.random() * 4,
          life: 0.8
        });
      }
    };

    const whackPotato = () => {
      if (!isPlaying) return;
      sound.playWhack();

      // Strong upward and forward impulse
      potato.vy = -9.2 - Math.random() * 2;
      potato.vx += (Math.random() * 3.5 - 1.2);
      if (potato.vx < -6) potato.vx = -6;
      if (potato.vx > 7) potato.vx = 7;
      potato.rotSpeed = (Math.random() - 0.5) * 0.28;

      for (let i = 0; i < 8; i++) {
        particles.push({
          x: potato.x,
          y: potato.y,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6,
          color: '#FFE066',
          size: 4 + Math.random() * 3,
          life: 1.0
        });
      }
    };

    const gameOver = (reason) => {
      isPlaying = false;
      sound.playWrong();
      updateLeaderboardScore(score);

      startOverlay.style.display = 'flex';
      startOverlay.innerHTML = `
        <div class="hp-overlay-card">
          <div class="hp-overlay-icon">${reason === 'burnt' ? '🔥' : '💥'}</div>
          <h3 class="hp-overlay-title" style="color:#F43F5E;">
            ${reason === 'burnt' ? 'Charcoal Alert! Burnt!' : 'Dropped Potato!'}
          </h3>
          <p style="color:var(--text-main); font-size:1.05rem; font-weight:800; margin-bottom:0.35rem;">
            Score: ${score} Potatoes Served
          </p>
          <p class="hp-overlay-desc">
            ${reason === 'burnt' 
              ? 'Kept on sizzling coals too long! Serve through the green window when it glows Golden.'
              : 'Keep the potato airborne by tapping towards the green window!'}
          </p>
          <button class="btn btn-primary" id="hp-restart-btn" style="padding:0.75rem 2.2rem; font-size:1.05rem;">
            🔄 Play Again
          </button>
        </div>
      `;

      arena.querySelector('#hp-restart-btn')?.addEventListener('click', () => {
        startOverlay.style.display = 'none';
        score = 0;
        scoreBadge.innerText = `Score: 0`;
        resetPotato();
        isPlaying = true;
      });
    };

    const serveSuccess = () => {
      sound.playFanfare();
      launchConfetti(canvas.getBoundingClientRect().right, canvas.getBoundingClientRect().top + 150);
      score += 10;
      scoreBadge.innerText = `Score: ${score}`;
      updateLeaderboardScore(score);

      this.addXP(15, '🥔 Master Potato Roaster');
      showToast(`Served Golden Crispy Fusion Potato! +10 Pts (+15 XP)`, 'success');

      // Bonus celebration burst
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: serveWindow.x,
          y: serveWindow.y + Math.random() * serveWindow.h,
          vx: -Math.random() * 8,
          vy: (Math.random() - 0.5) * 8,
          color: '#10B981',
          size: 5 + Math.random() * 4,
          life: 1.2
        });
      }

      resetPotato(true);
    };

    // User controls
    startBtn?.addEventListener('click', () => {
      sound.playClick();
      startOverlay.style.display = 'none';
      score = 0;
      scoreBadge.innerText = `Score: 0`;
      resetPotato();
      isPlaying = true;
    });

    whackBtn?.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      whackPotato();
    });
    whackBtn?.addEventListener('click', (e) => {
      e.preventDefault();
    });

    // Pointerdown on Canvas -> Direct jump impulse to click/tap location
    canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const clickX = (e.clientX - rect.left) * scaleX;
      const clickY = (e.clientY - rect.top) * scaleY;
      launchPotatoTowards(clickX, clickY);
    });

    const keyHandler = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        if (this.state.activeGameTab === 'hotPotato') {
          e.preventDefault();
          whackPotato();
        }
      }
    };
    window.addEventListener('keydown', keyHandler);

    // Physics Engine Loop with Adaptive Gravity
    const gravity = diff.hpGravity;
    const threePotato = this.init3DHotPotato(arena.querySelector('#hp-canvas-container'));

    const updateLoop = () => {
      if (isPlaying) {
        if (threePotato) {
          threePotato.update(potato.x, potato.y, potato.vx, potato.vy, potato.cookLevel);
        }
        // Apply Gravity
        potato.vy += gravity;
        potato.x += potato.vx;
        potato.y += potato.vy;
        potato.rotation += potato.rotSpeed;
        if (this.threeManager && this.threeManager.isSupported()) {
          this.threeManager.updateHotPotato3D(potato);
        }

        // Left wall bounce
        if (potato.x - potato.radius < 0) {
          potato.x = potato.radius;
          potato.vx = -potato.vx * 0.85;
          sound.playTick();
        }

        // Right wall bounce or Serve Window check
        if (potato.x + potato.radius >= serveWindow.x) {
          if (potato.y >= serveWindow.y && potato.y <= serveWindow.y + serveWindow.h) {
            if (potato.cookLevel >= 38 && potato.cookLevel <= 85) {
              serveSuccess();
            } else if (potato.cookLevel < 38) {
              potato.x = serveWindow.x - potato.radius;
              potato.vx = -Math.abs(potato.vx) * 0.9;
              sound.playWrong();
              showToast('Potato is still RAW! Cook it on the coals first!', 'info');
            } else {
              gameOver('burnt');
            }
          } else {
            potato.x = serveWindow.x - potato.radius;
            potato.vx = -Math.abs(potato.vx) * 0.85;
            sound.playTick();
          }
        }

        // Ceiling bounce
        if (potato.y - potato.radius <= 0) {
          potato.y = potato.radius;
          potato.vy = Math.abs(potato.vy) * 0.7;
        }

        // Bottom Coals Zone with Adaptive Height and Boost
        const coalsY = canvas.height - coalsHeight;
        if (potato.y + potato.radius >= coalsY) {
          potato.y = coalsY - potato.radius;
          potato.vy = diff.hpCoalsBoost - Math.random() * 2;
          potato.cookLevel += (diff.role === 'student' ? 12 : 16);
          sound.playSizzle();

          // Smoke / ember particles
          for (let i = 0; i < 12; i++) {
            particles.push({
              x: potato.x + (Math.random() - 0.5) * 20,
              y: coalsY,
              vx: (Math.random() - 0.5) * 4,
              vy: -2 - Math.random() * 3,
              color: Math.random() > 0.5 ? '#FF4500' : '#FFD700',
              size: 3 + Math.random() * 4,
              life: 0.9
            });
          }
        }

        // Burnt check
        if (potato.cookLevel > 95) {
          gameOver('burnt');
        }

        // Update UI meter
        const cookPct = Math.min(100, Math.floor(potato.cookLevel));
        if (meterFill) meterFill.style.width = `${cookPct}%`;

        let color = '#38BDF8';
        let label = `Raw (${cookPct}%)`;
        if (cookPct >= 38 && cookPct <= 85) {
          color = '#10B981';
          label = `✨ GOLDEN & CRISPY! SERVE NOW! (${cookPct}%)`;
          if (meterFill) meterFill.style.background = 'linear-gradient(90deg, #10B981, #F59E0B)';
        } else if (cookPct > 85) {
          color = '#EF4444';
          label = `⚠️ BURNING! SERVE FAST! (${cookPct}%)`;
          if (meterFill) meterFill.style.background = '#EF4444';
        } else {
          if (meterFill) meterFill.style.background = '#38BDF8';
        }
        if (statusText) {
          statusText.style.color = color;
          statusText.innerText = `State: ${label}`;
        }
        const heatBadge = arena.querySelector('#hp-heat-badge');
        if (heatBadge) heatBadge.innerText = `Heat: ${cookPct}%`;
      }

      // DRAW CANVAS
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background Kitchen Tandoor Ambience
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#10141F');
      bgGrad.addColorStop(1, '#080A10');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Tandoor Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 40; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // 1. Draw Coals at the bottom
      const coalGrad = ctx.createLinearGradient(0, canvas.height - coalsHeight, 0, canvas.height);
      coalGrad.addColorStop(0, '#FF4500');
      coalGrad.addColorStop(0.3, '#E11D48');
      coalGrad.addColorStop(1, '#1E0B0F');
      ctx.fillStyle = coalGrad;
      ctx.fillRect(0, canvas.height - coalsHeight, canvas.width, coalsHeight);

      // Sizzling Coal Embers
      ctx.fillStyle = '#FFA500';
      for (let i = 0; i < canvas.width; i += 24) {
        const coalY = canvas.height - coalsHeight + 4 + Math.sin((Date.now() / 200) + i) * 3;
        ctx.beginPath();
        ctx.arc(i + 12, coalY, 8 + Math.sin(i) * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 13px "Outfit", sans-serif';
      ctx.fillText('🔥 HOT COALS TANDOOR ZONE (Bounce here to roast)', 20, canvas.height - 18);

      // 2. Draw Green Serving Window
      ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 3;
      ctx.fillRect(serveWindow.x, serveWindow.y, serveWindow.w, serveWindow.h);
      ctx.strokeRect(serveWindow.x, serveWindow.y, serveWindow.w, serveWindow.h);

      // Window pulsing glow
      ctx.save();
      ctx.translate(serveWindow.x - 10, serveWindow.y + serveWindow.h / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = '#10B981';
      ctx.font = 'bold 13px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🍽️ SERVING WINDOW', 0, 0);
      ctx.restore();

      // 3. Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.035;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // 4. Draw Potato with Color Dynamics
      ctx.save();
      ctx.translate(potato.x, potato.y);
      ctx.rotate(potato.rotation);

      // Color based on cooking level
      let potatoFill = '#E2B878'; // Raw russet skin
      let potatoStroke = '#8C6030';
      if (potato.cookLevel >= 38 && potato.cookLevel <= 85) {
        potatoFill = '#F59E0B'; // Golden fried/roasted
        potatoStroke = '#B45309';
      } else if (potato.cookLevel > 85) {
        potatoFill = '#4B2515'; // Dark burning
        potatoStroke = '#1F110B';
      }

      // Potato Body (Slightly irregular oval)
      ctx.fillStyle = potatoFill;
      ctx.strokeStyle = potatoStroke;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, potato.radius + 4, potato.radius - 3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Potato Spots / Texture
      ctx.fillStyle = potatoStroke;
      ctx.beginPath();
      ctx.arc(-10, -6, 2.5, 0, Math.PI * 2);
      ctx.arc(8, 7, 2, 0, Math.PI * 2);
      ctx.arc(12, -8, 2.5, 0, Math.PI * 2);
      ctx.arc(-6, 9, 2, 0, Math.PI * 2);
      ctx.fill();

      // Golden Steam / Glow
      if (potato.cookLevel >= 38 && potato.cookLevel <= 85) {
        ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
        ctx.beginPath();
        ctx.arc(0, 0, potato.radius + 9, 0, Math.PI * 2);
        ctx.fill();
      }

      // Potato Face
      ctx.fillStyle = '#1A1108';
      ctx.beginPath();
      ctx.arc(-8, -2, 2.8, 0, Math.PI * 2); // left eye
      ctx.arc(8, -2, 2.8, 0, Math.PI * 2);  // right eye
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0, 4, 4, 0, Math.PI); // smile
      ctx.stroke();

      ctx.restore();

      // Next frame
      this.hotPotatoLoop = requestAnimationFrame(updateLoop);
    };

    this.hotPotatoLoop = requestAnimationFrame(updateLoop);
  }

  // ========================================================
  // GAME 5: SPIN THE WHEEL & CULINARY FOOD SCIENCE
  // ========================================================
  renderSpinScienceGame(arena) {
    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🎡</span>
          <div>
            <h3>Spin the Wheel: Culinary Food Science Lab</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Discover why acid, heat, and emulsions work at a molecular level</p>
          </div>
        </div>
        <div class="arena-badges">
          <span class="pill-badge" style="color:var(--secondary); font-weight:800;">6 Science Topics</span>
          <span class="pill-badge">+50 XP Challenge</span>
        </div>
      </div>

      <div class="wheel-science-layout">
        <!-- Interactive Spinning Wheel -->
        <div class="wheel-stage">
          <div class="wheel-outer">
            <div class="wheel-pointer"></div>
            <canvas id="science-wheel-canvas" width="320" height="320"></canvas>
          </div>

          <button class="spin-trigger-btn" id="spin-wheel-btn">
            <span>🎲 Spin the Science Wheel!</span>
          </button>
          <div style="font-size:0.85rem; color:var(--text-muted);">Spin to land on a culinary reaction topic!</div>
        </div>

        <!-- Science Explanation Card -->
        <div class="science-explainer-card" id="science-explainer-display">
          <div style="text-align:center; padding:2rem 1rem;">
            <div style="font-size:3.5rem; margin-bottom:0.5rem;">🧪</div>
            <h3 style="font-size:1.55rem;">Ready for Food Chemistry?</h3>
            <p style="color:var(--text-muted); margin:0.85rem 0; line-height:1.6;">
              Hit the <strong>Spin the Science Wheel</strong> button to unveil molecular secrets behind vegetarian fusion dishes: Acid Denaturation, Maillard Browning, Emulsions, Osmosis, and Spice Chemistry!
            </p>
          </div>
        </div>
      </div>
    `;

    this.initWheel();
    document.getElementById('spin-wheel-btn')?.addEventListener('click', () => this.spinWheel());
  }

  initWheel() {
    const canvas = document.getElementById('science-wheel-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const totalSegments = CULINARY_SCIENCE_TOPICS.length;
    const arc = (Math.PI * 2) / totalSegments;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = cx - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    CULINARY_SCIENCE_TOPICS.forEach((topic, i) => {
      const angle = i * arc;
      ctx.beginPath();
      ctx.fillStyle = topic.color;
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle, angle + arc);
      ctx.lineTo(cx, cy);
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 13px Outfit, sans-serif';
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 3;
      ctx.fillText(`${topic.icon} ${topic.shortName}`, radius - 20, 5);
      ctx.restore();
    });

    ctx.beginPath();
    ctx.arc(cx, cy, 26, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'var(--secondary)';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = 'var(--primary)';
    ctx.fill();
  }

  spinWheel() {
    if (this.isSpinning) return;
    this.isSpinning = true;

    const btn = document.getElementById('spin-wheel-btn');
    if (btn) btn.disabled = true;

    const canvas = document.getElementById('science-wheel-canvas');
    const totalSegments = CULINARY_SCIENCE_TOPICS.length;
    const arcDeg = 360 / totalSegments;

    const targetIndex = Math.floor(Math.random() * totalSegments);
    const extraSpins = 3 + Math.floor(Math.random() * 2);
    const targetAngle = (extraSpins * 360) + (360 - (targetIndex * arcDeg) - (arcDeg / 2) - 90);

    canvas.style.transition = 'transform 1.35s cubic-bezier(0.12, 0.9, 0.2, 1)';
    canvas.style.transform = `rotate(${targetAngle}deg)`;

    let tickCount = 0;
    const tickInterval = setInterval(() => {
      sound.playTick();
      tickCount++;
      if (tickCount > 18) clearInterval(tickInterval);
    }, 65);

    setTimeout(() => {
      this.isSpinning = false;
      if (btn) btn.disabled = false;
      sound.playFanfare();
      launchConfetti();
      this.showScienceExplainer(CULINARY_SCIENCE_TOPICS[targetIndex]);
    }, 1400);
  }

  showScienceExplainer(topic) {
    const display = document.getElementById('science-explainer-display');
    if (!display) return;

    display.innerHTML = `
      <div style="border-bottom:2px dashed var(--border-dashed); padding-bottom:1rem; margin-bottom:1.25rem;">
        <span class="pill-badge" style="background:${topic.color}; color:white;">${topic.icon} ${topic.shortName}</span>
        <h3 style="margin-top:0.45rem; font-size:1.55rem;">${topic.title}</h3>
        <p style="font-weight:800; color:var(--secondary); font-size:1rem;">"${topic.summary}"</p>
      </div>

      <p style="font-size:0.95rem; line-height:1.65; margin-bottom:1.25rem;">
        ${topic.explanation}
      </p>

      <!-- 3D Molecular Chemistry Model Canvas -->
      <div id="molecule-3d-canvas" class="molecule-3d-canvas" aria-label="3D Interactive Molecular Spice Model"></div>

      <div style="background:var(--secondary-light); border-left:4px solid var(--secondary); padding:0.85rem 1.15rem; border-radius:var(--radius-sm); font-size:0.88rem; margin-bottom:1.5rem;">
        <strong>💡 Fascinating Food Fact:</strong> ${topic.funFact}
      </div>

      <div style="background:var(--bg-card); border:1.5px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem;">
        <div style="font-size:0.88rem; font-weight:800; color:var(--primary); margin-bottom:0.5rem;">
          ⚡ Rapid Science Challenge (+50 Bonus XP):
        </div>
        <p style="font-size:0.92rem; margin-bottom:0.85rem;"><strong>${topic.question.text}</strong></p>

        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          ${topic.question.options.map((opt, oIdx) => `
            <button class="option-btn science-q-btn" data-q-idx="${oIdx}" style="padding:0.75rem 1rem; font-size:0.88rem;">
              <span>${['A', 'B', 'C', 'D'][oIdx]}. ${opt}</span>
            </button>
          `).join('')}
        </div>
        <div id="science-q-feedback" style="margin-top:0.85rem;"></div>
      </div>
    `;

    if (this.threeManager && this.threeManager.isSupported()) {
      const container = document.getElementById('molecule-3d-canvas');
      if (container) {
        this.threeManager.initMolecularModel3D(container, topic);
      }
    }

    display.querySelectorAll('.science-q-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = parseInt(btn.getAttribute('data-q-idx'));
        const feedback = document.getElementById('science-q-feedback');
        display.querySelectorAll('.science-q-btn').forEach(b => b.disabled = true);

        if (selected === topic.question.correctIndex) {
          sound.playCorrect();
          btn.classList.add('correct');
          this.addXP(50, `🔬 ${topic.shortName} Master`);
          feedback.innerHTML = `
            <div style="color:var(--accent-green); font-size:0.88rem; font-weight:800;">
              🎉 Absolutely Correct! (+50 XP). ${topic.question.explanation}
            </div>
          `;
        } else {
          sound.playWrong();
          btn.classList.add('wrong');
          feedback.innerHTML = `
            <div style="color:#DC2626; font-size:0.88rem;">
              ❌ Nice attempt! The right answer was option ${['A','B','C','D'][topic.question.correctIndex]}. ${topic.question.explanation}
            </div>
          `;
        }
      });
    });
  }

  // ========================================================
  // KITCHEN LAB RECIPE CAROUSEL (WITH CUISINE FILTER)
  // ========================================================
  renderKitchenLab(filter = 'all') {
    const container = document.getElementById('kitchen-lab-recipes');
    if (!container) return;

    this.state.recipeFilter = filter;
    this.saveState();

    const filteredDishes = filter === 'all' 
      ? FUSION_DISHES 
      : FUSION_DISHES.filter(d => d.origin.toLowerCase().includes(filter.toLowerCase()));

    container.innerHTML = filteredDishes.map(dish => `
      <div class="cookbook-recipe-card" data-dish-id="${dish.id}">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.65rem;">
            <span class="veg-badge"><span class="veg-icon-dot"></span> 100% Veg</span>
            <span class="pill-badge">${dish.origin}</span>
          </div>
          <h3 style="font-size:1.45rem; margin-bottom:0.35rem;">${dish.name}</h3>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1.25rem;">${dish.description}</p>

          <h4 style="font-size:1rem; margin-bottom:0.45rem;">🛒 Indian Bazaar Substitutes:</h4>
          <table class="substitutes-table">
            <thead>
              <tr>
                <th>Global Item</th>
                <th>Desi Alternative</th>
              </tr>
            </thead>
            <tbody>
              ${dish.indianSubstitutes.slice(0, 3).map(sub => `
                <tr>
                  <td>${sub.original}</td>
                  <td><strong>${sub.substitute}</strong></td>
                </tr>
              `).join('')}
              ${dish.indianSubstitutes.length > 3 ? `
                <tr>
                  <td colspan="2" style="font-size:0.78rem; color:var(--primary); text-align:center;">
                    + ${dish.indianSubstitutes.length - 3} more in full recipe guide
                  </td>
                </tr>
              ` : ''}
            </tbody>
          </table>
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:1.15rem; margin-top:1.15rem; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.78rem; color:var(--text-muted);">Availability: <strong>${dish.availability}</strong></span>
          <button class="btn btn-primary open-recipe-popout-btn" data-dish-id="${dish.id}" style="padding:0.45rem 1rem; font-size:0.84rem;">
            👨‍🍳 Step-by-Step & AI Chef →
          </button>
        </div>
      </div>
    `).join('');

    // Clicking the card or the button pops out the full recipe & AI Chatbot
    container.querySelectorAll('.cookbook-recipe-card').forEach(card => {
      card.addEventListener('click', () => {
        const dishId = card.getAttribute('data-dish-id');
        this.openRecipePopout(dishId);
      });
    });

    // Filter Chips
    document.querySelectorAll('#cuisine-filter-chips .recipe-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-filter') === filter);
      chip.onclick = () => {
        sound.playClick();
        const newFilter = chip.getAttribute('data-filter');
        this.renderKitchenLab(newFilter);
      };
    });

    // Horizontal Scroll Arrows for Recipes
    const rLeft = document.getElementById('recipes-scroll-left');
    const rRight = document.getElementById('recipes-scroll-right');
    if (rLeft) {
      rLeft.onclick = () => {
        sound.playClick();
        container.scrollBy({ left: -360, behavior: 'smooth' });
      };
    }
    if (rRight) {
      rRight.onclick = () => {
        sound.playClick();
        container.scrollBy({ left: 360, behavior: 'smooth' });
      };
    }
    this.initTandoor3D();
  }

  // ========================================================
  // RECIPE POP-OUT MODAL & GEMINI / WORKERS AI SOUS-CHEF
  // ========================================================
  getGeminiKey() {
    return localStorage.getItem('fusion_gemini_api_key') || '';
  }

  setGeminiKey(key) {
    if (key && key.trim()) {
      localStorage.setItem('fusion_gemini_api_key', key.trim());
    } else {
      localStorage.removeItem('fusion_gemini_api_key');
    }
  }

  getWorkersAiKey() {
    return localStorage.getItem('fusion_workers_ai_token') || '';
  }

  getWorkersAiAccount() {
    return localStorage.getItem('fusion_workers_ai_account') || '';
  }

  setWorkersAiConfig(token, accountId) {
    if (token && token.trim()) {
      localStorage.setItem('fusion_workers_ai_token', token.trim());
    } else {
      localStorage.removeItem('fusion_workers_ai_token');
    }
    if (accountId && accountId.trim()) {
      localStorage.setItem('fusion_workers_ai_account', accountId.trim());
    } else {
      localStorage.removeItem('fusion_workers_ai_account');
    }
  }

  openRecipePopout(dishId) {
    sound.playClick();
    const dish = FUSION_DISHES.find(d => d.id === dishId);
    if (!dish) return;

    this.activePopoutDish = dish;
    const modal = document.getElementById('recipe-popout-modal');
    const dialog = document.getElementById('recipe-popout-dialog-content');
    if (!modal || !dialog) return;

    if (!this.state.recipeCompletedSteps) {
      this.state.recipeCompletedSteps = {};
    }
    const completedSteps = this.state.recipeCompletedSteps[dish.id] || [];
    const totalSteps = dish.recipeSteps.length;
    const hasApiKey = !!this.getGeminiKey();

    dialog.innerHTML = `
      <!-- Header -->
      <div class="recipe-popout-header">
        <div class="recipe-popout-title-wrap">
          <div class="recipe-popout-meta-row">
            <span class="veg-badge"><span class="veg-icon-dot"></span> 100% Pure Veg</span>
            <span class="pill-badge">${dish.origin}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">Availability: <strong>${dish.availability}</strong></span>
          </div>
          <h2 id="popout-recipe-title">${dish.name}</h2>
          <div class="recipe-popout-phonetic-row">
            <span style="font-size:0.84rem; color:var(--text-muted);">Phonetic: <em>${dish.phonetic}</em></span>
            <button class="icon-btn" id="popout-pronounce-btn" title="Listen to Pronunciation" style="width:28px; height:28px; font-size:0.85rem;">🗣️</button>
          </div>
        </div>

        <button class="modal-close-btn" id="close-recipe-popout-btn" aria-label="Close Recipe Popout">✕</button>
      </div>

      <!-- Two-Column Grid: Left Steps & Substitutes | Right Gemini AI Chatbot -->
      <div class="recipe-popout-grid">
        <!-- Left Column: Detailed Step-by-Step Cooking Guide -->
        <div class="recipe-steps-column">
          <!-- Backstory -->
          <div style="background:var(--bg-card-subtle); border:1.5px solid var(--border-color); border-radius:var(--radius-md); padding:1rem 1.25rem; margin-bottom:1.5rem;">
            <h4 style="font-size:0.95rem; margin-bottom:0.35rem; color:var(--primary); display:flex; align-items:center; gap:0.4rem;">
              <span>🌏 The Fusion Heritage</span>
            </h4>
            <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.55;">${dish.cultureStory}</p>
          </div>

          <!-- Substitutes Table -->
          <div style="margin-bottom:1.75rem;">
            <h4 style="font-size:1.1rem; margin-bottom:0.65rem; display:flex; align-items:center; gap:0.5rem;">
              <span>🛒 Indian Bazaar Substitutions & Secrets</span>
            </h4>
            <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:0.85rem;">
              Exact swaps found in everyday Indian local sabzi mandis, dairies, and grocers:
            </p>
            <div class="table-responsive-wrapper">
              <table class="substitutes-table" style="font-size:0.86rem;">
                <thead>
                  <tr>
                    <th>Global Ingredient</th>
                    <th>Desi Replacement</th>
                    <th>Culinary Science Reason</th>
                  </tr>
                </thead>
                <tbody>
                  ${dish.indianSubstitutes.map(s => `
                    <tr>
                      <td><strong>${s.original}</strong></td>
                      <td><strong style="color:var(--accent-green);">${s.substitute}</strong></td>
                      <td style="font-size:0.82rem; color:var(--text-muted);">${s.why}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Step-by-Step Interactive Cooking Procedure -->
          <div style="margin-bottom:1.75rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem;">
              <div>
                <h4 style="font-size:1.15rem; margin-bottom:0.15rem;">👨‍🍳 Step-by-Step Cooking Procedure</h4>
                <p style="font-size:0.82rem; color:var(--text-muted);">Check off each step as you and your family prepare the dish!</p>
              </div>
              <div style="font-size:0.84rem; font-weight:800; color:var(--primary);" id="step-progress-indicator">
                ${completedSteps.length} / ${totalSteps} Completed
              </div>
            </div>

            <!-- Steps List -->
            <div id="recipe-steps-list">
              ${dish.recipeSteps.map((s) => {
                const isDone = completedSteps.includes(s.step);
                return `
                  <div class="recipe-step-card ${isDone ? 'completed' : ''}" id="step-card-${s.step}">
                    <div class="step-header-row">
                      <div class="step-title-wrap">
                        <span class="step-num-pill">Step ${s.step}</span>
                        <strong style="font-size:1.02rem;">${s.title}</strong>
                      </div>
                      <div class="step-header-actions">
                        ${s.kidSafe 
                          ? '<span class="pill-badge" style="background:var(--tag-veg-bg); color:var(--accent-green); border-color:var(--tag-veg-border); font-size:0.75rem;">👶 Kid-Friendly</span>'
                          : '<span class="pill-badge" style="background:#fff1f2; color:#e11d48; border-color:#fecdd3; font-size:0.75rem;">🔥 Parent Assistance</span>'
                        }
                        <button class="step-checkbox-btn ${isDone ? 'checked' : ''}" data-step="${s.step}">
                          ${isDone ? '✅ Done' : '⬜ Mark Done'}
                        </button>
                      </div>
                    </div>
                    <p style="font-size:0.9rem; color:var(--text-main); line-height:1.6; margin-left:0.25rem;">
                      ${s.text}
                    </p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Food Science Note -->
          <div style="background:linear-gradient(135deg, var(--bg-card-subtle), var(--bg-card)); border:2px dashed var(--border-dashed); border-radius:var(--radius-md); padding:1.25rem; position:relative;">
            <h4 style="font-size:0.95rem; margin-bottom:0.4rem; color:var(--secondary); display:flex; align-items:center; gap:0.4rem;">
              <span>🧪 Food Chemistry Secret</span>
            </h4>
            <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.55;">
              ${dish.scienceNote || 'Understanding ingredient interactions allows Indian home cooks to replicate complex international textures without compromising on vegetarian values.'}
            </p>
          </div>
        </div>

        <!-- Right Column: Gemini AI Sous-Chef Chatbot -->
        <div class="recipe-ai-column">
          <!-- AI Header Bar -->
          <div class="ai-header-bar">
            <div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span style="font-size:1.3rem;">✨</span>
                <strong style="font-size:1.05rem;">Gemini AI Sous-Chef</strong>
              </div>
              <span style="font-size:0.78rem; color:var(--text-muted);">Real-time cooking helper for ${dish.name}</span>
            </div>

            <!-- API Key Toggle Pill -->
            <button class="api-key-pill ${hasApiKey ? 'active' : ''}" id="toggle-api-key-box-btn">
              <span>${hasApiKey ? '⚡ AI Key Active' : '⚙️ Setup AI Engine'}</span>
            </button>
          </div>

          <!-- Collapsible API Key Box — hidden by default, toggle via button -->
          <div class="api-key-box" id="api-key-config-box" style="display:none;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:700;">Google Gemini API Key:</span>
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener" style="font-size:0.76rem; color:var(--primary); font-weight:700;">
                Get Free Key ↗
              </a>
            </div>
            <div class="api-key-input-row">
              <input type="password" id="gemini-api-key-input" class="api-key-input" placeholder="Paste AI Studio API key (AIzaSy...)" value="${this.getGeminiKey()}">
              <button class="icon-btn" id="show-hide-key-btn" title="Toggle visibility" style="width:34px; height:34px; font-size:0.9rem;">👁️</button>
              <button class="btn btn-primary" id="save-gemini-key-btn" style="padding:0.35rem 0.85rem; font-size:0.8rem;">Save</button>
            </div>
            <div style="margin-top:0.6rem; border-top:1px dashed var(--border-color); padding-top:0.6rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
                <span style="font-weight:700; font-size:0.82rem;">⚡ Or Cloudflare Workers AI:</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:0.4rem;">
                <input type="password" id="workers-ai-token-input" class="api-key-input" placeholder="Cloudflare API Token with Workers AI Read" value="${this.getWorkersAiKey()}">
                <div style="display:flex; gap:0.4rem;">
                  <input type="text" id="workers-ai-account-input" class="api-key-input" placeholder="Cloudflare Account ID" value="${this.getWorkersAiAccount()}">
                  <button class="btn btn-primary" id="save-workers-ai-btn" style="padding:0.35rem 0.85rem; font-size:0.8rem;">Save</button>
                </div>
              </div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted); margin-top:0.25rem;">
              Keys are securely stored only inside your browser. Offline responses work instantly without keys!
            </span>
          </div>

          <!-- Chat Messages Container -->
          <div class="chat-messages-container" id="recipe-chat-messages">
            <!-- Welcome Bubble -->
            <div class="chat-bubble ai">
              <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.25rem; font-weight:800; font-size:0.78rem; color:var(--primary);">
                <span>👩‍🍳 Sous-Chef Maya</span>
              </div>
              Namaste! I'm your AI Sous-Chef for <strong>${dish.name}</strong>. How can I assist your kitchen adventure today?
              ${!hasApiKey ? '<div style="margin-top:0.4rem; font-size:0.78rem; color:var(--secondary); font-weight:700;">💡 Tip: Enter your Gemini API key above to unlock fully customized, real-time responses!</div>' : ''}
            </div>
          </div>

          <!-- Quick Suggestions Chips -->
          <div class="chat-chip-suggestions" id="chat-chip-suggestions">
            <button class="chat-chip" data-prompt="How can I make ${dish.name} less spicy and super kid-friendly?">🌶️ Kid-Friendly Spice</button>
            <button class="chat-chip" data-prompt="What if I don't have the primary desi substitute, what can I use?">🥫 Missing Substitutes</button>
            <button class="chat-chip" data-prompt="Can I prepare this in advance for a family party?">⏱️ Prep Shortcuts</button>
            <button class="chat-chip" data-prompt="Explain the food science of ${dish.name} so I can teach my kids!">🧪 Science for Kids</button>
          </div>

          <!-- Chat Input Bar -->
          <form class="chat-input-bar" id="recipe-chat-form">
            <input type="text" id="recipe-chat-input" class="chat-input" placeholder="Ask Sous-Chef anything about this recipe..." autocomplete="off">
            <button type="submit" class="chat-send-btn" id="recipe-chat-send-btn" title="Send Question">➤</button>
          </form>
        </div>
      </div>
    `;

    modal.classList.add('open');
    this.bindRecipePopoutEvents(dish);
  }

  closeRecipePopout() {
    sound.playClick();
    document.getElementById('recipe-popout-modal')?.classList.remove('open');
  }

  bindRecipePopoutEvents(dish) {
    const modal = document.getElementById('recipe-popout-modal');
    const closeBtn = document.getElementById('close-recipe-popout-btn');
    closeBtn?.addEventListener('click', () => this.closeRecipePopout());

    // Pronunciation audio
    document.getElementById('popout-pronounce-btn')?.addEventListener('click', () => {
      sound.playClick();
      if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(dish.audioText || dish.name);
        utter.rate = 0.88;
        window.speechSynthesis.speak(utter);
      }
    });

    // Step checkboxes
    document.querySelectorAll('#recipe-steps-list .step-checkbox-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const stepNum = parseInt(btn.getAttribute('data-step'), 10);
        this.toggleStepDone(dish.id, stepNum);
      });
    });

    // API Key box toggle
    const toggleKeyBtn = document.getElementById('toggle-api-key-box-btn');
    const keyBox = document.getElementById('api-key-config-box');
    toggleKeyBtn?.addEventListener('click', () => {
      sound.playClick();
      keyBox.style.display = keyBox.style.display === 'none' ? 'flex' : 'none';
    });

    // Show/hide key
    const keyInput = document.getElementById('gemini-api-key-input');
    const showHideBtn = document.getElementById('show-hide-key-btn');
    showHideBtn?.addEventListener('click', () => {
      if (keyInput.type === 'password') {
        keyInput.type = 'text';
        showHideBtn.innerText = '🙈';
      } else {
        keyInput.type = 'password';
        showHideBtn.innerText = '👁️';
      }
    });

    // Save Gemini key
    document.getElementById('save-gemini-key-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const val = keyInput.value.trim();
      this.setGeminiKey(val);
      sound.playCorrect();
      showToast(val ? 'Gemini API key saved!' : 'Gemini API key removed', 'success');
      keyBox.style.display = 'none';
      if (toggleKeyBtn) {
        toggleKeyBtn.className = `api-key-pill ${val || this.getWorkersAiKey() ? 'active' : ''}`;
        toggleKeyBtn.innerHTML = `<span>${val || this.getWorkersAiKey() ? '⚡ AI Key Active' : '⚙️ Setup AI Engine'}</span>`;
      }
    });

    // Save Workers AI config
    document.getElementById('save-workers-ai-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const token = document.getElementById('workers-ai-token-input')?.value.trim();
      const accountId = document.getElementById('workers-ai-account-input')?.value.trim();
      this.setWorkersAiConfig(token, accountId);
      sound.playCorrect();
      showToast(token ? 'Cloudflare Workers AI configured!' : 'Workers AI config removed', 'success');
      keyBox.style.display = 'none';
      if (toggleKeyBtn) {
        toggleKeyBtn.className = `api-key-pill ${token || this.getGeminiKey() ? 'active' : ''}`;
        toggleKeyBtn.innerHTML = `<span>${token || this.getGeminiKey() ? '⚡ AI Key Active' : '⚙️ Setup AI Engine'}</span>`;
      }
    });

    // Suggestion chips
    document.querySelectorAll('#chat-chip-suggestions .chat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const p = chip.getAttribute('data-prompt');
        this.handleChatSubmit(dish, p);
      });
    });

    // Chat form submit
    const chatForm = document.getElementById('recipe-chat-form');
    const chatInput = document.getElementById('recipe-chat-input');
    chatForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (text) {
        chatInput.value = '';
        this.handleChatSubmit(dish, text);
      }
    });
  }

  toggleStepDone(dishId, stepNumber) {
    if (!this.state.recipeCompletedSteps) {
      this.state.recipeCompletedSteps = {};
    }
    if (!this.state.recipeCompletedSteps[dishId]) {
      this.state.recipeCompletedSteps[dishId] = [];
    }
    const list = this.state.recipeCompletedSteps[dishId];
    const index = list.indexOf(stepNumber);
    if (index === -1) {
      list.push(stepNumber);
      sound.playCorrect();
      this.addXP(25, 'Recipe Explorer');
      showToast(`Step ${stepNumber} completed! (+25 XP)`, 'success');
      launchConfetti();
    } else {
      list.splice(index, 1);
      sound.playClick();
    }
    this.saveState();

    // Update UI
    const card = document.getElementById(`step-card-${stepNumber}`);
    const btn = card?.querySelector('.step-checkbox-btn');
    const dish = FUSION_DISHES.find(d => d.id === dishId);
    if (card && btn && dish) {
      const isDone = list.includes(stepNumber);
      card.classList.toggle('completed', isDone);
      btn.classList.toggle('checked', isDone);
      btn.innerText = isDone ? '✅ Done' : '⬜ Mark Done';

      const indicator = document.getElementById('step-progress-indicator');
      if (indicator) {
        indicator.innerText = `${list.length} / ${dish.recipeSteps.length} Completed`;
      }
    }
  }

  async handleChatSubmit(dish, userPrompt) {
    if (!userPrompt || !userPrompt.trim()) return;
    const prompt = userPrompt.trim();

    const messagesContainer = document.getElementById('recipe-chat-messages');
    if (!messagesContainer) return;

    sound.playClick();

    // Append User Bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.innerText = prompt;
    messagesContainer.appendChild(userBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Append AI Typing indicator
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble ai';
    typingBubble.id = 'ai-typing-indicator';
    typingBubble.innerHTML = `
      <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.25rem; font-weight:800; font-size:0.78rem; color:var(--primary);">
        <span>👩‍🍳 Sous-Chef Maya</span>
      </div>
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    messagesContainer.appendChild(typingBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    const apiKey = this.getGeminiKey();
    const workersKey = this.getWorkersAiKey();
    const workersAccount = this.getWorkersAiAccount();

    const systemPrompt = `You are Chef Maya, an expert vegetarian AI Sous-Chef for Fusion Food Family Lab. 
Helping a parent and kid (ages 10-16) cook "${dish.name}" (${dish.origin}).
Recipe Description: ${dish.description}.
Key Substitutes: ${dish.indianSubstitutes.map(s => `${s.substitute} replacing ${s.original} (${s.why})`).join('; ')}.
Recipe Steps: ${dish.recipeSteps.map(s => `Step ${s.step}: ${s.title} - ${s.text}`).join(' | ')}.
Food Science: ${dish.scienceNote}.

Guidelines:
1. Strictly 100% pure vegetarian adaptation.
2. Cheerful, encouraging kitchen advice tailored for families with children.
3. Recommend everyday Indian bazaar items (paneer, makhanas, chana, hung curd, gondhoraj lime, spices).
4. Concise and actionable (under 140 words). Use bold text and bullet points.`;

    // 1. Try Workers AI first if configured
    if (workersKey && workersAccount) {
      try {
        const fullPrompt = `<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n${systemPrompt}<|eot_id|><|start_header_id|>user<|end_header_id|>\n${prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n`;
        const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${workersAccount}/ai/run/@cf/meta/llama-3-8b-instruct`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${workersKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: fullPrompt, max_tokens: 450 })
        });
        const wData = await res.json();
        typingBubble.remove();
        if (wData.result && (wData.result.response || wData.result.text)) {
          const aiText = wData.result.response || wData.result.text;
          this.appendAiMessage(messagesContainer, aiText + '\n\n*(⚡ Generated via Cloudflare Workers AI)*');
          sound.playCorrect();
          return;
        } else if (wData.errors && wData.errors.length) {
          console.warn('Workers AI returned errors:', wData.errors);
        }
      } catch (wErr) {
        console.warn('Workers AI connection attempt error:', wErr);
      }
    }

    // 2. Try Gemini API
    if (apiKey) {
      try {
        const fullPrompt = `${systemPrompt}\n\nFamily Question: ${prompt}`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: fullPrompt }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500
            }
          })
        });

        const data = await response.json();
        typingBubble.remove();

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
          const aiText = data.candidates[0].content.parts[0].text;
          this.appendAiMessage(messagesContainer, aiText);
          sound.playCorrect();
          return;
        } else if (data.error) {
          const errText = `⚠️ **Gemini API Notice**: ${data.error.message || 'Key verification failed'}. Check the API key pill above!`;
          this.appendAiMessage(messagesContainer, errText);
          sound.playWrong();
          return;
        } else {
          this.appendAiMessage(messagesContainer, `I couldn't quite catch that! Could you ask about ingredients, prep, or cooking tips?`);
          return;
        }
      } catch (err) {
        typingBubble.remove();
        console.error('Gemini API fetch error:', err);
        const fallbackText = this.getContextualFallback(dish, prompt);
        this.appendAiMessage(messagesContainer, fallbackText);
        return;
      }
    } else {
      // Smart contextual fallback when no API key is set
      setTimeout(() => {
        typingBubble.remove();
        const fallbackText = this.getContextualFallback(dish, prompt);
        this.appendAiMessage(messagesContainer, fallbackText);
        sound.playCorrect();
      }, 120);
    }
  }

  appendAiMessage(container, text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ai';

    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background:var(--bg-card-subtle); padding:2px 4px; border-radius:4px; font-size:0.85em;">$1</code>')
      .replace(/\n\s*-\s+(.*)/g, '<br>• $1')
      .replace(/\n\s*\*\s+(.*)/g, '<br>• $1')
      .replace(/\n/g, '<br>');

    bubble.innerHTML = `
      <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.25rem; font-weight:800; font-size:0.78rem; color:var(--primary);">
        <span>👩‍🍳 Sous-Chef Maya</span>
      </div>
      <div>${formatted}</div>
    `;

    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  }

  getContextualFallback(dish, prompt) {
    const lower = prompt.toLowerCase();
    let advice = '';

    if (lower.includes('spice') || lower.includes('kid') || lower.includes('mild')) {
      advice = `To make **${dish.name}** extra kid-friendly:\n` +
        `• Halve any fresh green chilies or use sweet yellow bell pepper instead.\n` +
        `• Add a teaspoon of honey or a dollop of fresh cream / hung curd to balance the spice.\n` +
        `• Keep raw garnishes like fresh coriander on the side so kids can add their own!`;
    } else if (lower.includes('substitute') || lower.includes('missing') || lower.includes('paneer') || lower.includes('tofu')) {
      advice = `Desi kitchen substitutes for **${dish.name}**:\n` +
        dish.indianSubstitutes.map(s => `• **${s.original}**: Use **${s.substitute}** (${s.why})`).join('\n') +
        `\n• You can also always use fresh Malai Paneer or poached King Oyster coins as universal protein replacements!`;
    } else if (lower.includes('prep') || lower.includes('advance') || lower.includes('time') || lower.includes('shortcut')) {
      advice = `Prep shortcuts for **${dish.name}**:\n` +
        `• You can prepare any marinades, sauces, or boiled sweet potato purees up to 24 hours in advance.\n` +
        `• Keep crispy toppings (like roasted chana or makhanas) in an airtight box and sprinkle right before eating.\n` +
        `• Assemble in shallow bowls so everyone gets an equal share of crunchy and creamy textures!`;
    } else if (lower.includes('science') || lower.includes('chemistry') || lower.includes('why')) {
      advice = `Food science secret for **${dish.name}**:\n` +
        `• ${dish.scienceNote || 'Acid and salt denature plant proteins, locking in moisture and creating a delicate chew similar to cured dishes without requiring heat!'}`;
    } else {
      advice = `Great question about **${dish.name}**!\n` +
        `• Always taste as you go — adjust the lemon/lime juice drop by drop.\n` +
        `• For best texture, keep all ingredients chilled before assembling.\n` +
        `• Involve kids in Step 1 (the whisking bath) and Step 4 (garnish crunch plating)!`;
    }

    advice += `\n\n*💡 Tip: Add your Google Gemini API key using the 🔑 button above to ask custom open-ended questions in real-time!*`;
    return advice;
  }

  // ========================================================
  // FAMILY SCOREBOARD & LEADERBOARD
  // ========================================================
  // ========================================================
  // FAMILY SCOREBOARD & LEADERBOARD
  // ========================================================
  async renderLeaderboard() {
    const ladderContainer = document.getElementById('rank-ladder-display');
    const rosterContainer = document.getElementById('family-roster-display');
    const profile = this.getActiveProfile();
    const currentRank = this.getCurrentRank(profile.xp, profile.role);
    const roleRanks = profile.role === 'parent' ? PARENT_RANKS : STUDENT_RANKS;
    const filter = this.state.leaderboardFilter || 'all';
    const scope = this.state.leaderboardScope || 'local';

    // Update active state on scope toggle buttons
    const scopeToggle = document.getElementById('leaderboard-scope-toggle');
    if (scopeToggle) {
      scopeToggle.querySelectorAll('.scope-btn').forEach(btn => {
        if (btn.getAttribute('data-scope') === scope) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // Update active state on filter chips
    document.querySelectorAll('#leaderboard-filter-tabs .recipe-chip').forEach(btn => {
      const f = btn.getAttribute('data-lb-filter');
      if (f === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (ladderContainer) {
      ladderContainer.innerHTML = roleRanks.map(r => {
        const isCurrent = r.level === currentRank.level;
        const isUnlocked = profile.xp >= r.minXP;

        return `
          <div class="rank-tier-item ${isCurrent ? 'current-tier' : ''} ${!isUnlocked ? 'locked' : ''}">
            <div style="font-size:1.85rem;">${r.badge}</div>
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between;">
                <span style="font-size:1.02rem;">${r.title}</span>
                <span style="font-size:0.82rem; color:var(--text-muted);">${r.minXP} - ${r.maxXP < 99999 ? r.maxXP : '∞'} XP</span>
              </div>
              <div style="font-size:0.78rem; color:var(--text-muted);">${r.perks}</div>
            </div>
            ${isCurrent ? '<span style="font-size:0.78rem; color:var(--primary); font-weight:800;">★ Active</span>' : ''}
          </div>
        `;
      }).join('');
    }

    if (rosterContainer) {
      if (scope === 'global') {
        this.renderGlobalLeaderboard(rosterContainer, filter);
      } else {
        this.renderLocalFamilyRoster(rosterContainer, filter);
      }
    }
  }

  renderLocalFamilyRoster(rosterContainer, filter, isOfflineFallback = false) {
    const noticeHtml = isOfflineFallback
      ? `<div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.85rem; padding:0.4rem 0.8rem; background:var(--bg-card-subtle); border-radius:var(--radius-sm); border:1px solid var(--border-color);">
          🌐 <em>Offline mode: Displaying local Family Roster rankings</em>
        </div>`
      : '';

    rosterContainer.innerHTML = noticeHtml + Object.entries(this.state.profiles)
      .sort(([,a],[,b]) => {
        const aRank = this.getCurrentRank(a.xp, a.role);
        const bRank = this.getCurrentRank(b.xp, b.role);
        const aBests = a.bests || {};
        const bBests = b.bests || {};

        if (filter === 'hotPotato') {
          const aScore = aBests.hotPotato || 0;
          const bScore = bBests.hotPotato || 0;
          return bScore - aScore || (bRank.level || 1) - (aRank.level || 1) || b.xp - a.xp;
        } else if (filter === 'buildDish') {
          const aScore = aBests.buildDish || 0;
          const bScore = bBests.buildDish || 0;
          return bScore - aScore || (bRank.level || 1) - (aRank.level || 1) || b.xp - a.xp;
        } else if (filter === 'trivia') {
          const aScore = aBests.trivia || 0;
          const bScore = bBests.trivia || 0;
          return bScore - aScore || (bRank.level || 1) - (aRank.level || 1) || b.xp - a.xp;
        }
        // Overall: rank by level DESC, then XP DESC
        return (bRank.level || 1) - (aRank.level || 1) || b.xp - a.xp;
      })
      .map(([key, p], idx) => {
        const isActive = key === this.state.currentProfile;
        const pRank = this.getCurrentRank(p.xp, p.role);
        const bests = p.bests || {};
        const rankPos = idx + 1;
        const rankMedal = rankPos === 1 ? '🥇' : rankPos === 2 ? '🥈' : rankPos === 3 ? '🥉' : `#${rankPos}`;

        let metricDisplay = `
          <div style="font-weight:900; color:var(--primary); font-size:1.35rem;">${p.xp} XP</div>
          <div style="font-size:0.8rem; color:var(--secondary); font-weight:700;">🔥 ${p.streak} Day Streak</div>
        `;

        if (filter === 'hotPotato') {
          metricDisplay = `
            <div style="font-weight:900; color:#10B981; font-size:1.35rem;">🥔 ${bests.hotPotato || 0} Served</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">Personal Best</div>
          `;
        } else if (filter === 'buildDish') {
          metricDisplay = `
            <div style="font-weight:900; color:var(--secondary); font-size:1.35rem;">🥘 ${bests.buildDish || 0} Dishes</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">Completed Dishes</div>
          `;
        } else if (filter === 'trivia') {
          metricDisplay = `
            <div style="font-weight:900; color:var(--primary); font-size:1.35rem;">🧠 ${bests.trivia || 0}/10 Correct</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">Trivia Score</div>
          `;
        }

        return `
          <div style="background:var(--bg-card-subtle); border:${isActive ? '2.5px solid var(--primary)' : '1.5px solid var(--border-color)'}; border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.15rem; box-shadow:${isActive ? '0 4px 16px var(--primary-glow)' : 'none'}; position:relative;">
            <div style="position:absolute; top:0.75rem; right:0.85rem; font-size:${rankPos <= 3 ? '1.5rem' : '0.9rem'}; font-weight:800; color:${rankPos <= 3 ? 'inherit' : 'var(--text-muted)'};">${rankMedal}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:0.85rem;">
                <span style="font-size:2.2rem;">${p.avatar}</span>
                <div>
                  <strong style="font-size:1.05rem;">${p.name}</strong>
                  <div style="font-size:0.82rem; color:var(--text-muted);">👑 Level ${pRank.level} — ${pRank.title} • ${p.role === 'parent' ? 'Parent Guide' : 'Student Chef'}</div>
                </div>
              </div>
              <div style="text-align:right; margin-right:2rem;">
                ${metricDisplay}
              </div>
            </div>

            <div style="margin-top:0.85rem; border-top:1px dashed var(--border-dashed); padding-top:0.65rem; display:flex; flex-wrap:wrap; gap:0.45rem;">
              ${(p.unlockedBadges || []).map(b => `
                <span class="pill-badge" style="font-size:0.75rem; background:var(--bg-card);">${b}</span>
              `).join('')}
            </div>
          </div>
        `;
      }).join('');
  }

  async renderGlobalLeaderboard(rosterContainer, filter) {
    rosterContainer.innerHTML = `
      <div style="text-align:center; padding:2rem 1rem; color:var(--text-muted);">
        <div style="font-size:2rem; animation:spin 1s infinite linear;">🌐</div>
        <p style="margin-top:0.5rem; font-weight:700;">Loading Global Hall of Fame rankings...</p>
      </div>
    `;

    try {
      const apiFilter = filter === 'ladder' ? 'all' : filter;
      const response = await fetch(`/api/leaderboard?filter=${encodeURIComponent(apiFilter)}&limit=25`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (!data.success || !Array.isArray(data.leaderboard)) throw new Error('Invalid leaderboard payload');

      const items = data.leaderboard;
      if (items.length === 0) {
        rosterContainer.innerHTML = `
          <div style="text-align:center; padding:1.5rem; color:var(--text-muted);">
            No global entries recorded yet. Be the first to submit a high score!
          </div>
        `;
        return;
      }

      rosterContainer.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; font-size:0.84rem; color:var(--text-muted);">
          <span>🌐 <strong>Cloudflare Global Hall of Fame</strong> (${items.length} Culinary Masters)</span>
          <span class="pill-badge" style="font-size:0.72rem; color:var(--accent-green); background:var(--accent-green-light);">● Live Synced</span>
        </div>
      ` + items.map((p, idx) => {
        const rankPos = p.rank || (idx + 1);
        const rankMedal = rankPos === 1 ? '🥇' : rankPos === 2 ? '🥈' : rankPos === 3 ? '🥉' : `#${rankPos}`;

        let metricDisplay = `
          <div style="font-weight:900; color:var(--primary); font-size:1.35rem;">${p.xp} XP</div>
          <div style="font-size:0.8rem; color:var(--secondary); font-weight:700;">🔥 ${p.streak} Day Streak</div>
        `;
        if (filter === 'hotPotato') {
          metricDisplay = `
            <div style="font-weight:900; color:#10B981; font-size:1.35rem;">🥔 ${p.score} Served</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">Arcade High Score</div>
          `;
        } else if (filter === 'buildDish') {
          metricDisplay = `
            <div style="font-weight:900; color:var(--secondary); font-size:1.35rem;">🥘 ${p.score} Dishes</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">Dish Assembly</div>
          `;
        } else if (filter === 'trivia') {
          metricDisplay = `
            <div style="font-weight:900; color:var(--primary); font-size:1.35rem;">🧠 ${p.score}/10 Correct</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">Trivia Accuracy</div>
          `;
        }

        return `
          <div style="background:var(--bg-card-subtle); border:1.5px solid var(--border-color); border-radius:var(--radius-md); padding:1.15rem 1.25rem; margin-bottom:1rem; position:relative; box-shadow:var(--shadow-warm);">
            <div style="position:absolute; top:0.75rem; right:0.85rem; font-size:${rankPos <= 3 ? '1.5rem' : '0.9rem'}; font-weight:800; color:${rankPos <= 3 ? 'inherit' : 'var(--text-muted)'};">${rankMedal}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:0.85rem;">
                <span style="font-size:2.2rem;">${p.avatar || '👨‍🍳'}</span>
                <div>
                  <strong style="font-size:1.05rem;">${p.userName || p.name}</strong>
                  <div style="font-size:0.82rem; color:var(--text-muted); display:flex; gap:0.4rem; align-items:center; flex-wrap:wrap;">
                    <span>📍 ${p.country || 'Global'}</span>
                    <span>•</span>
                    <span>👑 Level ${p.level || 1}</span>
                    <span>•</span>
                    <span>${p.role === 'parent' ? '👨‍🍳 Parent Guide' : '🎒 Student Chef'}</span>
                  </div>
                </div>
              </div>
              <div style="text-align:right; margin-right:2rem;">
                ${metricDisplay}
              </div>
            </div>
          </div>
        `;
      }).join('');
      // Cache global leaderboard entries in IndexedDB for offline resilience
      if (this.db && Array.isArray(items)) {
        try {
          for (const item of items) {
            await this.db.set(DB_CONFIG.STORE_LEADERBOARD, {
              id: `${item.userId}_${item.gameType || 'overall'}`,
              ...item,
              cachedAt: new Date().toISOString()
            });
          }
        } catch (dbErr) {
          console.warn('Could not cache leaderboard in IndexedDB:', dbErr);
        }
      }

      return;
    } catch (err) {
      console.warn('Global leaderboard fetch failed, checking IndexedDB cache:', err);
      // Try reading cached leaderboard records from IndexedDB
      if (this.db) {
        try {
          const cachedEntries = await this.db.getAll(DB_CONFIG.STORE_LEADERBOARD);
          const targetGame = (filter === 'ladder' || filter === 'all') ? 'overall' : filter;
          const matching = (cachedEntries || []).filter(e => !e.gameType || e.gameType === targetGame || (targetGame === 'overall' && e.gameType === 'all'));
          if (matching.length > 0) {
            matching.sort((a, b) => {
              if (targetGame === 'overall') {
                return (b.level || 1) - (a.level || 1) || (b.xp || 0) - (a.xp || 0);
              }
              return (b.score || 0) - (a.score || 0) || (b.level || 1) - (a.level || 1) || (b.xp || 0) - (a.xp || 0);
            });

            rosterContainer.innerHTML = `
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; font-size:0.84rem; color:var(--text-muted);">
                <span>🌐 <strong>Cloudflare Global Hall of Fame</strong> (${matching.length} Cached Culinary Masters)</span>
                <span class="pill-badge" style="font-size:0.72rem; color:#F59E0B; background:#FEF3C7;">● Cached Offline</span>
              </div>
            ` + matching.map((p, idx) => {
              const rankPos = idx + 1;
              const rankMedal = rankPos === 1 ? '🥇' : rankPos === 2 ? '🥈' : rankPos === 3 ? '🥉' : `#${rankPos}`;

              let metricDisplay = `
                <div style="font-weight:900; color:var(--primary); font-size:1.35rem;">${p.xp} XP</div>
                <div style="font-size:0.8rem; color:var(--secondary); font-weight:700;">🔥 ${p.streak || 0} Day Streak</div>
              `;
              if (filter === 'hotPotato') {
                metricDisplay = `
                  <div style="font-weight:900; color:#10B981; font-size:1.35rem;">🥔 ${p.score || 0} Served</div>
                  <div style="font-size:0.78rem; color:var(--text-muted);">Arcade High Score</div>
                `;
              } else if (filter === 'buildDish') {
                metricDisplay = `
                  <div style="font-weight:900; color:var(--secondary); font-size:1.35rem;">🥘 ${p.score || 0} Dishes</div>
                  <div style="font-size:0.78rem; color:var(--text-muted);">Dish Assembly</div>
                `;
              } else if (filter === 'trivia') {
                metricDisplay = `
                  <div style="font-weight:900; color:var(--primary); font-size:1.35rem;">🧠 ${p.score || 0}/10 Correct</div>
                  <div style="font-size:0.78rem; color:var(--text-muted);">Trivia Accuracy</div>
                `;
              }

              return `
                <div style="background:var(--bg-card-subtle); border:1.5px solid var(--border-color); border-radius:var(--radius-md); padding:1.15rem 1.25rem; margin-bottom:1rem; position:relative; box-shadow:var(--shadow-warm);">
                  <div style="position:absolute; top:0.75rem; right:0.85rem; font-size:${rankPos <= 3 ? '1.5rem' : '0.9rem'}; font-weight:800; color:${rankPos <= 3 ? 'inherit' : 'var(--text-muted)'};">${rankMedal}</div>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:0.85rem;">
                      <span style="font-size:2.2rem;">${p.avatar || '👨‍🍳'}</span>
                      <div>
                        <strong style="font-size:1.05rem;">${p.userName || p.name}</strong>
                        <div style="font-size:0.82rem; color:var(--text-muted); display:flex; gap:0.4rem; align-items:center; flex-wrap:wrap;">
                          <span>📍 ${p.country || 'Global'}</span>
                          <span>•</span>
                          <span>👑 Level ${p.level || 1}</span>
                          <span>•</span>
                          <span>${p.role === 'parent' ? '👨‍🍳 Parent Guide' : '🎒 Student Chef'}</span>
                        </div>
                      </div>
                    </div>
                    <div style="text-align:right; margin-right:2rem;">
                      ${metricDisplay}
                    </div>
                  </div>
                </div>
              `;
            }).join('');
            return;
          }
        } catch (cacheReadErr) {
          console.warn('Could not read cached leaderboard from IndexedDB:', cacheReadErr);
        }
      }

      this.renderLocalFamilyRoster(rosterContainer, filter, true);
    }
  }

  async submitScoreToGlobal(gameType, score, xpGained = 0) {
    const profile = this.getActiveProfile();
    if (!profile) return;
    const currentRank = this.getCurrentRank(profile.xp, profile.role);
    const payload = {
      userId: this.state.currentProfile,
      userName: profile.name,
      avatar: profile.avatar || '🎒',
      role: profile.role || 'student',
      level: currentRank.level || 1,
      gameType,
      score,
      xpGained,
      country: profile.country || 'Global'
    };

    // Store optimistic/offline score in IndexedDB immediately
    if (this.db) {
      try {
        await this.db.set(DB_CONFIG.STORE_LEADERBOARD, {
          id: `${payload.userId}_${payload.gameType}`,
          ...payload,
          xp: profile.xp,
          streak: profile.streak || 0,
          updatedAt: new Date().toISOString()
        });
      } catch (idbErr) {
        console.warn('Could not save score entry to IndexedDB:', idbErr);
      }
    }

    try {
      const res = await fetch('/api/submit-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        console.warn(`submit-score returned HTTP ${res.status}`);
      }
    } catch (e) {
      console.warn('Network error submitting score, safely saved to local IndexedDB fallback:', e);
    }
  }

  // ========================================================
  // ADMIN MODAL & CONTROLS
  // ========================================================
  openAdminModal() {
    sound.playClick();
    const modal = document.getElementById('admin-modal');
    if (!modal) return;
    modal.classList.add('open');
    this.renderAdminModalContent(false);
  }

  closeAdminModal() {
    sound.playClick();
    const modal = document.getElementById('admin-modal');
    if (!modal) return;
    modal.classList.remove('open');
  }

  renderAdminModalContent(isAuthenticated = false) {
    const body = document.getElementById('admin-modal-body');
    if (!body) return;

    if (!isAuthenticated) {
      body.innerHTML = `
        <p style="font-size:0.92rem; color:var(--text-muted); margin-bottom:1.25rem; line-height:1.5;">
          Enter your secret Admin PIN to manage game visibility toggles, change settings, or reset household scores.
        </p>
        <div class="pin-input-group">
          <input type="password" id="admin-pin-field" class="pin-input" placeholder="••••••••" maxlength="16" />
          <button class="btn btn-primary" id="admin-submit-pin-btn">Unlock 🔓</button>
        </div>
        <div id="pin-error-msg" style="color:#DC2626; font-size:0.85rem; font-weight:700; min-height:22px;"></div>
      `;

      document.getElementById('admin-submit-pin-btn')?.addEventListener('click', () => {
        const val = document.getElementById('admin-pin-field')?.value;
        if (val === this.state.adminPin) {
          sound.playChime();
          showToast('Admin Mode Unlocked', 'success');
          this.renderAdminModalContent(true);
        } else {
          sound.playWrong();
          document.getElementById('pin-error-msg').innerText = '❌ Incorrect PIN. Please try again.';
        }
      });
    } else {
      body.innerHTML = `
        <div style="background:var(--accent-green-light); border:1.5px solid var(--accent-green); border-radius:var(--radius-sm); padding:0.75rem 1rem; margin-bottom:1.25rem; font-size:0.88rem; color:var(--accent-green); font-weight:700;">
          ✅ Admin Controls Active: Customize game visibility for the household.
        </div>

        <div class="admin-toggles-list">
          <div class="toggle-row">
            <span>🥘 Build-a-Dish (Pantry Rush & Steps)</span>
            <label class="switch">
              <input type="checkbox" id="toggle-buildDish" ${this.state.gameToggles.buildDish ? 'checked' : ''} />
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <span>🗣️ Pronunciation Challenge & Audio</span>
            <label class="switch">
              <input type="checkbox" id="toggle-pronunciation" ${this.state.gameToggles.pronunciation ? 'checked' : ''} />
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <span>🧠 Family Trivia Quiz (10 Qs)</span>
            <label class="switch">
              <input type="checkbox" id="toggle-trivia" ${this.state.gameToggles.trivia ? 'checked' : ''} />
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <span>🥔 Hot Potato Rush (Arcade Cooking)</span>
            <label class="switch">
              <input type="checkbox" id="toggle-hotPotato" ${this.state.gameToggles.hotPotato !== false ? 'checked' : ''} />
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <span>🎡 Spin the Wheel & Food Science</span>
            <label class="switch">
              <input type="checkbox" id="toggle-spinScience" ${this.state.gameToggles.spinScience ? 'checked' : ''} />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div style="background:var(--bg-parchment); border:1.5px solid var(--border-color); border-radius:var(--radius-sm); padding:0.95rem; margin-bottom:1.25rem;">
          <label style="font-size:0.82rem; font-weight:800; color:var(--text-muted); display:block; margin-bottom:0.35rem;">
            🔑 Update Secret Admin PIN:
          </label>
          <div style="display:flex; gap:0.5rem;">
            <input type="password" id="new-admin-pin" class="pin-input" style="padding:0.45rem 0.75rem; font-size:0.9rem;" placeholder="New PIN" />
            <button class="btn btn-secondary" id="save-new-pin-btn" style="padding:0.45rem 0.85rem; font-size:0.82rem;">Update PIN</button>
          </div>
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.6rem;">
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <button class="btn btn-secondary" id="reset-admin-btn" style="color:var(--primary); border-color:var(--primary); padding:0.45rem 0.85rem; font-size:0.82rem;">
              🔄 Reset Admin Defaults
            </button>
            <button class="btn btn-secondary" id="reset-scores-btn" style="color:#F59E0B; border-color:#F59E0B; padding:0.45rem 0.85rem; font-size:0.82rem;">
              ⚠️ Reset XP & Levels
            </button>
            <button class="btn btn-secondary" id="clear-all-data-admin-btn" style="color:#DC2626; border-color:#DC2626; padding:0.45rem 0.85rem; font-size:0.82rem; font-weight:800;">
              🗑️ Clear All Website Data
            </button>
          </div>
          <button class="btn btn-primary" id="save-admin-settings-btn" style="padding:0.5rem 1.4rem; font-size:0.88rem;">
            Save & Apply
          </button>
        </div>
      `;

      // Update PIN
      document.getElementById('save-new-pin-btn')?.addEventListener('click', () => {
        const newPin = document.getElementById('new-admin-pin')?.value.trim();
        if (newPin && newPin.length >= 4) {
          this.state.adminPin = newPin;
          this.saveState();
          sound.playCorrect();
          showToast('Admin PIN updated securely!', 'success');
          document.getElementById('new-admin-pin').value = '';
        } else {
          alert('Please enter a PIN with at least 4 characters.');
        }
      });

      // Save toggles
      document.getElementById('save-admin-settings-btn')?.addEventListener('click', () => {
        sound.playCorrect();
        this.state.gameToggles.buildDish = document.getElementById('toggle-buildDish')?.checked ?? true;
        this.state.gameToggles.pronunciation = document.getElementById('toggle-pronunciation')?.checked ?? true;
        this.state.gameToggles.trivia = document.getElementById('toggle-trivia')?.checked ?? true;
        this.state.gameToggles.hotPotato = document.getElementById('toggle-hotPotato')?.checked ?? true;
        this.state.gameToggles.spinScience = document.getElementById('toggle-spinScience')?.checked ?? true;

        this.saveState();
        this.renderGameTabs();
        this.renderActiveGame();
        this.closeAdminModal();
        showToast('Admin settings applied!', 'success');
      });

      // Reset scores
      document.getElementById('reset-scores-btn')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all family scores, streaks, and XP back to apprentice level?')) {
          sound.playWrong();
          this.state.profiles.kid.xp = 0;
          this.state.profiles.parent.xp = 0;
          this.state.profiles.kid.streak = 1;
          this.state.profiles.parent.streak = 1;
          this.saveState();
          this.renderProgressStrip();
          this.renderLeaderboard();
          showToast('Scores reset successfully!', 'info');
        }
      });

      // Clear All Website Data (Database, XP, Leaderboard, Badges, Recipes)
      document.getElementById('clear-all-data-admin-btn')?.addEventListener('click', async () => {
        if (confirm('⚠️ PERMANENT ACTION:\n\nDo you want to completely clear all website data, including database records, XP, levels, leaderboards, and progress?')) {
          await this.clearAllWebsiteData();
          this.closeAdminModal();
        }
      });

      // Reset Admin Defaults (PIN and all game toggles)
      document.getElementById('reset-admin-btn')?.addEventListener('click', () => {
        if (confirm('Reset Admin PIN back to default and enable all 5 games?')) {
          sound.playCorrect();
          this.state.adminPin = 'careers2026';
          this.state.gameToggles = {
            buildDish: true,
            pronunciation: true,
            trivia: true,
            hotPotato: true,
            spinScience: true
          };
          this.saveState();
          this.renderGameTabs();
          this.renderActiveGame();
          this.renderAdminModalContent(true);
          showToast('Admin PIN and Game Toggles reset to default!', 'success');
        }
      });
    }
  }

  bindEvents() {
    document.getElementById('theme-toggle-btn')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('sound-toggle-btn')?.addEventListener('click', () => this.toggleSound());
    document.getElementById('profile-switch-btn')?.addEventListener('click', () => this.openProfileModal());
    document.getElementById('close-profile-modal-btn')?.addEventListener('click', () => this.closeProfileModal());
    document.getElementById('profile-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'profile-modal') this.closeProfileModal();
    });
    document.getElementById('admin-modal-open-btn')?.addEventListener('click', () => this.openAdminModal());
    document.getElementById('admin-footer-link')?.addEventListener('click', () => this.openAdminModal());
    document.getElementById('close-admin-modal-btn')?.addEventListener('click', () => this.closeAdminModal());
    document.getElementById('admin-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'admin-modal') this.closeAdminModal();
    });
    document.getElementById('recipe-popout-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'recipe-popout-modal') this.closeRecipePopout();
    });
    document.getElementById('clear-website-data-btn')?.addEventListener('click', async () => {
      if (confirm('🗑️ CLEAR ALL WEBSITE DATA:\n\nAre you sure you want to completely clear all user XP, leaderboards, levels, best scores, and website history?')) {
        await this.clearAllWebsiteData();
      }
    });

    // Leaderboard filter tabs
    document.querySelectorAll('#leaderboard-filter-tabs .recipe-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        const f = btn.getAttribute('data-lb-filter') || 'all';
        this.state.leaderboardFilter = f;
        this.saveState();
        this.renderLeaderboard();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAdminModal();
        this.closeRecipePopout();
        this.closeProfileModal();
      }
    });

    window.addEventListener('resize', () => this.updateNavAccessibility());
    window.addEventListener('orientationchange', () => this.updateNavAccessibility());
    this.updateNavAccessibility();
  }

  updateNavAccessibility() {
    const isLandscape = window.innerWidth > window.innerHeight && window.innerHeight <= 600;
    const mobileNav = document.getElementById('mobile-nav-bar');
    const mainNav = document.getElementById('main-nav-bar');

    if (isLandscape || window.innerWidth > 1024) {
      if (mobileNav) {
        mobileNav.classList.remove('mobile-bottom-nav');
        mobileNav.classList.add('mobile-nav-docked');
      }
      if (mainNav) {
        mainNav.classList.add('site-nav');
        mainNav.classList.remove('site-nav-hidden');
      }
    } else {
      if (mobileNav) {
        mobileNav.classList.add('mobile-bottom-nav');
        mobileNav.classList.remove('mobile-nav-docked');
      }
      if (mainNav) {
        mainNav.classList.remove('site-nav');
        mainNav.classList.add('site-nav-hidden');
      }
    }
  }


  // ========================================================
  // THREE.JS 3D INTERACTIVE GRAPHICS LIFECYCLE & MANAGERS
  // ========================================================
  initThreeJSLifecycle() {
    this.threeAvailable = (typeof THREE !== 'undefined' && typeof THREE.WebGLRenderer !== 'undefined');
    this.dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    this.active3DScenes = new Map();

    // Document visibilitychange listener: pauses WebGL rendering loops when tab is inactive
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        const isHidden = document.hidden;
        for (const [key, sceneObj] of this.active3DScenes.entries()) {
          if (sceneObj && typeof sceneObj.setPaused === 'function') {
            sceneObj.setPaused(isHidden);
          }
        }
      });
    }

    // Responsive window resize listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        for (const [key, sceneObj] of this.active3DScenes.entries()) {
          if (sceneObj && typeof sceneObj.handleResize === 'function') {
            sceneObj.handleResize();
          }
        }
      });
    }
  }

  handleTabSwitch3D(tabId) {
    if (!this.threeAvailable) return;
    if (tabId === 'kitchen') {
      setTimeout(() => this.initTandoor3D(), 50);
    } else if (tabId === 'games') {
      if (this.state.activeGameTab === 'build') {
        setTimeout(() => this.initDish3DIngredients(), 50);
      }
    }
  }

  initScrolltideShowcase() {
    const hero = document.getElementById('scrolltide-hero-showcase');
    if (!hero) return;

    const counters = [
      { id: 'stat-counter-labs', target: 5, suffix: '' },
      { id: 'stat-counter-recipes', target: 8, suffix: '' },
      { id: 'stat-counter-veg', target: 100, suffix: '%' },
      { id: 'stat-counter-allergens', target: 0, suffix: '' }
    ];

    counters.forEach(c => {
      const el = document.getElementById(c.id);
      if (!el) return;
      let count = 0;
      const step = Math.max(1, Math.ceil(c.target / 25));
      const interval = setInterval(() => {
        count += step;
        if (count >= c.target) {
          count = c.target;
          clearInterval(interval);
        }
        el.innerText = `${count}${c.suffix}`;
      }, 40);
    });

    document.getElementById('showcase-card-potato')?.addEventListener('click', () => {
      sound.playClick();
      this.switchMainTab('games');
      const potatoBtn = document.querySelector('[data-game-id="hotPotato"]');
      if (potatoBtn) potatoBtn.click();
    });

    document.getElementById('showcase-card-science')?.addEventListener('click', () => {
      sound.playClick();
      this.switchMainTab('games');
      const scienceBtn = document.querySelector('[data-game-id="spinScience"]');
      if (scienceBtn) scienceBtn.click();
    });

    document.getElementById('showcase-card-kitchen')?.addEventListener('click', () => {
      sound.playClick();
      this.switchMainTab('kitchen');
    });
  }

  // ELEMENT 1: Tumbling Golden Potato in Hot Potato Rush
  init3DHotPotato(canvasContainer) {
    const threeCanvas = canvasContainer.querySelector('#hp-three-canvas');
    if (!threeCanvas || !this.threeAvailable) return null;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 800 / 460, 0.1, 1000);
      camera.position.set(0, 0, 480);

      const renderer = new THREE.WebGLRenderer({
        canvas: threeCanvas,
        alpha: true,
        antialias: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(800, 460);

      // Deformed Dodecahedron Potato Mesh with bumps & oblong organic shape
      const geo = new THREE.DodecahedronGeometry(26, 2);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        const bump = 1 + 0.08 * Math.sin(x * 0.28) * Math.cos(y * 0.28) + 0.05 * Math.sin(z * 0.45);
        pos.setXYZ(i, x * 1.18 * bump, y * 0.94 * bump, z * 0.92 * bump);
      }
      geo.computeVertexNormals();

      const mat = new THREE.MeshStandardMaterial({
        color: 0xD4A373,
        roughness: 0.72,
        metalness: 0.08
      });

      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      const amb = new THREE.AmbientLight(0xffffff, 0.75);
      scene.add(amb);
      const sun = new THREE.DirectionalLight(0xffedd5, 1.3);
      sun.position.set(80, 100, 120);
      scene.add(sun);

      let isPaused = false;
      const handleResize = () => {
        const rect = canvasContainer.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
        }
      };

      if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(() => handleResize());
        ro.observe(canvasContainer);
      }

      const potatoObj = {
        scene, camera, renderer, mesh, mat,
        update: (potatoX, potatoY, vx, vy, cookLevel) => {
          if (isPaused) return;
          mesh.position.set((potatoX - 400) * 0.72, -(potatoY - 230) * 0.72, 0);
          mesh.rotation.x += vx * 0.04;
          mesh.rotation.z += vy * 0.03;

          if (cookLevel >= 38 && cookLevel <= 85) {
            mat.color.setHex(0xF59E0B);
            mat.emissive.setHex(0xFFB703);
            mat.emissiveIntensity = 0.42;
          } else if (cookLevel > 85) {
            mat.color.setHex(0x2D1A10);
            mat.emissive.setHex(0x000000);
            mat.emissiveIntensity = 0;
          } else {
            mat.color.setHex(0xD4A373);
            mat.emissive.setHex(0x000000);
            mat.emissiveIntensity = 0;
          }
          renderer.render(scene, camera);
        },
        dispose: () => {
          renderer.dispose();
        },
        setPaused: (p) => { isPaused = p; },
        handleResize
      };

      this.active3DScenes.set('hotPotato', potatoObj);
      return potatoObj;
    } catch (err) {
      console.warn('Hot Potato 3D init skipped:', err);
      return null;
    }
  }

  // ELEMENT 2: Glowing Tandoor Coals in Kitchen Lab
  initTandoor3D() {
    const container = document.getElementById('tandoor-3d-stage');
    if (!container || !this.threeAvailable) return;

    if (this.active3DScenes.has('tandoor')) {
      const existing = this.active3DScenes.get('tandoor');
      if (existing && existing.dispose) existing.dispose();
      this.active3DScenes.delete('tandoor');
    }

    container.innerHTML = `
      <div class="model-3d-hud">
        <span class="model-3d-badge">🔥 Tandoor Hearth</span>
        <span class="model-3d-badge" id="tandoor-temp-display">Tandoori Roast: 350°C</span>
      </div>
      <div class="tandoor-heat-controls" role="group" aria-label="Tandoor Heat Level">
        <button class="tandoor-heat-btn" data-heat="simmer">Gentle Simmer</button>
        <button class="tandoor-heat-btn active" data-heat="roast">Tandoori Roast</button>
        <button class="tandoor-heat-btn" data-heat="inferno">Inferno Sear</button>
      </div>
      <div class="model-3d-hint">🔥 3D Ember Rocks & Sizzling Sparks • Choose Heat Level</div>
    `;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0c14);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 75, 160);
    camera.lookAt(0, -10, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.insertBefore(renderer.domElement, container.firstChild);

    // Terracotta clay rim/inner wall
    const clayGeo = new THREE.CylinderGeometry(85, 100, 90, 32, 1, true);
    const clayMat = new THREE.MeshStandardMaterial({
      color: 0x8b3a1a,
      roughness: 0.85,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const clayCylinder = new THREE.Mesh(clayGeo, clayMat);
    clayCylinder.position.y = 0;
    scene.add(clayCylinder);

    // 36 Randomized rocky embers
    const emberGroup = new THREE.Group();
    const emberMeshes = [];
    for (let i = 0; i < 36; i++) {
      const radius = 6 + Math.random() * 5;
      const emberGeo = new THREE.DodecahedronGeometry(radius, 0);
      const emberMat = new THREE.MeshStandardMaterial({
        color: 0x1a0a0a,
        emissive: 0xff3300,
        emissiveIntensity: 1.8 + Math.random() * 1.5,
        roughness: 0.9,
        metalness: 0.1
      });
      const ember = new THREE.Mesh(emberGeo, emberMat);
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 65;
      ember.position.set(Math.cos(angle) * dist, -35 + Math.random() * 8, Math.sin(angle) * dist);
      ember.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      ember.scale.set(1 + Math.random() * 0.4, 0.7 + Math.random() * 0.5, 1 + Math.random() * 0.4);
      emberGroup.add(ember);
      emberMeshes.push({ mesh: ember, baseIntensity: emberMat.emissiveIntensity, pulseOffset: Math.random() * Math.PI * 2 });
    }
    scene.add(emberGroup);

    // Flickering PointLight
    const fireLight = new THREE.PointLight(0xff5500, 3.2, 220);
    fireLight.position.set(0, -15, 0);
    scene.add(fireLight);

    const ambientLight = new THREE.AmbientLight(0x221111, 0.8);
    scene.add(ambientLight);

    // 60 Rising ember spark particles
    const sparkCount = 60;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkVelocities = [];
    for (let i = 0; i < sparkCount; i++) {
      const a = Math.random() * Math.PI * 2;
      const d = Math.random() * 55;
      sparkPositions[i * 3] = Math.cos(a) * d;
      sparkPositions[i * 3 + 1] = -35 + Math.random() * 80;
      sparkPositions[i * 3 + 2] = Math.sin(a) * d;
      sparkVelocities.push({
        vx: (Math.random() - 0.5) * 0.4,
        vy: 0.8 + Math.random() * 1.2,
        vz: (Math.random() - 0.5) * 0.4
      });
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xffaa00,
      size: 2.8,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparks);

    let heatMultiplier = 1.0;
    let animId = null;
    let isPaused = false;

    container.querySelectorAll('.tandoor-heat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.tandoor-heat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const heatLevel = btn.getAttribute('data-heat');
        const tempDisplay = container.querySelector('#tandoor-temp-display');
        if (heatLevel === 'simmer') {
          heatMultiplier = 0.5;
          if (tempDisplay) tempDisplay.innerText = 'Gentle Simmer: 180°C';
          fireLight.color.setHex(0xff7722);
        } else if (heatLevel === 'roast') {
          heatMultiplier = 1.0;
          if (tempDisplay) tempDisplay.innerText = 'Tandoori Roast: 350°C';
          fireLight.color.setHex(0xff5500);
        } else if (heatLevel === 'inferno') {
          heatMultiplier = 1.8;
          if (tempDisplay) tempDisplay.innerText = 'Inferno Sear: 480°C';
          fireLight.color.setHex(0xff2200);
        }
      });
    });

    const animate = () => {
      if (isPaused) return;
      animId = requestAnimationFrame(animate);

      const time = Date.now() * 0.003;
      fireLight.intensity = (2.6 + Math.sin(time * 5) * 0.8 + Math.sin(time * 11) * 0.4) * heatMultiplier;

      emberMeshes.forEach(em => {
        const pulse = Math.sin(time * 3 + em.pulseOffset);
        em.mesh.material.emissiveIntensity = (em.baseIntensity + pulse * 0.7) * heatMultiplier;
      });

      const posArray = sparkGeo.attributes.position.array;
      for (let i = 0; i < sparkCount; i++) {
        posArray[i * 3] += sparkVelocities[i].vx;
        posArray[i * 3 + 1] += sparkVelocities[i].vy * heatMultiplier;
        posArray[i * 3 + 2] += sparkVelocities[i].vz;
        if (posArray[i * 3 + 1] > 60) {
          const a = Math.random() * Math.PI * 2;
          const d = Math.random() * 55;
          posArray[i * 3] = Math.cos(a) * d;
          posArray[i * 3 + 1] = -35;
          posArray[i * 3 + 2] = Math.sin(a) * d;
        }
      }
      sparkGeo.attributes.position.needsUpdate = true;
      clayCylinder.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => handleResize());
      ro.observe(container);
    }

    this.active3DScenes.set('tandoor', {
      dispose: () => {
        cancelAnimationFrame(animId);
        renderer.dispose();
      },
      setPaused: (p) => {
        isPaused = p;
        if (!p) animate();
      },
      handleResize
    });
  }

  // ELEMENT 3: 3D Interactive Vegetarian Ingredients in Build-a-Dish
  initDish3DIngredients() {
    const container = document.getElementById('dish-3d-canvas-container');
    if (!container || !this.threeAvailable) return;

    if (this.active3DScenes.has('dishIngredient')) {
      const existing = this.active3DScenes.get('dishIngredient');
      if (existing && existing.dispose) existing.dispose();
      this.active3DScenes.delete('dishIngredient');
    }

    container.innerHTML = `
      <div class="model-3d-hud">
        <span class="model-3d-badge" id="dish-3d-badge">🍄 King Oyster Mushroom</span>
        <span class="model-3d-badge" id="dish-3d-status">Drag to Rotate 360°</span>
      </div>
      <div class="model-3d-hint">👆 Drag to inspect vegetarian ingredient in 3D</div>
    `;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 240;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e111a);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 20, 65);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.insertBefore(renderer.domElement, container.firstChild);

    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(40, 50, 40);
    scene.add(dirLight);

    let activeMesh = null;
    let animId = null;
    let isPaused = false;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const createModel = (name) => {
      const group = new THREE.Group();
      const n = (name || '').toLowerCase();

      if (n.includes('mushroom') || n.includes('oyster') || n.includes('shroom')) {
        // King Oyster Mushroom: Tapered ivory stem + tan cap
        const stemGeo = new THREE.CylinderGeometry(4.5, 6.5, 20, 24);
        const stemMat = new THREE.MeshStandardMaterial({ color: 0xf5f3ee, roughness: 0.65 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.y = -2;
        group.add(stem);

        const capGeo = new THREE.SphereGeometry(8, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const capMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.7 });
        const cap = new THREE.Mesh(capGeo, capMat);
        cap.position.y = 8;
        cap.scale.set(1.2, 0.65, 1.2);
        group.add(cap);
      } else if (n.includes('lime') || n.includes('lemon') || n.includes('citrus')) {
        // Fresh Lime Half: green hemisphere peel + pulp circle
        const peelGeo = new THREE.SphereGeometry(10, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const peelMat = new THREE.MeshStandardMaterial({ color: 0x4ade80, roughness: 0.35 });
        const peel = new THREE.Mesh(peelGeo, peelMat);
        peel.rotation.x = Math.PI;
        group.add(peel);

        const pulpGeo = new THREE.CircleGeometry(9.8, 24);
        const pulpMat = new THREE.MeshStandardMaterial({ color: 0xa3e635, roughness: 0.5, side: THREE.DoubleSide });
        const pulp = new THREE.Mesh(pulpGeo, pulpMat);
        pulp.rotation.x = -Math.PI / 2;
        group.add(pulp);
      } else if (n.includes('chili') || n.includes('mirchi') || n.includes('pepper')) {
        // Yellow Bhavnagri Chili: curved cone body + green calyx/stem
        const coneGeo = new THREE.ConeGeometry(5, 22, 20);
        const coneMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 });
        const cone = new THREE.Mesh(coneGeo, coneMat);
        cone.rotation.z = Math.PI * 0.85;
        group.add(cone);

        const stemGeo = new THREE.CylinderGeometry(1, 1.2, 6, 12);
        const stemMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.6 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.set(-6, 9, 0);
        stem.rotation.z = -0.4;
        group.add(stem);
      } else if (n.includes('paneer') || n.includes('cheese') || n.includes('tofu')) {
        // Paneer Cube: dairy-white beveled cube
        const cubeGeo = new THREE.BoxGeometry(14, 14, 14);
        const cubeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.05 });
        const cube = new THREE.Mesh(cubeGeo, cubeMat);
        group.add(cube);
      } else {
        // Golden Roasted Seed / Makhana / Chana
        const seedGeo = new THREE.DodecahedronGeometry(8, 1);
        const seedMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.8 });
        const seed = new THREE.Mesh(seedGeo, seedMat);
        seed.scale.set(1.2, 0.9, 1);
        group.add(seed);
      }

      return group;
    };

    activeMesh = createModel('King Oyster Mushroom');
    scene.add(activeMesh);

    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('pointerup', () => { isDragging = false; });
    window.addEventListener('pointermove', (e) => {
      if (!isDragging || !activeMesh) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      activeMesh.rotation.y += dx * 0.015;
      activeMesh.rotation.x += dy * 0.015;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    const animate = () => {
      if (isPaused) return;
      animId = requestAnimationFrame(animate);

      if (activeMesh && !isDragging) {
        activeMesh.rotation.y += 0.012;
        activeMesh.position.y = Math.sin(Date.now() * 0.002) * 1.5;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => handleResize());
      ro.observe(container);
    }

    this.active3DScenes.set('dishIngredient', {
      dispose: () => {
        cancelAnimationFrame(animId);
        renderer.dispose();
      },
      setPaused: (p) => {
        isPaused = p;
        if (!p) animate();
      },
      handleResize,
      updateModel: (ingredientName) => {
        if (activeMesh) scene.remove(activeMesh);
        activeMesh = createModel(ingredientName);
        scene.add(activeMesh);
        const badge = container.querySelector('#dish-3d-badge');
        if (badge) badge.innerText = `🌿 ${ingredientName}`;
      },
      animateJump: () => {
        if (!activeMesh) return;
        let jumpProgress = 0;
        const jumpInterval = setInterval(() => {
          jumpProgress += 0.08;
          activeMesh.position.y = Math.sin(jumpProgress * Math.PI) * 15;
          activeMesh.rotation.z += 0.25;
          if (jumpProgress >= 1) {
            clearInterval(jumpInterval);
            activeMesh.position.y = 0;
          }
        }, 20);
      }
    });
  }

  update3DIngredient(ingredientName) {
    if (this.active3DScenes && this.active3DScenes.has('dishIngredient')) {
      this.active3DScenes.get('dishIngredient').updateModel(ingredientName);
    }
  }

  animate3DIngredientJump() {
    if (this.active3DScenes && this.active3DScenes.has('dishIngredient')) {
      this.active3DScenes.get('dishIngredient').animateJump();
    }
  }

  // ELEMENT 4: Molecular Spice Models in Science Wheel
  initMolecule3D(topic) {
    const container = document.getElementById('molecule-3d-canvas');
    if (!container || !this.threeAvailable) return;

    if (this.active3DScenes.has('molecule')) {
      const existing = this.active3DScenes.get('molecule');
      if (existing && existing.dispose) existing.dispose();
      this.active3DScenes.delete('molecule');
    }

    const formula = topic.formula || (topic.shortName || 'Molecule');
    container.innerHTML = `
      <div class="model-3d-hud">
        <span class="model-3d-badge" id="molecule-3d-badge">🧪 ${formula}</span>
        <span class="model-3d-badge">CPK Ball-and-Stick Model</span>
      </div>
      <div class="model-3d-hint">👆 Drag to inspect 360° • Auto-rotating</div>
    `;

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 240;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0f17);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 48);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.insertBefore(renderer.domElement, container.firstChild);

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(30, 40, 50);
    scene.add(light);

    // CPK Standard Material Colors:
    // Carbon (C): 0x333333, Hydrogen (H): 0xe8e8e8, Oxygen (O): 0xe53e3e, Nitrogen (N): 0x3182ce, Phosphorus (P): 0xdd6b20
    const materials = {
      C: new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.4 }),
      H: new THREE.MeshStandardMaterial({ color: 0xe8e8e8, roughness: 0.3 }),
      O: new THREE.MeshStandardMaterial({ color: 0xe53e3e, roughness: 0.4 }),
      N: new THREE.MeshStandardMaterial({ color: 0x3182ce, roughness: 0.4 }),
      P: new THREE.MeshStandardMaterial({ color: 0xdd6b20, roughness: 0.4 }),
      bond: new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.5 })
    };

    const moleculeGroup = new THREE.Group();

    const addAtom = (type, x, y, z, radius = 2.4) => {
      const geo = new THREE.SphereGeometry(radius, 20, 16);
      const mat = materials[type] || materials.C;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      moleculeGroup.add(mesh);
      return mesh;
    };

    const addBond = (x1, y1, z1, x2, y2, z2, radius = 0.65) => {
      const start = new THREE.Vector3(x1, y1, z1);
      const end = new THREE.Vector3(x2, y2, z2);
      const dist = start.distanceTo(end);
      const geo = new THREE.CylinderGeometry(radius, radius, dist, 12);
      const mesh = new THREE.Mesh(geo, materials.bond);
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      mesh.position.copy(mid);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.clone().sub(start).normalize());
      moleculeGroup.add(mesh);
    };

    const title = (topic.title || topic.shortName || '').toLowerCase();
    if (title.includes('acid') || title.includes('citric')) {
      // Citric Acid (C6H8O7)
      addAtom('C', 0, 0, 0);
      addAtom('C', -4, 0, 0);
      addAtom('C', 4, 0, 0);
      addBond(0, 0, 0, -4, 0, 0);
      addBond(0, 0, 0, 4, 0, 0);
      addAtom('C', 0, 4.5, 0);
      addBond(0, 0, 0, 0, 4.5, 0);
      addAtom('O', 0, -4, 0);
      addBond(0, 0, 0, 0, -4, 0);
      addAtom('O', -7, 2, 0);
      addBond(-4, 0, 0, -7, 2, 0);
      addAtom('O', 7, 2, 0);
      addBond(4, 0, 0, 7, 2, 0);
      addAtom('O', 0, 8, 0);
      addBond(0, 4.5, 0, 0, 8, 0);
      addAtom('H', -4, -3, 0);
      addBond(-4, 0, 0, -4, -3, 0);
      addAtom('H', 4, -3, 0);
      addBond(4, 0, 0, 4, -3, 0);
    } else if (title.includes('maillard') || title.includes('glucose') || title.includes('browning')) {
      // Glucose Ring (C6H12O6)
      const ringRadius = 6;
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const x = Math.cos(a) * ringRadius;
        const y = Math.sin(a) * ringRadius;
        const type = i === 5 ? 'O' : 'C';
        addAtom(type, x, y, 0);
        const nextA = ((i + 1) / 6) * Math.PI * 2;
        addBond(x, y, 0, Math.cos(nextA) * ringRadius, Math.sin(nextA) * ringRadius, 0);
        if (type === 'C') {
          addAtom('O', x * 1.5, y * 1.5, 2);
          addBond(x, y, 0, x * 1.5, y * 1.5, 2);
          addAtom('H', x, y, -3);
          addBond(x, y, 0, x, y, -3);
        }
      }
    } else if (title.includes('emulsion') || title.includes('lecithin')) {
      // Phospholipid Lecithin (head + tails)
      addAtom('P', -8, 0, 0, 3.2);
      addAtom('O', -8, 4, 0);
      addBond(-8, 0, 0, -8, 4, 0);
      addAtom('N', -12, 0, 0);
      addBond(-8, 0, 0, -12, 0, 0);
      for (let j = 0; j < 6; j++) {
        const x = -4 + j * 3;
        const y1 = 2 + (j % 2) * 2;
        const y2 = -2 - (j % 2) * 2;
        addAtom('C', x, y1, 0);
        addAtom('C', x, y2, 0);
        if (j > 0) {
          addBond(x - 3, 2 + ((j - 1) % 2) * 2, 0, x, y1, 0);
          addBond(x - 3, -2 - ((j - 1) % 2) * 2, 0, x, y2, 0);
        }
      }
    } else if (title.includes('osmosis') || title.includes('sucrose')) {
      // Sucrose & H2O Cluster
      addAtom('C', -5, 0, 0);
      addAtom('O', 0, 0, 0);
      addAtom('C', 5, 0, 0);
      addBond(-5, 0, 0, 0, 0, 0);
      addBond(0, 0, 0, 5, 0, 0);
      addAtom('O', -8, 3, 0);
      addBond(-5, 0, 0, -8, 3, 0);
      addAtom('O', 8, 3, 0);
      addBond(5, 0, 0, 8, 3, 0);
      addAtom('O', 0, 7, 0);
      addAtom('H', -2.5, 9, 0);
      addAtom('H', 2.5, 9, 0);
      addBond(0, 7, 0, -2.5, 9, 0);
      addBond(0, 7, 0, 2.5, 9, 0);
    } else if (title.includes('alkaline') || title.includes('carbonate') || title.includes('noodle')) {
      // Carbonate Ion (CO3 2-)
      addAtom('C', 0, 0, 0);
      for (let k = 0; k < 3; k++) {
        const a = (k / 3) * Math.PI * 2;
        const x = Math.cos(a) * 6;
        const y = Math.sin(a) * 6;
        addAtom('O', x, y, 0);
        addBond(0, 0, 0, x, y, 0);
      }
    } else {
      // Capsaicin / Curcumin aromatic spice molecule
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const x = Math.cos(a) * 5;
        const y = Math.sin(a) * 5;
        addAtom('C', x, y, 0);
        const nextA = ((i + 1) / 6) * Math.PI * 2;
        addBond(x, y, 0, Math.cos(nextA) * 5, Math.sin(nextA) * 5, 0);
      }
      addAtom('N', 8, 0, 0);
      addBond(5, 0, 0, 8, 0, 0);
      addAtom('O', -7, 3, 0);
      addBond(-5, 0, 0, -7, 3, 0);
      addAtom('O', -7, -3, 0);
      addBond(-5, 0, 0, -7, -3, 0);
      addAtom('C', 11, 2, 0);
      addBond(8, 0, 0, 11, 2, 0);
    }

    scene.add(moleculeGroup);

    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let animId = null;
    let isPaused = false;

    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('pointerup', () => { isDragging = false; });
    window.addEventListener('pointermove', (e) => {
      if (!isDragging || !moleculeGroup) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      moleculeGroup.rotation.y += dx * 0.015;
      moleculeGroup.rotation.x += dy * 0.015;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    const animate = () => {
      if (isPaused) return;
      animId = requestAnimationFrame(animate);

      if (!isDragging) {
        moleculeGroup.rotation.y += 0.01;
        moleculeGroup.rotation.x += 0.005;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => handleResize());
      ro.observe(container);
    }

    this.active3DScenes.set('molecule', {
      dispose: () => {
        cancelAnimationFrame(animId);
        renderer.dispose();
      },
      setPaused: (p) => {
        isPaused = p;
        if (!p) animate();
      },
      handleResize
    });
  }

  // ALIAS METHODS FOR E2E TEST COMPATIBILITY
  renderScienceWheelGame(arena) {
    return this.renderSpinScienceGame(arena);
  }

  spinScienceWheel() {
    return this.spinWheel();
  }
}

// Launch on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  try {
    window.app = new FusionApp();
    const app = window.app;
    app.init();
  } catch (err) {
    console.error('Fatal FusionApp init error:', err);
    const d = document.createElement('div');
    d.id = 'fatal-init-error';
    d.style.cssText = 'background:red;color:white;padding:20px;font-size:18px;position:fixed;top:0;left:0;right:0;z-index:999999;';
    d.innerText = 'INIT ERROR: ' + err.message + '\n' + err.stack;
    document.body.appendChild(d);
  }
});
