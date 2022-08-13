import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { COLORS } from "../constants/theme";
import { DrawerActions } from "@react-navigation/native";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"NOTIFICATIONS"}
        name1={"keyboard-backspace"}
        // name2={"cart-outline"}
        onPress1={() => navigation.goBack()}
        // onPress2={() => {
        //   [navigation.navigate("CartScreen"), console.log("CART")];
        // }}
      />
      <Text>Hi This Is Notification Page</Text>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container :{
    alignItems: "center"
  },
})

export default NotificationScreen;
