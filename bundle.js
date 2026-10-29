// Fusion Food Family Lab - Complete Standalone Bundle (Zero CORS, 100% Offline Compatible)

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

const CHEF_RANKS = [
  { level: 1, title: 'Kitchen Apprentice', minXP: 0, maxXP: 250, badge: '🌱', perks: 'Mastering kitchen knife safety and basic spices.' },
  { level: 2, title: 'Spice Explorer', minXP: 251, maxXP: 600, badge: '🌶️', perks: 'Unlocked Indian bazaar spice substitution secrets.' },
  { level: 3, title: 'Street Food Alchemist', minXP: 601, maxXP: 1100, badge: '🌮', perks: 'Mastered fusion tacos, quesadillas, and quick naanzas.' },
  { level: 4, title: 'Fusion Sous Chef', minXP: 1101, maxXP: 1700, badge: '👨‍🍳', perks: 'Conquered food science emulsions and acid curing.' },
  { level: 5, title: 'Executive Fusion Master', minXP: 1701, maxXP: 2500, badge: '⭐', perks: 'Fluent in Nikkei ceviches, tiraditos, and ramen broths.' },
  { level: 6, title: 'Michelin Star Sorcerer', minXP: 2501, maxXP: 99999, badge: '🏆', perks: 'Ultimate family fusion legend! Zero culinary secrets left.' }
];

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
// 4. MAIN APPLICATION ARCHITECTURE
// ==========================================
const DEFAULT_STATE = {
  currentProfile: 'kid',
  currentTab: 'games', // 'games', 'kitchen', 'leaderboard'
  profiles: {
    kid: {
      name: 'Kid Chef Maya',
      avatar: '🧒',
      xp: 270,
      streak: 3,
      bests: { trivia: 8, buildDish: 4, pronunciation: 5, scienceSpins: 6 },
      unlockedBadges: ['🌱 Kitchen Apprentice', '🍄 Shroom Alchemist', '🥘 Dish Master']
    },
    parent: {
      name: 'Parent Sous-Chef',
      avatar: '👨‍🍳',
      xp: 450,
      streak: 5,
      bests: { trivia: 9, buildDish: 6, pronunciation: 7, scienceSpins: 8 },
      unlockedBadges: ['🌶️ Spice Explorer', '🔥 Tandoor Wizard', '🎌🇵🇪 Nikkei Explorer']
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
  theme: 'light'
};

class FusionApp {
  constructor() {
    this.state = this.loadState();
    if (!this.state.completedCityQuests) {
      this.state.completedCityQuests = [];
    }
    this.currentTriviaIndex = 0;
    this.triviaScore = 0;
    this.triviaTimer = null;
    this.triviaTimeLeft = 20;
    this.isSpinning = false;
    this.selectedDishIndex = 0;
    this.selectedMetro = INDIA_METROS_DATA[0];
    this.pronounceIndex = 0;
    this.assembledSyllables = [];
    this.buildDishSelectedIngredients = [];
    this.hotPotatoGame = null;
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
      console.warn('Could not save state:', e);
    }
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
  }

  // ========================================================
  // INSTANT TAB SWITCHER (NO ENDLESS VERTICAL SCROLLING)
  // ========================================================
  initMainTabs() {
    const tabButtons = document.querySelectorAll('.site-nav .nav-link[data-tab-target]');
    
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

    // Update Nav Buttons
    document.querySelectorAll('.site-nav .nav-link').forEach(btn => {
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

    const targetPane = document.getElementById(`pane-${tabId}`);
    if (targetPane) {
      targetPane.classList.add('active');
    }

    // Scroll back to top of main content smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getActiveProfile() {
    return this.state.profiles[this.state.currentProfile];
  }

  switchProfile() {
    sound.playClick();
    this.state.currentProfile = this.state.currentProfile === 'kid' ? 'parent' : 'kid';
    this.saveState();
    this.renderHeader();
    this.renderProgressStrip();
    this.renderLeaderboard();
    launchConfetti();
    const p = this.getActiveProfile();
    showToast(`Switched to ${p.name}!`, 'success');
  }

  addXP(amount, badgeToUnlock = null) {
    const profile = this.getActiveProfile();
    profile.xp += amount;
    
    if (badgeToUnlock && !profile.unlockedBadges.includes(badgeToUnlock)) {
      profile.unlockedBadges.push(badgeToUnlock);
      showToast(`Badge Unlocked: ${badgeToUnlock}!`, 'success');
    }

    const currentRank = this.getCurrentRank(profile.xp);
    this.saveState();
    this.renderHeader();
    this.renderProgressStrip();
    this.renderLeaderboard();
    sound.playCorrect();
    return currentRank;
  }

  getCurrentRank(xp) {
    for (let i = CHEF_RANKS.length - 1; i >= 0; i--) {
      if (xp >= CHEF_RANKS[i].minXP) {
        return CHEF_RANKS[i];
      }
    }
    return CHEF_RANKS[0];
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
    const rank = this.getCurrentRank(profile.xp);
    
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
    const rank = this.getCurrentRank(profile.xp);
    const nextRank = CHEF_RANKS.find(r => r.level === rank.level + 1) || rank;
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
            <span style="font-size:0.85rem; font-weight:normal; color:var(--text-muted);">(Level ${rank.level})</span>
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
    const correctItems = dish.pantryItems.filter(i => i.isCorrect);
    const completedCount = this.buildDishSelectedIngredients.length;
    const isFinished = completedCount === correctItems.length;

    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🥘</span>
          <div>
            <h3>Build-a-Dish: Chef's Cooking Lab</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Step-by-step vegetarian assembly & timed pantry rush</p>
          </div>
        </div>
        <div class="arena-badges">
          <span class="pill-badge" style="color:var(--primary); font-weight:800;">⏱️ Rush Mode</span>
          <span class="veg-badge"><span class="veg-icon-dot"></span> 100% Pure Veg</span>
        </div>
      </div>

      <div class="build-dish-container">
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
            <p>Tap the authentic vegetarian ingredients! Beware of non-veg or clashing impostors.</p>
            
            <div class="pantry-items-grid">
              ${dish.pantryItems.map((item) => {
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
                    <div class="step-card ${stepDone || isFinished ? 'completed' : ''}">
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

    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🧠</span>
          <div>
            <h3>Family Tag-Team Trivia</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">10 Questions with Soft Timer & Collaborative Hints</p>
          </div>
        </div>
        <div class="arena-badges">
          <span class="pill-badge">Question ${this.currentTriviaIndex + 1} of 10</span>
          <span class="pill-badge" style="color:var(--primary); font-weight:800;">Score: ${this.triviaScore}</span>
        </div>
      </div>

      <div class="trivia-container">
        <div class="trivia-topbar">
          <div class="timer-soft-badge">
            <span>⏳ Soft Timer:</span>
            <span id="trivia-timer-display">${this.triviaTimeLeft}s</span>
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
          const speedBonus = this.triviaTimeLeft > 10 ? 10 : 0;
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
          this.triviaTimeLeft = 20;
          this.renderTriviaGame(arena);
        });
      });
    });
  }

  startTriviaTimer() {
    clearInterval(this.triviaTimer);
    this.triviaTimeLeft = 20;
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

    const highScore = localStorage.getItem('fusion_hot_potato_high') || 0;

    arena.innerHTML = `
      <div class="arena-header">
        <div class="arena-title-group">
          <span class="arena-icon">🥔</span>
          <div>
            <h3>Hot Potato Rush</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">
              Inspired by PromptPotatoGames: Whack the potato, bounce it into glowing coals to cook it, and serve through the green window once golden!
            </p>
          </div>
        </div>
        <div class="arena-badges" style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <span class="pill-badge" style="color:var(--primary); font-weight:800;" id="hp-score-badge">Score: 0</span>
          <span class="pill-badge" id="hp-high-badge">Best: ${highScore}</span>
          <span class="pill-badge" style="color:#F59E0B;" id="hp-heat-badge">Heat: Raw (0%)</span>
        </div>
      </div>

      <div class="hot-potato-arena-wrapper">
        <div class="hot-potato-canvas-container" id="hp-canvas-container">
          <canvas id="hot-potato-canvas" width="800" height="460"></canvas>
          <div class="hot-potato-overlay" id="hp-start-overlay">
            <div class="hp-overlay-card">
              <div style="font-size:3.5rem; margin-bottom:0.4rem; animation:hpTumble 1.8s infinite ease-in-out;">🥔</div>
              <h3 style="font-size:1.75rem; margin-bottom:0.4rem;">Hot Potato Rush!</h3>
              <p style="color:var(--text-muted); font-size:0.92rem; max-width:440px; margin:0 auto 1.25rem; line-height:1.5;">
                🔥 <strong>Cook:</strong> Bounce the potato on the hot tandoor coals at the bottom.<br>
                💥 <strong>Whack:</strong> Click, tap or press <strong>SPACE</strong> to whack the potato upwards.<br>
                ✨ <strong>Serve:</strong> Once it turns <strong>Golden Crispy</strong>, fling it into the <strong>Green Serving Window</strong> on the right! Don't let it turn to charcoal!
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
            💥 WHACK POTATO (Tap or Space)
          </button>
          <div class="hp-status-strip">
            <div class="hp-meter-outer">
              <div class="hp-meter-fill" id="hp-meter-fill"></div>
            </div>
            <span id="hp-status-text" style="font-size:0.85rem; font-weight:700;">State: Raw</span>
          </div>
        </div>
      </div>
    `;

    this.initHotPotatoEngine(arena);
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

    let isPlaying = false;
    let score = 0;
    let highScore = parseInt(localStorage.getItem('fusion_hot_potato_high') || '0', 10);

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

    // Particles array for sizzles and sparkles
    let particles = [];

    // Service window on right wall
    const serveWindow = {
      x: 775,
      y: 110,
      w: 25,
      h: 150
    };

    // Coals zone at the bottom
    const coalsHeight = 55;

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

    const whackPotato = () => {
      if (!isPlaying) return;
      sound.playWhack();

      // Give strong upward and forward impulse
      potato.vy = -9.2 - Math.random() * 2;
      potato.vx += (Math.random() * 3.5 - 1.2);
      // Keep x velocity reasonable
      if (potato.vx < -6) potato.vx = -6;
      if (potato.vx > 7) potato.vx = 7;
      potato.rotSpeed = (Math.random() - 0.5) * 0.28;

      // Sparkle burst at whack location
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
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('fusion_hot_potato_high', highScore);
        highBadge.innerText = `Best: ${highScore}`;
      }

      startOverlay.style.display = 'flex';
      startOverlay.innerHTML = `
        <div class="hp-overlay-card">
          <div style="font-size:3.5rem; margin-bottom:0.4rem;">${reason === 'burnt' ? '🔥' : '💥'}</div>
          <h3 style="font-size:1.7rem; color:#F43F5E; margin-bottom:0.25rem;">
            ${reason === 'burnt' ? 'Charcoal Alert! Potato Burnt!' : 'Dropped Potato!'}
          </h3>
          <p style="color:var(--text-main); font-size:1.1rem; font-weight:800; margin-bottom:0.5rem;">
            Final Score: ${score} Potatoes Served
          </p>
          <p style="color:var(--text-muted); font-size:0.86rem; margin-bottom:1.25rem;">
            ${reason === 'burnt' 
              ? 'You kept the potato on the sizzling coals too long! Serve it through the green window when it glows Golden.'
              : 'Keep the potato in the air by whacking it before it hits the side spikes!'}
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
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('fusion_hot_potato_high', highScore);
        highBadge.innerText = `Best: ${highScore}`;
      }

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

    whackBtn?.addEventListener('click', whackPotato);

    canvas.addEventListener('pointerdown', (e) => {
      whackPotato();
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

    // Physics Engine Loop
    const gravity = 0.28;
    const updateLoop = () => {
      if (isPlaying) {
        // Apply Gravity
        potato.vy += gravity;
        potato.x += potato.vx;
        potato.y += potato.vy;
        potato.rotation += potato.rotSpeed;

        // Left wall bounce
        if (potato.x - potato.radius < 0) {
          potato.x = potato.radius;
          potato.vx = -potato.vx * 0.85;
          sound.playTick();
        }

        // Right wall bounce or Serve Window check
        if (potato.x + potato.radius >= serveWindow.x) {
          // Check if in green window range vertically
          if (potato.y >= serveWindow.y && potato.y <= serveWindow.y + serveWindow.h) {
            // Check cooking stage
            if (potato.cookLevel >= 38 && potato.cookLevel <= 85) {
              serveSuccess();
            } else if (potato.cookLevel < 38) {
              // Too raw to serve
              potato.x = serveWindow.x - potato.radius;
              potato.vx = -Math.abs(potato.vx) * 0.9;
              sound.playWrong();
              showToast('Potato is still RAW! Cook it on the coals first!', 'info');
            } else {
              // Burnt
              gameOver('burnt');
            }
          } else {
            // Hit wall outside window
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

        // Bottom Coals Zone
        const coalsY = canvas.height - coalsHeight;
        if (potato.y + potato.radius >= coalsY) {
          potato.y = coalsY - potato.radius;
          potato.vy = -6.5 - Math.random() * 2; // Auto bounce off coals
          potato.cookLevel += 18; // Cooking!
          sound.playSizzle();

          // Smoke / ember particles
          for (let i = 0; i < 10; i++) {
            particles.push({
              x: potato.x + (Math.random() - 0.5) * 20,
              y: coalsY,
              vx: (Math.random() - 0.5) * 3,
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
        meterFill.style.width = `${cookPct}%`;

        let color = '#38BDF8';
        let label = `Raw (${cookPct}%)`;
        if (cookPct >= 38 && cookPct <= 85) {
          color = '#10B981';
          label = `✨ GOLDEN & CRISPY! SERVE NOW! (${cookPct}%)`;
          meterFill.style.background = 'linear-gradient(90deg, #10B981, #F59E0B)';
        } else if (cookPct > 85) {
          color = '#EF4444';
          label = `⚠️ BURNING! SERVE FAST! (${cookPct}%)`;
          meterFill.style.background = '#EF4444';
        } else {
          meterFill.style.background = '#38BDF8';
        }
        statusText.style.color = color;
        statusText.innerText = `State: ${label}`;
        arena.querySelector('#hp-heat-badge').innerText = `Heat: ${cookPct}%`;
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
  }

  // ========================================================
  // RECIPE POP-OUT MODAL & GEMINI AI SOUS-CHEF
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
              <span>${hasApiKey ? '🔑 API Key Active' : '🔑 Set Gemini API Key'}</span>
            </button>
          </div>

          <!-- Collapsible API Key Box -->
          <div class="api-key-box" id="api-key-config-box" style="display:${hasApiKey ? 'none' : 'flex'};">
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
            <span style="font-size:0.72rem; color:var(--text-muted);">
              Saved locally in your browser. Never shared or sent anywhere except Google's official Gemini endpoint.
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

    // Save key
    document.getElementById('save-gemini-key-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const val = keyInput.value.trim();
      this.setGeminiKey(val);
      sound.playCorrect();
      showToast(val ? 'Gemini API key saved!' : 'Gemini API key removed', 'success');
      keyBox.style.display = 'none';
      if (toggleKeyBtn) {
        toggleKeyBtn.className = `api-key-pill ${val ? 'active' : ''}`;
        toggleKeyBtn.innerHTML = `<span>${val ? '🔑 API Key Active' : '🔑 Set Gemini API Key'}</span>`;
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

    if (apiKey) {
      try {
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
        } else if (data.error) {
          const errText = `⚠️ **Gemini API Notice**: ${data.error.message || 'Key verification failed'}. Check the API key pill above!`;
          this.appendAiMessage(messagesContainer, errText);
          sound.playWrong();
        } else {
          this.appendAiMessage(messagesContainer, `I couldn't quite catch that! Could you ask about ingredients, prep, or cooking tips?`);
        }
      } catch (err) {
        typingBubble.remove();
        console.error('Gemini API fetch error:', err);
        const fallbackText = this.getContextualFallback(dish, prompt);
        this.appendAiMessage(messagesContainer, fallbackText);
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
  renderLeaderboard() {
    const ladderContainer = document.getElementById('rank-ladder-display');
    const rosterContainer = document.getElementById('family-roster-display');
    const profile = this.getActiveProfile();
    const currentRank = this.getCurrentRank(profile.xp);

    if (ladderContainer) {
      ladderContainer.innerHTML = CHEF_RANKS.map(r => {
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
      rosterContainer.innerHTML = Object.entries(this.state.profiles).map(([key, p]) => {
        const isActive = key === this.state.currentProfile;
        const pRank = this.getCurrentRank(p.xp);

        return `
          <div style="background:var(--bg-card-subtle); border:${isActive ? '2.5px solid var(--primary)' : '1.5px solid var(--border-color)'}; border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.15rem; box-shadow:${isActive ? '0 4px 16px var(--primary-glow)' : 'none'};">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:0.85rem;">
                <span style="font-size:2.2rem;">${p.avatar}</span>
                <div>
                  <strong style="font-size:1.05rem;">${p.name}</strong>
                  <div style="font-size:0.82rem; color:var(--text-muted);">${pRank.title} (Level ${pRank.level})</div>
                </div>
              </div>
              <div style="text-align:right;">
                <div style="font-weight:900; color:var(--primary); font-size:1.35rem;">${p.xp} XP</div>
                <div style="font-size:0.8rem; color:var(--secondary); font-weight:700;">🔥 ${p.streak} Day Streak</div>
              </div>
            </div>

            <div style="margin-top:0.85rem; border-top:1px dashed var(--border-dashed); padding-top:0.65rem; display:flex; flex-wrap:wrap; gap:0.45rem;">
              ${p.unlockedBadges.map(b => `
                <span class="pill-badge" style="font-size:0.75rem; background:var(--bg-card);">${b}</span>
              `).join('')}
            </div>
          </div>
        `;
      }).join('');
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
            <button class="btn btn-secondary" id="reset-scores-btn" style="color:#DC2626; border-color:#DC2626; padding:0.45rem 0.85rem; font-size:0.82rem;">
              ⚠️ Reset All Scores
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
    document.getElementById('profile-switch-btn')?.addEventListener('click', () => this.switchProfile());
    document.getElementById('admin-modal-open-btn')?.addEventListener('click', () => this.openAdminModal());
    document.getElementById('admin-footer-link')?.addEventListener('click', () => this.openAdminModal());
    document.getElementById('close-admin-modal-btn')?.addEventListener('click', () => this.closeAdminModal());
    document.getElementById('admin-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'admin-modal') this.closeAdminModal();
    });
    document.getElementById('recipe-popout-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'recipe-popout-modal') this.closeRecipePopout();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAdminModal();
        this.closeRecipePopout();
      }
    });
  }
}

// Launch on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  try {
    const app = new FusionApp();
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
