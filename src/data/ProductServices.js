const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProX Headset',
        price: "320",
        image: require("../assets/images/categories/SpiceMasala.jpeg"),
        description: 'A headset combines a headphone with microphone'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: "600",
        image: require("../assets/images/categories/Babycare.jpg"),
        description: 'A model car, or toy car'
    },
    {
        id: 102,
        name: 'Cupcake',
        price: "205",
        image: require("../assets/images/categories/Chocoice.jpeg"),
        description: 'Cake or patty cake.'
    },
    {
        id: 103,
        name: 'Cupcake',
        price: "205",
        image: require("../assets/images/categories/Cocacola.jpg"),
        description: 'Cake or patty cake.'
    },
    {
        id: 104,
        name: 'Cupcake',
        price: "205",
        image: require("../assets/images/categories/Fortune.jpg"),
        description: 'Cake or patty cake.'
    },
    
];


// const Products = [
//   {
//     key: 1,
//     name: "Coca Cola",
//     img: require("../assets/images/categories/Beverages.png"),
//     desc: "500 ml",
//     price: "Rs " + "500",
//   },
//   {
//     key: 2,
//     name: "Maaza",
//     img: require("../assets/images/categories/RicePulse.png"),
//     desc: "500 ml",
//     price: "Rs " + "200",
//   },
//   {
//     key: 3,
//     name: "Sprite",
//     img: require("../assets/images/categories/Dryfruits.jpg"),
//     desc: "500 ml",
//     price: "Rs " + "250",
//   },
//   {
//     key: 4,
//     name: "Limca",
//     img: require("../assets/images/categories/House.jpeg"),
//     desc: "500 ml",
//     price: "Rs " + "310",
//   },
//   {
//     key: 5,
//     name: "Pepsi",
//     img: require("../assets/images/categories/Skincare.jpg"),
//     desc: "500 ml",
//     price: "Rs " + "310",
//   },
//   {
//     key: 6,
//     name: "Mountain Dew",
//     img: require("../assets/images/categories/Snacks.jpg"),
//     desc: "500 ml",
//     price: "Rs " + "301",
//   },
//   {
//     key: 7,
//     name: "Frooti",
//     img: require("../assets/images/categories/OilGhee.jpeg"),
//     desc: "500 ml",
//     price: "Rs " + "480",
//   },
//   {
//     key: 8,
//     name: "Fanta",
//     img: require("../assets/images/categories/SpiceMasala.jpeg"),
//     desc: "500 ml",
//     price: "Rs " + "620",
//   },
//   {
//     key: 9,
//     name: "Mirinda",
//     img: require("../assets/images/categories/Babycare.jpg"),
//     desc: "500 ml",
//     price: "Rs " + "840",
//   },
//   {
//     key: 10,
//     name: "Monster",
//     img: require("../assets/images/categories/Chocoice.jpeg"),
//     desc: "500 ml",
//     price: "Rs " + "120",
//   },
// ];


export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}