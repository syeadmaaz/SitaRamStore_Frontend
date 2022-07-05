import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import {slides} from "../data/IntroData";

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
        <StatusBar/>
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
