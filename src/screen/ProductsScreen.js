import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ToastAndroid,
} from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import { getProducts } from "../data/ProductsData";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";
import MessageCard from "../components/MessageCard/MessageCard";

const ProductsScreen = ({ navigation, route }) => {
  // console.log(route.params)
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  function showToast() {
    ToastAndroid.showWithGravityAndOffset(
      "Added To Cart !!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  const renderData = (item) => {
    console.log(item);
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
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={route.params.toUpperCase()}
        name1={"keyboard-backspace"}
        name2={"cart-outline"}
        onPress1={() => navigation.goBack()}
        onPress2={() => {
          [navigation.navigate("CartScreen"), console.log("CART")];
        }}
      />
      {products.length == 0 ? (
        <MessageCard message={"Products Not Available"} />
      ) : (
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
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
});

export default ProductsScreen;
