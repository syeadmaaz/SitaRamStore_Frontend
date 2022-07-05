import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const ProductCard = ({ item, onPress }) => {
//   console.log(item);

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.cardStyle}>
        <Image source={item.image} style={styles.imgStyling} />
        <View style={styles.cardRight}>
          <View style={styles.Text}>
            <Text style={styles.prodTitle}>{item.name}</Text>
            <Text style={styles.prodDesc}>{item.description}</Text>
            <Text style={styles.price}>Rs. {item.price}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonView}
            onPress={onPress}
          >
            <Text style={styles.btnText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 4.4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    // backgroundColor: COLORS.orange,
  },
  cardStyle: {
    flex: 1,
    flexDirection: "row",
    width: WIDTH.productCardWidth,
    height: HEIGHT.productCardHeight,
    alignItems: "center",
    borderRadius: 20,
    elevation: 10,
    marginVertical: "1%",
    overflow: "hidden",
    backgroundColor: COLORS.white,
  },
  imgStyling: {
    width: "35%",
    height: "85%",
    borderRadius: 20,
    margin: "3%",
    resizeMode: "contain",
    // backgroundColor: "orange",
  },

  cardRight: {
    flexDirection: "column",
    width: "55%",
    height: "85%",
    padding: "2%",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "green",
  },
  Text: {
    height: "63%",
    width: "100%",
    // backgroundColor: "red",
  },
  prodTitle: {
    height: "32%",
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
    // backgroundColor:"orange"
  },
  prodDesc: {
    height: "40%",
    fontSize: 11,
    justifyContent: "center",
    color: COLORS.grey,
    // backgroundColor:"green"
  },
  price: {
    height: "30%",
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.green,
    // backgroundColor:"pink"
  },
  buttonView: {
    width: "100%",
    height: "30%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange,
  },
  btnText: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default ProductCard;
