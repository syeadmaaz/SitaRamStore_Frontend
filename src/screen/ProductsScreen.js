import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import axios from "../../axios.automate";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";
import MessageCard from "../components/MessageCard/MessageCard";
import {
  fetchProduct,
  clearProduct,
} from "../redux/features/products/productSlice";

const ProductsScreen = ({ navigation, route }) => {
  const categoryID = route.params.categoryID;
  const categoryName = route.params.categoryName;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    dispatch(clearProduct());
    axios
      .get("getProduct", {
        params: {
          categoryID: categoryID,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setLoading(false);
          // console.log(res.data.productItems);
          console.log("Fetching PRODUCTS");
          dispatch(fetchProduct(res.data.productItems));
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
      });
  }, []);

  function handleRefresh() {
    setLoading(true);
    dispatch(clearProduct());
    axios
      .get("getProduct1", {
        params: {
          categoryID: categoryID,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setLoading(false);
          // console.log(res.data.productItems);
          console.log("Fetching PRODUCTS");
          dispatch(fetchProduct(res.data.productItems));
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
      });
  }

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
        title={categoryName.toUpperCase()}
        name1={"keyboard-backspace"}
        name2={"cart-outline"}
        onPress1={() => navigation.goBack()}
        onPress2={() => {
          [navigation.navigate("CartScreen"), console.log("CART")];
        }}
      />

      <View style={styles.content}>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={80} color={COLORS.orange} />
          </View>
        ) : (
          <FlatList
            data={products}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return renderData(item);
            }}
            keyExtractor={(item) => `${item.productID}`}
            scrollEnabled={true}
            ListEmptyComponent={
              products.length == 0 && error ? (
                <MessageCard message={error} />
              ) : (
                <MessageCard message={"Products Not Available"} />
              )
            }
            ListHeaderComponent={products.length != 0 ? <SearchBar /> : null}
            // ListFooterComponent={<></>}
            refreshing={refresh}
            onRefresh={handleRefresh}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: WIDTH.screenWidth,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
});

export default ProductsScreen;
