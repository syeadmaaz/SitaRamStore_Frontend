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

const amount = 0;

const Cart = ({ navigation }) => {
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
        { text: "OK", onPress: () => dispatch(clear()) },
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

  function CartFooter(){
    return (
      <View style={styles.cartFooter}>
        <View style={styles.checkout}>
          {cart.length === 0 ? (
            <Text style={styles.checkoutText}>Your cart is empty</Text>
          ) : (
            <View style={styles.checkoutFull}>
              <Text style={styles.checkoutText}>
                Total: Rs. {totalPrice}
              </Text>

              <Button
                title="Checkout"
                color="#ff5a5f"
                onPress={() => {
                  // dispatch(checkout());
                }}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => goBack()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "26%",
                  width: "100%",
                  marginTop: "10%",
                  backgroundColor: "orange",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  START SHOPPING
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{ height: 200 }} />
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
          ListHeaderComponent={<SearchBar />}
        //   ListFooterComponent={<CartFooter />}
        />
      </View>
      <>
        <CartCheckout />
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
});
export default Cart;
