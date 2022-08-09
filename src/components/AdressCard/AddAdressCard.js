import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT, FONT } from "../../constants/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

const AddAddressCard = ({ onPress }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.addView}>
            <Icon
              name={"add"}
              size={70}
              color={"black"}
              onPress={console.log("ADD ADDRESS")}
            />
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
    height: HEIGHT.adressCardHeight,
    width: WIDTH.productCardWidth,
    elevation: 10,
    marginVertical: "4%",
    paddingHorizontal: "6%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.blue,
  },
  addView: {
    width: WIDTH.productCardWidth,
    height: HEIGHT.adressCardHeight,
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
    // marginTop: "1%",
    fontSize: 15,
    fontFamily: FONT.f7,
  },
});

export default AddAddressCard;
