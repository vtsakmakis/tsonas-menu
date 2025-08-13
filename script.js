// Menu Data - Based on Tsonas menu from e-food.gr
const menuData = {
    crepes: {
        sweet: [      
            { name: "Κρέπα Τσώνας", description: "Με Lacta σοκολάτα, Oreo & μπανάνα", price: 5.80 },
            { name: "Κρέπα Λιχούδης", description: "Με Merenda & πραλίνα λευκή, Bueno, ινδοκάρυδο & αμύγδαλο", price: 6.20 },
            { name: "Κρέπα Ουράνιο Τόξο", description: "Με πραλίνα λευκή & πραλίνα φράουλα, marshmallows & Smarties", price: 5.30 },
            { name: "Κρέπα Nutrella", description: "Με Nutella, μπισκότο, Bueno & τρούφα", price: 6.50 },
            { name: "Κρέπα Fitness", description: "Με σοκολάτα υγείας, φουντούκι & μπανάνα", price: 5.70 },
            { name: "Κρέπα Banoffee", description: "Με Merenda, καραμέλα, μπισκότο & μπανάνα", price: 5.80 }
        ],
        savory: [
            { name: "Κρέπα Κλασική", description: "Με κοτόπουλο, gouda, μανιτάρια & ουγγαρέζα", price: 6.10 },
            { name: "Κρέπα Γιαννιώτικη", description: "Με κοτομπουκιές, gouda, πατάτες τηγανητές & ουγγαρέζα", price: 5.90 },
            { name: "Κρέπα Σεφ", description: "Με σνίτσελ κοτόπουλο, μπέικον, πατάτες τηγανητές, Philadelphia & BBQ σως", price: 7.30 },
            { name: "Κρέπα Τσώνας", description: "Με σνίτσελ κοτόπουλο, μπέικον, πατάτες τηγανητές, BBQ σως, τυροσαλάτα & ουγγαρέζα", price: 7.70 },
            { name: "Κρέπα Ξα", description: "Με κοτόπουλο, μπέικον, gouda, αυγό βραστό, πιπεριά πράσινη & μαγιονέζα", price: 7.30 },
            { name: "Κρέπα Hot", description: "Με κοτομπουκιές, σαλάμι μπύρας, gouda, τυροσαλάτα, σως cocktail & tabasco", price: 7.20 },
            { name: "Κρέπα Σπαλιάρης", description: "Με κοτομπουκιές, διπλό μπέικον, διπλό gouda, chips, καλαμπόκι & ουγγαρέζα", price: 9.40 },
            { name: "Κρέπα Μπετσούκος", description: "Με κοτόπουλο, κοτομπουκιές, γαλοπούλα, cheddar, La Vache qui rit, chips, ντομάτα & διπλή μαγιονέζα", price: 11.10 },
            { name: "Κρέπα Χαίτης", description: "Με κοτόπουλο, μπέικον, gouda, αυγό βραστό, μανιτάρια, πιπεριά πράσινη, ουγγαρέζα & sweet chili σως", price: 8.40 },
            { name: "Κρέπα Τυριών", description: "Με κασέρι καπνιστό, μανούρι, Philadelphia, cheddar & ρίγανη", price: 7.70 }
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
            { name: "Coca-Cola 500ml", takeAwayPrice: 2.30, dineInPrice: 3.00 },
            { name: "Coca-Cola zero 500ml", takeAwayPrice: 2.30, dineInPrice: 3.00 },
            { name: "Coca-Cola 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Coca-Cola zero 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Fanta πορτοκαλάδα 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Fanta λεμονάδα 1.5lt", takeAwayPrice: 3.30, dineInPrice: 3.50 },
            { name: "Βίκος pink grapefruit 250ml", takeAwayPrice: 1.80, dineInPrice: 2.00 },
            { name: "Ξυνό νερό Φλώρινας 250ml", takeAwayPrice: 2.00, dineInPrice: 2.20 },
            { name: "Νερό 500ml", takeAwayPrice: 0.50, dineInPrice: 0.70 },
            { name: "Νερό 1.5lt", takeAwayPrice: 1.00, dineInPrice: 1.20 }
        ],
        μπύρες: [
            { name: "Άλφα 330ml", takeAwayPrice: 2.00, dineInPrice: 3.00 },
            { name: "Amstel 330ml", takeAwayPrice: 2.00, dineInPrice: 2.50 },
            { name: "Sol 330ml", takeAwayPrice: 2.70, dineInPrice: 3.50 },
            { name: "Βεργίνα 500ml", takeAwayPrice: 2.00, dineInPrice: 3.50 },
            { name: "Mythos Radler 330ml", takeAwayPrice: 2.00, dineInPrice: 2.50 }
        ],
        κρασιά: [
            { name: "Κρασί κόκκινο ξηρό Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 3.00, dineInPrice: 3.00 },
            { name: "Κρασί κόκκινο ημίγλυκο Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 3.00, dineInPrice: 3.00 },
            { name: "Κρασί λευκό ξηρό Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 3.00, dineInPrice: 8.00 },
            { name: "Κρασί λευκό ημίγλυκο Ιδεώδης Οινοποιείο Vaeni Naoussa 750ml", takeAwayPrice: 3.00, dineInPrice: 3.00 },
            { name: "Ρετσίνα Γιώργου Γεωργιάδη 500ml", takeAwayPrice: 4.00, dineInPrice: 4.00 }
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
        { name: "Extra gouda", price: 2.40 },
        { name: "Extra mozzarella", price: 3.00 },
        { name: "Extra κασέρι καπνιστό", price: 4.00 },
        { name: "Extra cheddar", price: 3.00 },
        { name: "Extra φέτα", price: 2.00 },
        { name: "Extra μανούρι", price: 2.60 },
        { name: "Extra La Vache qui rit", price: 1.80 },
        { name: "Extra Philadelphia", price: 2.00 },
        { name: "Extra παρμεζάνα", price: 2.00 },
        { name: "Extra γραβιέρα", price: 2.80 },
        
        // Αλλαντικά
        { name: "Πάριζα", price: 0.60 },
        { name: "Γαλοπούλα καπνιστή", price: 0.80 },
        { name: "Μπέικον", price: 0.70 },
        { name: "Σαλάμι μπύρας", price: 0.80 },
        { name: "Μπριζόλα καπνιστή", price: 1.50 },
        { name: "Extra πάριζα", price: 1.20 },
        { name: "Extra γαλοπούλα καπνιστή", price: 1.60 },
        { name: "Extra μπέικον", price: 1.40 },
        { name: "Extra σαλάμι μπύρας", price: 1.60 },
        { name: "Extra μπριζόλα καπνιστή", price: 3.00 },
        
        // Κρεατικά
        { name: "Κοτόπουλο στήθος", price: 2.00 },
        { name: "Κοτομπουκιές", price: 1.80 },
        { name: "Σνίτσελ κοτόπουλο", price: 2.60 },
        { name: "Μπριζόλα καπνιστή", price: 1.50 },
        { name: "Extra κοτόπουλο στήθος", price: 4.00 },
        { name: "Extra κοτομπουκιές", price: 3.60 },
        { name: "Extra σνίτσελ κοτόπουλο", price: 5.20 },
        { name: "Extra μπριζόλα καπνιστή", price: 3.00 },
        
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
        { name: "Extra ντομάτα", price: 0.60 },
        { name: "Extra μαρούλι", price: 0.40 },
        { name: "Extra πιπεριά πράσινη", price: 0.60 },
        { name: "Extra πιπεριά Φλωρίνης", price: 0.60 },
        { name: "Extra αγγούρι", price: 0.80 },
        { name: "Extra μανιτάρια", price: 1.00 },
        { name: "Extra ελιά ροδέλα", price: 0.60 },
        { name: "Extra καλαμπόκι", price: 0.80 },
        { name: "Extra iceberg", price: 0.80 },
        
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
        { name: "Extra μαγιονέζα", price: 0.80 },
        { name: "Extra ουγγαρέζα", price: 1.00 },
        { name: "Extra τυροσαλάτα", price: 1.60 },
        { name: "Extra σως μουστάρδας", price: 0.80 },
        { name: "Extra σως cocktail", price: 0.80 },
        { name: "Εxtra BBQ", price: 1.00 },
        { name: "Εxtra Golden BBQ", price: 0.80 },
        { name: "Εxtra sweet chili", price: 0.60 },
        { name: "Εxtra Caesar`s", price: 1.00 },
        { name: "Εxtra Tabasco", price: 0.40 },
        { name: "Εxtra ketchup", price: 0.40 },
        { name: "Extra μουστάρδα", price: 0.40 },
        { name: "Extra ρώσικη σαλάτα", price: 1.20 },
        { name: "Extra Philadelphia", price: 2.00 },
        { name: "Extra γιαούρτι", price: 1.00 },
        { name: "Extra Tabasco", price: 0.40 },
        
        // Extra
        { name: "Αυγό βραστό", price: 0.60 },
        { name: "Πατάτες τηγανητές", price: 0.50 },
        { name: "Chips", price: 0.60 },
        { name: "Τόνος", price: 2.50 },
        { name: "Μπούκοβο", price: 0.00 },
        { name: "Extra αυγό βραστό", price: 1.20 },
        { name: "Extra πατάτες τηγανητές", price: 1.00 },
        { name: "Extra chips", price: 1.00 },
        { name: "Extra τόνος", price: 5.00 },
        { name: "Extra μπούκοβο", price: 0.00 }
    ],
    sweetIngredients: [
        // Πραλίνες
        { name: "Πραλίνα Dubai (με κομμάτια φυστικιού & φύλλο κανταΐφι)", price: 4.10 },
        { name: "Merenda", price: 1.10 },
        { name: "Πραλίνα Bueno", price: 1.40 },
        { name: "Πραλίνα λευκή", price: 1.10 },
        { name: "Πραλίνα φράουλα", price: 1.30 },
        { name: "Nutella", price: 1.80 },
        { name: "Extra Πραλίνα Dubai (με κομμάτια φυστικιού & φύλλο κανταΐφι)", price: 8.20 },
        { name: "Extra Merenda", price: 2.20 },
        { name: "Extra Πραλίνα λευκή", price: 2.20 },
        { name: "Extra πραλίνα Bueno", price: 2.80 },
        { name: "Extra Πραλίνα φράουλα", price: 2.60 },
        { name: "Extra Nutella", price: 3.60 },
        
        // Συνδυασμοί Πραλίνων
        { name: "Merenda & πραλίνα Bueno", price: 1.30 },
        { name: "Merenda & πραλίνα λευκή", price: 1.10 },
        { name: "Merenda & πραλίνα φράουλα", price: 1.20 },
        { name: "Πραλίνα Bueno & πραλίνα λευκή", price: 1.40 },
        { name: "Πραλίνα Bueno & πραλίνα φράουλα", price: 1.40 },
        { name: "Πραλίνα Bueno & Nutella", price: 1.70 },
        { name: "Πραλίνα σοκολάτα λευκή & πραλίνα φράουλα", price: 1.20 },
        { name: "Πραλίνα σοκολάτα λευκή & Nutella", price: 1.50 },
        { name: "Πραλίνα φράουλα & Nutella", price: 1.60 },
        
        // Σοκολάτες
        { name: "Lacta", price: 2.90 },
        { name: "Milka φράουλα", price: 2.60 },
        { name: "Nestle Crunch λευκή", price: 2.60 },
        { name: "ΙΟΝ αμυγδάλου", price: 2.90 },
        { name: "Σοκολάτα υγείας", price: 2.50 },
        
        // Ξηροί Καρποί
        { name: "Καρύδι", price: 0.80 },
        { name: "Αμύγδαλο", price: 0.80 },
        { name: "Φουντούκι", price: 0.80 },
        { name: "Extra καρύδι", price: 1.60 },
        { name: "Extra αμύγδαλο", price: 1.60 },
        { name: "Extra φουντούκι", price: 1.60 },
        
        // Φρούτα
        { name: "Μπανάνα φρούτο", price: 0.60 },
        { name: "Extra μπανάνα φρούτο", price: 1.20 },
        
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
        { name: "Maltesers", price: 1.40 },
        { name: "Snickers", price: 2.00 },
        { name: "Mars", price: 2.00 },
        { name: "Twix", price: 2.00 },
        { name: "Kit Kat", price: 2.00 },
        { name: "Kinder Bueno", price: 2.00 },
        { name: "Smarties", price: 1.40 },
        { name: "Philadelphia", price: 1.00 },
        { name: "Chips", price: 0.60 },
        { name: "Extra μπισκότο", price: 0.80 },
        { name: "Extra μπισκότο Oreo", price: 1.00 },
        { name: "Extra cookies", price: 1.20 },
        { name: "Extra ινδοκάρυδο", price: 0.80 },
        { name: "Extra τρούφα", price: 0.80 },
        { name: "Extra φυστικοβούτυρο", price: 4.60 },
        { name: "Extra μέλι", price: 2.20 },
        { name: "Extra καραμέλα", price: 3.60 },
        { name: "Extra marshmallows", price: 1.80 },
        { name: "Extra Caprice", price: 1.60 },
        { name: "Extra Maltesers", price: 2.80 },
        { name: "Extra Snickers", price: 4.00 },
        { name: "Extra Mars", price: 4.00 },
        { name: "Extra Twix", price: 4.00 },
        { name: "Extra Kit Kat", price: 4.00 },
        { name: "Extra Kinder Bueno", price: 4.00 },
        { name: "Extra Smarties", price: 2.80 },
        { name: "Extra Philadelphia", price: 2.00 },
        { name: "Extra chips", price: 1.20 }
    ],
    saltyIngredients: [
        // Τυριά
        { name: "Gouda", price: 1.20 },
        { name: "Mozzarella", price: 1.50 },
        { name: "Κασέρι καπνιστό", price: 2.00 },
        { name: "Cheddar", price: 1.50 },
        { name: "Φέτα", price: 1.00 },
        { name: "Μανούρι", price: 1.30 },
        { name: "La Vache qui rit", price: 1.00 },
        { name: "Παρμεζάνα", price: 1.00 },
        { name: "Γραβιέρα", price: 1.40 },
        { name: "Extra gouda", price: 2.50 },
        { name: "Extra mozzarella", price: 3.20 },
        { name: "Extra κασέρι καπνιστό", price: 4.20 },
        { name: "Extra cheddar", price: 3.20 },
        { name: "Extra φέτα", price: 2.20 },
        { name: "Extra μανούρι", price: 2.80 },
        { name: "Extra La Vache qui rit", price: 2.00 },
        { name: "Extra παρμεζάνα", price: 2.20 },
        { name: "Extra γραβιέρα", price: 3.00 },
        
        // Αλλαντικά
        { name: "Πάριζα", price: 0.70 },
        { name: "Γαλοπούλα καπνιστή", price: 0.90 },
        { name: "Μπέικον", price: 0.80 },
        { name: "Σαλάμι μπύρας", price: 0.90 },
        { name: "Μπριζόλα καπνιστή", price: 1.60 },
        { name: "Extra πάριζα", price: 1.40 },
        { name: "Extra γαλοπούλα καπνιστή", price: 1.80 },
        { name: "Extra μπέικον", price: 1.60 },
        { name: "Extra σαλάμι μπύρας", price: 1.80 },
        { name: "Extra μπριζόλα καπνιστή", price: 3.20 },
        
        // Κρεατικά
        { name: "Κοτόπουλο στήθος", price: 2.10 },
        { name: "Κοτομπουκιές", price: 1.90 },
        { name: "Σνίτσελ κοτόπουλο", price: 2.70 },
        { name: "Extra κοτόπουλο στήθος", price: 4.20 },
        { name: "Extra κοτομπουκιές", price: 3.80 },
        { name: "Extra σνίτσελ κοτόπουλο", price: 5.40 },
        
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
        { name: "Extra ντομάτα", price: 0.80 },
        { name: "Extra μαρούλι", price: 0.60 },
        { name: "Extra πιπεριά πράσινη", price: 0.80 },
        { name: "Extra πιπεριά Φλωρίνης", price: 0.80 },
        { name: "Extra αγγούρι", price: 1.00 },
        { name: "Extra μανιτάρια", price: 1.20 },
        { name: "Extra ελιά ροδέλα", price: 0.80 },
        { name: "Extra καλαμπόκι", price: 1.00 },
        { name: "Extra iceberg", price: 1.00 },
        
        // Σάλτσες
        { name: "Μαγιονέζα", price: 0.50 },
        { name: "Ουγγαρέζα", price: 0.60 },
        { name: "Τυροσαλάτα", price: 0.90 },
        { name: "Σως μουστάρδας", price: 0.50 },
        { name: "Tabasco", price: 0.20 },
        { name: "Ketchup", price: 0.30 },
        { name: "Μουστάρδα", price: 0.30 },
        { name: "BBQ", price: 0.60 },
        { name: "Golden BBQ", price: 0.50 },
        { name: "Σως Caesar`s", price: 0.60 },
        { name: "Σως sweet chili", price: 0.40 },
        { name: "Ρώσικη σαλάτα", price: 0.70 },
        { name: "Philadelphia", price: 1.10 },
        { name: "Σως cocktail", price: 0.50 },
        { name: "Γιαούρτι", price: 0.60 },
        { name: "Extra μαγιονέζα", price: 1.00 },
        { name: "Extra ουγγαρέζα", price: 1.20 },
        { name: "Extra τυροσαλάτα", price: 1.80 },
        { name: "Extra σως μουστάρδας", price: 1.00 },
        { name: "Extra σως cocktail", price: 1.00 },
        { name: "Εxtra BBQ", price: 1.20 },
        { name: "Εxtra Golden BBQ", price: 1.00 },
        { name: "Εxtra sweet chili", price: 0.80 },
        { name: "Εxtra Caesar`s", price: 1.20 },
        { name: "Εxtra ketchup", price: 0.60 },
        { name: "Extra μουστάρδα", price: 0.60 },
        { name: "Extra ρώσικη σαλάτα", price: 1.40 },
        { name: "Extra Philadelphia", price: 2.20 },
        { name: "Extra γιαούρτι", price: 1.20 },
        { name: "Extra Tabasco", price: 0.40 },
        
        // Extra
        { name: "Αυγό βραστό", price: 0.70 },
        { name: "Πατάτες τηγανητές", price: 0.60 },
        { name: "Chips", price: 0.70 },
        { name: "Τόνος", price: 2.60 },
        { name: "Μπούκοβο", price: 0.00 },
        { name: "Extra αυγό βραστό", price: 1.40 },
        { name: "Extra πατάτες τηγανητές", price: 1.20 },
        { name: "Extra chips", price: 1.40 }
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
        { name: "Extra gouda", price: 2.40 },
        { name: "Extra mozzarella", price: 3.00 },
        { name: "Extra κασέρι καπνιστό", price: 4.00 },
        { name: "Extra cheddar", price: 3.00 },
        { name: "Extra φέτα", price: 2.00 },
        { name: "Extra μανούρι", price: 2.60 },
        { name: "Extra La Vache qui rit", price: 1.80 },
        { name: "Extra Philadelphia", price: 2.00 },
        { name: "Extra παρμεζάνα", price: 2.00 },
        { name: "Extra γραβιέρα", price: 2.80 },
        
        // Αλλαντικά
        { name: "Πάριζα", price: 0.70 },
        { name: "Γαλοπούλα καπνιστή", price: 0.90 },
        { name: "Μπέικον", price: 0.80 },
        { name: "Σαλάμι μπύρας", price: 0.90 },
        { name: "Μπριζόλα καπνιστή", price: 1.60 },
        { name: "Extra πάριζα", price: 1.40 },
        { name: "Extra γαλοπούλα καπνιστή", price: 1.80 },
        { name: "Extra μπέικον", price: 1.60 },
        { name: "Extra σαλάμι μπύρας", price: 1.80 },
        { name: "Extra μπριζόλα καπνιστή", price: 3.20 },
        
        // Κρεατικά
        { name: "Κοτόπουλο στήθος", price: 2.00 },
        { name: "Κοτομπουκιές", price: 1.80 },
        { name: "Σνίτσελ κοτόπουλο", price: 2.60 },
        { name: "Μπριζόλα καπνιστή", price: 1.50 },
        { name: "Extra κοτόπουλο στήθος", price: 4.00 },
        { name: "Extra κοτομπουκιές", price: 3.60 },
        { name: "Extra σνίτσελ κοτόπουλο", price: 5.20 },
        { name: "Extra μπριζόλα καπνιστή", price: 3.00 },
        
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
        { name: "Extra ντομάτα", price: 0.80 },
        { name: "Extra μαρούλι", price: 0.60 },
        { name: "Extra πιπεριά πράσινη", price: 0.80 },
        { name: "Extra πιπεριά Φλωρίνης", price: 0.80 },
        { name: "Extra αγγούρι", price: 1.00 },
        { name: "Extra μανιτάρια", price: 1.20 },
        { name: "Extra ελιά ροδέλα", price: 0.80 },
        { name: "Extra καλαμπόκι", price: 1.00 },
        { name: "Extra iceberg", price: 1.00 },
        
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
        { name: "Extra μαγιονέζα", price: 0.80 },
        { name: "Extra ουγγαρέζα", price: 1.00 },
        { name: "Extra τυροσαλάτα", price: 1.60 },
        { name: "Extra σως μουστάρδας", price: 0.80 },
        { name: "Extra σως cocktail", price: 0.80 },
        { name: "Εxtra BBQ", price: 1.00 },
        { name: "Εxtra Golden BBQ", price: 0.80 },
        { name: "Εxtra sweet chili", price: 0.60 },
        { name: "Εxtra Caesar`s", price: 1.00 },
        { name: "Εxtra Tabasco", price: 0.20 },
        { name: "Εxtra ketchup", price: 0.40 },
        { name: "Extra μουστάρδα", price: 0.40 },
        { name: "Extra ρώσικη σαλάτα", price: 1.20 },
        { name: "Extra Philadelphia", price: 1.80 },
        { name: "Extra γιαούρτι", price: 1.00 },
        { name: "Extra Tabasco", price: 0.20 },
        
        // Extra
        { name: "Αυγό βραστό", price: 0.60 },
        { name: "Πατάτες τηγανητές", price: 0.50 },
        { name: "Chips", price: 0.60 },
        { name: "Τόνος", price: 2.50 },
        { name: "Μπούκοβο", price: 0.00 },
        { name: "Extra αυγό βραστό", price: 1.20 },
        { name: "Extra πατάτες τηγανητές", price: 1.00 },
        { name: "Extra chips", price: 1.20 },
        { name: "Extra τόνος", price: 5.00 },
        { name: "Extra μπούκοβο", price: 0.00 }
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
        <h2>Επιλέξτε Τύπο Κρέπας</h2>
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
                <h3>Γλυκές Κρέπες</h3>
            </div>
            <div class="selection-card" onclick="showSavoryCrepes()">
                <div class="selection-icon">
                    <img src="images/salty.png" alt="Salty Crepes Icon" class="selection-image">
                </div>
                <h3>Αλμυρές Κρέπες</h3>
            </div>
            <div class="selection-card custom" onclick="showCustomCrepe()">
                <div class="selection-icon">
                    <img src="images/pencil.png" alt="Custom Crepe Icon" class="selection-image">
                </div>
                <h3>Η Κρέπα Μου</h3>
            </div>
        </div>
    `;
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
        <h2>Γλυκές Κρέπες</h2>
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
        <h2>Αλμυρές Κρέπες</h2>
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
    showModal();
}

// Show club sandwiches
function showClubSandwiches() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Club Sandwiches</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = `
        <div class="ingredient-category">
            <div class="category-header-clean" onclick="toggleDipCategory('club-dips')">
                <h4>Συνοδευτικά DIPS</h4>
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
    showModal();
}

// Show toast menu
function showToastMenu() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Κλασικά Τοστ</h2>
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
    showModal();
}

// Show tortilla menu
function showTortillaMenu() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Κλασικές Τορτίγια</h2>
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
        <h2>Σαλάτες</h2>
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
    
    showModal();
}

// Show portions
function showPortions() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Μερίδες</h2>
        <button class="close-btn" id="closeModal">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-add event listener for close button
    document.getElementById('closeModal').addEventListener('click', closeModalHandler);
    
    modalBody.innerHTML = `
        <div class="ingredient-category">
            <div class="category-header-clean" onclick="toggleDipCategory('portions-dips')">
                <h4>Συνοδευτικά DIPS</h4>
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
    showModal();
}

// Show drinks options (takeaway vs dine-in)
function showDrinks() {
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Επιλέξτε Τρόπο Παραλαβής</h2>
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
                <p>Παραλαβή από το κατάστημα</p>
            </div>
            <div class="selection-card" onclick="showDrinksMenu('dineIn')">
                <div class="selection-icon">
                    <i class="fas fa-utensils"></i>
                </div>
                <h3>Κατανάλωση εντός</h3>
                <p>Κάθισμα στο κατάστημα</p>
            </div>
        </div>
    `;
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
        <h2>${title}</h2>
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
                    <h4>Αναψυκτικά</h4>
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
                    <h4>Μπύρες</h4>
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
                    <h4>Κρασιά - Αποστάγματα</h4>
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
                    <h4>Χυμοί</h4>
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
    const serviceType = priceType === 'takeaway' ? 'Take Away' : 'Κατανάλωση εντός';
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

// Add dip to order
function addDipToOrder(name, price, description) {
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

// Custom crepe builder with new design
function showCustomCrepe() {
    currentCustomOrder = { base: null, type: null, ingredients: [], total: 0 };
    
    // Update modal header with back button
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <button class="back-btn" onclick="showCrepeOptions()">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h2>Η Κρέπα Μου</h2>
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
                    <h3>Φύλλο κρέπας</h3>
                </div>
                <div class="step-content">
                    <div class="base-card" data-base-name="Κλασική Βάση Κρέπας" data-base-price="1.50" data-base-type="crepe">
                        <div class="base-info">
                            <h4>Κλασική Βάση Κρέπας</h4>
                            <div class="base-price">€1.50</div>
                        </div>
                        <button class="base-btn">Διάλεξε βάση</button>
                    </div>
                </div>
            </div>

            <!-- Step 2: Type Selection -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h3>Διάλεξε τύπο</h3>
                </div>
                <div class="step-content">
                    <div class="type-buttons">
                        <button class="type-btn sweet-btn active" onclick="selectType('sweet')">
                            Γλυκιά
                        </button>
                        <button class="type-btn salty-btn" onclick="selectType('salty')">
                            Αλμυρή
                        </button>
                    </div>
                </div>
            </div>

            <!-- Step 3: Ingredients -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <h3>Πρόσθεσε υλικά</h3>
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
                    <h3>Σύνολο</h3>
                    <div class="total-price">€<span id="customTotal">0.00</span></div>
                </div>
                <button class="add-to-order-btn" onclick="addCustomToOrder('crepe')">
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
    showModal();
}

// Custom toast builder with new design
function showCustomToast() {
    currentCustomOrder = { base: null, type: 'toast', ingredients: [], total: 0 };
    
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Το Τοστ Μου</h2>
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
                    <h3>Ψωμί τοστ</h3>
                </div>
                <div class="step-content">
                    <div class="base-card" data-base-name="Ψωμί Τοστ" data-base-price="1.50" data-base-type="toast">
                        <div class="base-info">
                            <h4>Ψωμί Τοστ</h4>
                            <div class="base-price">€1.50</div>
                        </div>
                        <button class="base-btn">Διάλεξε βάση</button>
                    </div>
                </div>
            </div>

            <!-- Step 2: Ingredients -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h3>Πρόσθεσε υλικά</h3>
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
                    <h3>Σύνολο</h3>
                    <div class="total-price">€<span id="customTotal">0.00</span></div>
                </div>
                <button class="add-to-order-btn" onclick="addCustomToOrder('toast')">
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
    showModal();
}

// Custom tortilla builder with new design
function showCustomTortilla() {
    currentCustomOrder = { base: null, type: 'tortilla', ingredients: [], total: 0 };
    
    // Update modal header
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Η Τορτίγια Μου</h2>
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
                    <h3>Τορτίγια</h3>
                </div>
                <div class="step-content">
                    <div class="base-card" data-base-name="Τορτίγια" data-base-price="1.50" data-base-type="tortilla">
                        <div class="base-info">
                            <h4>Τορτίγια</h4>
                            <div class="base-price">€1.50</div>
                        </div>
                        <button class="base-btn">Διάλεξε βάση</button>
                    </div>
                </div>
            </div>

            <!-- Step 2: Ingredients -->
            <div class="builder-step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h3>Πρόσθεσε υλικά</h3>
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
                    <h3>Σύνολο</h3>
                    <div class="total-price">€<span id="customTotal">0.00</span></div>
                </div>
                <button class="add-to-order-btn" onclick="addCustomToOrder('tortilla')">
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
    
    // Update UI - remove selected class from all base cards
    document.querySelectorAll('.base-card').forEach(card => {
        card.classList.remove('selected');
        card.classList.remove('base-required'); // Remove error highlighting
    });
    
    // Find and select the specific base card that was clicked
    const baseCards = document.querySelectorAll('.base-card');
    baseCards.forEach(card => {
        const cardName = card.querySelector('h4').textContent;
        if (cardName === baseName) {
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
            'Extra αγγούρι', 'Extra μανιτάρια', 'Extra ελιά ροδέλα', 'Extra καλαμπόκι', 'Extra iceberg'
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
            'Πραλίνα σοκολάτα λευκή & πραλίνα φράουλα', 'Πραλίνα σοκολάτα λευκή & Nutella', 'Πραλίνα φράουλα & Nutella'
        ],
        'Σοκολάτες': [
            'Lacta', 'Milka φράουλα', 'Nestle Crunch λευκή', 'ΙΟΝ αμυγδάλου', 'Σοκολάτα υγείας'
        ],
        'Ξηροί Καρποί': [
            'Καρύδι', 'Αμύγδαλο', 'Φουντούκι', 'Extra καρύδι', 'Extra αμύγδαλο', 'Extra φουντούκι'
        ],
        'Φρούτα': [
            'Μπανάνα φρούτο', 'Extra μπανάνα φρούτο'
        ],
        'Extra': [
            'Μπισκότο', 'Μπισκότο Oreo', 'Cookies', 'Ινδοκάρυδο', 'Τρούφα', 'Φυστικοβούτυρο',
            'Μέλι', 'Καραμέλα', 'Marshmallows', 'Caprice', 'Maltesers', 'Snickers', 'Mars', 
            'Twix', 'Kit Kat', 'Kinder Bueno', 'Smarties', 'Philadelphia', 'Chips',
            'Extra μπισκότο', 'Extra μπισκότο Oreo', 'Extra cookies', 'Extra ινδοκάρυδο', 'Extra τρούφα',
            'Extra φυστικοβούτυρο', 'Extra μέλι', 'Extra καραμέλα', 'Extra marshmallows', 'Extra Caprice',
            'Extra Maltesers', 'Extra Snickers', 'Extra Mars', 'Extra Twix', 'Extra Kit Kat',
            'Extra Kinder Bueno', 'Extra Smarties', 'Extra Philadelphia', 'Extra chips'
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
        let foundCategory = 'Άλλα';
        
        // Find exact match for ingredient name
        for (const [category, items] of Object.entries(categoryMapping)) {
            if (items.includes(ingredient.name)) {
                foundCategory = category;
                break;
            }
        }
        
        if (!categories[foundCategory]) {
            categories[foundCategory] = [];
        }
        categories[foundCategory].push(ingredient);
    });
    
    return categories;
}

// Toggle category dropdown
function toggleCategory(categoryName) {
    const categoryId = `category-${categoryName.replace(/\s+/g, '-')}`;
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

// Update ingredients list based on type with categories
function updateIngredientsList() {
    const ingredientsList = document.getElementById('ingredientsList');
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
    
    const categorizedIngredients = categorizeIngredientsByComments(currentIngredients);
    
    ingredientsList.innerHTML = Object.entries(categorizedIngredients).map(([category, ingredients]) => `
        <div class="ingredient-category">
            <div class="category-header" onclick="toggleCategory('${category}')">
                <h4>${category}</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-${category.replace(/\s+/g, '-')}">
                ${ingredients.map(ingredient => `
                    <div class="ingredient-item-new">
                        <div class="ingredient-info">
                            <span class="ingredient-name">${ingredient.name}</span>
                            <span class="ingredient-price">€${ingredient.price.toFixed(2)}</span>
                        </div>
                        <button class="add-ingredient-btn" onclick="toggleIngredient('${ingredient.name}', ${ingredient.price})">
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
    const currentIngredients = ingredients.toastIngredients;
    
    const categorizedIngredients = categorizeIngredientsByComments(currentIngredients);
    
    ingredientsList.innerHTML = Object.entries(categorizedIngredients).map(([category, ingredients]) => `
        <div class="ingredient-category">
            <div class="category-header" onclick="toggleCategory('${category}')">
                <h4>${category}</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-${category.replace(/\s+/g, '-')}">
                ${ingredients.map(ingredient => `
                    <div class="ingredient-item-new">
                        <div class="ingredient-info">
                            <span class="ingredient-name">${ingredient.name}</span>
                            <span class="ingredient-price">€${ingredient.price.toFixed(2)}</span>
                        </div>
                        <button class="add-ingredient-btn" onclick="toggleIngredient('${ingredient.name}', ${ingredient.price})">
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
    const currentIngredients = ingredients.tortillaIngredients;
    
    const categorizedIngredients = categorizeIngredientsByComments(currentIngredients);
    
    ingredientsList.innerHTML = Object.entries(categorizedIngredients).map(([category, ingredients]) => `
        <div class="ingredient-category">
            <div class="category-header" onclick="toggleCategory('${category}')">
                <h4>${category}</h4>
                <i class="fas fa-chevron-down category-icon"></i>
            </div>
            <div class="category-content" id="category-${category.replace(/\s+/g, '-')}">
                ${ingredients.map(ingredient => `
                    <div class="ingredient-item-new">
                        <div class="ingredient-info">
                            <span class="ingredient-name">${ingredient.name}</span>
                            <span class="ingredient-price">€${ingredient.price.toFixed(2)}</span>
                        </div>
                        <button class="add-ingredient-btn" onclick="toggleIngredient('${ingredient.name}', ${ingredient.price})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Toggle ingredient selection
function toggleIngredient(ingredientName, ingredientPrice) {
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
        btn.innerHTML = '<i class="fas fa-plus"></i>';
        btn.classList.remove('added');
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
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.classList.add('added');
    }
    
    updateCustomTotal();
}

// Update custom total display
function updateCustomTotal() {
    const totalElement = document.getElementById('customTotal');
    if (totalElement) {
        totalElement.textContent = currentCustomOrder.total.toFixed(2);
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
            addButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> Επιλέξτε Βάση Πρώτα';
        } else {
            addButton.classList.remove('base-not-selected');
            addButton.innerHTML = 'Προσθήκη στην Παραγγελία';
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
        'crepe': 'Η Κρέπα Μου',
        'toast': 'Το Τοστ Μου',
        'tortilla': 'Η Τορτίγια Μου'
    };
    
    const description = currentCustomOrder.ingredients.length > 0 ? 
        `Με ${currentCustomOrder.ingredients.map(ing => ing.name).join(', ')}` : 
        'Βασική συνταγή';
    
    addToOrder(typeNames[type], currentCustomOrder.total, description);
}

// Show base selection error with visual feedback
function showBaseSelectionError(type) {
    const typeNames = {
        'crepe': 'κρέπας',
        'toast': 'τοστ', 
        'tortilla': 'τορτίγιας'
    };
    
    // Create custom error modal content
    const errorModal = document.createElement('div');
    errorModal.className = 'base-error-modal';
    errorModal.innerHTML = `
        <div class="base-error-content">
            <div class="error-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Επιλογή Βάσης Απαιτείται</h3>
            <p>Παρακαλώ επιλέξτε τη βάση ${typeNames[type]} πριν προσθέσετε στην παραγγελία.</p>
            <button class="error-ok-btn" onclick="closeBaseError()">
                Εντάξει
            </button>
        </div>
    `;
    
    document.body.appendChild(errorModal);
    
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
    currentOrder.push({
        name: name,
        price: price,
        description: description
    });
    
    closeModalHandler();
    showOrderSummary();
}

// Add item to order without closing modal
function addToOrderWithoutClose(name, price, description) {
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
        alert('Η παραγγελία σας είναι άδεια!');
        return;
    }
    
    orderSummary.innerHTML = currentOrder.map((item, index) => `
        <div class="order-item">
            <div class="order-item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div class="order-item-actions">
                <div class="order-item-price">€${item.price.toFixed(2)}</div>
                <button class="remove-item-btn" onclick="removeFromOrder(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = `€${total.toFixed(2)}`;
    
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
function clearOrder() {
    try {
        currentOrder = [];
        updateOrderDisplay();
        closeOrderModalHandler();
    } catch (error) {
        showError('Σφάλμα κατά τον καθαρισμό της παραγγελίας');
    }
}

function confirmOrder() {
    try {
        if (currentOrder.length === 0) {
            showError('Η παραγγελία σας είναι άδεια');
            return;
        }
        
        const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
        const orderText = currentOrder.map(item => `${item.name} - €${item.price.toFixed(2)}`).join('\n');
        const message = `Νέα Παραγγελία:\n\n${orderText}\n\nΣύνολο: €${total.toFixed(2)}`;
        
        // Open phone dialer with pre-filled message
        const phoneNumber = 'tel:+306912345678'; // Replace with actual phone number
        window.open(phoneNumber);
        
        // You could also use WhatsApp or other messaging apps
        // const whatsappUrl = `https://wa.me/306912345678?text=${encodeURIComponent(message)}`;
        // window.open(whatsappUrl);
        
    } catch (error) {
        showError('Σφάλμα κατά την επιβεβαίωση της παραγγελίας');
    }
} 
