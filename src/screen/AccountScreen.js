import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
import { DrawerActions } from "@react-navigation/native";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"ACCOUNT"}
        name1={"sort-variant"}
        // name2={"cart-outline"}
        onPress1={() => navigation.dispatch(DrawerActions.openDrawer())}
        // onPress2={() => {
        //   [navigation.navigate("CartScreen"), console.log("CART")];
        // }}
      />
      <Text>Hi This Is Account Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default AccountScreen;
