import React from "react";
import {
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { COLORS } from "../constants/theme";
import Icon from "react-native-vector-icons/Ionicons";
import { setCookie } from "../data/Cokkie";
import axios from "../../axios.automate";
import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";

const AccountScreen = () => {
  return (
    <SafeAreaView>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"ACCOUNT"}
        // name1={"keyboard-backspace"}
        // name2={"cart-outline"}
        // onPress1={() => navigation.goBack()}
        // onPress2={() => {
        //   [navigation.navigate("CartScreen"), console.log("CART")];
        // }}
      />
      <Text>Hi This Is Account Page</Text>
    </SafeAreaView>
  );
};

export default AccountScreen;
