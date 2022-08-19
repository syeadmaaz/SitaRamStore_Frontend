import { React, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
// import Checkbox from 'expo-checkbox';
// import CheckBox from "@react-native-community/checkbox";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import Button from "../components/Button/Button";

import TextField from "../components/TextField/TextField";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";

const AddAddressScreen = ({ navigation }) => {
  const [addressData, setAddressData] = useState({
    address1: null,
    address2: null,
    city: null,
    district: null,
    state: null,
    landmark: null,
    pinCode: null,
    mobile: null,
    default: null,
  });
  const [isSelected, setSelected] = useState(false);

  const add = () => {
    let temp = { ...addressData };
    console.log(temp);
  };

  const textFieldHandler = (data, key) => {
    let tempAddress = { ...addressData };
    if (data) {
      tempAddress[key] = data;
      setAddressData(tempAddress);
    } else {
      tempAddress[key] = null;
      setAddressData(tempAddress);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"ADD ADDRESS"}
        name1={"keyboard-backspace"}
        // name2={"cart-outline"}
        onPress1={() => navigation.goBack()}
        // onPress2={() => {
        //   [navigation.navigate("CartScreen"), console.log("CART")];
        // }}
      />

      <ScrollView contentContainerStyle={styles.formView}>
        <TextField
          placeholder={"Address Line 1 *"}
          keyType={"default"}
          key={"address1"}
          addressData={addressData.address1}
          onPress={textFieldHandler}
        />
        <TextField
          placeholder={"Address Line 2"}
          keyType={"default"}
          key={"address2"}
          addressData={addressData.address2}
          onPress={textFieldHandler}
        />
        <TextField
          placeholder={"City *"}
          keyType={"default"}
          key={"city"}
          addressData={addressData.city}
          onPress={textFieldHandler}
        />
        <TextField
          placeholder={"District *"}
          keyType={"default"}
          key={"district"}
          addressData={addressData.district}
          onPress={textFieldHandler}
        />
        <TextField
          placeholder={"State *"}
          keyType={"default"}
          key={"state"}
          addressData={addressData.state}
          onPress={textFieldHandler}
        />
        <TextField
          placeholder={"Landmark *"}
          keyType={"default"}
          key={"landmark"}
          addressData={addressData.landmark}
          onPress={textFieldHandler}
        />
        <TextField
          placeholder={"PinCode *"}
          keyType={"numeric"}
          key={"pinCode"}
          addressData={addressData.pinCode}
          onPress={textFieldHandler}
        />
        <TextField
          placeholder={"mobile *"}
          keyType={"numeric"}
          key={"mobile"}
          addressData={addressData.mobile}
          onPress={textFieldHandler}
        />
        {/* <Checkbox
          style={styles.checkbox}
          disabled={false}
          value={isSelected}
          onValueChange={setSelected}
          color={isSelected ? "#4630EB" : undefined}
        /> */}
        {/* <CheckBox
          value={isSelected}
          onChange={() => setSelected(!isSelected)}
        /> */}
        <View style={styles.buttonView}>
          <Button title="ADD" onPress={add} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    // backgroundColor: COLORS.primary
  },
  formView: {
    // position: "relative",
    flex: 1,
    paddingVertical: "3%",
    height: "100%",
    // backgroundColor: COLORS.blue,
  },
  checkbox: {
    alignSelf: "center",
  },
  buttonView: {
    top: "5%",
    // backgroundColor: "red"
  },
});

export default AddAddressScreen;
