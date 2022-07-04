import React, { useState, useEffect, useContext } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getProducts, getProduct } from "../data/ProductServices";
import { CartContext } from "../components/CartContext/CartContext";


const ProductsScreen = ({ route }) => {
  // const { productId } = route.params;
  const [productID, setProductID] = useState({});
  const [product, setProduct] = useState([]);

  // const { addItemToCart } = useContext(CartContext);

  // useEffect(() => {
  //   setProduct(getProduct(productID));
  // });

  function onAddToCart(prod_id) {
    console.log(prod_id);
    // setProductID(prod_id)
    // addItemToCart(prod_id);
    setProduct(getProduct(prod_id));
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  const renderData = (item) => {
    return (
      <View style={styles.categoriesContainer}>
        <View style={styles.cardStyle}>
          <Image source={item.image} style={styles.imgStyling} />
          <View style={styles.cardRight}>
            <View style={styles.Text}>
              <Text style={styles.prodTitle}>{item.name}</Text>
              <Text style={styles.prodDesc}>{item.description}</Text>
              <Text style={styles.price}>Rs. {item.price}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonView}
              onPress={() => onAddToCart(item.id)}
            >
              <Text style={styles.btnText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.orange} />
      <Header />
      <View style={styles.content}>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          // keyExtractor={(item) => `${item.id}`}
          scrollEnabled={true}
          ListHeaderComponent={<SearchBar />}
          // ListFooterComponent={<Footer />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  categoriesContainer: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 4.4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    // backgroundColor: COLORS.orange,
  },
  cardStyle: {
    flex: 1,
    flexDirection: "row",
    width: WIDTH.productCardWidth,
    height: HEIGHT.productCardHeight,
    alignItems: "center",
    borderRadius: 20,
    elevation: 10,
    marginVertical: "1%",
    overflow: "hidden",
    backgroundColor: COLORS.white,
  },
  imgStyling: {
    width: "35%",
    height: "85%",
    borderRadius: 20,
    margin: "3%",
    resizeMode: "contain",
    // backgroundColor: "orange",
  },

  cardRight: {
    flexDirection: "column",
    width: "55%",
    height: "85%",
    padding: "2%",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "green",
  },
  Text: {
    height: "63%",
    width: "100%",
    // backgroundColor: "red",
  },
  prodTitle: {
    height: "32%",
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
    // backgroundColor:"orange"
  },
  prodDesc: {
    height: "40%",
    fontSize: 11,
    justifyContent: "center",
    color: COLORS.grey,
    // backgroundColor:"green"
  },
  price: {
    height: "30%",
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.primary
    // backgroundColor:"pink"
  },
  buttonView: {
    width: "100%",
    height: "35%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange,
  },
  btnText: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default ProductsScreen;
