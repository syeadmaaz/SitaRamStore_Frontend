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

const RegisterScreen = ({ navigation }) => {
  function back() {
    navigation.goBack();
  }

  const [loading, setLoading] = React.useState(false);

  function signupHandler() {
    navigation.navigate("ProductStackScreen", { screen: "HomeScreen" });
  }

  return (
    <SafeAreaView style={StyleSheet.container}>
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
          />
          <TextInput
            placeholder={"Mobile*"}
            placeholderTextColor={"white"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Email*"}
            placeholderTextColor={"white"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Password*"}
            placeholderTextColor={"white"}
            secureTextEntry={true}
            style={styles.textInput}
          />
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
