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
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../redux/selectors";

import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CartCard from "../components/CartCard/CartCard";
import CartCheckout from "../components/CartCheckout/CartCheckout";
import EmptyCart from "../components/EmptyCart/EmptyCart";

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "YES", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };

  function renderData(item) {
    // console.log(item)
    return (
      <CartCard
        item={item}
        onPressDecrement={() => {
          if (item.quantity === 1) {
            dispatch(removeItem(item.id));

            console.log("removed");
            return;
          } else {
            dispatch(decrement(item.id));
          }
        }}
        onPressIncrement={() => {
          dispatch(increment(item.id));
        }}
        onPressRemove={() => {
          dispatch(removeItem(item.id));
        }}
      />
    );
  }

  function LowerHeader() {
    return (
      <View style={styles.clearDiv}>
        <SearchBar />
        <TouchableOpacity activeOpacity={0.3} onPress={AlertItem}>
          <View style={styles.button}>
            <Text style={styles.clearText}>CLEAR CART</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.orange} />
      <Header
        title="MY CART"
        onPressMenu={() => goBack()}
        onPressCart={() => console.log("CART PRESSED")}
      />
      <View style={styles.content}>
        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          scrollEnabled={true}
          ListHeaderComponent={
            cart.length !== 0 ? (
              <LowerHeader />
            ) : (
              <EmptyCart
                onPressShop={() => {
                  navigation.navigate("HomeScreen");
                }}
              />
            )
          }
          //   ListFooterComponent={<CartFooter />}
        />
      </View>
      <>
        {cart.length !== 0 ? (
          <CartCheckout
            totalPrice={totalPrice}
            onPressCheckOut={() => {
              console.log("CHECKOUT");
            }}
          />
        ) : null}
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  clearDiv: {
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  button: {
    width: WIDTH.screenWidth / 1.11,
    height: HEIGHT.screenHeight / 20,
    paddingVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.yellow,
  },
  clearText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.dark,
  },
});
export default CartScreen;
