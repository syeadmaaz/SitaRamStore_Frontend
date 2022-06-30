import React, { useState } from "react";
import {
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";
import { COLORS } from "../constants/theme";

const LoginScreen = ({ navigation }) => {
  function navigate() {
    navigation.navigate("RegisterScreen");
  }

  const [loading, setLoading] = React.useState(false);

  function signinHandler() {
    navigation.navigate("ProductStackScreen", { screen: "HomeScreen" });
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
            placeholderTextColor={"white"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Password*"}
            placeholderTextColor={"white"}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.button} onPress={signinHandler}>
            {loading ? (
              <ActivityIndicator size={30} />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
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
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    marginTop: 80,
    width: "100%",
    resizeMode: "contain",
  },
  buttomView: {
    width: "100%",
    height: "60%",
    backgroundColor: COLORS.orange,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 40,
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
    borderWidth: 2,
    fontWeight: "bold",
    borderColor: "white",
    height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    color: "white",
  },
  button: {
    width: "85%",
    color: "black",
    height: 52,
    backgroundColor: "white",
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
    color: "white",
  },
});

export default LoginScreen;
