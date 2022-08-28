import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";
import axios from "../../../axios.automate";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  clearProduct,
} from "../../redux/features/products/productSlice";

import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";
import MessageCard from "../../components/MessageCard/MessageCard";
import AddButton from "../../components/AddButton/AddButton";

const AdminProductScreen = ({ navigation, route }) => {
  const categoryID = route.params.categoryID;
  const categoryName = route.params.categoryName;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
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
          setError(null);
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
      .get("getProduct", {
        params: {
          categoryID: categoryID,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setLoading(false);
          setError(null);
          // console.log(res.data.productItems);
          dispatch(fetchProduct(res.data.productItems));
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
        console.log(err);
      });
  }

  const LowerHeader = () => {
    return (
      <>
        <SearchBar />
        <AddButton onPress={() => navigation.navigate("AddProductScreen")} />
      </>
    );
  };

  const Footer = () => {
    return <></>;
  };

  const renderData = (item) => {
    // console.log(item)
    return <ProductCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={categoryName.toUpperCase()}
        name1={"keyboard-backspace"}
        onPress1={() => navigation.goBack()}
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
            extraData={products}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => `${item.productID}`}
            ListEmptyComponent={
              products.length == 0 && error ? (
                <MessageCard message={error} />
              ) : (
                <MessageCard message={"Category Not Available"} />
              )
            }
            ListHeaderComponent={!error ? <LowerHeader /> : null}
            ListFooterComponent={<Footer />}
            renderItem={({ item }) => {
              return renderData(item);
            }}
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
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.white,
  },
});

export default AdminProductScreen;
