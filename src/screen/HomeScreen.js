import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Alert,
  BackHandler,
} from "react-native";
import { useFocusEffect, DrawerActions } from "@react-navigation/native";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import { clearCookie } from "../data/Cokkie";
import { setProducts } from "../data/ProductsData";
import { useDispatch } from "react-redux";
import { clear } from "../redux/features/cart/cartSlice";
import axios from "../../axios.automate";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import SearchHeader from "../components/Header/SearchHeader";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import MessageCard from "../components/MessageCard/MessageCard";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState(null);
  const [error, setError] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold On!", "Are you sure you want to Exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get("getCategory", { params: {} })
      .then((res) => {
        setLoading(false);
        // console.log(res.data.categoryItems);
        if (res.data.success) setCategory(res.data.categoryItems);
      })
      .catch((err) => {
        setLoading(true);
        setError("Connection Failed !!");
        console.log(err);
      });
  }, []);

  const sideBar = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // await clearCookie();
    // dispatch(clear());
    // navigation.navigate("AuthStackScreen", { screen: "LoginScreen" });
  };

  const goToProductsScreen = (item) => {
    console.log(item.categoryName);
    // setLoading(true);
    axios
      .get("getProduct", {
        params: {
          categoryID: item.categoryID,
        },
      })
      .then((res) => {
        // setLoading(false);
        if (res.data.success) {
          // console.log(res.data.productItems);
          setProducts(res.data.productItems);

          navigation.navigate("ProductStackScreen", {
            screen: "ProductsScreen", params: item.categoryName,
          });
        }
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };

  const renderData = (item) => {
    return (
      <CategoryCard item={item} onPress={() => goToProductsScreen(item)} />
    );
  };

  const LowerHeader = () => {
    return (
      <>
        <SearchHeader />
        <Text style={styles.categoryText}>Categories</Text>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"HOME"}
        name1={"sort-variant"}
        name2={"cart-outline"}
        onPress1={(sideBar)}
        onPress2={() => navigation.navigate("CartScreen")}
      />

      <View style={styles.content}>
        {loading ? (
          error ? (
            <MessageCard message={error} />
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <ActivityIndicator size={80} color={COLORS.orange} />
            </View>
          )
        ) : (
          <FlatList
            numColumns={2}
            data={category}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return renderData(item);
            }}
            keyExtractor={(item) => `${item.categoryID}`}
            scrollEnabled={true}
            ListHeaderComponent={<LowerHeader />}
            // ListFooterComponent={<Footer />}
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
    // backgroundColor: COLORS.orange,
  },
  categoryText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "8%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    color: COLORS.dark,
    // backgroundColor: "white",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.white,
  },
});

export default HomeScreen;
