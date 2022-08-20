import { React } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { WIDTH, HEIGHT, COLORS } from "../../constants/theme";
const TextField = (props) => {
  // console.log(props)
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.titleColor}
        keyboardType={props.keyType}
        style={styles.textInput}
        color={props.textColor}
        value={props.addressData}
        onChangeText={(text) => props.onPress(text, props.title)}
      />    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH.screenWidth,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "6%",
    paddingVertical: "3%",
    // backgroundColor: COLORS.red,
  },
  textInput: {
    width: "100%",
    height: HEIGHT.screenHeight / 15,
    paddingLeft: "5%",
    borderWidth: 2,
    // fontWeight: "bold",
    borderRadius: 10,
    // color: COLORS.dark,
    borderColor: COLORS.orange,
  }
});

export default TextField;
