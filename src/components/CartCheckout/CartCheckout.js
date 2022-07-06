import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  FlatList,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, HEIGHT, WIDTH } from "../../constants/theme";

const CartCheckout = ({ totalPrice, onPressCheckOut }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartTotal}>
        <Text style={styles.subTotalText}>
          Subtotal{"   "}
          <Text style={styles.totalPrice}>Rs. {totalPrice}</Text>
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressCheckOut}>
        <View style={styles.checkoutBtn}>
          <Text style={styles.btnText}>CHECKOUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: "3%",
    // borderWidth: 1,
    backgroundColor: COLORS.slide2,
  },
  cartTotal: {
    width: WIDTH.screenWidth / 1.7,
    height: HEIGHT.screenHeight / 13,
    justifyContent: "center",
    // backgroundColor: "red",
  },
  subTotalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutBtn: {
    width: WIDTH.screenWidth / 3,
    height: HEIGHT.screenHeight / 17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: COLORS.dark,
    backgroundColor: COLORS.orange,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.white
  },
});

export default CartCheckout;
