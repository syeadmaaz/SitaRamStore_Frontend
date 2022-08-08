import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const CartCard = ({
  item,
  onPressDecrement,
  onPressIncrement,
  onPressRemove,
}) => {
  //   console.log("CART COMPONENT");
  // console.log(item);
  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.cardStyle}>
        <Image source={{ uri: item.productImage }} style={styles.imgStyling} />
        <View style={styles.cardRight}>
          <View style={styles.Text}>
            <Text style={styles.prodTitle}>{item.productName}</Text>
            <Text style={styles.prodDesc}>{item.productDescription}</Text>
            <Text style={styles.price}>
              Rs. {item.quantity * item.productPrice}
            </Text>
          </View>

          <View style={styles.quantity}>
            <View style={styles.cartItemQuantity}>
              <TouchableOpacity activeOpacity={0.5} onPress={onPressDecrement}>
                <MaterialIcons name="remove" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.quantityText}>
              <Text style={styles.cartItemQuantityText}>{item.quantity}</Text>
            </View>
            <View style={styles.cartItemQuantity}>
              <TouchableOpacity activeOpacity={0.5} onPress={onPressIncrement}>
                <MaterialIcons name="add" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressRemove}
          style={styles.cartItemRemoveButton}
        >
          <Entypo name="circle-with-cross" size={20} color="red" />
        </TouchableOpacity>
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
    height: "55%",
    fontSize: 11,
    justifyContent: "center",
    color: COLORS.grey,
    // backgroundColor:"green"
  },
  price: {
    height: "30%",
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.green,
    // backgroundColor:"pink"
  },
  quantity: {
    flexDirection: "row",
    height: "22%",
    width: "90%",
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.light,
  },
  cartItemQuantity: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "25%",
    height: "100%",
    marginHorizontal: "12%",
    borderRadius: 10,
    backgroundColor: COLORS.grey,
  },
  quantityText: {
    width: "30%",
    alignItems: "center",
    // backgroundColor : "red",
  },
  cartItemQuantityText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  cartItemRemoveButton: {
    top: "4%",
    marginLeft: "91%",
    position: "absolute",
    // backgroundColor: "red",
  },
});

export default CartCard;
