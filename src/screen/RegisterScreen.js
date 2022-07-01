import React from "react";
import {
  Text,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { COLORS } from "../constants/theme";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "../../axios.automate";

const RegisterScreen = ({ navigation }) => {
  function back() {
    navigation.goBack();
  }

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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

  const textFieldHandler = (data, type) => {
    console.log(data,type)
    if (type === 1) {
      if (data) {
        const tempUserData = { ...userData };
        tempUserData.name.value = data;
        tempUserData.name.isValid = true;
        setUserData(tempUserData);
      } else {
        const tempUserData = { ...userData };
        tempUserData.name.value = data;
        tempUserData.name.isValid = false;
        setUserData(tempUserData);
      }
    }
    if (type === 2) {
      if (data) {
        const tempUserData = { ...userData };
        tempUserData.mobile.value = data;
        tempUserData.mobile.isValid = true;
        setUserData(tempUserData);
      } else {
        const tempUserData = { ...userData };
        tempUserData.mobile.value = data;
        tempUserData.mobile.isValid = false;
        setUserData(tempUserData);
      }
    }
    if (type === 3) {
      if (data) {
        const tempUserData = { ...userData };
        tempUserData.email.value = data;
        tempUserData.email.isValid = true;
        setUserData(tempUserData);
      } else {
        const tempUserData = { ...userData };
        tempUserData.email.value = data;
        tempUserData.email.isValid = false;
        setUserData(tempUserData);
      }
    }
    if (type === 4) {
      if (data) {
        const tempUserData = { ...userData };
        tempUserData.password.value = data;
        tempUserData.password.isValid = true;
        setUserData(tempUserData);
      } else {
        const tempUserData = { ...userData };
        tempUserData.password.value = data;
        tempUserData.password.isValid = false;
        setUserData(tempUserData);
      }
    }
  };

  function signupHandler() {
    console.log("Sign-Up Clicked");
    let valid = true;
    valid =
      valid &&
      userData.name.isValid &&
      userData.email.isValid &&
      userData.mobile.isValid &&
      userData.password.isValid;
    console.log(valid)
    console.log(userData);
    if (valid) {
      setLoading(true);
      axios
        .post("/register", {
          name: userData.name.value,
          mobile: userData.mobile.value,
          email: userData.email.value,
          password: userData.password.value,
        })
        .then((response) => {
          setLoading(false);
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
          setError("Invalid Credentials");
          setTimeout(() => {
            setError(null);
          }, 2000);
        });
    } else {
      setError("Please fill the fields properly");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }

    // navigation.navigate("ProductStackScreen", { screen: "HomeScreen" });
  }

  return (
    <SafeAreaView style={StyleSheet.container}>
      <StatusBar />
      <View style={styles.topView}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <ScrollView
        style={styles.buttomView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.back}>
          <TouchableOpacity onPress={back}>
            <Icon
              name="chevron-back-outline"
              style={styles.backIcon}
              //   color="black"
              color="white"
              size={35}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>Create{"\n"}Account</Text>
        <View style={styles.formView}>
          <TextInput
            placeholder={"Name*"}
            placeholderTextColor={"white"}
            style={styles.textInput}
            value={userData.name.value}
            onChangeText={(text) => textFieldHandler(text, 1)}
          />
          <TextInput
            placeholder={"Mobile*"}
            placeholderTextColor={"white"}
            style={styles.textInput}
            value={userData.mobile.value}
            onChangeText={(text) => textFieldHandler(text, 2)}
          />
          <TextInput
            placeholder={"Email*"}
            placeholderTextColor={"white"}
            style={styles.textInput}
            value={userData.email.value}
            onChangeText={(text) => textFieldHandler(text, 3)}
          />
          <TextInput
            placeholder={"Password*"}
            placeholderTextColor={"white"}
            secureTextEntry={true}
            style={styles.textInput}
            value={userData.password.value}
            onChangeText={(text) => textFieldHandler(text, 4)}
          />

          {error != null ? <TextInput value={error} /> : null}

          <TouchableOpacity style={styles.button} onPress={signupHandler}>
            {loading ? (
              <ActivityIndicator size={30} />
            ) : (
              <Text style={styles.buttonText}>Sign Up</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    height: "28%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    marginTop: 75,
    width: "100%",
    resizeMode: "contain",
  },
  buttomView: {
    width: "100%",
    height: "72%",
    backgroundColor: COLORS.orange,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  back: {
    marginStart: 20,
    marginTop: 10,
    width: 40,
    height: 40,
    // backgroundColor: "white",
    // borderRadius: 40/2
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
