import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Card } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";
import { setProducts } from "../../data/ProductsData";

import axios from "../../../axios.automate";
import SearchBar from "../../components/SearchBar/SearchBar";
import EditCategory from "./EditCategory";

const CategoryUpdate = ({ navigation }) => {
  const [category, setCategory] = React.useState();
  const [refreshFlatlist, setRefreshFlatList] = useState(false);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const LowerHeader = () => {
    return (
      <>
        <SearchBar />
          <Card elevation={27} style={styles.addCard}>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => navigation.navigate("newCategoryUpload")}
            >
              <View style={styles.addView}>
                <Icon name={"add"} size={60} color={"black"} />
              </View>
            </TouchableOpacity>
          </Card>
      </>
    );
  };

  const Footer = () => {
    return <></>;
  };

  const goToProductsScreen = (item) => {
    console.log(item.categoryID);
    axios
      .get("getProduct", {
        params: {
          categoryID: item.categoryID,
        },
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.productItems);
          setProducts(res.data.productItems);

          navigation.navigate("AdminStackScreen", {
            screen: "AddProduct",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          setCategory(res.data.categoryItems);
        }
      });
  };

  const renderData = (item) => {
    return (
      <EditCategory
        item={item}
        onPressNavigate={() => goToProductsScreen(item)}
        onPressDelete={() => deleteCategory(item)}
      />
    );
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("getCategory", { params: {} })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.success) {
          setCategory(res.data.categoryItems);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header title={"Add/Edit Category"} />
      <View style={styles.content}>
        {loading ? (
          error ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
                {error}
              </Text>
            </View>
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
          <>
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
              ListFooterComponent={<Footer />}
              extraData={category}
            />
          </>
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
  content: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: COLORS.white,
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

export default CategoryUpdate;
