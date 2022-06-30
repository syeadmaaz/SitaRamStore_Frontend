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
];

const HomeScreen = ({ navigation }) => {
  const renderData = (item) => {
    return (
      <View style={styles.categoriesContainer}>
        <Card style={styles.cardStyle}>
          <Image source={item.img} style={styles.imgStyling} />
          <Text style={styles.fontStyle}>{item.name}</Text>
        </Card>
        {/* <Card style={styles.textCard}>
          <Text style={styles.fontStyle}>{item.name}</Text>
        </Card> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.orange} />
      {/* Header container */}
      <View style={styles.header}>
        <Icon name="sort-variant" size={28} color={COLORS.white} />
        <Icon name="cart-outline" size={28} color={COLORS.white} />
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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

      <View style={styles.lower}>
        <Text style={styles.categoryText}>Categories</Text>
        <FlatList
          numColumns={2}
          data={Categories}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ paddingLeft: 20 }}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.name}`}
          scrollEnabled={true}
        />
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.orange,
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight/11,
    paddingVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  lowerHeader: {
    flexDirection: "column",
    backgroundColor: COLORS.orange,
    height: "16%",
    justifyContent: "center",
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
    top: "25%",
    height: "50%",
    marginHorizontal: "5%",
    // backgroundColor: COLORS.dark,
  },

  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    Height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    position: "absolute",
    alignItems: "center",
    elevation: 10,
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
    color: "white",
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
  lower: {
    marginTop: "10%",
    paddingBottom: 50,
    // backgroundColor: "orange",
  },
  categoryText: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.dark,
    paddingTop: "8%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "white",
  },

  categoriesContainer: {
    width: WIDTH.screenWidth / 2,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.orange,
  },

  cardStyle: {
    height: HEIGHT.cardHeight,
    backgroundColor: "white",
    elevation: 10,
    width: WIDTH.cardWidth,
    padding: 10,
    marginVertical: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  imgStyling: {
    width: WIDTH.imageWidth,
    height: HEIGHT.imageHeight,
    borderRadius: 10,
    margin: "4%",
  },

  fontStyle: {
    fontSize: 20,
  },

  categoryItemBtn: {
    flexDirection: "row",
    backgroundColor: COLORS.light,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignItems: "center",
  },

  card: {
    height: 190,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: WIDTH.cardWidth,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },

  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    position: "absolute",
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;