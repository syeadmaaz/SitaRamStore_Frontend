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

const RegisterScreen = ({ navigation }) => {
  function back() {
    navigation.goBack();
  }

  const [loading, setLoading] = React.useState(false);

  const [userData, setUserData] = React.useState({
    name: {
      value: null,
      isValid: false,
    },
    email: {
      value: null,
      isValid: false,
    },
    mobile: {
      value: null,
      isValid: false,
    },
    password: {
      value: null,
      isValid: false,
    },
  });

  const textFieldHandler = (data, key) => {
    // console.log(data, key);
    if (data) {
      let tempUserData = { ...userData };
      tempUserData[key].value = data;
      tempUserData[key].isValid = true;
      setUserData(tempUserData);
    } else {
      const tempUserData = { ...userData };
      tempUserData[key].value = null;
      tempUserData[key].isValid = false;
      setUserData(tempUserData);
    }
  };

  function signupHandler() {
    let temp = { ...userData };
    // console.log(temp);

    let isValid = true;
    Object.keys(temp).map((item) => {
      isValid = isValid && temp[item].isValid;
    });

    console.log(isValid);

    if (isValid) {
      console.log(userData);
      setLoading(true);
      axios
        .post("/register", {
          name: userData.name.value,
          mobile: userData.mobile.value,
          email: userData.email.value,
          password: userData.password.value,
          userType: 1,
        })
        .then((response) => {
          setLoading(false);
          if (response.status == 201) {
            console.log(response.data);
            setCookie(response.data.userName, response.data.userType);

            navigation.navigate("ProductStackScreen", { screen: "HomeScreen" });
          } else {
            console.log(response.data.error);
            alert(response.data.error);
          }
        })
        .catch((e) => {
          // console.log(e.response.data);
          setLoading(false);
          alert(e.response.data.error);
        });
    } else {
      alert("Please Fill The Fields Properly !");
    }
  }

  return (
    <SafeAreaView style={StyleSheet.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.white} />
      <View style={styles.topView}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/logo.png")}
        />
      </View>

      <View style={styles.bottomView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.back}>
            <TouchableOpacity onPress={back}>
              <Icon
                name="chevron-back-outline"
                style={styles.backIcon}
                color="white"
                size={35}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.heading}>Create{"\n"}Account</Text>
          {/* <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      > */}
          <View style={styles.formView}>
            <TextInput
              placeholder={"Name*"}
              placeholderTextColor={"white"}
              keyboardType="default"
              autoCapitalize={"none"}
              style={styles.textInput}
              value={userData.name.value}
              onChangeText={(text) => textFieldHandler(text, "name")}
            />
            <TextInput
              placeholder={"Mobile*"}
              placeholderTextColor={"white"}
              keyboardType="numeric"
              autoCapitalize={"none"}
              style={styles.textInput}
              value={userData.mobile.value}
              onChangeText={(text) => textFieldHandler(text, "mobile")}
            />
            <TextInput
              placeholder={"Email*"}
              placeholderTextColor={"white"}
              keyboardType="default"
              autoCapitalize={"none"}
              style={styles.textInput}
              value={userData.email.value}
              onChangeText={(text) => textFieldHandler(text, "email")}
            />
            <TextInput
              placeholder={"Password*"}
              placeholderTextColor={"white"}
              keyboardType="default"
              autoCapitalize={"none"}
              secureTextEntry={true}
              style={styles.textInput}
              value={userData.password.value}
              onChangeText={(text) => textFieldHandler(text, "password")}
            />

            {/* {error != null ? <TextInput value={error} /> : null} */}

            <TouchableOpacity style={styles.button} onPress={signupHandler}>
              {loading ? (
                <ActivityIndicator size={30} />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    height: "23%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.yellow
  },
  imageStyle: {
    marginTop: "10%",
    width: "100%",
    resizeMode: "contain",
    backgroundColor: COLORS.white,
  },
  bottomView: {
    width: "100%",
    height: "77%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: COLORS.orange,
  },
  back: {
    marginStart: 20,
    marginTop: 10,
    width: 40,
    height: 40,
  },
  backIcon: {
    padding: 2,
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textInput: {
    color: "white",
    fontWeight: "bold",
    width: "85%",
    borderWidth: 2,
    borderColor: "white",
    height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
  },
  button: {
    width: "85%",
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

export default RegisterScreen;
