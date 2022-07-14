import * as React from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import CATEGORIES from "../data/CategoryData";
import AppStatusBar from "../components/AppStatusBar/AppStatusBar";

import Header from "../components/Header/Header";
import SearchHeader from "../components/Header/SearchHeader";
import CategoryCard from "../components/CategoryCard/CategoryCard";

import axios from "../../axios.automate";

const HomeScreen = ({ navigation }) => {

  const [loading,setLoading] = React.useState(false)
  const [category,setCategory] = React.useState(null)

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("getCategory", { params: {} })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.success) 
          setCategory(res.data.categoryItems);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  }, []);

  const logout = async () => {
    console.log("first");
    try {
      // console.log("first");
      let response = await AsyncStorage.clear();
      console.log(response);
      if (response) {
        navigation.naviagte("AuthStackScreen", { screen: "LoginScreen" });
      }
    } catch (e) {
      console.log("last");
    }
  };

  function goToProductsScreen() {
    navigation.navigate("ProductStackScreen", { screen: "ProductsScreen" });
  }

  const renderData = (item) => {
    return <CategoryCard item={item} onPress={goToProductsScreen} />;
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
      <AppStatusBar backgroundColor={COLORS.orange} />
      <Header
        title={"HOME"}
        // onPressMenu={logout}
        onPressCart={() => navigation.navigate("CartScreen")}
      />

      <View style={styles.content}>
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
