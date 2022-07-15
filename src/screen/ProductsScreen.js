import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  ToastAndroid,
} from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import { getProducts, getProduct } from "../data/ProductsData";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductsScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  function showToast() {
    ToastAndroid.showWithGravityAndOffset(
      "Added To Cart !!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  const renderData = (item) => {
    // console.log(item)
    return (
      <ProductCard
        item={item}
        onPress={() => {
          dispatch(addToCart(item)), showToast();
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.orange} />
      <Header
        title={"PRODUCTS"}
        onPressMenu={() => console.log("Menu")}
        onPressCart={() => {
          [navigation.navigate("CartScreen"), console.log("CART")];
        }}
      />
      <View style={styles.content}>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.productID}`}
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
    color: COLORS.primary,
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
