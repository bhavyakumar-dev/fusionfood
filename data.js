// Fusion Food Family Lab - Complete Dataset (100% Vegetarian Cuisines & Indian Adaptations)

export const FUSION_DISHES = [
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
    origin: 'Indo-French / Euro-Asian',
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
      { name: 'Maple Syrup', isCorrect: false, emoji: '🍁', distractorReason: 'Too sugary for a savory savory Japanese-Indian curry ramen!' }
    ],
    scienceNote: 'Ramen noodles contain kansui (alkaline salts: sodium carbonate) which raises pH, giving noodles their yellow hue, firm chew, and resistance to getting soggy in hot broth!'
  }
];

export const CULINARY_SCIENCE_TOPICS = [
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

export const TRIVIA_QUESTIONS = [
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

export const INDIA_METROS_DATA = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'India’s Capital of Experiential Fusion Dining',
    x: 28, // SVG percentage coordinates
    y: 60,
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
    x: 38,
    y: 28,
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
    x: 37,
    y: 77,
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
    x: 27,
    y: 70,
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
    x: 31,
    y: 63,
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
    x: 42,
    y: 61,
    famousHubs: 'Jubilee Hills, Banjara Hills, Gachibowli, Hitec City',
    topMarket: 'Begum Bazaar & Moazzam Jahi Market',
    dishesAvailable: [
      { name: 'Spicy Paneer Tikka Tacos', level: 'High (Gastropubs in Jubilee Hills)' },
      { name: 'Naanza & Makhani Pasta', level: 'High (Casual dining in Hitec City & Banjara Hills)' },
      { name: 'Gulab Jamun & Shahi Tukda Cheesecake', level: 'High (Festive confectioneries and luxury dining)' }
    ],
    questTip: 'Hyderabad’s Begum Bazaar is a treasure trove for whole green cardamom, saffron, and stone flowers (kalpasi)!'
  }
];

export const CHEF_RANKS = [
  { level: 1, title: 'Kitchen Apprentice', minXP: 0, maxXP: 250, badge: '🌱', icon: 'CookingPot', perks: 'Mastering kitchen knife safety and basic spices.' },
  { level: 2, title: 'Spice Explorer', minXP: 251, maxXP: 600, badge: '🌶️', icon: 'Flame', perks: 'Unlocked Indian bazaar spice substitution secrets.' },
  { level: 3, title: 'Street Food Alchemist', minXP: 601, maxXP: 1100, badge: '🌮', icon: 'Sparkles', perks: 'Mastered fusion tacos, quesadillas, and quick naanzas.' },
  { level: 4, title: 'Fusion Sous Chef', minXP: 1101, maxXP: 1700, badge: '👨‍🍳', icon: 'Award', perks: 'Conquered food science emulsions and acid curing.' },
  { level: 5, title: 'Executive Fusion Master', minXP: 1701, maxXP: 2500, badge: '⭐', icon: 'Crown', perks: 'Fluent in Nikkei ceviches, tiraditos, and ramen broths.' },
  { level: 6, title: 'Michelin Star Sorcerer', minXP: 2501, maxXP: 99999, badge: '🏆', icon: 'Zap', perks: 'Ultimate family fusion legend! Zero culinary secrets left.' }
];
