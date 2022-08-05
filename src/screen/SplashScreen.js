import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import { COLORS } from "../constants/theme";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getData();
      if (response) {
        setTimeout(() => {
          response.userType == 1
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

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@userData");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

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
