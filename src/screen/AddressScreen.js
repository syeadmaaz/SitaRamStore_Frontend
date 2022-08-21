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
import AddButton from "../components/AddButton/AddButton";

const AddressScreen = ({navigation}) => {
  function add(){
    navigation.navigate("AddAddressScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"ADDRESS"}
        name1={"sort-variant"}
        // name2={"cart-outline"}
        onPress1={() => navigation.dispatch(DrawerActions.openDrawer())}
        // onPress2={() => {
        //   [navigation.navigate("CartScreen"), console.log("CART")];
        // }}
      />
      {/* <Text>Hi This Is Address Page</Text> */}
      <AddButton onPress={add}/>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container :{
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.white,
  },
})

export default AddressScreen;
