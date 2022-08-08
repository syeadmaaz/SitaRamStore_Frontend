var PRODUCTS = [];

export function setProducts(props) {
  // console.log(props)
  PRODUCTS = [];
  props.map((item) => {
    PRODUCTS.push({
      categoryID: item.categoryID,
      productID: item.productID,
      productName: item.productName,
      productDescription: item.productDescription,
      productMRP: item.productMRP,
      productPrice: item.productPrice,
      productImage: item.productImage,
    });
  });
  // console.log(PRODUCTS)
}
export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
