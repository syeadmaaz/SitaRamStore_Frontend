import * as React from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import { Header } from "react-native/Libraries/NewAppScreen";

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
  
  {
    key: 11,
    name: "Spice & Masala",
    img: require("../assets/images/categories/SpiceMasala.jpeg"),
  },
  {
    key: 12,
    name: "Babycare Supplies",
    img: require("../assets/images/categories/Babycare.jpg"),
  },
  {
    key: 13,
    name: "Sweet Tooth",
    img: require("../assets/images/categories/Chocoice.jpeg"),
  },
];

const HomeScreen = ({ navigation }) => {
  function logOut() {
    navigation.naviagte("AuthStackScreen", {screen: "LoginScreen"});
  }
  const LowerHeader = () => {
    return (
      <>
        <View style={styles.lowerHeader}>
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>Ready To Buy The Quality</Text>
            <Text style={styles.headerTitle}>Products</Text>
          </View>

          <View style={styles.search}>
            <View style={styles.searchInputContainer}>
              <Icon name="magnify" size={35} style={styles.searchIcon} />
              <TextInput placeholder="Search" style={styles.searchInput} />
              <TouchableOpacity activeOpacity={0.8} style={styles.sortBtn}>
                <Icon name="magnify" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.categoryText}>Categories</Text>
      </>
    );
  };
  const Footer = () => {
    return <View style={{ marginTop: 100 }}></View>;
  };
  const renderData = (item) => {
    return (
      <View style={styles.categoriesContainer}>
        <Card style={styles.cardStyle}>
          <Image source={item.img} style={styles.imgStyling} />
          <Text style={styles.fontStyle}>{item.name}</Text>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.orange} />
      {/* Header container */}
      <View style={styles.header}>
        <Icon name="sort-variant" size={28} color={COLORS.white} />
        <Icon name="cart-outline" size={28} color={COLORS.white} onPress={logOut}/>
      </View>

      <View style={styles.lower}>
        <FlatList
          numColumns={2}
          data={Categories}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.name}`}
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
    backgroundColor: COLORS.orange,
  },
  header: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 11,
    paddingVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    backgroundColor: COLORS.orange,
  },
  lowerHeader: {
    flex:1,
    flexDirection: "column",
    backgroundColor: COLORS.orange,
    height: "5%",
    justifyContent: "center",
    paddingTop: "5%",
    paddingBottom: "8%",
    width: WIDTH.screenWidth,
    // backgroundColor: COLORS.dark,
  },
  headerTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    paddingHorizontal: "5%",
  },
  search: {
    maxWidth: WIDTH.screenWidth,
    top: "20%",
    height: "50%",
    marginHorizontal: "5%",
    // backgroundColor: COLORS.dark,
  },

  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    Height: "100%",
    borderRadius: 20,
    position: "absolute",
    alignItems: "center",
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  searchIcon: {
    display: "flex",
    color: COLORS.dark,
    width: "10%",
    height: "100%",
    paddingVertical: "4%",
    marginHorizontal: "3%",
    // backgroundColor: COLORS.orange,
  },
  searchInput: {
    color: "black",
    display: "flex",
    width: "65%",
    height: "100%",
    paddingVertical: "4%",
    fontSize: 18,
    alignItems: "center",
    // backgroundColor: COLORS.grey,
  },
  sortBtn: {
    display: "flex",
    color: "white",
    height: "100%",
    width: "19%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange,
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

  lower: {
    flex:1,
    flexDirection: "column",
    backgroundColor: COLORS.white,
  },
  categoriesContainer: {
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