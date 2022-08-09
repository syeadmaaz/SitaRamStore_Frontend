import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const AddressCard = ({ item, onPress }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <Text style={styles.fontStyle}></Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.blue,
  },

  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.adressCardHeight,
    width: WIDTH.productCardWidth,
    elevation: 10,
    padding: 10,
    marginVertical: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  fontStyle: {
    fontSize: 15,
    fontWeight: "bold",
    width: WIDTH.imageWidth + 5,
    height: WIDTH.cardWidth / 3 - 2,
    paddingTop: "5%",
    paddingLeft: "4%",
    // backgroundColor: "orange"
  },
});

export default AddressCard;
