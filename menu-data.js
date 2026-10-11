const MENU_CURRENCY = "MKD";
const MENU_PHOTO_DIR = "menu_images/";

const MENU = [
    {
        id: "coffee",
        title: "cat.coffeeTea",
        items: [
            { text: "Morning Boost", label: "cat.special", desc: "item.morningBoostDesc", photo: "morning_boost.jpeg", price: "200", poster: true },
            { name: "item.espresso",        photo: "espresso.jpeg",         price: "90" },
            { name: "item.doubleEspresso",  photo: "double_espresso.jpeg",  price: "150" },
            { name: "item.icedEspresso",    photo: "iced_espresso.webp",    price: "100" },
            { name: "item.americano",       photo: "americano.jpeg",        price: "90" },
            { name: "item.icedAmericano",   photo: "iced_americano.jpeg",   price: "90" },
            { name: "item.macchiatoSmall",  photo: "small_macchiato.jpeg",  price: "100" },
            { name: "item.macchiatoLarge",  photo: "big_macchiato.jpeg",    price: "110" },
            { name: "item.macchiatoCold",   photo: "iced_macchiato.jpeg",   price: "110" },
            { name: "item.cappuccino",      photo: "cappuccino.jpeg",       price: "110" },
            { name: "item.fredoCappuccino", photo: "fredo_cappuccino.jpeg", price: "200" },
            { name: "item.fredoEspresso",   photo: "fredo_espresso.jpeg",   price: "160" },
            { name: "item.latte",           photo: "cafe_latte.jpeg",       price: "140" },
            { name: "item.icedLatte",       photo: "iced_latte.jpeg",       price: "140" },
            { name: "item.nescafe",         photo: "nescafe.jpeg",          price: "130" },
            { name: "item.nescafeCold",     photo: "iced_nescafe.jpeg",     price: "130" },
            { name: "item.espressoTonic",   photo: "espresso_tonic.jpeg",   price: "200" },
            { name: "item.turkishCoffee",   photo: "turkish_coffee.jpeg",   price: "100" },
            { name: "item.affogato",        photo: "affogato.jpeg",         price: "160" },
            { name: "item.iceCreamCoffee",  photo: "ice_cream_coffee.jpeg", price: "160" },
            { note: "item.extraFlavouring", price: "20" },
            { heading: "cat.tea" },
            { name: "item.turkishTea",  photo: "turkish_tea.webp", price: "100" },
            { name: "item.herbalTea",   photo: "herbal_tea.jpg",  price: "100" }
        ]
    },
    {
        id: "soft",
        title: "cat.soft",
        items: [
            { name: "item.water",                  photo: "water.webp",              price: "90" },
            { text: "Coca Cola",              photo: "cocacola.jpg",            price: "130" },
            { text: "Fanta",                       photo: "fanta.jpeg",              price: "130" },
            { text: "Sprite",                 photo: "sprite.jpeg",             price: "130" },
            { text: "Schweppes Bitter Lemon", photo: "schweppes.jpeg",          price: "130" },
            { text: "Schweppes Tonic",        photo: "schweppes_tonic.jpeg",    price: "130" },
            { text: "Schweppes Tangerine",         photo: "schweppes_tangerine.jpeg", price: "130" },
            { name: "item.fruitJuices",            photo: "fruit_juices.jpeg",       price: "120" },
            { name: "item.orangeJuice",            photo: "orange_juice.webp",       price: "180" },
            { name: "item.lemonOrangeJuice",       photo: "lemon_orange_drink.jpg",  price: "200" },
            { text: "Red Bull",                    photo: "redbull.jpeg",            price: "200" },
            { name: "item.sparklingWater",         photo: "knjaz.jpg",               price: "90" }
        ]
    },
    {
        id: "icecream",
        title: "cat.icecream",
        items: [
            { name: "item.iceVanilla",       photo: "vanilla_ice.jpeg", price: "160" },
            { name: "item.iceChocolate",     photo: "choco_ice.jpeg",   price: "160" },
            { name: "item.iceStrawberry",    photo: "strawb_ice.jpeg",  price: "160" },
            { name: "item.iceStracciatella", photo: "stracc_ice.jpeg",  price: "160" },
            { name: "item.iceFig",           photo: "fig_ice.jpeg",     price: "160" }
        ]
    },
    {
        id: "cocktails",
        title: "cat.cocktails",
        items: [
            { text: "Mojito",  photo: "mojito.jpeg",              price: "220" },
            { name: "item.lemonMojito",         photo: "lemon_mojito.jpeg",        price: "220" },
            { name: "item.strawberryMojito",    photo: "strawb_mojito.jpeg",       price: "220" },
            { text: "Pina Colada",              photo: "pina_colada.jpeg",         price: "220" },
            { text: "Sex On The Beach",         photo: "sex_on_beach.jpeg",        price: "220" },
            { text: "Blue Lagoon",              photo: "blue_lagoon.jpeg",         price: "220" },
            { name: "item.mangoCocktail",       photo: "mango.jpeg",               price: "220" },
            { name: "item.forestFruitCocktail", photo: "forres_cocktail.jpeg",     price: "200" },
            { name: "item.strawberryCocktail",  photo: "strawb_cocktail.jpeg",     price: "200" },
            { name: "item.redbullCocktail",     photo: "redbull_cocktail.jpeg",    price: "300" },
            { name: "item.studiocafeCocktail",  photo: "studiocafe_cocktail.jpeg", price: "250" }
        ]
    }
];
