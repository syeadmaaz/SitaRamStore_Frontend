import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const CategoryCard = ({item, onPress}) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
          <Image source={item.img} style={styles.imgStyling} />
          <Text style={styles.fontStyle}>{item.name}</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth / 2,
    position: "relative",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.orange,
  },

  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.cardHeight,
    width: WIDTH.cardWidth,
    elevation: 10,
    padding: 10,
    marginVertical: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  imgStyling: {
    display: "flex",
    width: WIDTH.imageWidth,
    height: HEIGHT.imageHeight,
    borderRadius: 10,
    margin: "4%",
    alignItems: "center",
    // backgroundColor: "orange",
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

export default CategoryCard;
