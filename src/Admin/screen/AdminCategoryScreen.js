import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";
// import { setProducts } from "../../data/ProductsData";
import axios from "../../../axios.automate";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  clearCategory,
} from "../../redux/features/category/categorySlice";

import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";
import AddButton from "../../components/AddButton/AddButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import MessageCard from "../../components/MessageCard/MessageCard";

const AdminCategoryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(clearCategory());
    axios
      .get("getCategory", { params: {} })
      .then((res) => {
        setLoading(false);
        // console.log(res.data);
        if (res.data.success) {
          dispatch(fetchCategory(res.data.categoryItems));
          setError(null);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
        console.log(err);
      });
  }, []);

  function handleRefresh() {
    setLoading(true);
    dispatch(clearCategory());
    axios
      .get("getCategory", { params: {} })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.success) {
          dispatch(fetchCategory(res.data.categoryItems));
          setError(null);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
        console.log(err);
      });
  }

  const goToProductsScreen = (item) => {
    // console.log(item.categoryID);
    navigation.navigate("AdminStackScreen", {
      screen: "AdminProductScreen",
      params: {
        categoryName: item.categoryName,
        categoryID: item.categoryID,
      },
    });
  };

  // const goToProductsScreen = (item) => {
  //   // console.log(item.categoryID);

  //   axios
  //     .get("getProduct", {
  //       params: {
  //         categoryID: item.categoryID,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.data.success) {
  //         console.log(res.data.productItems);
  //         setProducts(res.data.productItems);

  //         navigation.navigate("AdminStackScreen", {
  //           screen: "AdminProductScreen",
  //           params: item.categoryID,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deleteCategory = (item) => {
    // console.log(loginData);
    setLoading(true);
    axios
      .post("/deleteCategory", {
        categoryID: item.categoryID,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.data.success) {
          dispatch(fetchCategory(res.data.categoryItems));
        }
      });
  };

  const LowerHeader = () => {
    return (
      <>
        <SearchBar />
        <AddButton onPress={() => navigation.navigate("AddCategoryScreen")} />
      </>
    );
  };

  const renderData = (item) => {
    return (
      <CategoryCard
        item={item}
        onPressNavigate={() => goToProductsScreen(item)}
        onPressDelete={() => deleteCategory(item)}
      />
    );
  };

  const Footer = () => {
    return <></>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header title={"CATEGORY"} />
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
            ListHeaderComponent={!error ? <LowerHeader /> : null}
            ListFooterComponent={<Footer />}
            extraData={category}
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
    // backgroundColor: COLORS.orange,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.white,
  },
  addCard: {
    width: WIDTH.productCardWidth,
    height: HEIGHT.addButton,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "5%",
    marginTop: "2%",
    borderRadius: 10,
    // backgroundColor: COLORS.red
  },
  addView: {
    width: WIDTH.productCardWidth,
    height: HEIGHT.addButton,
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: COLORS.green
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
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    overflow: "hidden",
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
  },
  skip: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.5,
  },
});

export default AdminCategoryScreen;
