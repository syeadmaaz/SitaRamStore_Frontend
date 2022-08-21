import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT, FONT } from "../../constants/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
          <View style={styles.addView}>
            <Icon name={"add"} size={60} color={"black"} />
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.red,
  },
  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.addButton,
    width: WIDTH.productCardWidth,
    elevation: 10,
    marginVertical: "4%",
    paddingHorizontal: "6%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.blue,
  },
  addView: {
    width: WIDTH.productCardWidth,
    height: HEIGHT.addButton,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.blue,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: FONT.f8,
    color: COLORS.green,
    // backgroundColor: "orange"
  },
  fontStyle: {
    fontSize: 15,
    fontFamily: FONT.f7,
  },
});

export default AddButton;
