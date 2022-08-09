import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
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
      <View style={styles.checkoutArea}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressCheckOut}>
          <View style={styles.checkoutBtn}>
            <Text style={styles.btnText}>CHECKOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "4%",
    backgroundColor: COLORS.slide2,
  },
  cartTotal: {
    width: "50%",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  checkoutArea: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
  },
  subTotalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.green,
  },
  checkoutBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "25%",
    paddingVertical: "7%",
    borderRadius: 10,
    // borderColor: COLORS.tranparent,
    elevation: 5,
    backgroundColor: COLORS.orange,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default CartCheckout;
