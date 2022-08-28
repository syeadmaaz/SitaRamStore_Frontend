import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const CategoryCard = ({ item, onPress }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <TouchableOpacity activeOpacity={0.3} onPress={onPress}>
          <View style={styles.touchView}>
            <Image
              source={{ uri: item.categoryImage }}
              style={styles.imgStyling}
            />
            <Text style={styles.fontStyle}>{item.categoryName}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth / 2,
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.cardHeight,
    width: WIDTH.cardWidth,
    elevation: 10,
    marginVertical: "10%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  touchView: {
    alignItems: "center",
    width: WIDTH.cardWidth,
    height: HEIGHT.cardHeight,
    paddingHorizontal: "10%",
    paddingTop: "10%",
    // backgroundColor: COLORS.red
  },
  imgStyling: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 10,
    // backgroundColor: "orange",
  },

  fontStyle: {
    fontSize: 15,
    fontWeight: "bold",
    width: WIDTH.imageWidth,
    height: "25%",
    top: "6%",
    // backgroundColor: "orange"
  },
});

export default CategoryCard;
