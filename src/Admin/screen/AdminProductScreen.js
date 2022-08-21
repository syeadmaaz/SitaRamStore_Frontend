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
import axios from "../../../axios.automate";
import { useFocusEffect } from "@react-navigation/native";

import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";
import MessageCard from "../../components/MessageCard/MessageCard";
import AddButton from "../../components/AddButton/AddButton";

const AdminProductScreen = ({ navigation, route }) => {
  //   const dispatch = useDispatch();
  const categoryID = route.params;

  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     axios
  //       .get("getProduct", {
  //         params: {
  //           categoryID: categoryID,
  //         },
  //       })
  //       .then((res) => {
  //         if (res.data.success) {
  //           // console.log(res.data.productItems);
  //           setProducts(res.data.productItems);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [])
  // );

  function handleRefresh() {
    axios
      .get("getProduct", {
        params: {
          categoryID: categoryID,
        },
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.productItems);
          setProducts(res.data.productItems);
        }
      })
      .catch((err) => {
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
        title={"PRODUCTS"}
        name1={"keyboard-backspace"}
        onPress1={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            products.length == 0 ? (
              <>
                <LowerHeader />
                <MessageCard message={"Products Not Available"} />
              </>
            ) : (
              <LowerHeader />
            )
          }
          ListFooterComponent={<Footer />}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.productID}`}
          extraData={products}
          scrollEnabled={true}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
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
    // backgroundColor: COLORS.red
  },
});

export default AdminProductScreen;
