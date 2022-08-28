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
import axios from "../../axios.automate";
import { getCookie } from "../data/Cokkie";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, clear } from "../redux/features/cart/cartSlice";
import {
  fetchAddress,
  clearAddress,
} from "../redux/features/address/addressSlice";
import {
  fetchCategory,
  clearCategory,
} from "../redux/features/category/categorySlice";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import SearchHeader from "../components/Header/SearchHeader";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import MessageCard from "../components/MessageCard/MessageCard";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);
  const [cookie, setCookie] = useState(null);

  const sideBar = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

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
    dispatch(clearCategory());
    dispatch(clear());
    dispatch(clearAddress());
    async function fetchData() {
      const cooki = await getCookie();
      setCookie(cooki);
      if (cooki) {
        // console.log(cooki);
        axios
          .get("fetchCart", {
            params: {
              userName: cooki.userName,
            },
          })
          .then((res) => {
            if (res.data.success) {
              setLoading(false);
              setError(null);
              console.log("Fetching Cart and Address");
              // console.log(res.data.cartDetails);
              dispatch(fetchCategory(res.data.categoryItems));
              dispatch(fetchCart(res.data.cartDetails));
              dispatch(fetchAddress(res.data.address));
            }
          })
          .catch((err) => {
            setLoading(false);
            setError("Connection Failed !!");
          });
      }
    }
    fetchData();
  }, []);

  function handleRefresh() {
    setLoading(true);
    dispatch(clearCategory());
    dispatch(clear());
    dispatch(clearAddress());
    axios
      .get("fetchCart", {
        params: {
          userName: cookie.userName,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setLoading(false);
          setError(null);
          console.log("Fetching Cart and Address");
          // console.log(res.data.cartDetails);
          dispatch(fetchCategory(res.data.categoryItems));
          dispatch(fetchCart(res.data.cartDetails));
          dispatch(fetchAddress(res.data.address));
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
      });
  }

  const goToProductsScreen = (item) => {
    // console.log(item.categoryName);
    navigation.navigate("ProductStackScreen", {
      screen: "ProductsScreen",
      params: {
        categoryName: item.categoryName,
        categoryID: item.categoryID,
      },
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
            numColumns={2}
            data={category}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return renderData(item);
            }}
            keyExtractor={(item) => `${item.categoryID}`}
            scrollEnabled={true}
            ListEmptyComponent={
              category.length == 0 && error ? (
                <MessageCard message={error} />
              ) : (
                <MessageCard message={"Category Not Available"} />
              )
            }
            ListHeaderComponent={category.length != 0 ? <LowerHeader /> : null}
            ListFooterComponent={<></>}
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
