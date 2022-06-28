import React, { useState } from "react";
import {
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  function navigate() {
    navigation.navigate("RegisterScreen");
  }

  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={styles.topView}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={styles.buttomView}>
        <Text style={styles.heading}>Welcome{"\n"}Back !</Text>
        <View style={styles.formView}>
          <TextInput
            placeholder={"Email/Phone*"}
            placeholderTextColor={"#fff"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Password*"}
            placeholderTextColor={"#fff"}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textButton} onPress={navigate}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
  },
  topView: {
    width: "100%",
    height: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    marginTop: 70,
    width: "100%",
    resizeMode: "contain",
  },
  buttomView: {
    width: "100%",
    height: "65%",
    backgroundColor: "#000",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  heading: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 50,
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textInput: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#fff",
    height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    color: "#fff",
  },
  button: {
    width: "85%",
    color: "#000",
    height: 52,
    backgroundColor: "#ea721c",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ea721c",
  },
});

export default LoginScreen;
