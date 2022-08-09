import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { COLORS, HEIGHT, WIDTH } from "../constants/theme";
import { useSelector } from "react-redux";
import {
  cartTotalPriceSelector,
  cartTotalSelector,
  cartTotalDiscountSelector,
  cartTotalMRPSelector,
} from "../redux/selectors";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import BillCard from "../components/BillCard/BillCard";
import Button from "../components/Button/Button";
import AddressCard from "../components/AdressCard/AdressCard";

const CheckOutScreen = ({ navigation }) => {
  const totalPrice = useSelector(cartTotalPriceSelector);
  const totalItems = useSelector(cartTotalSelector);
  const totalMRP = useSelector(cartTotalMRPSelector);
  const totalDiscount = useSelector(cartTotalDiscountSelector);

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"CHECK-OUT"}
        // name1={"keyboard-backspace"}
        // name2={"cart-outline"}
        // onPress1={logout}
        // onPress2={() => navigation.navigate("CartScreen")}
      />
      <ScrollView>
        <BillCard
          title={"ORDER BILL"}
          totalItems={totalItems}
          totalPrice={totalPrice}
          totalMRP={totalMRP}
          totalDiscount={totalDiscount}
        />
        <AddressCard />
        <Button />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight,
    // backgroundColor: COLORS.red,
  },
});

export default CheckOutScreen;
