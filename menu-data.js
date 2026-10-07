const MENU_CURRENCY = "MKD";

const MENU = [
    {
        id: "coffee",
        title: "cat.coffeeTea",
        items: [
            { text: "Morning Boost", label: "cat.special", desc: "item.morningBoostDesc", photo: "menu_images/morning_boost.jpeg", price: "200", poster: true },
            { name: "item.espresso",        photo: "menu_images/espresso.jpeg",         price: "90" },
            { name: "item.doubleEspresso",  photo: "menu_images/double_espresso.jpeg",  price: "150" },
            { name: "item.icedEspresso",    photo: "menu_images/iced_espresso.webp",    price: "100" },
            { name: "item.americano",       photo: "menu_images/americano.jpeg",        price: "90" },
            { name: "item.icedAmericano",   photo: "menu_images/iced_americano.jpeg",   price: "90" },
            { name: "item.macchiatoSmall",  photo: "menu_images/small_macchiato.jpeg",  price: "100" },
            { name: "item.macchiatoLarge",  photo: "menu_images/big_macchiato.jpeg",    price: "110" },
            { name: "item.macchiatoCold",   photo: "menu_images/iced_macchiato.jpeg",   price: "110" },
            { name: "item.cappuccino",      photo: "menu_images/cappuccino.jpeg",       price: "110" },
            { name: "item.fredoCappuccino", photo: "menu_images/fredo_cappuccino.jpeg", price: "200" },
            { name: "item.fredoEspresso",   photo: "menu_images/fredo_espresso.jpeg",   price: "160" },
            { name: "item.latte",           photo: "menu_images/cafe_latte.jpeg",       price: "140" },
            { name: "item.icedLatte",       photo: "menu_images/iced_latte.jpeg",       price: "140" },
            { name: "item.nescafe",         photo: "menu_images/nescafe.jpeg",          price: "130" },
            { name: "item.nescafeCold",     photo: "menu_images/iced_nescafe.jpeg",     price: "130" },
            { name: "item.espressoTonic",   photo: "menu_images/espresso_tonic.jpeg",   price: "200" },
            { name: "item.turkishCoffee",   photo: "menu_images/turkish_coffee.jpeg",   price: "100" },
            { name: "item.affogato",        photo: "menu_images/affogato.jpeg",         price: "160" },
            { name: "item.iceCreamCoffee",  photo: "menu_images/ice_cream_coffee.jpeg", price: "160" },
            { note: "item.extraFlavouring", price: "20" },
            { heading: "cat.tea" },
            { name: "item.turkishTea",  photo: "menu_images/turkish_tea.webp", price: "100" },
            { name: "item.herbalTea",   photo: "menu_images/herbal_tea.jpg",  price: "100" }
        ]
    },
    {
        id: "soft",
        title: "cat.soft",
        items: [
            { name: "item.water",                  photo: "menu_images/water.webp",              price: "90" },
            { text: "Coca Cola",              photo: "menu_images/cocacola.jpg",            price: "130" },
            { text: "Fanta",                       photo: "menu_images/fanta.jpeg",              price: "130" },
            { text: "Sprite",                 photo: "menu_images/sprite.jpeg",             price: "130" },
            { text: "Schweppes Bitter Lemon", photo: "menu_images/schweppes.jpeg",          price: "130" },
            { text: "Schweppes Tonic",        photo: "menu_images/schweppes_tonic.jpeg",    price: "130" },
            { text: "Schweppes Tangerine",         photo: "menu_images/schweppes_tangerine.jpeg", price: "130" },
            { name: "item.fruitJuices",            photo: "menu_images/fruit_juices.jpeg",       price: "120" },
            { name: "item.orangeJuice",            photo: "menu_images/orange_juice.webp",       price: "180" },
            { name: "item.lemonOrangeJuice",       photo: "menu_images/lemon_orange_drink.jpg",  price: "200" },
            { text: "Red Bull",                    photo: "menu_images/redbull.jpeg",            price: "200" },
            { name: "item.sparklingWater",         photo: "menu_images/knjaz.jpg",               price: "90" }
        ]
    },
    {
        id: "icecream",
        title: "cat.icecream",
        items: [
            { name: "item.iceVanilla",       photo: "menu_images/vanilla_ice.jpeg", price: "160" },
            { name: "item.iceChocolate",     photo: "menu_images/choco_ice.jpeg",   price: "160" },
            { name: "item.iceStrawberry",    photo: "menu_images/strawb_ice.jpeg",  price: "160" },
            { name: "item.iceStracciatella", photo: "menu_images/stracc_ice.jpeg",  price: "160" },
            { name: "item.iceFig",           photo: "menu_images/fig_ice.jpeg",     price: "160" }
        ]
    },
    {
        id: "cocktails",
        title: "cat.cocktails",
        items: [
            { text: "Mojito",  photo: "menu_images/mojito.jpeg",              price: "220" },
            { name: "item.lemonMojito",         photo: "menu_images/lemon_mojito.jpeg",        price: "220" },
            { name: "item.strawberryMojito",    photo: "menu_images/strawb_mojito.jpeg",       price: "220" },
            { text: "Pina Colada",              photo: "menu_images/pina_colada.jpeg",         price: "220" },
            { text: "Sex On The Beach",         photo: "menu_images/sex_on_beach.jpeg",        price: "220" },
            { text: "Blue Lagoon",              photo: "menu_images/blue_lagoon.jpeg",         price: "220" },
            { name: "item.mangoCocktail",       photo: "menu_images/mango.jpeg",               price: "220" },
            { name: "item.forestFruitCocktail", photo: "menu_images/forres_cocktail.jpeg",     price: "200" },
            { name: "item.strawberryCocktail",  photo: "menu_images/strawb_cocktail.jpeg",     price: "200" },
            { name: "item.redbullCocktail",     photo: "menu_images/redbull_cocktail.jpeg",    price: "300" },
            { name: "item.studiocafeCocktail",  photo: "menu_images/studiocafe_cocktail.jpeg", price: "250" }
        ]
    }
];
