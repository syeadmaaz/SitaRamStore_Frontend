import { React, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../constants/theme";
import Button from "../components/Button/Button";
import TextField from "../components/TextField/TextField";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";

import axios from "../../axios.automate";
import { getCookie } from "../data/Cokkie";

const AddAddressScreen = ({ navigation }) => {
  const [addressData, setAddressData] = useState({
    name: null,
    address1: null,
    address2: null,
    city: null,
    district: null,
    state: null,
    landmark: null,
    pinCode: null,
    mobile: null,
    default: false,
  });
  const [isSelected, setSelected] = useState(false);

  const add = async() => {
    let temp = { ...addressData };
    if(isSelected){
        temp.default = true;
    }
    const cookie = await getCookie();
    console.log(temp);
    axios
      .post("/addAddress", {
        userName: cookie.userName,
        addressData: temp,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        // console.log(e.response.data);
      });
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.formView}
          showsVerticalScrollIndicator={true}
        >
          <TextField
            placeholder={"Name *"}
            keyType={"default"}
            title={"name"}
            addressData={addressData.name}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Address Line 1 *"}
            keyType={"default"}
            title={"address1"}
            addressData={addressData.address1}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Address Line 2"}
            keyType={"default"}
            title={"address2"}
            addressData={addressData.address2}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"City *"}
            keyType={"default"}
            title={"city"}
            addressData={addressData.city}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"District *"}
            keyType={"default"}
            title={"district"}
            addressData={addressData.district}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"State *"}
            keyType={"default"}
            title={"state"}
            addressData={addressData.state}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Landmark *"}
            keyType={"default"}
            title={"landmark"}
            addressData={addressData.landmark}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"PinCode *"}
            keyType={"numeric"}
            title={"pinCode"}
            addressData={addressData.pinCode}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Mobile *"}
            keyType={"numeric"}
            title="mobile"
            addressData={addressData.mobile}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />

          <View style={styles.checkbox}>
            <Checkbox
              status={isSelected ? "checked" : "unchecked"}
              onPress={() => {
                setSelected(!isSelected);
              }}
              color={isSelected ? COLORS.orange : null}
            />
            <Text style={styles.defaultFont}>Set As Default Address</Text>
          </View>
          <View style={styles.buttonView}>
            <Button title="ADD" onPress={add} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    flexDirection: "column",
    paddingVertical: "2%",
    // backgroundColor: COLORS.blue,
  },
  checkbox: {
    flexDirection: "row",
    paddingHorizontal: "4%",
    // backgroundColor: "red"
  },
  defaultFont: {
    alignSelf: "center",
    paddingLeft: "1%",
    fontWeight: "bold",
    color: COLORS.dark,
  },
  buttonView: {
    top: "1.5%",
    paddingBottom: "3%",
    // backgroundColor: "red"
  },
});

export default AddAddressScreen;
