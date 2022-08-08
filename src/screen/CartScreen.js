import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
  ToastAndroid,
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
import axios from "../../axios.automate";
import { getCookie } from "../data/Cokkie";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CartCard from "../components/CartCard/CartCard";
import CartCheckout from "../components/CartCheckout/CartCheckout";
import EmptyCart from "../components/EmptyCart/EmptyCart";

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  function saveToast() {
    ToastAndroid.showWithGravityAndOffset(
      "Cart Saved Sucessfully !!",
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      50
    );
  }

  function clearToast() {
    ToastAndroid.showWithGravityAndOffset(
      "Cart Cleared Sucessfully !!",
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      50
    );
  }

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
        { text: "YES", onPress: () => clearCart() },
      ],
      { cancelable: false }
    );
  };

  async function clearCart() {
    console.log("CLEARING CART");
    const cookie = await getCookie();
    // console.log(cookie);
    axios
      .get("clearCart", {
        params: {
          userName: cookie.userName,
        },
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.message);
          dispatch(clear());
          clearToast();
        }
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  }

  async function save() {
    console.log("saving initialized");
    console.log(cart);
    const cookie = await getCookie();
    axios
      .post("saveCart", {
        userName: cookie.userName,
        productDetails: cart,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.success) {
          console.log(res.data.message);
          saveToast();
        }
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  }

  function renderData(item) {
    // console.log(item)
    return (
      <CartCard
        item={item}
        onPressDecrement={() => {
          if (item.quantity === 1) {
            if (cart.length === 1) {
              clearCart();
            }
            dispatch(removeItem(item.productID));
            console.log("PRODUCT REMOVED FROM CART");
            return;
          } else {
            dispatch(decrement(item.productID));
          }
        }}
        onPressIncrement={() => {
          dispatch(increment(item.productID));
        }}
        onPressRemove={() => {
          dispatch(removeItem(item.productID));
        }}
      />
    );
  }

  function LowerHeader() {
    return (
      <View style={styles.clearDiv}>
        <SearchBar />
        <View style={styles.buttons}>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.but1}
            onPress={AlertItem}
          >
            <View style={styles.button}>
              <Text style={styles.clearText}>CLEAR CART</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.but2}
            onPress={save}
          >
            <View style={styles.button}>
              <Text style={styles.clearText}>SAVE CART</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title="MY CART"
        name1={"keyboard-backspace"}
        name2={"cart-outline"}
        onPress1={() => navigation.goBack()}
        onPress2={() => console.log("CART PRESSED")}
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
        {
          cart.length !== 0 ? (
            <CartCheckout
              totalPrice={totalPrice}
              onPressCheckOut={() => {
                console.log("CHECKOUT");
              }}
            />
          ) : null
          // [console.log(cart.length), save()]
        }
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
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight,
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
  buttons: {
    paddingVertical: "0.5%",
    flexDirection: "row",
    // backgroundColor: "black"
  },
  but1: {
    width: "50%",
    paddingLeft: "6%",
    paddingRight: "2%",
    // backgroundColor: "orange",
  },
  but2: {
    width: "50%",
    paddingLeft: "2%",
    paddingRight: "6%",
    // backgroundColor: "orange",
  },
  button: {
    paddingVertical: "4%",
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
