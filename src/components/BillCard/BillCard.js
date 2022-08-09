import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, FONT, WIDTH, HEIGHT } from "../../constants/theme";

const BillCard = ({
  title,
  totalItems,
  totalPrice,
  totalMRP,
  totalDiscount,
}) => {
  let delivery = 0;
  var discountPercent = Math.round((totalDiscount / totalMRP) * 100);
  // console.log(discountPercent)

  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <View style={{ paddingBottom: "4%" }}>
          <Text style={styles.title}>
            {"               "}
            {title}
            {"               "}
          </Text>
        </View>

        <View style={styles.upper}>
          <View style={styles.upperLeft}>
            <Text style={styles.textFont}>Items: </Text>
          </View>
          <View style={styles.upperRight}>
            <Text style={styles.textFont}>{totalItems}</Text>
          </View>
        </View>
        <View style={styles.upper}>
          <View style={styles.upperLeft}>
            <Text style={styles.textFont}>Delivery: </Text>
          </View>
          <View style={styles.upperRight}>
            <Text style={styles.textFont}>
              {"\u20B9"}
              {delivery}
            </Text>
          </View>
        </View>
        <View style={styles.upper}>
          <View style={styles.upperLeft}>
            <Text style={styles.textFont}>Total: </Text>
          </View>
          <View style={styles.upperRight}>
            <Text style={styles.textFont}>
              {"\u20B9"}
              {totalPrice}
            </Text>
          </View>
        </View>
        <View style={styles.upper}>
          <View style={styles.upperLeft}>
            <Text style={styles.totalFont}>Order Total: </Text>
          </View>
          <View style={styles.upperRight}>
            <Text style={styles.totalFont}>
              {"\u20B9"}
              {totalPrice + delivery}
            </Text>
          </View>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.lower}>
          <View style={styles.savings}>
            <Text style={styles.discountText}>
              Your Savings: {"\u20B9"}
              {totalDiscount}  ({discountPercent}%)
            </Text>
          </View>
          <View style={styles.savingPoints}>
            <Text style={styles.pointText}>{"\u2B24"}   Quality Product</Text>
            <Text style={styles.pointText}>{"\u2B24"}   Free Delivery</Text>
            <Text style={styles.pointText}>{"\u2B24"}   Item Discount</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth,
    alignItems: "center",
    justifyupper: "center",
    // backgroundColor: COLORS.green,
  },
  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.billCardHeight,
    width: WIDTH.productCardWidth,
    justifyupper: "center",
    alignItems: "center",
    elevation: 10,
    marginVertical: "4%",
    paddingVertical: "4%",
    paddingHorizontal: "6%",
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: "4%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    // backgroundColor: "orange"
  },
  upper: {
    flexDirection: "row",
    marginTop: "3%",
    paddingHorizontal: "1%",
    // backgroundColor: "black",
  },
  upperLeft: {
    width: "60%",
    alignItems: "flex-start",
    // backgroundColor: "red",
  },
  upperRight: {
    width: "40%",
    alignItems: "flex-end",
    // backgroundColor: "green",
  },
  textFont: {
    fontSize: 17,
    fontFamily: FONT.f10,
  },
  totalFont: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: FONT.f7,
  },
  separator: {
    marginTop: "6%",
    marginBottom: "6%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  discountText: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: FONT.f8,
    color: COLORS.red,
  },
  lower: {
    flexDirection: "column",
  },
  savingPoints: {
    paddingLeft: "10%",
  },
  pointText: {
    marginTop: "4%",
    // fontWeight: "bold",
    fontSize: 15,
    fontFamily: FONT.f7,
  },
});

export default BillCard;
