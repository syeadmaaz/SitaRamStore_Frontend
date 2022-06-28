import React from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("WelcomeScreen");
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
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
        <Text style={styles.createdby}>Sought Soft</Text>
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
    backgroundColor: "#ddd",
  },
  upper: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    // backgroundColor: "gray",
  },
  image: {
    width: "100%",
    height: "80%",
    alignItems: 'center',
    margin: 70,
    // backgroundColor: "#000",
  },
  appName: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#eb721c",
    alignItems:'center',
    paddingTop: 320
  },
  lower: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    // backgroundColor: "green",
  },
  createdby: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
  },
});

export default SplashScreen;
