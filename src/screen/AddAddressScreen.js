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
import axios from "../../axios.automate";
import { getCookie } from "../data/Cokkie";
import { useDispatch } from "react-redux";
import { fetchAddress } from "../redux/features/address/addressSlice";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import TextField from "../components/TextField/TextField";

const AddAddressScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [addressData, setAddressData] = useState({
    name: {
      value: null,
      valid: false,
    },
    address1: {
      value: null,
      valid: false,
    },
    address2: {
      value: null,
      valid: false,
    },
    city: {
      value: "Chhatarpur",
      valid: true,
    },
    district: {
      value: "Chhatarpur",
      valid: true,
    },
    state: {
      value: "Madhya Pradesh",
      valid: true,
    },
    landmark: {
      value: null,
      valid: false,
    },
    pinCode: {
      value: "471001",
      valid: true,
    },
    mobile: {
      value: null,
      valid: false,
    },
    default: {
      value: false,
      valid: true,
    },
  });

  const [isSelected, setSelected] = useState(false);

  const validateMobileNo = (mobile) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(mobile));
  };

  const add = async () => {
    let temp = { ...addressData };
    if (isSelected) {
      temp["default"].value = true;
    }

    if (!validateMobileNo(temp["mobile"].value)) {
      temp["mobile"].valid = false;
    }

    let isValid = true;
    Object.keys(temp).some((item) => {
      isValid = isValid && temp[item].valid;
      // console.log(item, isValid);
      if (!isValid) {
        alert(`Please Fill ${item} Properly`);
        return true;      
      }
      return false;
    });
    // console.log(isValid);

    if (isValid) {
      const cookie = await getCookie();
      console.log(temp);
      axios
        .post("/addAddress", {
          userName: cookie.userName,
          addressData: temp,
        })
        .then((res) => {
          if(res.data.success){
            console.log(res.data.message);
            dispatch(fetchAddress(res.data.address));
            navigation.goBack();
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
  };

  const textFieldHandler = (data, key) => {
    let tempAddress = { ...addressData };
    if (data) {
      tempAddress[key].value = data;
      tempAddress[key].valid = true;
      setAddressData(tempAddress);
    } else {
      if (
        key != "city" ||
        key != "district" ||
        key != "state" ||
        key != "pinCode"
      ) {
        tempAddress[key].value = null;
        tempAddress[key].valid = false;
        setAddressData(tempAddress);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"ADD ADDRESS"}
        name1={"keyboard-backspace"}
        onPress1={() => navigation.goBack()}
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
            addressData={addressData.name.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Address Line 1 *"}
            keyType={"default"}
            title={"address1"}
            addressData={addressData.address1.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Address Line 2"}
            keyType={"default"}
            title={"address2"}
            addressData={addressData.address2.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"City *"}
            keyType={"default"}
            title={"city"}
            addressData={addressData.city.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"District *"}
            keyType={"default"}
            title={"district"}
            addressData={addressData.district.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"State *"}
            keyType={"default"}
            title={"state"}
            addressData={addressData.state.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Landmark *"}
            keyType={"default"}
            title={"landmark"}
            addressData={addressData.landmark.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"PinCode *"}
            keyType={"default"}
            title={"pinCode"}
            addressData={addressData.pinCode.value}
            titleColor={COLORS.dark}
            textColor={COLORS.dark}
            onPress={textFieldHandler}
          />
          <TextField
            placeholder={"Mobile *"}
            keyType={"numeric"}
            title="mobile"
            addressData={addressData.mobile.value}
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
    flex: 1,
    height: "100%",
    backgroundColor: COLORS.white,
  },
  formView: {
    flexDirection: "column",
    paddingVertical: "2%",
    // backgroundColor: COLORS.white,
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
