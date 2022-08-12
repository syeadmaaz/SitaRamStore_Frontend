import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT, FONT } from "../../constants/theme";

const AddressCard = ({ item, index, onPress }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.fontStyle}>{item.address1}</Text>
        <Text style={styles.fontStyle}>{item.address2}</Text>
        <Text style={styles.fontStyle}>{item.city}, Madhya Pradesh</Text>
        <Text style={styles.fontStyle}>PIN - {item.pinCode}</Text>
        <Text style={styles.fontStyle}>Landmark: {item.landmark}</Text>
        <Text style={[styles.fontStyle, {color:"red"}]}>Mobile: {item.mobile}</Text>
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
    paddingVertical: "4%",
    paddingHorizontal: "6%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: COLORS.blue,
  },

  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: FONT.f8,
    color: COLORS.green
    // backgroundColor: "orange"
  },
  fontStyle: {
    // marginTop: "1%",
    fontSize: 15,
    fontFamily: FONT.f7,
  },
});

export default AddressCard;
