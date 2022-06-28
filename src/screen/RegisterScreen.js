import React from "react";
import {
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  function navigate() {
    navigation.goBack();
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
        <Text style={styles.heading}>Create{"\n"}Account</Text>
        <View style={styles.formView}>
          <TextInput
            placeholder={"Name*"}
            placeholderTextColor={"#fff"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Mobile*"}
            placeholderTextColor={"#fff"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Email*"}
            placeholderTextColor={"#fff"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Password*"}
            placeholderTextColor={"#fff"}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textButton} onPress={navigate}>
            <Text style={styles.signUpText}>Sign In</Text>
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
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    marginTop: 65,
    width: "100%",
    resizeMode: "contain",
  },
  buttomView: {
    width: "100%",
    height: "75%",
    backgroundColor: "#000",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  heading: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 20,
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textInput: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#fff",
    height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    color: "#fff",
  },
  button: {
    width: "85%",
    color: "#000",
    height: 52,
    backgroundColor: "#ea721c",
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
    color: "#ea721c",
  },
});

export default RegisterScreen;
