// Menu Data - Based on Tsonas menu from e-food.gr
const menuData = {
    crepes: {
        sweet: [      
            { name: "Κρέπα Τσώνας", description: "Με Lacta σοκολάτα, Oreo & μπανάνα", price: 5.50 },
            { name: "Κρέπα Λιχούδης", description: "Με Merenda & πραλίνα λευκή, Bueno, ινδοκάρυδο & αμύγδαλο", price: 5.80 },
            { name: "Κρέπα Ουράνιο Τόξο", description: "Με πραλίνα λευκή & πραλίνα φράουλα, marshmallows & Smarties", price: 5.00 },
            { name: "Κρέπα Nutrella", description: "Με Nutella, μπισκότο, Bueno & τρούφα", price: 6.10 },
            { name: "Κρέπα Fitness", description: "Με σοκολάτα υγείας, φουντούκι & μπανάνα", price: 5.40 },
            { name: "Κρέπα Banoffee", description: "Με Merenda, καραμέλα, μπισκότο & μπανάνα", price: 5.40 }
        ],
        savory: [
            { name: "Κρέπα Κλασική", description: "Με κοτόπουλο, gouda, μανιτάρια & ουγγαρέζα", price: 5.70 },
            { name: "Κρέπα Γιαννιώτικη", description: "Με κοτομπουκιές, gouda, πατάτες τηγανητές & ουγγαρέζα", price: 5.50 },
            { name: "Κρέπα Σεφ", description: "Με σνίτσελ κοτόπουλο, μπέικον, πατάτες τηγανητές, Philadelphia, tabasco & BBQ σως", price: 7.00 },
            { name: "Κρέπα Τσώνας", description: "Με σνίτσελ κοτόπουλο, μπέικον, πατάτες τηγανητές, BBQ σως, τυροσαλάτα & ουγγαρέζα", price: 7.10 },
            { name: "Κρέπα Ξα", description: "Με κοτόπουλο, μπέικον, gouda, αυγό βραστό, πιπεριά πράσινη & μαγιονέζα", price: 6.70 },
            { name: "Κρέπα Hot", description: "Με κοτομπουκιές, σαλάμι μπύρας, gouda, τυροσαλάτα, σως cocktail & tabasco", price: 6.70 },
            { name: "Κρέπα Σπαλιάρης", description: "Με κοτομπουκιές, διπλό μπέικον, διπλό gouda, chips, καλαμπόκι & ουγγαρέζα", price: 8.60 },
            { name: "Κρέπα Μπετσούκος", description: "Με κοτόπουλο, κοτομπουκιές, γαλοπούλα, cheddar, La Vache qui rit, chips, ντομάτα & διπλή μαγιονέζα", price: 9.30 },
            { name: "Κρέπα Χαίτης", description: "Με κοτόπουλο, μπέικον, gouda, αυγό βραστό, μανιτάρια, πιπεριά πράσινη, ουγγαρέζα & sweet chili σως", price: 7.60 },
            { name: "Κρέπα Τυριών", description: "Με κασέρι καπνιστό, μανούρι, Philadelphia, cheddar & ρίγανη", price: 7.30 }
        ]
    },
    clubSandwiches: [
        { name: "Club Sandwich Γαλοπούλα", description: "Με γαλοπούλα, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 4.90 },
        { name: "Club Sandwich Πάριζα", description: "Με πάριζα, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 4.70 },
        { name: "Club Sandwich Μπέικον", description: "Με μπέικον, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 4.90 },
        { name: "Club Sandwich Σαλάμι Μπύρας", description: "Με σαλάμι μπύρας, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 4.90 },
        { name: "Club Sandwich Κοτόπουλο", description: "Με κοτόπουλο, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 6.40 },
        { name: "Club Sandwich Κοτομπουκιές", description: "Με κοτομπουκιές χειροποίητες, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 6.70 },
        { name: "Club Sandwich Σνίτσελ Κοτόπουλο", description: "Με σνίτσελ κοτόπουλο, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 7.20 },
        { name: "Club Sandwich Μπριζόλα Καπνιστή", description: "Με μπριζόλα καπνιστή, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 5.60 },
        { name: "Club Sandwich Νηστίσιμο", description: "Με μπιφτέκι λαχανικών, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές", price: 5.80 }
    ],
    toast: [
        { name: "Τοστ Τυρί", description: "Κλασικό τοστ με τυρί", price: 3.50 },
        { name: "Τοστ Χαμ & Τυρί", description: "Με χαμ και τυρί", price: 4.00 },
        { name: "Τοστ Γαλοπούλα", description: "Με γαλοπούλα και τυρί", price: 4.00 },
        { name: "Τοστ Τόνος", description: "Με τόνο και μαγιονέζα", price: 4.50 }
    ],
    tortillas: [
        { name: "Τορτίγια Χαμ", description: "Με χαμ, τυρί και λαχανικά", price: 5.50 },
        { name: "Τορτίγια Γαλοπούλα", description: "Με γαλοπούλα και σως", price: 5.50 },
        { name: "Τορτίγια Τόνος", description: "Με τόνο και λαχανικά", price: 6.00 },
        { name: "Τορτίγια Veggie", description: "Με λαχανικά και τυρί", price: 5.00 }
    ],
    salads: [
        { name: "Caesar's", description: "Με σνίτσελ κοτόπουλο, iceberg, μπέικον, παρμεζάνα, καλαμπόκι, τηγανητή τορτίγια με πάπρικα & Caesar`s sauce", price: 6.30 }
    ],
    portions: [
        { name: "Μερίδα Πατάτες", description: "Πατάτες τηγανητές", price: 2.00 },
        { name: "Μερίδα Κοτομπουκιές", description: "Κοτομπουκιές χειροποίητες", price: 5.80 }
    ],
    dips: [
        { name: "ΜΑΓΙΟΝΕΖΑ", price: 0.70 },
        { name: "ΣΟΣ ΜΟΥΣΤΑΡΔΑΣ", price: 0.70 },
        { name: "ΣΟΣ ΚΟΚΤΕΙΛ", price: 0.70 },
        { name: "GOLDEN BBQ", price: 0.80 },
        { name: "CEASARS", price: 1.00 },
        { name: "ΜΟΥΣΤΑΡΔΑ", price: 0.40 },
        { name: "ΣΩΣ ΦΕΤΑΣ", price: 1.40 },
        { name: "ΤΥΡΟΣΑΛΑΤΑ", price: 1.20 },
        { name: "ΟΥΓΓΑΡΕΖΑ", price: 0.80 },
        { name: "BBQ", price: 0.90 },
        { name: "PHILADELPHIA", price: 1.70 },
        { name: "ΓΙΑΟΥΡΤΙ", price: 0.70 },
        { name: "ΡΩΣΙΚΗ", price: 0.90 },
        { name: "ΚΕΤΣΑΠ", price: 0.40 },
        { name: "SWEET CHILLY", price: 0.60 },
        { name: "VEGAN MAYO", price: 1.00 }
    ],
    drinks: {
        αναψυκτικά: [
            { name: "Coca-Cola 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Coca-Cola zero 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Fanta πορτοκαλάδα 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Fanta λεμονάδα 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Sprite 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Tuborg soda 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Pepsi twist 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Pepsi lime 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Coca-Cola 500ml", takeAwayPrice: 2.30, dineInPrice: 3.00 },
            { name: "Coca-Cola zero 500ml", takeAwayPrice: 2.30, dineInPrice: 3.00 },
            { name: "Coca-Cola 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Coca-Cola zero 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Fanta πορτοκαλάδα 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Fanta λεμονάδα 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Βίκος pink grapefruit 250ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Ξυνό νερό Φλώρινας 250ml", takeAwayPrice: 2.00, dineInPrice: 2.50 },
            { name: "Νερό 500ml", takeAwayPrice: 0.50, dineInPrice: 0.50 },
            { name: "Νερό 1.5lt", takeAwayPrice: 1.00, dineInPrice: 1.00 }
        ],
        μπύρες: [
            { name: "Άλφα 330ml", takeAwayPrice: 2.00, dineInPrice: 2.50 },
            { name: "Amstel 330ml", takeAwayPrice: 2.00, dineInPrice: 2.50 },
            { name: "Sol 330ml", takeAwayPrice: 2.70, dineInPrice: 3.50 },
            { name: "Βεργίνα 500ml", takeAwayPrice: 2.00, dineInPrice: 3.50 },
            { name: "Mythos Radler 330ml", takeAwayPrice: 2.00, dineInPrice: 2.50 }
        ],
        κρασιά: [
            { name: "Κρασί κόκκινο ξηρό Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 2.50, dineInPrice: 3.50 },
            { name: "Κρασί κόκκινο ημίγλυκο Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 2.50, dineInPrice: 3.50 },
            { name: "Κρασί λευκό ξηρό Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 2.50, dineInPrice: 3.50 },
            { name: "Κρασί λευκό ημίγλυκο Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 2.50, dineInPrice: 3.50 },
            { name: "Ρετσίνα Γιώργου Γεωργιάδη 500ml", takeAwayPrice: 3.50, dineInPrice: 4.00 }
        ],
        icedTea: [
            { name: "Lipton ice tea λεμόνι 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Lipton ice tea ροδάκινο 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 },
            { name: "Lipton ice tea green lemon χωρίς ζάχαρη 330ml", takeAwayPrice: 1.80, dineInPrice: 2.50 }
        ],
        χυμοί: [
            { name: "Amita πορτοκάλι 250ml", takeAwayPrice: 2.00, dineInPrice: 2.50 },
            { name: "Amita Motion 250ml", takeAwayPrice: 2.00, dineInPrice: 2.50 }
        ]
    }
};

// Translation System
let isTranslated = false;

// Function to initialize translation button text
function initializeTranslationButton() {
    const translateText = document.getElementById('translateText');
    if (translateText) {
        translateText.textContent = isTranslated ? 'EN' : 'GR';
    }
}

// English translations for menu items
const englishTranslations = {
    // Crepes - Sweet
    "Κρέπα Τσώνας": "Tsonas Crepe",
    "Κρέπα Λιχούδης": "Lihoudhs Crepe",
    "Κρέπα Ουράνιο Τόξο": "Rainbow Crepe",
    "Κρέπα Nutrella": "Nutrella Crepe",
    "Κρέπα Fitness": "Fitness Crepe",
    "Κρέπα Banoffee": "Banoffee Crepe",
    
    // Crepes - Savory
    "Κρέπα Κλασική": "Classic Crepe",
    "Κρέπα Γιαννιώτικη": "Gianniotikh Crepe",
    "Κρέπα Σεφ": "Chef's Crepe",
    "Κρέπα Ξα": "Xa Crepe",
    "Κρέπα Hot": "Hot Crepe",
    "Κρέπα Σπαλιάρης": "Spaliaris Crepe",
    "Κρέπα Μπετσούκος": "Betsoukos Crepe",
    "Κρέπα Χαίτης": "Hetis Crepe",
    "Κρέπα Τυριών": "Cheese Crepe",
    
    // Club Sandwiches
    "Club Sandwich Γαλοπούλα": "Club Sandwich Turkey",
    "Club Sandwich Πάριζα": "Club Sandwich Ham",
    "Club Sandwich Μπέικον": "Club Sandwich Bacon",
    "Club Sandwich Σαλάμι Μπύρας": "Club Sandwich Beer Salami",
    "Club Sandwich Κοτόπουλο": "Club Sandwich Chicken",
    "Club Sandwich Κοτομπουκιές": "Club Sandwich Chicken Nuggets",
    "Club Sandwich Σνίτσελ Κοτόπουλο": "Club Sandwich Chicken Schnitzel",
    "Club Sandwich Μπριζόλα Καπνιστή": "Club Sandwich Smoked Brisket",
    "Club Sandwich Νηστίσιμο": "Club Sandwich Vegetarian",
    
    // Toast
    "Τοστ Τυρί": "Cheese Toast",
    "Τοστ Χαμ & Τυρί": "Ham & Cheese Toast",
    "Τοστ Γαλοπούλα": "Turkey Toast",
    "Τοστ Τόνος": "Tuna Toast",
    
    // Tortillas
    "Τορτίγια Χαμ": "Ham Tortilla",
    "Τορτίγια Γαλοπούλα": "Turkey Tortilla",
    "Τορτίγια Τόνος": "Tuna Tortilla",
    "Τορτίγια Veggie": "Veggie Tortilla",
    
    // Salads
    "Caesar's": "Caesar's",
    
    // Portions
    "Μερίδα Πατάτες": "French Fries Portion",
    "Μερίδα Κοτομπουκιές": "Chicken Nuggets Portion",
    
    // Dips
    "ΜΑΓΙΟΝΕΖΑ": "MAYONNAISE",
    "ΣΟΣ ΜΟΥΣΤΑΡΔΑΣ": "MUSTARD SAUCE",
    "ΣΟΣ ΚΟΚΤΕΙΛ": "COCKTAIL SAUCE",
    "GOLDEN BBQ": "GOLDEN BBQ",
    "CEASARS": "CEASARS",
    "ΜΟΥΣΤΑΡΔΑ": "MUSTARD",
    "ΣΩΣ ΦΕΤΑΣ": "FETA SAUCE",
    "ΤΥΡΟΣΑΛΑΤΑ": "CHEESE SALAD",
    "ΟΥΓΓΑΡΕΖΑ": "HUNGARIAN",
    "BBQ": "BBQ",
    "PHILADELPHIA": "PHILADELPHIA",
    "ΓΙΑΟΥΡΤΙ": "YOGURT",
    "ΡΩΣΙΚΗ": "RUSSIAN",
    "ΚΕΤΣΑΠ": "KETCHUP",
    "SWEET CHILLY": "SWEET CHILLI",
    "VEGAN MAYO": "VEGAN MAYO",
    
    // Drinks
    "Άλφα 330ml": "Alpha 330ml",
    "Amstel 330ml": "Amstel 330ml",
    "Sol 330ml": "Sol 330ml",
    "Βεργίνα 500ml": "Vergina 500ml",
    "Mythos Radler 330ml": "Mythos Radler 330ml",
    "Κρασί κόκκινο ξηρό Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml": "Red Dry Wine Ideal Winery Vaeni Naoussa 750ml",
    "Κρασί κόκκινο ημίγλυκο Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml": "Red Semi-Sweet Wine Ideal Winery Vaeni Naoussa 750ml",
    "Κρασί λευκό ξηρό Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml": "White Dry Wine Ideal Winery Vaeni Naoussa 750ml",
    "Κρασί λευκό ημίγλυκο Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml": "White Semi-Sweet Wine Ideal Winery Vaeni Naoussa 750ml",
    "Ρετσίνα Γιώργου Γεωργιάδη 500ml": "Retsina Georgiou Georgiadis 500ml",
    "Lipton ice tea λεμόνι 330ml": "Lipton Ice Tea Lemon 330ml",
    "Lipton ice tea ροδάκινο 330ml": "Lipton Ice Tea Peach 330ml",
    "Lipton ice tea green lemon χωρίς ζάχαρη 330ml": "Lipton Ice Tea Green Lemon Sugar Free 330ml",
    "Amita πορτοκάλι 250ml": "Amita Orange 250ml",
    "Amita Motion 250ml": "Amita Motion 250ml",
    "Βίκος pink grapefruit 250ml": "Vikos Pink Grapefruit 250ml",
    "Ξυνό νερό Φλώρινας 250ml": "Sour Water Florina 250ml",
    "Νερό 500ml": "Water 500ml",
    "Νερό 1.5lt": "Water 1.5L"
};

// English translations for descriptions

// English translations for ingredient categories
const englishIngredientCategories = {
    // Salty categories
    'Τυριά': 'Cheeses',
    'Αλλαντικά': 'Cold Cuts',
    'Κρεατικά': 'Meats',
    'Λαχανικά': 'Vegetables',
    'Σάλτσες': 'Sauces',
    'Extra': 'Extra',
    
    // Sweet categories
    'Πραλίνες': 'Pralines',
    'Συνδυασμοί Πραλίνων': 'Praline Combinations',
    'Σοκολάτες': 'Chocolates',
    'Ξηροί Καρποί': 'Nuts',
    'Φρούτα': 'Fruits'
};

// English translations for ingredients
const englishIngredients = {
    // Bases
    'Κλασική Βάση Κρέπας': 'Classic Crepe Base',
    'Ψωμί Τοστ': 'Toast Bread',
    'Τορτίγια': 'Tortilla',
    
    // Cheeses
    'Gouda': 'Gouda',
    'Mozzarella': 'Mozzarella',
    'Κασέρι καπνιστό': 'Smoked Kasseri',
    'Cheddar': 'Cheddar',
    'Φέτα': 'Feta',
    'Μανούρι': 'Manouri',
    'La Vache qui rit': 'La Vache qui rit',
    'Philadelphia': 'Philadelphia',
    'Παρμεζάνα': 'Parmesan',
    'Γραβιέρα': 'Graviera',
    
    // Cold Cuts
    'Πάριζα': 'Ham',
    'Γαλοπούλα καπνιστή': 'Smoked Turkey',
    'Μπέικον': 'Bacon',
    'Σαλάμι μπύρας': 'Beer Salami',
    'Μπριζόλα καπνιστή': 'Smoked Brisket',
    
    // Meats
    'Κοτόπουλο στήθος': 'Chicken Breast',
    'Κοτομπουκιές': 'Chicken Nuggets',
    'Σνίτσελ κοτόπουλο': 'Chicken Schnitzel',
    
    // Vegetables
    'Ντομάτα': 'Tomato',
    'Μαρούλι': 'Lettuce',
    'Πιπεριά πράσινη': 'Green Pepper',
    'Πιπεριά Φλωρίνης': 'Florina Pepper',
    'Αγγούρι': 'Cucumber',
    'Μανιτάρια': 'Mushrooms',
    'Ελιά ροδέλα': 'Olive Slices',
    'Καλαμπόκι': 'Corn',
    'Iceberg': 'Iceberg',
    
    // Sauces
    'Μαγιονέζα': 'Mayonnaise',
    'Ουγγαρέζα': 'Hungarian',
    'Τυροσαλάτα': 'Cheese Salad',
    'Σως μουστάρδας': 'Mustard Sauce',
    'Tabasco': 'Tabasco',
    'Ketchup': 'Ketchup',
    'Μουστάρδα': 'Mustard',
    'BBQ': 'BBQ',
    'Golden BBQ': 'Golden BBQ',
    'Σως Caesar`s': 'Caesar Sauce',
    'Σως sweet chili': 'Sweet Chili Sauce',
    'Ρώσικη σαλάτα': 'Russian Salad',
    'Σως cocktail': 'Cocktail Sauce',
    'Γιαούρτι': 'Yogurt',
    
    // Extra
    'Αυγό βραστό': 'Boiled Egg',
    'Πατάτες τηγανητές': 'French Fries',
    'Chips': 'Chips',
    'Τόνος': 'Tuna',
    'Μπούκοβο': 'Bukovo',
    
    // Sweet ingredients
    'Πραλίνα Dubai (με κομμάτια φυστικιού & φύλλο κανταΐφι)': 'Dubai Praline (with peanut pieces & kataifi)',
    'Merenda': 'Merenda',
    'Πραλίνα Bueno': 'Bueno Praline',
    'Πραλίνα λευκή': 'White Praline',
    'Πραλίνα φράουλα': 'Strawberry Praline',
    'Nutella': 'Nutella',
    
    // Praline combinations
    'Merenda & πραλίνα Bueno': 'Merenda & Bueno Praline',
    'Merenda & πραλίνα λευκή': 'Merenda & White Praline',
    'Merenda & πραλίνα φράουλα': 'Merenda & Strawberry Praline',
    'Πραλίνα Bueno & πραλίνα λευκή': 'Bueno Praline & White Praline',
    'Πραλίνα Bueno & πραλίνα φράουλα': 'Bueno Praline & Strawberry Praline',
    'Πραλίνα Bueno & Nutella': 'Bueno Praline & Nutella',
    'Πραλίνα λευκή & πραλίνα φράουλα': 'White Praline & Strawberry Praline',
    'Πραλίνα λευκή & Nutella': 'White Praline & Nutella',
    'Πραλίνα φράουλα & Nutella': 'Strawberry Praline & Nutella',
    
    // Chocolates
    'Lacta': 'Lacta',
    'Milka φράουλα': 'Milka Strawberry',
    'Nestle Crunch λευκή': 'Nestle Crunch White',
    'ΙΟΝ αμυγδάλου': 'ION Almond',
    'Σοκολάτα υγείας': 'Health Chocolate',
    'Maltesers': 'Maltesers',
    'Snickers': 'Snickers',
    'Mars': 'Mars',
    'Twix': 'Twix',
    'Kit Kat': 'Kit Kat',
    'Kinder Bueno': 'Kinder Bueno',
    'Smarties': 'Smarties',
    
    // Nuts
    'Καρύδι': 'Walnut',
    'Αμύγδαλο': 'Almond',
    'Φουντούκι': 'Hazelnut',
    
    // Fruits
    'Μπανάνα φρούτο': 'Banana Fruit',
    
    // Other sweets
    'Μπισκότο': 'Biscuit',
    'Μπισκότο Oreo': 'Oreo Biscuit',
    'Cookies': 'Cookies',
    'Ινδοκάρυδο': 'Coconut',
    'Τρούφα': 'Truffle',
    'Φυστικοβούτυρο': 'Peanut Butter',
    'Μέλι': 'Honey',
    'Καραμέλα': 'Caramel',
    'Marshmallows': 'Marshmallows',
    'Caprice': 'Caprice',
    'Philadelphia': 'Philadelphia'
};

// Function to translate ingredient names and categories
function translateIngredientText(text, language) {
    if (language === 'english') {
        // First try to translate ingredient categories
        if (englishIngredientCategories[text]) {
            return englishIngredientCategories[text];
        }
        // Then try to translate ingredient names
        if (englishIngredients[text]) {
            return englishIngredients[text];
        }
        // If no translation found, return original text
        return text;
    }
    return text;
}
const englishDescriptions = {
    // Sweet Crepes
    "Με Lacta σοκολάτα, Oreo & μπανάνα": "With Lacta chocolate, Oreo & banana",
    "Με Merenda & πραλίνα λευκή, Bueno, ινδοκάρυδο & αμύγδαλο": "With Merenda & white praline, Bueno, coconut & almond",
    "Με πραλίνα λευκή & πραλίνα φράουλα, marshmallows & Smarties": "With white praline & strawberry praline, marshmallows & Smarties",
    "Με Nutella, μπισκότο, Bueno & τρούφα": "With Nutella, biscuit, Bueno & truffle",
    "Με σοκολάτα υγείας, φουντούκι & μπανάνα": "With health chocolate, hazelnut & banana",
    "Με Merenda, καραμέλα, μπισκότο & μπανάνα": "With Merenda, caramel, biscuit & banana",
    
    // Savory Crepes
    "Με κοτόπουλο, gouda, μανιτάρια & ουγγαρέζα": "With chicken, gouda, mushrooms & Hungarian sauce",
    "Με κοτομπουκιές, gouda, πατάτες τηγανητές & ουγγαρέζα": "With chicken nuggets, gouda, french fries & Hungarian sauce",
    "Με σνίτσελ κοτόπουλο, μπέικον, πατάτες τηγανητές, Philadelphia, tabasco & BBQ σως": "With chicken schnitzel, bacon, french fries, Philadelphia, tabasco & BBQ sauce",
    "Με σνίτσελ κοτόπουλο, μπέικον, πατάτες τηγανητές, BBQ σως, τυροσαλάτα & ουγγαρέζα": "With chicken schnitzel, bacon, french fries, BBQ sauce, cheese salad & Hungarian sauce",
    "Με κοτόπουλο, μπέικον, gouda, αυγό βραστό, πιπεριά πράσινη & μαγιονέζα": "With chicken, bacon, gouda, boiled egg, green pepper & mayonnaise",
    "Με κοτομπουκιές, σαλάμι μπύρας, gouda, τυροσαλάτα, σως cocktail & tabasco": "With chicken nuggets, beer salami, gouda, cheese salad, cocktail sauce & tabasco",
    "Με κοτομπουκιές, διπλό μπέικον, διπλό gouda, chips, καλαμπόκι & ουγγαρέζα": "With chicken nuggets, double bacon, double gouda, chips, corn & Hungarian sauce",
    "Με κοτόπουλο, κοτομπουκιές, γαλοπούλα, cheddar, La Vache qui rit, chips, ντομάτα & διπλή μαγιονέζα": "With chicken, chicken nuggets, turkey, cheddar, La Vache qui rit, chips, tomato & double mayonnaise",
    "Με κοτόπουλο, μπέικον, gouda, αυγό βραστό, μανιτάρια, πιπεριά πράσινη, ουγγαρέζα & sweet chili σως": "With chicken, bacon, gouda, boiled egg, mushrooms, green pepper, Hungarian sauce & sweet chili sauce",
    "Με κασέρι καπνιστό, μανούρι, Philadelphia, cheddar & ρίγανη": "With smoked kasseri, manouri, Philadelphia, cheddar & oregano",
    
    // Club Sandwiches
    "Με γαλοπούλα, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With turkey, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με πάριζα, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With ham, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με μπέικον, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With bacon, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με σαλάμι μπύρας, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With beer salami, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με κοτόπουλο, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With chicken, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με κοτομπουκιές χειροποίητες, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With handmade chicken nuggets, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με σνίτσελ κοτόπουλο, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With chicken schnitzel, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με μπριζόλα καπνιστή, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With smoked brisket, gouda, tomato, lettuce & mayonnaise. Served with french fries",
    "Με μπιφτέκι λαχανικών, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές": "With vegetable patty, tomato, lettuce & mayonnaise. Served with french fries",
    
    // Toast
    "Κλασικό τοστ με τυρί": "Classic toast with cheese",
    "Με χαμ και τυρί": "With ham and cheese",
    "Με γαλοπούλα και τυρί": "With turkey and cheese",
    "Με τόνο και μαγιονέζα": "With tuna and mayonnaise",
    
    // Tortillas
    "Με χαμ, τυρί και λαχανικά": "With ham, cheese and vegetables",
    "Με γαλοπούλα και σως": "With turkey and sauce",
    "Με τόνο και λαχανικά": "With tuna and vegetables",
    "Με λαχανικά και τυρί": "With vegetables and cheese",
    
    // Salads
    "Με σνίτσελ κοτόπουλο, iceberg, μπέικον, παρμεζάνα, καλαμπόκι, τηγανητή τορτίγια με πάπρικα & Caesar`s sauce": "With chicken schnitzel, iceberg, bacon, parmesan, corn, fried tortilla with paprika & Caesar's sauce",
    
    // Portions
    "Πατάτες τηγανητές": "French fries",
    "Κοτομπουκιές χειροποίητες": "Handmade chicken nuggets"
};

// Function to toggle translation
function toggleTranslation() {
    isTranslated = !isTranslated;
    
    // Update button appearance
    const translateBtn = document.getElementById('translateBtn');
    const translateText = document.getElementById('translateText');
    
    if (isTranslated) {
        translateBtn.classList.add('translated');
        translateText.textContent = 'EN';
        translatePage('english');
    } else {
        translateBtn.classList.remove('translated');
        translateText.textContent = 'GR';
        translatePage('greek');
    }
}

// Function to translate the entire page
function translatePage(language) {
    // Translate elements with data attributes
    const elementsWithData = document.querySelectorAll('[data-greek][data-english]');
    elementsWithData.forEach(element => {
        if (language === 'english') {
            element.textContent = element.getAttribute('data-english');
        } else {
            element.textContent = element.getAttribute('data-greek');
        }
    });
    
    // Translate menu data dynamically
    translateMenuData(language);
    
    // Update any open modals
    if (modalOverlay.classList.contains('active')) {
        updateModalContent(language);
    }
    
    // Update order summary if open
    if (orderModal.classList.contains('active')) {
        updateOrderSummary(language);
    }
    
    // Update ingredient lists if custom order modals are open
    if (currentCustomOrder && currentCustomOrder.type) {
        const ingredientsList = document.getElementById('ingredientsList');
        if (ingredientsList) { // Only update if the element exists
            if (currentCustomOrder.type === 'toast') {
                updateToastIngredientsList();
            } else if (currentCustomOrder.type === 'tortilla') {
                updateTortillaIngredientsList();
            } else if (currentCustomOrder.type === 'sweet' || currentCustomOrder.type === 'salty') {
                updateIngredientsList();
            }
            
            // Update the total display after ingredient lists are updated
            setTimeout(() => updateCustomTotal(), 0);
        }
    }
    
    // Update base names in custom order modals
    updateBaseNames(language);
}

// Function to translate menu data
function translateMenuData(language) {
    if (language === 'english') {
        // Translate menu items
        Object.keys(englishTranslations).forEach(greekName => {
            const englishName = englishTranslations[greekName];
            
            // Update crepes
            if (menuData.crepes.sweet) {
                menuData.crepes.sweet.forEach(crepe => {
                    if (crepe.name === greekName) {
                        crepe.name = englishName;
                    }
                });
            }
            if (menuData.crepes.savory) {
                menuData.crepes.savory.forEach(crepe => {
                    if (crepe.name === greekName) {
                        crepe.name = englishName;
                    }
                });
            }
            
            // Update club sandwiches
            menuData.clubSandwiches.forEach(sandwich => {
                if (sandwich.name === greekName) {
                    sandwich.name = englishName;
                }
            });
            
            // Update toast
            menuData.toast.forEach(toast => {
                if (toast.name === greekName) {
                    toast.name = englishName;
                }
            });
            
            // Update tortillas
            menuData.tortillas.forEach(tortilla => {
                if (tortilla.name === greekName) {
                    tortilla.name = englishName;
                }
            });
            
            // Update salads
            menuData.salads.forEach(salad => {
                if (salad.name === greekName) {
                    salad.name = englishName;
                }
            });
            
            // Update portions
            menuData.portions.forEach(portion => {
                if (portion.name === greekName) {
                    portion.name = englishName;
                }
            });
            
            // Update dips
            menuData.dips.forEach(dip => {
                if (dip.name === greekName) {
                    dip.name = englishName;
                }
            });
            
            // Update drinks
            Object.keys(menuData.drinks).forEach(category => {
                menuData.drinks[category].forEach(drink => {
                    if (drink.name === greekName) {
                        drink.name = englishName;
                    }
                });
            });
        });
        
        // Translate descriptions
        Object.keys(englishDescriptions).forEach(greekDesc => {
            const englishDesc = englishDescriptions[greekDesc];
            
            // Update crepes
            if (menuData.crepes.sweet) {
                menuData.crepes.sweet.forEach(crepe => {
                    if (crepe.description === greekDesc) {
                        crepe.description = englishDesc;
                    }
                });
            }
            if (menuData.crepes.savory) {
                menuData.crepes.savory.forEach(crepe => {
                    if (crepe.description === greekDesc) {
                        crepe.description = englishDesc;
                    }
                });
            }
            
            // Update club sandwiches
            menuData.clubSandwiches.forEach(sandwich => {
                if (sandwich.description === greekDesc) {
                    sandwich.description = englishDesc;
                }
            });
            
            // Update toast
            menuData.toast.forEach(toast => {
                if (toast.description === greekDesc) {
                    toast.description = englishDesc;
                }
            });
            
            // Update tortillas
            menuData.tortillas.forEach(tortilla => {
                if (tortilla.description === greekDesc) {
                    tortilla.description = englishDesc;
                }
            });
            
            // Update salads
            menuData.salads.forEach(salad => {
                if (salad.description === greekDesc) {
                    salad.description = englishDesc;
                }
            });
            
            // Update portions
            menuData.portions.forEach(portion => {
                if (portion.description === greekDesc) {
                    portion.description = englishDesc;
                }
            });
        });
    } else {
        // Restore Greek menu data (you would need to store original data)
        // For now, we'll just reload the page to restore original data
        location.reload();
    }
}

// Function to update modal content when language changes
function updateModalContent(language) {
    // This function would update any open modal content
    // Implementation depends on which modal is currently open
    if (language === 'english') {
        // Refresh the current modal content to show translated text
        // This will be handled by the individual modal functions
    }
}

// Function to update order summary when language changes
function updateOrderSummary(language) {
    // This function would update the order summary display
    // Implementation depends on current order state
    if (orderModal.classList.contains('active')) {
        showOrderSummary();
    }
}

// Ingredients for custom orders with sweet/salty categorization
const ingredients = {
    bases: [
        { name: "Κλασική Βάση Κρέπας", price: 1.50, type: "crepe" },
        { name: "Ψωμί Τοστ", price: 1.50, type: "toast" },
        { name: "Τορτίγια", price: 1.50, type: "tortilla" }
    ],
    toastIngredients: [
        // Τυριά
        { name: "Gouda", price: 1.20 },
        { name: "Mozzarella", price: 1.50 },
        { name: "Κασέρι καπνιστό", price: 2.00 },
        { name: "Cheddar", price: 1.50 },
        { name: "Φέτα", price: 1.00 },
        { name: "Μανούρι", price: 1.30 },
        { name: "La Vache qui rit", price: 0.90 },
        { name: "Philadelphia", price: 1.00 },
        { name: "Παρμεζάνα", price: 1.00 },
        { name: "Γραβιέρα", price: 1.40 },
        
        // Αλλαντικά
        { name: "Πάριζα", price: 0.60 },
        { name: "Γαλοπούλα καπνιστή", price: 0.80 },
        { name: "Μπέικον", price: 0.70 },
        { name: "Σαλάμι μπύρας", price: 0.80 },
        { name: "Μπριζόλα καπνιστή", price: 1.50 },
        
        // Κρεατικά
        { name: "Κοτόπουλο στήθος", price: 2.00 },
        { name: "Κοτομπουκιές", price: 1.80 },
        { name: "Σνίτσελ κοτόπουλο", price: 2.60 },
        { name: "Μπριζόλα καπνιστή", price: 1.50 },
        
        // Λαχανικά
        { name: "Ντομάτα", price: 0.30 },
        { name: "Μαρούλι", price: 0.20 },
        { name: "Πιπεριά πράσινη", price: 0.30 },
        { name: "Πιπεριά Φλωρίνης", price: 0.30 },
        { name: "Αγγούρι", price: 0.40 },
        { name: "Μανιτάρια", price: 0.50 },
        { name: "Ελιά ροδέλα", price: 0.30 },
        { name: "Καλαμπόκι", price: 0.40 },
        { name: "Iceberg", price: 0.40 },
        
        // Σάλτσες
        { name: "Μαγιονέζα", price: 0.40 },
        { name: "Ουγγαρέζα", price: 0.50 },
        { name: "Τυροσαλάτα", price: 0.80 },
        { name: "Σως μουστάρδας", price: 0.40 },
        { name: "Tabasco", price: 0.20 },
        { name: "Ketchup", price: 0.20 },
        { name: "Μουστάρδα", price: 0.20 },
        { name: "BBQ", price: 0.50 },
        { name: "Golden BBQ", price: 0.40 },
        { name: "Σως Caesar`s", price: 0.50 },
        { name: "Σως sweet chili", price: 0.30 },
        { name: "Ρώσικη σαλάτα", price: 0.80 },
        { name: "Philadelphia", price: 1.00 },
        { name: "Σως cocktail", price: 0.40 },
        { name: "Γιαούρτι", price: 0.50 },
        { name: "Tabasco", price: 0.20 },
        
        // Extra
        { name: "Αυγό βραστό", price: 0.60 },
        { name: "Πατάτες τηγανητές", price: 0.50 },
        { name: "Chips", price: 0.60 },
        { name: "Τόνος", price: 2.50 },
        { name: "Μπούκοβο", price: 0.00 }
    ],
    sweetIngredients: [
        // Πραλίνες
        { name: "Πραλίνα Dubai (με κομμάτια φυστικιού & φύλλο κανταΐφι)", price: 3.90 },
        { name: "Merenda", price: 1.10 },
        { name: "Πραλίνα Bueno", price: 1.40 },
        { name: "Πραλίνα λευκή", price: 1.10 },
        { name: "Πραλίνα φράουλα", price: 1.30 },
        { name: "Nutella", price: 1.80 },
        
        // Συνδυασμοί Πραλίνων
        { name: "Merenda & πραλίνα Bueno", price: 1.30 },
        { name: "Merenda & πραλίνα λευκή", price: 1.20 },
        { name: "Merenda & πραλίνα φράουλα", price: 1.30 },
        { name: "Πραλίνα Bueno & πραλίνα λευκή", price: 1.30 },
        { name: "Πραλίνα Bueno & πραλίνα φράουλα", price: 1.40 },
        { name: "Πραλίνα Bueno & Nutella", price: 1.60 },
        { name: "Πραλίνα λευκή & πραλίνα φράουλα", price: 1.30 },
        { name: "Πραλίνα λευκή & Nutella", price: 1.50 },
        { name: "Πραλίνα φράουλα & Nutella", price: 1.60 },
        
        // Σοκολάτες
        { name: "Lacta", price: 2.90 },
        { name: "Milka φράουλα", price: 2.60 },
        { name: "Nestle Crunch λευκή", price: 2.60 },
        { name: "ΙΟΝ αμυγδάλου", price: 2.90 },
        { name: "Σοκολάτα υγείας", price: 2.50 },
        { name: "Maltesers", price: 1.40 },
        { name: "Snickers", price: 2.00 },
        { name: "Mars", price: 2.00 },
        { name: "Twix", price: 2.00 },
        { name: "Kit Kat", price: 2.00 },
        { name: "Kinder Bueno", price: 2.00 },
        { name: "Smarties", price: 1.40 },
        
        // Ξηροί Καρποί
        { name: "Καρύδι", price: 0.80 },
        { name: "Αμύγδαλο", price: 0.80 },
        { name: "Φουντούκι", price: 0.80 },
        
        // Φρούτα
        { name: "Μπανάνα φρούτο", price: 0.60 },
        
        // Extra
        { name: "Μπισκότο", price: 0.40 },
        { name: "Μπισκότο Oreo", price: 0.50 },
        { name: "Cookies", price: 0.60 },
        { name: "Ινδοκάρυδο", price: 0.40 },
        { name: "Τρούφα", price: 0.40 },
        { name: "Φυστικοβούτυρο", price: 2.30 },
        { name: "Μέλι", price: 1.10 },
        { name: "Καραμέλα", price: 1.80 },
        { name: "Marshmallows", price: 0.90 },
        { name: "Caprice", price: 0.80 },
        { name: "Philadelphia", price: 1.00 },
        { name: "Chips", price: 0.60 }
    ],
    saltyIngredients: [
        // Τυριά
        { name: "Gouda", price: 1.20 },
        { name: "Mozzarella", price: 1.50 },
        { name: "Κασέρι καπνιστό", price: 2.00 },
        { name: "Cheddar", price: 1.50 },
        { name: "Φέτα", price: 1.00 },
        { name: "Μανούρι", price: 1.30 },
        { name: "La Vache qui rit", price: 0.90 },
        { name: "Παρμεζάνα", price: 2.00 },
        { name: "Γραβιέρα", price: 1.40 },
        
        // Αλλαντικά
        { name: "Πάριζα", price: 0.60 },
        { name: "Γαλοπούλα καπνιστή", price: 0.80 },
        { name: "Μπέικον", price: 0.70 },
        { name: "Σαλάμι μπύρας", price: 0.80 },
        { name: "Μπριζόλα καπνιστή", price: 1.50 },
        
        // Κρεατικά
        { name: "Κοτόπουλο στήθος", price: 2.00 },
        { name: "Κοτομπουκιές", price: 1.80 },
        { name: "Σνίτσελ κοτόπουλο", price: 2.60 },
        
        // Λαχανικά
        { name: "Ντομάτα", price: 0.30 },
        { name: "Μαρούλι", price: 0.20 },
        { name: "Πιπεριά πράσινη", price: 0.30 },
        { name: "Πιπεριά Φλωρίνης", price: 0.30 },
        { name: "Αγγούρι", price: 0.50 },
        { name: "Μανιτάρια", price: 0.50 },
        { name: "Ελιά ροδέλα", price: 0.30 },
        { name: "Καλαμπόκι", price: 0.40 },
        { name: "Iceberg", price: 0.40 },
        
        // Σάλτσες
        { name: "Μαγιονέζα", price: 0.40 },
        { name: "Ουγγαρέζα", price: 0.50 },
        { name: "Τυροσαλάτα", price: 0.80 },
        { name: "Σως μουστάρδας", price: 0.40 },
        { name: "Tabasco", price: 0.20 },
        { name: "Ketchup", price: 0.20 },
        { name: "Μουστάρδα", price: 0.20 },
        { name: "BBQ", price: 0.50 },
        { name: "Golden BBQ", price: 0.40 },
        { name: "Σως Caesar`s", price: 0.50 },
        { name: "Σως sweet chili", price: 0.30 },
        { name: "Ρώσικη σαλάτα", price: 0.60 },
        { name: "Philadelphia", price: 1.00 },
        { name: "Σως cocktail", price: 0.40 },
        { name: "Γιαούρτι", price: 0.50 },
        
        // Extra
        { name: "Αυγό βραστό", price: 0.60 },
        { name: "Πατάτες τηγανητές", price: 0.50 },
        { name: "Chips", price: 0.60 },
        { name: "Τόνος", price: 2.50 },
        { name: "Μπούκοβο", price: 0.00 }
    ],
    tortillaIngredients: [
        // Τυριά
        { name: "Gouda", price: 1.20 },
        { name: "Mozzarella", price: 1.50 },
        { name: "Κασέρι καπνιστό", price: 2.00 },
        { name: "Cheddar", price: 1.50 },
        { name: "Φέτα", price: 1.00 },
        { name: "Μανούρι", price: 1.30 },
        { name: "La Vache qui rit", price: 0.90 },
        { name: "Philadelphia", price: 1.00 },
        { name: "Παρμεζάνα", price: 1.00 },
        { name: "Γραβιέρα", price: 1.40 },

        
        // Αλλαντικά
        { name: "Πάριζα", price: 0.70 },
        { name: "Γαλοπούλα καπνιστή", price: 0.90 },
        { name: "Μπέικον", price: 0.80 },
        { name: "Σαλάμι μπύρας", price: 0.90 },
        { name: "Μπριζόλα καπνιστή", price: 1.60 },

        
        // Κρεατικά
        { name: "Κοτόπουλο στήθος", price: 2.00 },
        { name: "Κοτομπουκιές", price: 1.80 },
        { name: "Σνίτσελ κοτόπουλο", price: 2.60 },
        { name: "Μπριζόλα καπνιστή", price: 1.50 },

        
        // Λαχανικά
        { name: "Ντομάτα", price: 0.40 },
        { name: "Μαρούλι", price: 0.30 },
        { name: "Πιπεριά πράσινη", price: 0.40 },
        { name: "Πιπεριά Φλωρίνης", price: 0.40 },
        { name: "Αγγούρι", price: 0.50 },
        { name: "Μανιτάρια", price: 0.60 },
        { name: "Ελιά ροδέλα", price: 0.40 },
        { name: "Καλαμπόκι", price: 0.50 },
        { name: "Iceberg", price: 0.50 },

        
        // Σάλτσες
        { name: "Μαγιονέζα", price: 0.40 },
        { name: "Ουγγαρέζα", price: 0.50 },
        { name: "Τυροσαλάτα", price: 0.80 },
        { name: "Σως μουστάρδας", price: 0.40 },
        { name: "Tabasco", price: 0.10 },
        { name: "Ketchup", price: 0.20 },
        { name: "Μουστάρδα", price: 0.20 },
        { name: "BBQ", price: 0.50 },
        { name: "Golden BBQ", price: 0.40 },
        { name: "Σως Caesar`s", price: 0.50 },
        { name: "Σως sweet chili", price: 0.30 },
        { name: "Ρώσικη σαλάτα", price: 0.60 },
        { name: "Philadelphia", price: 0.90 },
        { name: "Σως cocktail", price: 0.40 },
        { name: "Γιαούρτι", price: 0.50 },
        { name: "Tabasco", price: 0.10 },

        
        // Extra
        { name: "Αυγό βραστό", price: 0.60 },
        { name: "Πατάτες τηγανητές", price: 0.50 },
        { name: "Chips", price: 0.60 },
        { name: "Τόνος", price: 2.50 },
        { name: "Μπούκοβο", price: 0.00 },

    ]
};

// Global variables
let currentOrder = [];
let currentCustomOrder = {
    base: null,
    type: null, // 'sweet' or 'salty'
    ingredients: [],
    total: 0
};

// DOM Elements
const modalOverlay = document.getElementById('modalOverlay');
// Removed modalTitle - using modal header approach instead
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const orderModal = document.getElementById('orderModal');
const orderSummary = document.getElementById('orderSummary');
const totalPrice = document.getElementById('totalPrice');
const closeOrderModal = document.getElementById('closeOrderModal');
// Removed placeOrder functionality

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize translation button text
    initializeTranslationButton();
    
    // Configure Google Review button link
    const reviewBtn = document.getElementById('googleReviewBtn');
    const reviewStars = document.querySelector('.review-stars');
    if (reviewBtn) {
        // Replace with your real Google Place ID for a direct review form
        // Find Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
        const GOOGLE_PLACE_ID = '';
        if (GOOGLE_PLACE_ID && GOOGLE_PLACE_ID.trim().length > 0) {
            reviewBtn.setAttribute('href', `https://search.google.com/local/writereview?placeid=${encodeURIComponent(GOOGLE_PLACE_ID)}`);
        } else {
            // Fallback: open Google Maps search for the shop if Place ID not set
            const fallbackQuery = 'Τσώνας, Παύλου Μελά 106, Φλώρινα';
            reviewBtn.setAttribute('href', `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fallbackQuery)}`);
        }
        // Make stars act like the button
        if (reviewStars) {
            reviewStars.style.cursor = 'pointer';
            reviewStars.addEventListener('click', () => {
                reviewBtn.click();
            });
        }
    }

    // Category card click events
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            handleCategoryClick(category);
        });
    });

    // Modal close events
    closeModal.addEventListener('click', closeModalHandler);
    closeOrderModal.addEventListener('click', closeOrderModalHandler);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModalHandler();
        }
    });

    // Removed place order event listener
});



// Handle category clicks
function handleCategoryClick(category) {
    switch(category) {
        case 'crepes':
            showCrepeOptions();
            break;
        case 'club-sandwiches':
            showClubSandwiches();
            break;
        case 'toast':
            showToastOptions();
            break;
        case 'tortillas':
            showTortillaOptions();
            break;
        case 'salads':
            showSalads();
            break;
        case 'portions':
            showPortions();
            break;
        case 'drinks':
            showDrinks();
            break;
    }
}

// Show crepe options (sweet/savory)
function showCrepeOptions() {
    // Reset modal header to original structure
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Επιλέξτε Τύπο Κρέπας" data-english="Choose Crepe Type">Επιλέξτε Τύπο Κρέπας</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = `
        <div class="selection-grid">
            <div class="selection-card" onclick="showSweetCrepes()">
                <div class="selection-icon">
                    <img src="images/sweet.png" alt="Sweet Crepes Icon" class="selection-image">
                </div>
                <h3 data-greek="Γλυκές Κρέπες" data-english="Sweet Crepes">Γλυκές Κρέπες</h3>
            </div>
            <div class="selection-card" onclick="showSavoryCrepes()">
                <div class="selection-icon">
                    <img src="images/salty.png" alt="Salty Crepes Icon" class="selection-image">
                </div>
                <h3 data-greek="Αλμυρές Κρέπες" data-english="Savory Crepes">Αλμυρές Κρέπες</h3>
            </div>
            <div class="selection-card custom" onclick="showCustomCrepe()">
                <div class="selection-icon">
                    <img src="images/pencil.png" alt="Custom Crepe Icon" class="selection-image">
                </div>
                <h3 data-greek="Η Κρέπα Μου" data-english="My Crepe">Η Κρέπα Μου</h3>
            </div>
        </div>
    `;
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show sweet crepes
function showSweetCrepes() {
    // Update modal header with back button
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <button class="back-btn" onclick="showCrepeOptions()">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h2 data-greek="Γλυκές Κρέπες" data-english="Sweet Crepes">Γλυκές Κρέπες</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = menuData.crepes.sweet.map(crepe => `
        <div class="menu-item">
            <div class="menu-item-info">
                <h4>${crepe.name}</h4>
                <p>${crepe.description}</p>
            </div>
            <div class="menu-item-actions">
                <div class="menu-item-price">€${crepe.price.toFixed(2)}</div>
                <button class="add-item-btn" onclick="addToOrderWithoutClose('${crepe.name}', ${crepe.price}, '${crepe.description}')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show savory crepes
function showSavoryCrepes() {
    // Update modal header with back button
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <button class="back-btn" onclick="showCrepeOptions()">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h2 data-greek="Αλμυρές Κρέπες" data-english="Savory Crepes">Αλμυρές Κρέπες</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = menuData.crepes.savory.map(crepe => `
        <div class="menu-item">
            <div class="menu-item-info">
                <h4>${crepe.name}</h4>
                <p>${crepe.description}</p>
            </div>
            <div class="menu-item-actions">
                <div class="menu-item-price">€${crepe.price.toFixed(2)}</div>
                <button class="add-item-btn" onclick="addToOrderWithoutClose('${crepe.name}', ${crepe.price}, '${crepe.description}')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show club sandwiches
function showClubSandwiches() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Club Sandwiches" data-english="Club">Club Sandwiches</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = `
        <div class="ingredient-category">
            <div class="category-header-clean" onclick="toggleDipCategory('club-dips')">
                <h4 data-greek="Συνοδευτικά DIPS" data-english="Accompaniment DIPS">Συνοδευτικά DIPS</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-club-dips">
                ${menuData.dips.map(dip => `
                    <div class="drink-item">
                        <div class="drink-info">
                            <span class="drink-name">${dip.name}</span>
                            <span class="drink-price">+€${dip.price.toFixed(2)}</span>
                        </div>
                        <button class="add-item-btn" onclick="addDipToOrder('${dip.name}', ${dip.price}, 'Συνοδευτικό DIP')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="menu-section">
            ${menuData.clubSandwiches.map(sandwich => `
                <div class="menu-item">
                    <div class="menu-item-info">
                        <h4>${sandwich.name}</h4>
                        <p>${sandwich.description}</p>
                    </div>
                    <div class="menu-item-actions">
                        <div class="menu-item-price">€${sandwich.price.toFixed(2)}</div>
                        <button class="add-item-btn" onclick="addToOrderWithoutClose('${sandwich.name}', ${sandwich.price}, '${sandwich.description}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show toast menu
function showToastMenu() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Κλασικά Τοστ" data-english="Classic Toast">Κλασικά Τοστ</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = menuData.toast.map(toast => `
        <div class="menu-item" onclick="addToOrder('${toast.name}', ${toast.price}, '${toast.description}')">
            <div class="menu-item-info">
                <h4>${toast.name}</h4>
                <p>${toast.description}</p>
            </div>
            <div class="menu-item-price">€${toast.price.toFixed(2)}</div>
        </div>
    `).join('');
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show tortilla menu
function showTortillaMenu() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Κλασικές Τορτίγια" data-english="Classic Tortillas">Κλασικές Τορτίγια</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = menuData.tortillas.map(tortilla => `
        <div class="menu-item" onclick="addToOrder('${tortilla.name}', ${tortilla.price}, '${tortilla.description}')">
            <div class="menu-item-info">
                <h4>${tortilla.name}</h4>
                <p>${tortilla.description}</p>
            </div>
            <div class="menu-item-price">€${tortilla.price.toFixed(2)}</div>
        </div>
    `).join('');
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show toast options
function showToastOptions() {
    // Go directly to custom toast builder, removing suggestions
    showCustomToast();
}

// Show tortilla options
function showTortillaOptions() {
    // Go directly to custom tortilla builder, removing suggestions
    showCustomTortilla();
}

// Show salads
function showSalads() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Σαλάτες" data-english="Salads">Σαλάτες</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = menuData.salads.map((salad, index) => `
        <div class="menu-item">
            <div class="menu-item-info">
                <h4>${salad.name}</h4>
                <p>${salad.description}</p>
            </div>
            <div class="menu-item-actions">
                <div class="menu-item-price">€${salad.price.toFixed(2)}</div>
                <button class="add-item-btn salad-btn" data-salad-index="${index}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for salad buttons
    document.querySelectorAll('.salad-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-salad-index'));
            const salad = menuData.salads[index];
            addSaladToOrder(salad.name, salad.price, salad.description);
        });
    });
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show portions
function showPortions() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Μερίδες" data-english="Portions">Μερίδες</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = `
        <div class="ingredient-category">
            <div class="category-header-clean" onclick="toggleDipCategory('portions-dips')">
                <h4 data-greek="Συνοδευτικά DIPS" data-english="Accompaniment DIPS">Συνοδευτικά DIPS</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-portions-dips">
                ${menuData.dips.map(dip => `
                    <div class="drink-item">
                        <div class="drink-info">
                            <span class="drink-name">${dip.name}</span>
                            <span class="drink-price">+€${dip.price.toFixed(2)}</span>
                        </div>
                        <button class="add-item-btn" onclick="addDipToOrder('${dip.name}', ${dip.price}, 'Συνοδευτικό DIP')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="menu-section">
            ${menuData.portions.map(portion => `
                <div class="menu-item">
                    <div class="menu-item-info">
                        <h4>${portion.name}</h4>
                        <p>${portion.description}</p>
                    </div>
                    <div class="menu-item-actions">
                        <div class="menu-item-price">€${portion.price.toFixed(2)}</div>
                        <button class="add-item-btn" onclick="addToOrderWithoutClose('${portion.name}', ${portion.price}, '${portion.description}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show drinks options (takeaway vs dine-in)
function showDrinks() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Επιλέξτε Τρόπο Παραλαβής" data-english="Choose Pickup Method">Επιλέξτε Τρόπο Παραλαβής</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = `
        <div class="selection-grid">
            <div class="selection-card" onclick="showDrinksMenu('takeaway')">
                <div class="selection-icon">
                    <i class="fas fa-shopping-bag"></i>
                </div>
                <h3>Take Away</h3>
                <p data-greek="Παραλαβή από το κατάστημα" data-english="Pickup from the store">Παραλαβή από το κατάστημα</p>
            </div>
            <div class="selection-card" onclick="showDrinksMenu('dineIn')">
                <div class="selection-icon">
                    <i class="fas fa-utensils"></i>
                </div>
                <h3 data-greek="Κατανάλωση εντός" data-english="Dine In">Κατανάλωση εντός</h3>
                <p data-greek="Κάθισμα στο κατάστημα" data-english="Seating in the store">Κάθισμα στο κατάστημα</p>
            </div>
        </div>
    `;
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Show drinks menu with specific pricing
function showDrinksMenu(priceType) {
    // Update modal header with back button
    const modalHeader = document.querySelector('.modal-header');
    const title = priceType === 'takeaway' ? 'Ποτά - Take Away' : 'Ποτά - Κατανάλωση εντός';
    modalHeader.innerHTML = `
        <button class="back-btn" onclick="showDrinks()">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h2 data-greek="${title}" data-english="${priceType === 'takeaway' ? 'Drinks - Take Away' : 'Drinks - Dine In'}">${title}</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    const priceProperty = priceType === 'takeaway' ? 'takeAwayPrice' : 'dineInPrice';
    
    // Filter drinks for dine-in: remove 500ml and 1.5L soda drinks, but keep water
    let filteredDrinks = menuData.drinks.αναψυκτικά;
    if (priceType === 'dineIn') {
        filteredDrinks = filteredDrinks.filter(drink => {
            // Keep water 500ml
            if (drink.name.includes('Νερό 500ml')) {
                return true;
            }
            // Remove 500ml and 1.5L soda drinks
            return !drink.name.includes('500ml') && !drink.name.includes('1.5lt');
        });
    }
    
    modalBody.innerHTML = `
        <div class="drinks-container">
            <div class="drink-category">
                <div class="category-header" onclick="toggleDrinkCategory('αναψυκτικά')">
                    <h4 data-greek="Αναψυκτικά" data-english="Soft Drinks">Αναψυκτικά</h4>
                    <i class="fas fa-chevron-down category-icon"></i>
                </div>
                <div class="category-content" id="category-αναψυκτικά">
                    ${filteredDrinks.map(drink => `
                        <div class="drink-item">
                            <div class="drink-info">
                                <span class="drink-name">${drink.name}</span>
                                <span class="drink-price">€${drink[priceProperty].toFixed(2)}</span>
                            </div>
                            <button class="add-item-btn" onclick="addDrinkToOrder('${drink.name}', ${drink[priceProperty]}, 'Αναψυκτικό', '${priceType}')">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="drink-category">
                <div class="category-header" onclick="toggleDrinkCategory('μπύρες')">
                    <h4 data-greek="Μπύρες" data-english="Beers">Μπύρες</h4>
                    <i class="fas fa-chevron-down category-icon"></i>
                </div>
                <div class="category-content" id="category-μπύρες">
                    ${menuData.drinks.μπύρες.map(drink => `
                        <div class="drink-item">
                            <div class="drink-info">
                                <span class="drink-name">${drink.name}</span>
                                <span class="drink-price">€${drink[priceProperty].toFixed(2)}</span>
                            </div>
                            <button class="add-item-btn" onclick="addDrinkToOrder('${drink.name}', ${drink[priceProperty]}, 'Μπύρα', '${priceType}')">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="drink-category">
                <div class="category-header" onclick="toggleDrinkCategory('κρασιά')">
                    <h4 data-greek="Κρασιά - Αποστάγματα" data-english="Wines - Spirits">Κρασιά - Αποστάγματα</h4>
                    <i class="fas fa-chevron-down category-icon"></i>
                </div>
                <div class="category-content" id="category-κρασιά">
                    ${menuData.drinks.κρασιά.map(drink => `
                        <div class="drink-item">
                            <div class="drink-info">
                                <span class="drink-name">${drink.name}</span>
                                <span class="drink-price">€${drink[priceProperty].toFixed(2)}</span>
                            </div>
                            <button class="add-item-btn" onclick="addDrinkToOrder('${drink.name}', ${drink[priceProperty]}, 'Κρασί', '${priceType}')">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="drink-category">
                <div class="category-header" onclick="toggleDrinkCategory('icedTea')">
                    <h4>Iced Tea</h4>
                    <i class="fas fa-chevron-down category-icon"></i>
                </div>
                <div class="category-content" id="category-icedTea">
                    ${menuData.drinks.icedTea.map(drink => `
                        <div class="drink-item">
                            <div class="drink-info">
                                <span class="drink-name">${drink.name}</span>
                                <span class="drink-price">€${drink[priceProperty].toFixed(2)}</span>
                            </div>
                            <button class="add-item-btn" onclick="addDrinkToOrder('${drink.name}', ${drink[priceProperty]}, 'Iced Tea', '${priceType}')">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="drink-category">
                <div class="category-header" onclick="toggleDrinkCategory('χυμοί')">
                    <h4 data-greek="Χυμοί" data-english="Juices">Χυμοί</h4>
                    <i class="fas fa-chevron-down category-icon"></i>
                </div>
                <div class="category-content" id="category-χυμοί">
                    ${menuData.drinks.χυμοί.map(drink => `
                        <div class="drink-item">
                            <div class="drink-info">
                                <span class="drink-name">${drink.name}</span>
                                <span class="drink-price">€${drink[priceProperty].toFixed(2)}</span>
                            </div>
                            <button class="add-item-btn" onclick="addDrinkToOrder('${drink.name}', ${drink[priceProperty]}, 'Χυμός', '${priceType}')">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Toggle drink category dropdown
function toggleDrinkCategory(categoryName) {
    const categoryId = `category-${categoryName}`;
    const categoryContent = document.getElementById(categoryId);
    const categoryHeader = categoryContent.previousElementSibling;
    const icon = categoryHeader.querySelector('.category-icon');
    
    if (categoryContent.classList.contains('show')) {
        categoryContent.classList.remove('show');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        categoryHeader.classList.remove('active');
    } else {
        categoryContent.classList.add('show');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        categoryHeader.classList.add('active');
    }
}

// Add drink to order
function addDrinkToOrder(name, price, description, priceType) {
    let serviceType;
    if (isTranslated) {
        serviceType = priceType === 'takeaway' ? 'Take Away' : 'Dine In';
    } else {
        serviceType = priceType === 'takeaway' ? 'Take Away' : 'Κατανάλωση εντός';
    }
    const fullDescription = `${description} - ${serviceType}`;
    
    currentOrder.push({
        name: name,
        price: price,
        description: fullDescription
    });
    
    // Show a brief confirmation message
    const btn = event.target.closest('.add-item-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('added');
    
    // Update floating button
    updateFloatingButton();
    
    // Reset button after 1 second
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('added');
    }, 1000);
}

// Add salad to order
function addSaladToOrder(name, price, description) {
    currentOrder.push({
        name: name,
        price: price,
        description: description
    });
    
    // Show a brief confirmation message
    const btn = event.target.closest('.add-item-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('added');
    
    // Update floating button
    updateFloatingButton();
    
    // Reset button after 1 second
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('added');
    }, 1000);
}

// Toggle dip category dropdown
function toggleDipCategory(categoryName) {
    const categoryId = `category-${categoryName}`;
    const categoryContent = document.getElementById(categoryId);
    if (categoryContent) {
        const categoryHeader = categoryContent.previousElementSibling;
        const icon = categoryHeader.querySelector('.category-icon');
        
        if (categoryContent.classList.contains('show')) {
            categoryContent.classList.remove('show');
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            categoryHeader.classList.remove('active');
        } else {
            categoryContent.classList.add('show');
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            categoryHeader.classList.add('active');
        }
    }
}

// Add dip to order
function addDipToOrder(name, price, description) {
    let translatedDescription = description;
    if (isTranslated && description === 'Συνοδευτικό DIP') {
        translatedDescription = 'Accompaniment DIP';
    }
    
    currentOrder.push({
        name: name,
        price: price,
        description: translatedDescription
    });
    
    // Show a brief confirmation message
    const btn = event.target.closest('.add-item-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('added');
    
    // Update floating button
    updateFloatingButton();
    
    // Reset button after 1 second
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('added');
    }, 1000);
}

// Custom crepe builder with new design
function showCustomCrepe() {
    currentCustomOrder = { base: null, type: null, ingredients: [], total: 0 };
    
    // Update modal header with back button
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <button class="back-btn" onclick="showCrepeOptions()">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h2 data-greek="Η Κρέπα Μου" data-english="My Crepe">Η Κρέπα Μου</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    modalBody.innerHTML = `
        <div class="custom-builder-new">
            <!-- Step 1: Base Selection -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">1</div>
                    <h3 data-greek="Φύλλο κρέπας" data-english="Crepe Base">Φύλλο κρέπας</h3>
                </div>
                <div class="step-content">
                    <div class="base-card" data-base-name="Κλασική Βάση Κρέπας" data-base-price="1.50" data-base-type="crepe">
                        <div class="base-info">
                            <h4 data-greek="Κλασική Βάση Κρέπας" data-english="Classic Crepe Base">Κλασική Βάση Κρέπας</h4>
                            <div class="base-price">€1.50</div>
                        </div>
                        <button class="base-btn" data-greek="Διάλεξε βάση" data-english="Choose Base">Διάλεξε βάση</button>
                    </div>
                </div>
            </div>

            <!-- Step 2: Type Selection -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h3 data-greek="Διάλεξε τύπο" data-english="Choose Type">Διάλεξε τύπο</h3>
                </div>
                <div class="step-content">
                    <div class="type-buttons">
                        <button class="type-btn sweet-btn active" onclick="selectType('sweet')" data-greek="Γλυκιά" data-english="Sweet">
                            Γλυκιά
                        </button>
                        <button class="type-btn salty-btn" onclick="selectType('salty')" data-greek="Αλμυρή" data-english="Savory">
                            Αλμυρή
                        </button>
                    </div>
                </div>
            </div>

            <!-- Step 3: Ingredients -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <h3 data-greek="Πρόσθεσε υλικά" data-english="Add Ingredients">Πρόσθεσε υλικά</h3>
                </div>
                <div class="step-content">
                    <div class="ingredients-list" id="ingredientsList">
                        <!-- Ingredients will be populated based on type selection -->
                    </div>
                </div>
            </div>

            <!-- Summary -->
            <div class="builder-summary-new">
                <div class="summary-total">
                    <h3 data-greek="Σύνολο" data-english="Total">Σύνολο</h3>
                    <div class="total-price">€<span id="customTotal">0.00</span></div>
                </div>
                <button class="add-to-order-btn" onclick="addCustomToOrder('crepe')" data-greek="Προσθήκη στην Παραγγελία" data-english="Add to Order">
                    Προσθήκη στην Παραγγελία
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners for base cards
    document.querySelectorAll('.base-card').forEach(card => {
        card.addEventListener('click', function() {
            const baseName = this.getAttribute('data-base-name');
            const basePrice = parseFloat(this.getAttribute('data-base-price'));
            const baseType = this.getAttribute('data-base-type');
            selectBase(baseName, basePrice, baseType);
        });
    });
    
    // Initialize with sweet ingredients
    selectType('sweet');
    updateAddToOrderButton(); // Initialize button state
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Custom toast builder with new design
function showCustomToast() {
    currentCustomOrder = { base: null, type: 'toast', ingredients: [], total: 0 };
    
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Το Τοστ Μου" data-english="My Toast">Το Τοστ Μου</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    modalBody.innerHTML = `
        <div class="custom-builder-new">
            <!-- Step 1: Base Selection -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">1</div>
                    <h3 data-greek="Ψωμί τοστ" data-english="Toast Bread">Ψωμί τοστ</h3>
                </div>
                <div class="step-content">
                    <div class="base-card" data-base-name="Ψωμί Τοστ" data-base-price="1.50" data-base-type="toast">
                        <div class="base-info">
                            <h4 data-greek="Ψωμί Τοστ" data-english="Toast Bread">Ψωμί Τοστ</h4>
                            <div class="base-price">€1.50</div>
                        </div>
                        <button class="base-btn" data-greek="Διάλεξε βάση" data-english="Choose Base">Διάλεξε βάση</button>
                    </div>
                </div>
            </div>

            <!-- Step 2: Ingredients -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h3 data-greek="Πρόσθεσε υλικά" data-english="Add Ingredients">Πρόσθεσε υλικά</h3>
                </div>
                <div class="step-content">
                    <div class="ingredients-list" id="ingredientsList">
                        <!-- Toast ingredients will be populated here -->
                    </div>
                </div>
            </div>

            <!-- Summary -->
            <div class="builder-summary-new">
                <div class="summary-total">
                    <h3 data-greek="Σύνολο" data-english="Total">Σύνολο</h3>
                    <div class="total-price">€<span id="customTotal">0.00</span></div>
                </div>
                <button class="add-to-order-btn" onclick="addCustomToOrder('toast')" data-greek="Προσθήκη στην Παραγγελία" data-english="Add to Order">
                    Προσθήκη στην Παραγγελία
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners for base cards
    document.querySelectorAll('.base-card').forEach(card => {
        card.addEventListener('click', function() {
            const baseName = this.getAttribute('data-base-name');
            const basePrice = parseFloat(this.getAttribute('data-base-price'));
            const baseType = this.getAttribute('data-base-type');
            selectBase(baseName, basePrice, baseType);
        });
    });
    
    // Initialize with toast ingredients
    updateToastIngredientsList();
    updateAddToOrderButton(); // Initialize button state
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Custom tortilla builder with new design
function showCustomTortilla() {
    currentCustomOrder = { base: null, type: 'tortilla', ingredients: [], total: 0 };
    
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2 data-greek="Η Τορτίγια Μου" data-english="My Tortilla">Η Τορτίγια Μου</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    modalBody.innerHTML = `
        <div class="custom-builder-new">
            <!-- Step 1: Base Selection -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">1</div>
                    <h3 data-greek="Τορτίγια" data-english="Tortilla">Τορτίγια</h3>
                </div>
                <div class="step-content">
                    <div class="base-card" data-base-name="Τορτίγια" data-base-price="1.50" data-base-type="tortilla">
                        <div class="base-info">
                            <h4 data-greek="Τορτίγια" data-english="Tortilla">Τορτίγια</h4>
                            <div class="base-price">€1.50</div>
                        </div>
                        <button class="base-btn" data-greek="Διάλεξε βάση" data-english="Choose Base">Διάλεξε βάση</button>
                    </div>
                </div>
            </div>

            <!-- Step 2: Ingredients -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h3 data-greek="Πρόσθεσε υλικά" data-english="Add Ingredients">Πρόσθεσε υλικά</h3>
                </div>
                <div class="step-content">
                    <div class="ingredients-list" id="ingredientsList">
                        <!-- Tortilla ingredients will be populated here -->
                    </div>
                </div>
            </div>

            <!-- Summary -->
            <div class="builder-summary-new">
                <div class="summary-total">
                    <h3 data-greek="Σύνολο" data-english="Total">Σύνολο</h3>
                    <div class="total-price">€<span id="customTotal">0.00</span></div>
                </div>
                <button class="add-to-order-btn" onclick="addCustomToOrder('tortilla')" data-greek="Προσθήκη στην Παραγγελία" data-english="Add to Order">
                    Προσθήκη στην Παραγγελία
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners for base cards
    document.querySelectorAll('.base-card').forEach(card => {
        card.addEventListener('click', function() {
            const baseName = this.getAttribute('data-base-name');
            const basePrice = parseFloat(this.getAttribute('data-base-price'));
            const baseType = this.getAttribute('data-base-type');
            selectBase(baseName, basePrice, baseType);
        });
    });
    
    // Initialize with tortilla ingredients
    updateTortillaIngredientsList();
    updateAddToOrderButton(); // Initialize button state
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    showModal();
}

// Select base for custom order
function selectBase(baseName, basePrice, type) {
    currentCustomOrder.base = { name: baseName, price: basePrice };
    
    // Recalculate total including base price and all selected ingredients
    currentCustomOrder.total = basePrice;
    currentCustomOrder.ingredients.forEach(ingredient => {
        currentCustomOrder.total += ingredient.price;
    });
    
    console.log('Base selected:', baseName, 'Price:', basePrice, 'Total:', currentCustomOrder.total);
    
    // Update UI - remove selected class from all base cards
    document.querySelectorAll('.base-card').forEach(card => {
        card.classList.remove('selected');
        card.classList.remove('base-required'); // Remove error highlighting
    });
    
    // Find and select the specific base card that was clicked
    const baseCards = document.querySelectorAll('.base-card');
    baseCards.forEach(card => {
        const cardName = card.querySelector('h4').textContent;
        const originalName = card.querySelector('h4').getAttribute('data-greek') || cardName;
        if (originalName === baseName) {
            card.classList.add('selected');
        }
    });
    
    updateCustomTotal();
}

// Select type (sweet/salty)
function selectType(type) {
    currentCustomOrder.type = type;
    
    // Update UI
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (type === 'sweet') {
        document.querySelector('.sweet-btn').classList.add('active');
    } else {
        document.querySelector('.salty-btn').classList.add('active');
    }
    
    // Update ingredients list
    updateIngredientsList();
}

// Helper function to categorize ingredients
function categorizeIngredients(ingredientsArray) {
    const categories = {};
    let currentCategory = 'Άλλα';
    
    ingredientsArray.forEach(ingredient => {
        // Check if this is a category comment (stored as a special object)
        if (ingredient.category) {
            currentCategory = ingredient.category;
        }
        
        if (!categories[currentCategory]) {
            categories[currentCategory] = [];
        }
        categories[currentCategory].push(ingredient);
    });
    
    return categories;
}

// Improved function that works with comment-based categorization
function categorizeIngredientsByComments(ingredientsArray) {
    const categories = {};
    
    // Define precise category mappings based on the actual ingredient structure
    const saltyCategories = {
        'Τυριά': [
            'Gouda', 'Mozzarella', 'Κασέρι καπνιστό', 'Cheddar', 'Φέτα', 'Μανούρι', 
            'La Vache qui rit', 'Philadelphia', 'Παρμεζάνα', 'Γραβιέρα',
            'Extra gouda', 'Extra mozzarella', 'Extra κασέρι καπνιστό', 'Extra cheddar',
            'Extra φέτα', 'Extra μανούρι', 'Extra La Vache qui rit', 'Extra Philadelphia',
            'Extra παρμεζάνα', 'Extra γραβιέρα'
        ],
        'Αλλαντικά': [
            'Πάριζα', 'Γαλοπούλα καπνιστή', 'Μπέικον', 'Σαλάμι μπύρας', 'Μπριζόλα καπνιστή',
            'Extra πάριζα', 'Extra γαλοπούλα καπνιστή', 'Extra μπέικον', 'Extra σαλάμι μπύρας',
            'Extra μπριζόλα καπνιστή'
        ],
        'Κρεατικά': [
            'Κοτόπουλο στήθος', 'Κοτομπουκιές', 'Σνίτσελ κοτόπουλο',
            'Extra κοτόπουλο στήθος', 'Extra κοτομπουκιές', 'Extra σνίτσελ κοτόπουλο'
        ],
        'Λαχανικά': [
            'Ντομάτα', 'Μαρούλι', 'Πιπεριά πράσινη', 'Πιπεριά Φλωρίνης', 'Αγγούρι', 
            'Μανιτάρια', 'Ελιά ροδέλα', 'Καλαμπόκι', 'Iceberg',
            'Extra ντομάτα', 'Extra μαρούλι', 'Extra πιπεριά πράσινη', 'Extra πιπεριά Φλωρίνης',
            'Extra αγγούρι', 'Extra μπριζόλα καπνιστή', 'Extra μανιτάρια', 'Extra ελιά ροδέλα', 'Extra καλαμπόκι', 'Extra iceberg'
        ],
        'Σάλτσες': [
            'Μαγιονέζα', 'Ουγγαρέζα', 'Τυροσαλάτα', 'Σως μουστάρδας', 'Tabasco', 'Ketchup', 
            'Μουστάρδα', 'BBQ', 'Golden BBQ', 'Σως Caesar`s', 'Σως sweet chili', 'Ρώσικη σαλάτα',
            'Σως cocktail', 'Γιαούρτι', 'Extra μαγιονέζα', 'Extra ουγγαρέζα', 'Extra τυροσαλάτα',
            'Extra σως μουστάρδας', 'Extra σως cocktail', 'Εxtra BBQ', 'Εxtra Golden BBQ',
            'Εxtra sweet chili', 'Εxtra Caesar`s', 'Εxtra Tabasco', 'Extra Tabasco', 'Εxtra ketchup',
            'Extra μουστάρδα', 'Extra ρώσικη σαλάτα', 'Extra γιαούρτι'
        ],
        'Extra': [
            'Αυγό βραστό', 'Πατάτες τηγανητές', 'Chips', 'Τόνος', 'Μπούκοβο',
            'Extra αυγό βραστό', 'Extra πατάτες τηγανητές', 'Extra chips', 'Extra τόνος', 'Extra μπούκοβο'
        ]
    };

    // Sweet ingredients mapping
    const sweetCategories = {
        'Πραλίνες': [
            'Πραλίνα Dubai (με κομμάτια φυστικιού & φύλλο κανταΐφι)', 'Merenda', 'Πραλίνα Bueno', 
            'Πραλίνα λευκή', 'Πραλίνα φράουλα', 'Nutella', 'Extra Πραλίνα Dubai (με κομμάτια φυστικιού & φύλλο κανταΐφι)',
            'Extra Merenda', 'Extra Πραλίνα λευκή', 'Extra πραλίνα Bueno', 'Extra Πραλίνα φράουλα', 'Extra Nutella'
        ],
        'Συνδυασμοί Πραλίνων': [
            'Merenda & πραλίνα Bueno', 'Merenda & πραλίνα λευκή', 'Merenda & πραλίνα φράουλα',
            'Πραλίνα Bueno & πραλίνα λευκή', 'Πραλίνα Bueno & πραλίνα φράουλα', 'Πραλίνα Bueno & Nutella',
            'Πραλίνα λευκή & πραλίνα φράουλα', 'Πραλίνα λευκή & Nutella', 'Πραλίνα φράουλα & Nutella'
        ],
        'Σοκολάτες': [
            'Lacta', 'Milka φράουλα', 'Nestle Crunch λευκή', 'ΙΟΝ αμυγδάλου', 'Σοκολάτα υγείας',
            'Maltesers', 'Snickers', 'Mars', 'Twix', 'Kit Kat', 'Kinder Bueno', 'Smarties'
        ],
        'Ξηροί Καρποί': [
            'Καρύδι', 'Αμύγδαλο', 'Φουντούκι', 'Extra καρύδι', 'Extra αμύγδαλο', 'Extra φουντούκι'
        ],
        'Φρούτα': [
            'Μπανάνα φρούτο', 'Extra μπανάνα φρούτο'
        ],
        'Extra': [
            'Μπισκότο', 'Μπισκότο Oreo', 'Cookies', 'Ινδοκάρυδο', 'Τρούφα', 'Φυστικοβούτυρο',
            'Μέλι', 'Καραμέλα', 'Marshmallows', 'Caprice', 'Philadelphia', 'Chips',
            'Extra μπισκότο', 'Extra μπισκότο Oreo', 'Extra cookies', 'Extra ινδοκάρυδο', 'Extra τρούφα',
            'Extra φυστικοβούτυρο', 'Extra μέλι', 'Extra καραμέλα', 'Extra marshmallows', 'Extra Caprice',
            'Extra Philadelphia', 'Extra chips'
        ]
    };
    
    // Determine if this is a sweet ingredients array by checking for sweet-specific items
    const isSweet = ingredientsArray.some(ingredient => 
        ingredient.name.includes('Nutella') || 
        ingredient.name.includes('Merenda') || 
        ingredient.name.includes('Πραλίνα') ||
        ingredient.name.includes('Σοκολάτα')
    );
    
    const categoryMapping = isSweet ? sweetCategories : saltyCategories;
    
    ingredientsArray.forEach(ingredient => {
        let foundCategory = null;
        
        // Find exact match for ingredient name
        for (const [category, items] of Object.entries(categoryMapping)) {
            if (items.includes(ingredient.name)) {
                foundCategory = category;
                break;
            }
        }
        
        // Only add ingredient if we found a category for it
        if (foundCategory) {
            if (!categories[foundCategory]) {
                categories[foundCategory] = [];
            }
            categories[foundCategory].push(ingredient);
        }
    });
    
    return categories;
}

// Function to get translated ingredient categories and names
function getTranslatedIngredientsList(ingredientsArray, language) {
    const categorizedIngredients = categorizeIngredientsByComments(ingredientsArray);
    const translatedCategories = {};
    
    Object.entries(categorizedIngredients).forEach(([category, ingredients]) => {
        const translatedCategory = translateIngredientText(category, language);
        translatedCategories[translatedCategory] = {
            originalCategory: category, // Keep original Greek category name for IDs
            ingredients: ingredients.map(ingredient => ({
                ...ingredient,
                translatedName: translateIngredientText(ingredient.name, language)
            }))
        };
    });
    
    return translatedCategories;
}

// Function to update base names in custom order modals
function updateBaseNames(language) {
    // Only update if we're in a custom order modal
    const baseCards = document.querySelectorAll('.base-card');
    if (baseCards.length === 0) return; // Exit if no base cards exist
    
    baseCards.forEach(card => {
        const baseNameElement = card.querySelector('h4');
        if (baseNameElement) {
            const greekName = baseNameElement.getAttribute('data-greek');
            const englishName = baseNameElement.getAttribute('data-english');
            if (greekName && englishName) {
                baseNameElement.textContent = language === 'english' ? englishName : greekName;
            }
        }
        
        // Update base selection button text
        const baseBtn = card.querySelector('.base-btn');
        if (baseBtn) {
            const greekText = baseBtn.getAttribute('data-greek');
            const englishText = baseBtn.getAttribute('data-english');
            if (greekText && englishText) {
                baseBtn.textContent = language === 'english' ? englishText : greekText;
            }
        }
    });
    
    // Update step headers
    const stepHeaders = document.querySelectorAll('.step-header h3');
    stepHeaders.forEach(header => {
        const greekText = header.getAttribute('data-greek');
        const englishText = header.getAttribute('data-english');
        if (greekText && englishText) {
            header.textContent = language === 'english' ? englishText : greekText;
        }
    });
    
    // Update summary text
    const summaryTotal = document.querySelector('.summary-total h3');
    if (summaryTotal) {
        const greekText = summaryTotal.getAttribute('data-greek');
        const englishText = summaryTotal.getAttribute('data-english');
        if (greekText && englishText) {
            summaryTotal.textContent = language === 'english' ? englishText : greekText;
        }
    }
    
    const addToOrderBtn = document.querySelector('.add-to-order-btn');
    if (addToOrderBtn) {
        const greekText = addToOrderBtn.getAttribute('data-greek');
        const englishText = addToOrderBtn.getAttribute('data-english');
        if (greekText && englishText) {
            addToOrderBtn.textContent = language === 'english' ? englishText : greekText;
        }
    }
}

// Toggle category dropdown
function toggleCategory(categoryName) {
    // Find the category content by looking for the closest ingredient-category parent
    const categoryHeader = event.target.closest('.category-header');
    if (!categoryHeader) return;
    
    const categoryContent = categoryHeader.nextElementSibling;
    if (!categoryContent) return;
    
    const icon = categoryHeader.querySelector('.category-icon');
    if (!icon) return;
    
    if (categoryContent.classList.contains('show')) {
        categoryContent.classList.remove('show');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        categoryHeader.classList.remove('active');
    } else {
        categoryContent.classList.add('show');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        categoryHeader.classList.add('active');
    }
}

// Update ingredients list based on type with categories
function updateIngredientsList() {
    const ingredientsList = document.getElementById('ingredientsList');
    if (!ingredientsList) return; // Exit if element doesn't exist
    
    let currentIngredients;
    
    if (currentCustomOrder.type === 'toast') {
        currentIngredients = ingredients.toastIngredients;
    } else if (currentCustomOrder.type === 'tortilla') {
        currentIngredients = ingredients.tortillaIngredients;
    } else {
        currentIngredients = currentCustomOrder.type === 'sweet' ? 
            ingredients.sweetIngredients : 
            ingredients.saltyIngredients;
    }
    
    const language = isTranslated ? 'english' : 'greek';
    const translatedCategories = getTranslatedIngredientsList(currentIngredients, language);
    
    ingredientsList.innerHTML = Object.entries(translatedCategories).map(([category, categoryData]) => `
        <div class="ingredient-category">
            <div class="category-header" onclick="toggleCategory('${category}')">
                <h4>${category}</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-${categoryData.originalCategory.replace(/\s+/g, '-')}">
                ${categoryData.ingredients.map(ingredient => `
                    <div class="ingredient-item-new">
                        <div class="ingredient-info">
                            <span class="ingredient-name">${ingredient.translatedName || ingredient.name}</span>
                            <span class="ingredient-price">€${ingredient.price.toFixed(2)}</span>
                        </div>
                        <button class="add-ingredient-btn" onclick="toggleIngredient('${ingredient.name}', ${ingredient.price}, event)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function updateToastIngredientsList() {
    const ingredientsList = document.getElementById('ingredientsList');
    if (!ingredientsList) return; // Exit if element doesn't exist
    
    const currentIngredients = ingredients.toastIngredients;
    
    const language = isTranslated ? 'english' : 'greek';
    const translatedCategories = getTranslatedIngredientsList(currentIngredients, language);
    
    ingredientsList.innerHTML = Object.entries(translatedCategories).map(([category, categoryData]) => `
        <div class="ingredient-category">
            <div class="category-header" onclick="toggleCategory('${category}')">
                <h4>${category}</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-${categoryData.originalCategory.replace(/\s+/g, '-')}">
                ${categoryData.ingredients.map(ingredient => `
                    <div class="ingredient-item-new">
                        <div class="ingredient-info">
                            <span class="ingredient-name">${ingredient.translatedName || ingredient.name}</span>
                            <span class="ingredient-price">€${ingredient.price.toFixed(2)}</span>
                        </div>
                        <button class="add-ingredient-btn" onclick="toggleIngredient('${ingredient.name}', ${ingredient.price}, event)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function updateTortillaIngredientsList() {
    const ingredientsList = document.getElementById('ingredientsList');
    if (!ingredientsList) return; // Exit if element doesn't exist
    
    const currentIngredients = ingredients.tortillaIngredients;
    
    const language = isTranslated ? 'english' : 'greek';
    const translatedCategories = getTranslatedIngredientsList(currentIngredients, language);
    
    ingredientsList.innerHTML = Object.entries(translatedCategories).map(([category, categoryData]) => `
        <div class="ingredient-category">
            <div class="category-header" onclick="toggleCategory('${category}')">
                <h4>${category}</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-${categoryData.originalCategory.replace(/\s+/g, '-')}">
                ${categoryData.ingredients.map(ingredient => `
                    <div class="ingredient-item-new">
                        <div class="ingredient-info">
                            <span class="ingredient-name">${ingredient.translatedName || ingredient.name}</span>
                            <span class="ingredient-price">€${ingredient.price.toFixed(2)}</span>
                        </div>
                        <button class="add-ingredient-btn" onclick="toggleIngredient('${ingredient.name}', ${ingredient.price}, event)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Toggle ingredient selection
function toggleIngredient(ingredientName, ingredientPrice, event) {
    const existingIndex = currentCustomOrder.ingredients.findIndex(ing => ing.name === ingredientName);
    
    if (existingIndex > -1) {
        // Remove ingredient
        currentCustomOrder.ingredients.splice(existingIndex, 1);
        
        // Recalculate total properly
        if (currentCustomOrder.base) {
            currentCustomOrder.total = currentCustomOrder.base.price;
            currentCustomOrder.ingredients.forEach(ingredient => {
                currentCustomOrder.total += ingredient.price;
            });
        } else {
            // If no base selected, keep total at 0 but track ingredients
            currentCustomOrder.total = 0;
        }
        
        // Update UI
        const btn = event.target.closest('.add-ingredient-btn');
        if (btn) {
            btn.innerHTML = '<i class="fas fa-plus"></i>';
            btn.classList.remove('added');
        }
    } else {
        // Add ingredient
        currentCustomOrder.ingredients.push({ name: ingredientName, price: ingredientPrice });
        
        // Recalculate total properly
        if (currentCustomOrder.base) {
            currentCustomOrder.total = currentCustomOrder.base.price;
            currentCustomOrder.ingredients.forEach(ingredient => {
                currentCustomOrder.total += ingredient.price;
            });
        } else {
            // If no base selected, keep total at 0 but track ingredients
            currentCustomOrder.total = 0;
        }
        
        // Update UI
        const btn = event.target.closest('.add-ingredient-btn');
        if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.classList.add('added');
        }
    }
    
    updateCustomTotal();
}

// Update custom total display
function updateCustomTotal() {
    const totalElement = document.getElementById('customTotal');
    if (totalElement) {
        console.log('Updating total:', currentCustomOrder.total);
        console.log('Current custom order:', currentCustomOrder);
        totalElement.textContent = currentCustomOrder.total.toFixed(2);
    } else {
        console.log('customTotal element not found');
    }
    
    // Update add to order button state
    updateAddToOrderButton();
}

// Update add to order button based on base selection
function updateAddToOrderButton() {
    const addButton = document.querySelector('.add-to-order-btn');
    if (addButton) {
        if (!currentCustomOrder.base) {
            addButton.classList.add('base-not-selected');
            if (isTranslated) {
                addButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> Select Base First';
            } else {
                addButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> Επιλέξτε Βάση Πρώτα';
            }
        } else {
            addButton.classList.remove('base-not-selected');
            if (isTranslated) {
                addButton.innerHTML = 'Add to Order';
            } else {
                addButton.innerHTML = 'Προσθήκη στην Παραγγελία';
            }
        }
    }
}

// Add custom item to order
function addCustomToOrder(type) {
    if (!currentCustomOrder.base) {
        // Show better error message and highlight the base selection
        showBaseSelectionError(type);
        return;
    }
    
    const typeNames = {
        'crepe': isTranslated ? 'My Crepe' : 'Η Κρέπα Μου',
        'toast': isTranslated ? 'My Toast' : 'Το Τοστ Μου',
        'tortilla': isTranslated ? 'My Tortilla' : 'Η Τορτίγια Μου'
    };
    
    let description;
    if (isTranslated) {
        description = currentCustomOrder.ingredients.length > 0 ? 
            `With ${currentCustomOrder.ingredients.map(ing => ing.name).join(', ')}` : 
            'Basic recipe';
    } else {
        description = currentCustomOrder.ingredients.length > 0 ? 
            `Με ${currentCustomOrder.ingredients.map(ing => ing.name).join(', ')}` : 
            'Βασική συνταγή';
    }
    
    addToOrder(typeNames[type], currentCustomOrder.total, description);
}

// Show base selection error with visual feedback
function showBaseSelectionError(type) {
    const typeNames = {
        'crepe': isTranslated ? 'crepe' : 'κρέπας',
        'toast': isTranslated ? 'toast' : 'τοστ', 
        'tortilla': isTranslated ? 'tortilla' : 'τορτίγιας'
    };
    
    // Create custom error modal content
    const errorModal = document.createElement('div');
    errorModal.className = 'base-error-modal';
    errorModal.innerHTML = `
        <div class="base-error-content">
            <div class="error-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h3 data-greek="Επιλογή Βάσης Απαιτείται" data-english="Base Selection Required">Επιλογή Βάσης Απαιτείται</h3>
            <p data-greek="Παρακαλώ επιλέξτε τη βάση ${typeNames[type]} πριν προσθέσετε στην παραγγελία." data-english="Please select the ${typeNames[type]} base before adding to the order.">Παρακαλώ επιλέξτε τη βάση ${typeNames[type]} πριν προσθέσετε στην παραγγελία.</p>
            <button class="error-ok-btn" onclick="closeBaseError()" data-greek="Εντάξει" data-english="OK">
                Εντάξει
            </button>
        </div>
    `;
    
    document.body.appendChild(errorModal);
    
    // Apply current translation if needed
    if (isTranslated) {
        translatePage('english');
    }
    
    // Highlight the base selection area
    const baseCard = document.querySelector('.base-card');
    if (baseCard) {
        baseCard.classList.add('base-required');
        setTimeout(() => {
            baseCard.classList.remove('base-required');
        }, 3000);
    }
    
    // Scroll to base selection
    const baseSection = document.querySelector('.builder-step');
    if (baseSection) {
        baseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Close base selection error modal
function closeBaseError() {
    const errorModal = document.querySelector('.base-error-modal');
    if (errorModal) {
        errorModal.remove();
    }
}

// Add item to order
function addToOrder(name, price, description) {
    // Ensure price is a number
    const numericPrice = parseFloat(price) || 0;
    
    currentOrder.push({
        name: name,
        price: numericPrice,
        description: description
    });
    
    closeModalHandler();
    showOrderSummary();
}

// Add item to order without closing modal
function addToOrderWithoutClose(name, price, description) {
    // Ensure price is a number
    const numericPrice = parseFloat(price) || 0;
    
    currentOrder.push({
        name: name,
        price: numericPrice,
        description: description
    });
    
    // Show a brief confirmation message
    const btn = event.target.closest('.add-item-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('base-not-selected');
    btn.classList.add('added');
    
    // Update floating button
    updateFloatingButton();
    
    // Reset button after 1 second
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('added');
        btn.classList.remove('base-not-selected');
    }, 1000);
}

// Remove item from order
function removeFromOrder(index) {
    // Remove the item at the specified index
    currentOrder.splice(index, 1);
    
    // Update floating button
    updateFloatingButton();
    
    // If order is now empty, close the modal
    if (currentOrder.length === 0) {
        closeOrderModalHandler();
        return;
    }
    
    // Refresh the order summary to show updated list
    showOrderSummary();
}

// Show order summary
function showOrderSummary() {
    if (currentOrder.length === 0) {
        if (isTranslated) {
            alert('Your order is empty!');
        } else {
            alert('Η παραγγελία σας είναι άδεια!');
        }
        return;
    }
    
    // Ensure all prices are numbers and calculate total
    let total = 0;
    console.log('Starting total calculation...'); // Debug
    
    const orderItems = currentOrder.map((item, index) => {
        // Ensure price is a number
        const itemPrice = parseFloat(item.price) || 0;
        total += itemPrice;
        
        console.log(`Item: ${item.name}, Price: ${item.price}, Parsed: ${itemPrice}, Running total: ${total}`); // Debug
        
        // Translate item name if in English mode
        let displayName = item.name;
        let displayDescription = item.description;
        
        if (isTranslated && englishTranslations[item.name]) {
            displayName = englishTranslations[item.name];
        }
        
        if (isTranslated && englishDescriptions[item.description]) {
            displayDescription = englishDescriptions[item.description];
        }
        
        return `
            <div class="order-item">
                <div class="order-item-info">
                    <h4>${displayName}</h4>
                    <p>${displayDescription}</p>
                </div>
                <div class="order-item-actions">
                    <div class="order-item-price">€${itemPrice.toFixed(2)}</div>
                    <button class="remove-item-btn" onclick="removeFromOrder(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    orderSummary.innerHTML = orderItems.join('');
    
    console.log('Final total calculated:', total); // Debug
    
    // Debug: Check what elements exist
    console.log('All elements with "order" in ID:', document.querySelectorAll('[id*="order"]'));
    console.log('All elements with "total" in ID:', document.querySelectorAll('[id*="total"]'));
    
    // Update the order modal total
    const orderTotalElement = document.getElementById('orderTotalPrice');
    console.log('Order total element found:', orderTotalElement); // Debug
    if (orderTotalElement) {
        orderTotalElement.textContent = total.toFixed(2);
        console.log('Updated order total to:', total.toFixed(2)); // Debug
    } else {
        console.log('Order total element NOT found!'); // Debug
        console.log('Trying alternative selectors...'); // Debug
        
        // Try alternative ways to find the element
        console.log('Looking for .order-total elements:', document.querySelectorAll('.order-total'));
        console.log('Looking for .order-total h3 elements:', document.querySelectorAll('.order-total h3'));
        console.log('Looking for .order-total span elements:', document.querySelectorAll('.order-total span'));
        
        const alternativeElement = document.querySelector('.order-total span');
        if (alternativeElement) {
            console.log('Found element via class selector:', alternativeElement);
            alternativeElement.textContent = total.toFixed(2);
            console.log('Updated via class selector to:', total.toFixed(2));
        } else {
            console.log('Element not found via class selector either');
            
            // Try to update the h3 element directly
            const h3Element = document.querySelector('.order-total h3');
            if (h3Element) {
                console.log('Found h3 element, updating it directly');
                // Get the current text (either "Total: " or "Σύνολο: ")
                const currentText = h3Element.textContent.replace(/€[\d.]+/, ''); // Remove any existing price
                h3Element.textContent = currentText + '€' + total.toFixed(2);
                console.log('Updated h3 element to:', h3Element.textContent);
            } else {
                console.log('H3 element not found either');
            }
        }
    }
    
    // Update main page total if it exists
    const mainTotalElement = document.getElementById('totalPrice');
    if (mainTotalElement) {
        mainTotalElement.textContent = `€${total.toFixed(2)}`;
    }
    
    orderModal.classList.add('active');

    // Reset scroll position for order modal only
    const orderBody = orderModal.querySelector('.modal-body');
    if (orderBody) {
        orderBody.scrollTop = 0;
    }
}

// Removed placeOrderHandler function

// Modal handlers
function showModal() {
    modalOverlay.classList.add('active');
    // Reset modal scroll to top when opening content
    if (modalBody) {
        modalBody.scrollTop = 0;
    }
}

function closeModalHandler() {
    modalOverlay.classList.remove('active');
}

function closeOrderModalHandler() {
    orderModal.classList.remove('active');
}

// Add floating order button
function addFloatingOrderButton() {
    if (currentOrder.length > 0) {
        const floatingBtn = document.createElement('div');
        floatingBtn.className = 'floating-order-btn';
        floatingBtn.innerHTML = `
            <i class="fas fa-shopping-cart"></i>
            <span>${currentOrder.length}</span>
        `;
        floatingBtn.onclick = showOrderSummary;
        document.body.appendChild(floatingBtn);
    }
}

// Add floating order button styles and clean category header styles
const floatingBtnStyles = `
    .floating-order-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #ff4b4b 0%, #dc2626 100%);
        color: white;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(255, 75, 75, 0.5);
        z-index: 9999;
        transition: all 0.3s ease;
        border: 3px solid rgba(255, 255, 255, 0.2);
    }
    
    .floating-order-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 15px 40px rgba(255, 75, 75, 0.6);
    }
    
    .floating-order-btn i {
        font-size: 1.8rem;
    }
    
    .floating-order-btn span {
        position: absolute;
        top: -8px;
        right: -8px;
        background: #ffd700;
        color: #000;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 800;
        border: 2px solid #ffffff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    
    .category-header-clean {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        background: transparent;
        border: none;
        transition: all 0.3s ease;
    }
    
    .category-header-clean:hover {
        background: rgba(255, 255, 255, 0.05);
    }
    
    .category-header-clean h4 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #ffffff;
    }
    
    .ingredient-category {
        margin-bottom: 1rem;
    }
    
    .base-error-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    }
    
    .base-error-content {
        background: #2a2a2a;
        border: 2px solid #ff4b4b;
        border-radius: 15px;
        padding: 30px;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(255, 75, 75, 0.4);
    }
    
    .error-icon {
        font-size: 3rem;
        color: #ff4b4b;
        margin-bottom: 20px;
    }
    
    .base-error-content h3 {
        color: #ffffff;
        font-size: 1.4rem;
        margin-bottom: 15px;
        font-family: 'Poppins', sans-serif;
    }
    
    .base-error-content p {
        color: #cccccc;
        font-size: 1rem;
        margin-bottom: 25px;
        line-height: 1.5;
    }
    
    .error-ok-btn {
        background: linear-gradient(135deg, #ff4b4b 0%, #dc2626 100%);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .error-ok-btn:hover {
        background: linear-gradient(135deg, #dc2626 0%, #ff4b4b 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 75, 75, 0.4);
    }
    
    .base-required {
        border: 3px solid #ff4b4b !important;
        background: rgba(255, 75, 75, 0.1) !important;
        animation: pulse-red 1s ease-in-out infinite;
    }
    
    @keyframes pulse-red {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 75, 75, 0.7);
        }
        50% {
            box-shadow: 0 0 0 10px rgba(255, 75, 75, 0);
        }
    }
    
    .add-to-order-btn.base-not-selected {
        background: #666666 !important;
        cursor: not-allowed;
        opacity: 0.7;
    }
    
    .add-to-order-btn.base-not-selected:hover {
        background: #666666 !important;
        transform: none !important;
        box-shadow: none !important;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = floatingBtnStyles;
document.head.appendChild(styleSheet);

// Update floating button when order changes
function updateFloatingButton() {
    const existingBtn = document.querySelector('.floating-order-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    if (currentOrder.length > 0) {
        addFloatingOrderButton();
    }
}

// Override addToOrder to update floating button
const originalAddToOrder = addToOrder;
addToOrder = function(name, price, description) {
    originalAddToOrder(name, price, description);
    updateFloatingButton();
};

// Loading functions
function showLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('active');
    }
}

// Error handling
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorModal = document.getElementById('errorModal');
    if (errorMessage && errorModal) {
        errorMessage.textContent = message;
        errorModal.classList.add('active');
    }
}

function closeErrorModal() {
    const errorModal = document.getElementById('errorModal');
    if (errorModal) {
        errorModal.classList.remove('active');
    }
}

// Enhanced order functions
function updateOrderDisplay() {
    // Update floating button
    updateFloatingButton();
    
    // Update order summary if modal is open
    if (orderModal.classList.contains('active')) {
        showOrderSummary();
    }
}

function clearOrder() {
    try {
        currentOrder = [];
        updateOrderDisplay();
        closeOrderModalHandler();
    } catch (error) {
        if (isTranslated) {
            showError('Error clearing the order');
        } else {
            showError('Σφάλμα κατά τον καθαρισμό της παραγγελίας');
        }
    }
}

function confirmOrder() {
    try {
        if (currentOrder.length === 0) {
            if (isTranslated) {
                showError('Your order is empty');
            } else {
                showError('Η παραγγελία σας είναι άδεια');
            }
            return;
        }
        
        const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
        const orderText = currentOrder.map(item => `${item.name} - €${item.price.toFixed(2)}`).join('\n');
        let message;
        if (isTranslated) {
            message = `New Order:\n\n${orderText}\n\nTotal: €${total.toFixed(2)}`;
        } else {
            message = `Νέα Παραγγελία:\n\n${orderText}\n\nΣύνολο: €${total.toFixed(2)}`;
        }
        
        // Open phone dialer with pre-filled message
        const phoneNumber = 'tel:+306912345678'; // Replace with actual phone number
        window.open(phoneNumber);
        
        // You could also use WhatsApp or other messaging apps
        // const whatsappUrl = `https://wa.me/306912345678?text=${encodeURIComponent(message)}`;
        // window.open(whatsappUrl);
        
    } catch (error) {
        if (isTranslated) {
            showError('Error confirming the order');
        } else {
            showError('Σφάλμα κατά την επιβεβαίωση της παραγγελίας');
        }
    }
} 
