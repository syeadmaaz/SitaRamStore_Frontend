import * as React from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";

import Header from "../components/Header/Header";
import SearchHeader from "../components/Header/SearchHeader";

const Categories = [
  {
    key: 1,
    name: "Beverages & Drinks",
    img: require("../assets/images/categories/Beverages.png"),
  },
  {
    key: 2,
    name: "Rice Flour & Pulses",
    img: require("../assets/images/categories/RicePulse.png"),
  },
  {
    key: 3,
    name: "DryFruits",
    img: require("../assets/images/categories/Dryfruits.jpg"),
  },
  {
    key: 4,
    name: "Household Supplies",
    img: require("../assets/images/categories/House.jpeg"),
  },
  {
    key: 5,
    name: "Personal & SkinCare",
    img: require("../assets/images/categories/Skincare.jpg"),
  },
  {
    key: 6,
    name: "Snacks & Packaged Foods",
    img: require("../assets/images/categories/Snacks.jpg"),
  },
  {
    key: 7,
    name: "Oil & Ghee",
    img: require("../assets/images/categories/OilGhee.jpeg"),
  },
  {
    key: 8,
    name: "Spice & Masala",
    img: require("../assets/images/categories/SpiceMasala.jpeg"),
  },
  {
    key: 9,
    name: "Babycare Supplies",
    img: require("../assets/images/categories/Babycare.jpg"),
  },
  {
    key: 10,
    name: "Sweet Tooth",
    img: require("../assets/images/categories/Chocoice.jpeg"),
  },

  // {
  //   key: 11,
  //   name: "Spice & Masala",
  //   img: require("../assets/images/categories/SpiceMasala.jpeg"),
  // },
  // {
  //   key: 12,
  //   name: "Babycare Supplies",
  //   img: require("../assets/images/categories/Babycare.jpg"),
  // },
  // {
  //   key: 13,
  //   name: "Sweet Tooth",
  //   img: require("../assets/images/categories/Chocoice.jpeg"),
  // },
];

const HomeScreen = ({ navigation }) => {
  function logOut() {
    navigation.naviagte("AuthStackScreen", { screen: "LoginScreen" });
  }
  function goToProductsScreen() {
    navigation.navigate("ProductStackScreen", { screen: "ProductsScreen" });
  }
  const LowerHeader = () => {
    return (
      <>
        <SearchHeader />
        <Text style={styles.categoryText}>Categories</Text>
      </>
    );
  };

  const renderData = (item) => {
    return (
      <View style={styles.cardsContainer}>
        <Card style={styles.cardStyle}>
          <TouchableOpacity activeOpacity={0.2} onPress={goToProductsScreen}>
            <Image source={item.img} style={styles.imgStyling} />
            <Text style={styles.fontStyle}>{item.name}</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar backgroundColor={COLORS.orange}/>
      <Header />

      <View style={styles.content}>
        <FlatList
          numColumns={2}
          data={Categories}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.key}`}
          scrollEnabled={true}
          ListHeaderComponent={<LowerHeader />}
          // ListFooterComponent={<Footer />}
        />
      </View>
      {/* </ScrollView> */}
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
  cardsContainer: {
    width: WIDTH.screenWidth / 2,
    position: "relative",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.orange,
  },

  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.cardHeight,
    width: WIDTH.cardWidth,
    elevation: 10,
    padding: 10,
    marginVertical: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  imgStyling: {
    display: "flex",
    width: WIDTH.imageWidth,
    height: HEIGHT.imageHeight,
    borderRadius: 10,
    margin: "4%",
    alignItems: "center",
    // backgroundColor: "orange",
  },

  fontStyle: {
    fontSize: 15,
    fontWeight: "bold",
    width: WIDTH.imageWidth + 5,
    height: WIDTH.cardWidth / 3 - 2,
    paddingTop: "5%",
    paddingLeft: "4%",
    // backgroundColor: "orange"
  },
});

export default HomeScreen;
