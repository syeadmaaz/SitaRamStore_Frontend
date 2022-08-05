import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const MessageCard = ({ item, onPress }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <Text>Sorry!</Text>
        <Text>There are No Products</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 5,
    position: "relative",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.orange,
  },

  cardStyle: {
    flexDirection: "column",
    // height: HEIGHT.cardHeight,
    // width: WIDTH.cardWidth,
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

export default MessageCard;
