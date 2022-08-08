import React, { useState, useEffect, useRef } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  cartFetch,
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../redux/selectors";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CartCard from "../components/CartCard/CartCard";
import CartCheckout from "../components/CartCheckout/CartCheckout";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import axios from "../../axios.automate";
import { getCookie } from "../data/Cokkie";
// import { getFetchResult, CartFetchTrue } from "../data/CartFetchTrue"

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const [fetch, setFetch] = useState(false);
  const [cookie, setCookie] = useState({});
  const [removed, setRemoved] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const cooki = await getCookie();
  //     setCookie(cooki);
  //     console.log(cooki)
  //   }
  //   fetchData();
  // }, []);

  const isInitialMount = useRef(true);

  // useEffect(() => {
  //   isInitialMount.current &&
  //     // {
  //     axios
  //       .get("fetchCart", {
  //         params: {
  //           userName: cookie.userName,
  //         },
  //       })
  //       .then((res) => {
  //         // console.log(res.data.cartDetails);
  //         if (res.data.success) {
  //           console.log("first");
  //           // dispatch(cartFetch(res.data.cartDetails));
  //           let temp = [];
  //           res.data.cartDetails.map((item) => {
  //             temp.push({
  //               categoryID: item.categoryID,
  //               productID: item.productID,
  //               productName: item.productName,
  //               productDescription: item.porductDescription,
  //               productPrice: item.productPrice,
  //               productImage: item.productImage,
  //               quantity: item.quantity,
  //             });
  //           });
  //           console.log(temp);
  //           dispatch(cartFetch(temp));
  //           // setFetch(true);
  //           // console.log(cart);
  //         }
  //       })
  //       .catch((err) => {
  //         setError("Connection Failed !!");
  //         console.log(err);
  //       });
  //   // }
  //   return () => {
  //     isInitialMount.current = false;
  //   };
  // }, []);


  useEffect(() => {
    // if (isInitialMount.current) {
      if(initialFetch){
      // console.log(isInitialMount.current);
      console.log(initialFetch);
      setInitialFetch(false);
      // isInitialMount.current = false;
    }else {
    async function fetchData() {
      const cooki = await getCookie();
      setCookie(cooki);
      // const fetc = await getFetchResult();
      // console.log(fetc)
      // setFetch(fetc);
      axios
        .get("fetchCart", {
          params: {
            userName: cooki.userName,
          },
        })
        .then((res) => {
          // console.log(res.data.cartDetails);
          if (res.data.success) {
            console.log("first");
            // dispatch(cartFetch(res.data.cartDetails));
            let temp = [];
            res.data.cartDetails.map((item) => {
              temp.push({
                categoryID: item.categoryID,
                productID: item.productID,
                productName: item.productName,
                productDescription: item.porductDescription,
                productPrice: item.productPrice,
                productImage: item.productImage,
                quantity: item.quantity,
              });
            });
            // console.log(temp);
            dispatch(cartFetch(temp));
            // setFetch(true);
            // console.log(cart);
          }
        })
        .catch((err) => {
          setError("Connection Failed !!");
          console.log(err);
        });
    }
    fetchData();
  }
  },[]);

  // if (!fetch) {
  //   console.log(cookie);
  //   axios
  //     .get("fetchCart", {
  //       params: {
  //         userName: cookie.userName,
  //       },
  //     })
  //     .then((res) => {
  //       // console.log(res.data.cartDetails);
  //       if (res.data.success) {
  //         console.log("first");
  //         let temp = [];
  //         res.data.cartDetails.map((item) => {
  //           temp.push({
  //             categoryID: item.categoryID,
  //             productID: item.productID,
  //             productName: item.productName,
  //             productDescription: item.porductDescription,
  //             productPrice: item.productPrice,
  //             productImage: item.productImage,
  //             quantity: item.quantity,
  //           });
  //         });
  //         console.log(temp);
  //         dispatch(cartFetch(temp));
  //         // setFetch(true);
  //         // console.log(cart);
  //       }
  //       // setCategory(res.data.categoryItems);
  //     })
  //     .catch((err) => {
  //       setError("Connection Failed !!");
  //       console.log(err);
  //     });
  // }

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

  function saveCart() {
    console.log("first");
    let temp = { ...cart };
    if (temp.length == 1) {
      console.log("DELETED");
    }
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
        // setLoading(false);
        if (res.data.success) {
        }
      })
      .catch((err) => {
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
            dispatch(removeItem(item.productID));
            console.log("removed");
            return;
          } else {
            dispatch(decrement(item.productID));
          }
        }}
        onPressIncrement={() => {
          dispatch(increment(item.productID));
        }}
        onPressRemove={() => {
          // [
          dispatch(removeItem(item.productID));
          // ,
          // console.log(cart.length),
          // cart.length == 1 ? saveCart() : null,
          // if (cart.length == 0) {
          //   console.log("hello")
          //   save();
          // }
          // ];
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
    flexDirection: "row",
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
    // width: WIDTH.screenWidth / 1.11,
    // height: HEIGHT.screenHeight / 20,
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
