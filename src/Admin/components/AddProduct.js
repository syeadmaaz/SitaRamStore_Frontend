import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";
import { getProducts } from "../../data/ProductsData";
import { useDispatch } from "react-redux";

import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import EditProduct from "./EditProduct";
import MessageCard from "../../components/MessageCard/MessageCard";

import Icon from "react-native-vector-icons/MaterialIcons";

const AddProduct = ({ navigation }) => {
  //   const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
    let response = getProducts()
    console.log(response)
  });

  

  //   function showToast() {
  //     ToastAndroid.showWithGravityAndOffset(
  //       "Added To Cart !!",
  //       ToastAndroid.SHORT,
  //       ToastAndroid.BOTTOM,
  //       25,
  //       50
  //     );
  //   }

  const LowerHeader = () => {
      return (
        <>
          {/* <SearchHeader /> */}
          <SearchBar />
          {/* <Text style={styles.categoryText}>Categories</Text> */}

          <View>
            <TouchableOpacity
              activeOpacity={0.1}
              // onPress={() => navigation.navigate("ImageUpload")}
            >
              <Card elevation={27} style={styles.addCard}>
                <Icon
                  name={"add"}
                  size={70}
                  color={"black"}
                  // onPress={navigation.navigate("ImageUpload")}
                />
              </Card>
            </TouchableOpacity>
          </View>
          {/* <Button
            title="Add Category"
            onPress={() => Alert.alert("Simple Button pressed")}
          /> */}
        </>
      );
    };

    const Footer = () => {
      return <></>;
    };

  const renderData = (item) => {
    // console.log(item)
    return (
      <EditProduct
        item={item}
        // onPress={() => {
        //   dispatch(addToCart(item)), showToast();
        // }}
      />
    );
  };

  function AddIcon() {
    return (
      <View style={styles.iconSetting}>
        <TouchableOpacity onPress={() => navigation.navigate("newProductUpload")}>
          <Card elevation={5} style={styles.addCarding}>
            <Icon name={"add"} size={70} color={"black"} />
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        style={styles.headerAlign}
        title={"PRODUCTS"}
        name1={"keyboard-backspace"}
        // name2={"cart-outline"}
        // onPress1={() => navigation.goBack()}
        // onPress2={() => {
        //   [navigation.navigate("CartScreen"), console.log("CART")];
        // }}
      />
      <SearchBar />

      <AddIcon />

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
            // ListHeaderComponent={<SearchBar />}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  //   addCard: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //     // width: WIDTH.screenWidth,
  //     marginHorizontal: "5%",
  //     marginTop: "2%",
  //   },

  iconSetting: {
    padding: "3%",
    width: "100%",
  },
  addCarding: {
    alignItems: "center",
    borderRadius: 20,
  },
});

export default AddProduct;
