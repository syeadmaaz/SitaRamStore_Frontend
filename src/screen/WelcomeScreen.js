import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "s1",
    text: "Select wide range of products from fresh milk to delicious snacks",
    title: "Order Online",
    image: require("../assets/images/6.png"),
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Best Deals",
    text: "Start buying in best prices Don't be slow Our products are the best",
    image: require("../assets/images/5.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Fast Doorstep Deliveries",
    text: "Our delivery executive will deliver your order in under 24 hours",
    image: require("../assets/images/4.png"),
    backgroundColor: "#f56b2a",
  },
];

const WelcomeScreen = ({ navigation }) => {
  function navigate() {
    navigation.navigate("AuthStackScreen", { screen: "LoginScreen" });
  }

  const onDone = () => {
    navigate();
  };
  const onSkip = () => {
    navigate();
  };

  const RenderItem = ({ item }) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 80,
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </SafeAreaView>
    );
  };

  return (
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        showSkipButton={true}
        onSkip={onSkip}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 600,
    height: 600,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    // paddingVertical: 30,
    paddingHorizontal: 50,
    marginBottom: 70,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 120,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
