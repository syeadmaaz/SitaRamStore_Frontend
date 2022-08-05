import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const MessageCard = (props) => {
  return (
    <SafeAreaView style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <Text style={styles.fontStyle}>Sorry!</Text>
        <Text style={styles.fontStyle}>{props.message}</Text>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 1.08,
    marginTop: "1%",
    alignItems: "center",
    paddingTop: "20%",
    backgroundColor: COLORS.white,
  },

  cardStyle: {
    height: HEIGHT.cardHeight / 1.1,
    width: WIDTH.cardWidth * 2,
    elevation: 10,
    borderRadius: 20,
    paddingVertical: "12%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange,
  },

  fontStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.white,
    // backgroundColor: "orange",
  },
});

export default MessageCard;
