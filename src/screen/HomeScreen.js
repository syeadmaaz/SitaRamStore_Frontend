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
import { setProducts } from "../data/ProductsData";
import axios from "../../axios.automate";
import { getCookie } from "../data/Cokkie";
import { useDispatch } from "react-redux";
import { fetchCart } from "../redux/features/cart/cartSlice";
import { fetchAddress } from "../redux/features/address/addressSlice";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import SearchHeader from "../components/Header/SearchHeader";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import MessageCard from "../components/MessageCard/MessageCard";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [cartLoading, setCartLoading] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
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
        // setLoading(true);
        setTimeout(() => {
          setError("Connection Failed !!");
        }, 1500);
        // setError("Connection Failed !!");
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setCartLoading(true);
    async function fetchData() {
      const cookie = await getCookie();
      if (cookie) {
        console.log(cookie);
        axios
          .get("fetchCart", {
            params: {
              userName: cookie.userName,
            },
          })
          .then((res) => {
            if (res.data.success) {
              setCartLoading(false);
              console.log("Fetching Cart and Address");
              // console.log(res.data.cartDetails);
              dispatch(fetchCart(res.data.cartDetails));
              dispatch(fetchAddress(res.data.address));
            }
          })
          .catch((err) => {
            // setCartLoading(true)
            setTimeout(() => {
              setError("Connection Failed !!");
            }, 1500);
            console.log(err);
          });
      }
    }
    fetchData();
  }, []);

  // function handleRefresh() {
  //   setLoading(true);
  //   axios
  //     .get("getCategory", { params: {} })
  //     .then((res) => {
  //       setLoading(false);
  //       // console.log(res.data.categoryItems);
  //       if (res.data.success) setCategory(res.data.categoryItems);
  //     })
  //     .catch((err) => {
  //       // setLoading(true);
  //       setTimeout(() => {
  //         setError("Connection Failed !!");
  //       }, 1500);
  //       // setError("Connection Failed !!");
  //       console.log(err);
  //     });
  // }

  const sideBar = () => {
    navigation.dispatch(DrawerActions.openDrawer());
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
            screen: "ProductsScreen",
            params: item.categoryName,
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
        onPress1={sideBar}
        onPress2={() => navigation.navigate("CartScreen")}
      />

      <View style={styles.content}>
        {loading || cartLoading ? (
          error ? (
            <MessageCard message={error} />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
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
            // refreshing={refresh}
            // onRefresh={handleRefresh}
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
