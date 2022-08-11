const ADDRESS = [
  {
    // id: 1,
    name: "Syed Maaz",
    mobile: 8540972044,
    pinCode: 823001,
    address1: "A/18, Road No-5",
    address2: "White House Compound",
    landmark: "Opposite MED-CARE",
    city: "Gaya",
    state: "Bihar",
    selected: true
  },
  {
    // id: 2,
    name: "Amrit Shukla",
    mobile: 9876543210,
    pinCode: 800004,
    address1: "Shukla House, Sita Ram Path, Lokhandwala",
    address2: "Patel Nagar",
    landmark: "Opposite Super Market",
    city: "Patna",
    state: "Bihar",
    selected: false
  },
  {
    // id: 3,
    name: "Shashwat Shrivasta",
    mobile: 912345670,
    pinCode: 800024,
    address1: "Sutta Gali",
    address2: "G.B Road",
    landmark: "Opposite Super Market",
    city: "Chattarpur",
    state: "Madhya Pradesh",
    selected: false
  },
];

export function setAddresses(props) {
  // console.log(props)
  //   props.map((item) => {
  //     ADDRESS.push({
  //     //   categoryID: item.categoryID,
  //     //   productID: item.productID,
  //     //   productName: item.productName,
  //     //   productDescription: item.productDescription,
  //     //   productMRP: item.productMRP,
  //     //   productPrice: item.productPrice,
  //     //   productImage: item.productImage,
  //     });
  //   });
  // console.log(ADDRESS)
}
export function getAddresses() {
  return ADDRESS;
}

export function getAddress(id) {
  return ADDRESS.find((product) => product.id == id);
}
