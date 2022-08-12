import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import { COLORS, FONT, HEIGHT, WIDTH } from "../constants/theme";
import { useSelector } from "react-redux";
import {
  cartTotalPriceSelector,
  cartTotalSelector,
  cartTotalDiscountSelector,
  cartTotalMRPSelector,
} from "../redux/selectors";
import { getAddresses } from "../data/AddressData";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import BillCard from "../components/BillCard/BillCard";
import Button from "../components/Button/Button";
import AddressCard from "../components/AdressCard/AdressCard";
import AddAddressCard from "../components/AdressCard/AddAdressCard";

const CheckOutScreen = ({ navigation }) => {
  const totalPrice = useSelector(cartTotalPriceSelector);
  const totalItems = useSelector(cartTotalSelector);
  const totalMRP = useSelector(cartTotalMRPSelector);
  const totalDiscount = useSelector(cartTotalDiscountSelector);

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    setAddresses(getAddresses());
  });

  const renderData = (item,index) => {
    console.log(item);
    console.log(index);
    return (
      <AddressCard
        item={item}
        onPress={() => {
          console.log(item);
          //   dispatch(addToCart(item)), showToast();
        }}
        index={index}
      />
    );
  };

  function addAddress() {
    console.log("Add Address");
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"CHECK-OUT"}
        // name1={"keyboard-backspace"}
        // name2={"cart-outline"}
      />
      <View style={styles.billView}>
        <BillCard
          title={"ORDER BILL"}
          totalItems={totalItems}
          totalPrice={totalPrice}
          totalMRP={totalMRP}
          totalDiscount={totalDiscount}
        />
      </View>

      <View style={styles.deliveryView}>
        <Text style={styles.deliveryText}>SELECT DELIVERY ADDRESS</Text>
      </View>
      <View style={styles.adressView}>
        {addresses.length !== 0 ? (
          <FlatList
            data={addresses}
            horizontal
            renderItem={({ item,index }) => {
              return renderData(item,index);
            }}
            scrollEnabled={true}
          />
        ) : (
          <AddAddressCard onPress={() => addAddress()} />
        )}
      </View>
      <View style={styles.buttonView}>
        <Button />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight,
    // backgroundColor: COLORS.red,
  },
  billView: {
    height: "52.5%",
    // backgroundColor: "red",
  },
  deliveryView: {
    height: "4%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.green,
  },
  deliveryText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: FONT.f9,
    paddingHorizontal: "6%",
  },
  adressView: {
    height: "28%",
    // backgroundColor: COLORS.dark,
  },
  buttonView: {
    height: "6%",
    marginVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
  },
});

export default CheckOutScreen;
