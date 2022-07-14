import React from 'react'

export function ProductsData() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("getProduct", {
        params: {
          categoryID: "C-1657253529229",
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.success) setProduct(res.data.productItems);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  // return (
  //   <div>ProductsData</div>
  // )

  return (
    <div>
      
    </div>
  )
}

const PRODUCTS = [
  {
    id: 100,
    name: "Spices",
    price: "320",
    image: require("../assets/images/categories/SpiceMasala.jpeg"),
    description: "A headset combines a headphone with microphone",
  },
  {
    id: 101,
    name: "Skin Care Products",
    price: "600",
    image: require("../assets/images/categories/Babycare.jpg"),
    description: "A model car, or toy car",
  },
  {
    id: 102,
    name: "Oreo IceCream",
    price: "205",
    image: require("../assets/images/categories/Chocoice.jpeg"),
    description: "Cake or patty cake.",
  },
  {
    id: 103,
    name: "CocaCola",
    price: "205",
    image: require("../assets/images/categories/Cocacola.jpg"),
    description: "Cake or patty cake.",
  },
  {
    id: 104,
    name: "Fortune",
    price: "205",
    image: require("../assets/images/categories/Fortune.jpg"),
    description: "Cake or patty cake.",
  },
  {
    id: 1,
    name: "Coca Cola",
    image: require("../assets/images/categories/Beverages.png"),
    description: "500 ml",
    price: "500",
  },
  {
    id: 2,
    name: "Maaza",
    image: require("../assets/images/categories/RicePulse.png"),
    description: "500 ml",
    price: "200",
  },
  {
    id: 3,
    name: "Sprite",
    image: require("../assets/images/categories/Dryfruits.jpg"),
    description: "500 ml",
    price: "250",
  },
  {
    id: 4,
    name: "Limca",
    image: require("../assets/images/categories/House.jpeg"),
    description: "500 ml",
    price: "310",
  },
  {
    id: 5,
    name: "Pepsi",
    image: require("../assets/images/categories/Skincare.jpg"),
    description: "500 ml",
    price: "310",
  },
  {
    id: 6,
    name: "Mountain Dew",
    image: require("../assets/images/categories/Snacks.jpg"),
    description: "500 ml",
    price: "301",
  },
  {
    id: 7,
    name: "Frooti",
    image: require("../assets/images/categories/OilGhee.jpeg"),
    description: "500 ml",
    price: "480",
  },
  {
    id: 8,
    name: "Fanta",
    image: require("../assets/images/categories/SpiceMasala.jpeg"),
    description: "500 ml",
    price: "620",
  },
  {
    id: 9,
    name: "Mirinda",
    image: require("../assets/images/categories/Babycare.jpg"),
    description: "500 ml",
    price: "840",
  },
  {
    id: 10,
    name: "Monster",
    image: require("../assets/images/categories/Chocoice.jpeg"),
    description: "500 ml",
    price: "120",
  },
];

export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
