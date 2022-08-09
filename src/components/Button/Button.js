import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLORS, HEIGHT, WIDTH } from "../../constants/theme";

const Button = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={onPress}>
        <Text style={styles.btnText}>PLACE ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 12,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.slide2,
  },

  button: {
    width: WIDTH.buttonWidth,
    height: HEIGHT.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: COLORS.orange,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default Button;
