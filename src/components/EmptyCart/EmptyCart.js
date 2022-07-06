import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS, HEIGHT, WIDTH } from "../../constants/theme";

const EmptyCart = ({onPressShop }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.topView}>
        <Feather name="shopping-cart" size={120} color={COLORS.orange} />
        <Text style={styles.emptyText}>Your Cart is Empty !</Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressShop}>
          <View style={styles.shopBtn}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: COLORS.white }}
            >
              START SHOPPING
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 1.1,
    // backgroundColor: COLORS.yellow,
  },
  topView: {
    width: WIDTH.screenWidth,
    height: "50%",
    top: "5%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.red,
  },
  emptyText: {
    color: COLORS.dark,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    paddingTop: "10%",
  },
  bottomView: {
    width: WIDTH.screenWidth,
    height: "40%",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  shopBtn: {
    width: WIDTH.screenWidth/2,
    height: HEIGHT.screenHeight / 17,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.orange,
  },
});

export default EmptyCart;
