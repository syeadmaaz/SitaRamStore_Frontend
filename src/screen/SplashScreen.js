import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import { COLORS } from "../constants/theme";
import { getCookie } from "../data/Cokkie";

import axios from "../../axios.automate";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/features/cart/cartSlice";

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const cookie = await getCookie();
      if (cookie) {
        // console.log(cookie);

        axios
          .get("fetchCart", {
            params: {
              userName: cookie.userName,
            },
          })
          .then((res) => {
            if (res.data.success) {
              console.log("Fetching Cart");
              // console.log(res.data.cartDetails);

              dispatch(fetchCart(res.data.cartDetails));
            }
          })
          .catch((err) => {
            setError("Connection Failed !!");
            console.log(err);
          });

        setTimeout(() => {
          cookie.userType == 1
            ? navigation.navigate("ProductStackScreen", {
                screen: "HomeScreen",
              })
            : navigation.navigate("AdminStackScreen", {
                screen: "AdminHomescreen",
              });
        }, 3000);
      } else {
        setTimeout(() => {
          navigation.replace("WelcomeScreen");
        }, 3000);
      }
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.white} />
      <View style={styles.upper}>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          style={styles.image}
        >
          <Text style={styles.appName}>Sita Ram Store</Text>
        </ImageBackground>
      </View>
      <View style={styles.lower}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "grey" }}>
          from
        </Text>
        <Text style={styles.createdby}>SoughtSoft</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  upper: {
    width: "100%",
    height: "90%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    margin: 70,
  },
  appName: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#eb721c",
    alignItems: "center",
    paddingTop: 320,
  },
  lower: {
    width: "100%",
    height: "12%",
    alignItems: "center",
  },
  createdby: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
  },
});

export default SplashScreen;
