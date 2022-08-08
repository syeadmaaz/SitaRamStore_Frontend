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
import axios from "../../axios.automate";
import { setCookie } from "../data/Cokkie";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/features/cart/cartSlice";
import AppStatusBar from "../components/AppStatusBar/AppStatusBar";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function sigupHandler() {
    navigation.navigate("RegisterScreen");
  }

  const [loading, setLoading] = React.useState(false);
  const [loginData, setLoginData] = React.useState({
    userName: null,
    password: null,
  });

  const textFieldHandler = (data, key) => {
    let tempLoginData = { ...loginData };
    if (data) {
      tempLoginData[key] = data;
      setLoginData(tempLoginData);
    } else {
      tempLoginData[key] = null;
      setLoginData(tempLoginData);
    }
  };

  function signinHandler() {
    // console.log(loginData);
    setLoading(true);
    axios
      .post("/login", {
        userName: loginData.userName,
        password: loginData.password,
      })
      .then((response) => {
        setLoading(false);
        // console.log(response.data);
        if (response.status == 201 && response.data.userType == 1) {
          // console.log(response.data);
          setCookie(loginData.userName, response.data.userType);

          // fetchCart(loginData.userName);
          
          navigation.navigate("ProductStackScreen", {
            screen: "HomeScreen",
          });
        } else if (response.status == 201 && response.data.userType == 0) {
          setCookie(loginData.userName, response.data.userType);

          navigation.navigate("AdminStackScreen", {
            screen: "AdminHomescreen",
          });
        } else {
          alert(response.data.error);
        }
      })
      .catch((e) => {
        console.log(e.response.data);
        setLoading(false);
        alert(e.response.data.error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.white} />
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
            keyboardType="default"
            autoCapitalize={"none"}
            style={styles.textInput}
            value={loginData.userName}
            onChangeText={(text) => textFieldHandler(text, "userName")}
          />
          <TextInput
            placeholder={"Password*"}
            placeholderTextColor={"white"}
            keyboardType="default"
            autoCapitalize={"none"}
            secureTextEntry={true}
            style={styles.textInput}
            value={loginData.password}
            onChangeText={(text) => textFieldHandler(text, "password")}
          />
          {/* {error != null ? <TextInput value={error} /> : null} */}
          <TouchableOpacity style={styles.button} onPress={signinHandler}>
            {loading ? (
              <ActivityIndicator size={30} />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.textButton} onPress={sigupHandler}>
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
    backgroundColor: COLORS.white,
  },
  topView: {
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  imageStyle: {
    marginTop: "10%",
    resizeMode: "contain",
  },
  buttomView: {
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: COLORS.orange,
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
