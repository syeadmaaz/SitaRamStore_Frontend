import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const EditProduct = ({ item }) => {

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.cardStyle}>
        <Image source={{ uri: item.productImage }} style={styles.imgStyling} />
        <View style={styles.cardRight}>
          <View style={styles.Text}>
            <Text style={styles.prodTitle}>{item.productName}</Text>
            <Text style={styles.prodDesc}>{item.productDescription}</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ padding: "2%" }}>
                  MRP
                  {/* MRP-  <Icon name="rupee" style={{fontSize:14}} /> */}
                  {/* {item.price} */}
                </Text>
                <Text
                  style={{
                    padding: "2%",
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  {" "}
                  {item.productMRP}{" "}
                </Text>
                <Text style={{ padding: "2%", color: "green" }}>
                  {item.productPrice}
                </Text>
              </View>

              <Text style={{ padding: "2%", color: "red" }}>
                ( -{" "}
                {Math.round(
                  ((item.productMRP - item.productPrice) * 100) /
                    item.productMRP
                )}
                % )
              </Text>
            </View>
          </View>
          {/* <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonView}
            onPress={onPress}
          >
            <Text style={styles.btnText}>Add To Cart</Text>
          </TouchableOpacity> */}
          <View style={styles.flexing}>
          <TouchableOpacity activeOpacity={0.2}>
            <FontAwesome name={"edit"} size={25} color={COLORS.orange} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.2}>
            <MaterialIcons name={"delete"} size={25} color={COLORS.orange} />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 4.4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    // backgroundColor: COLORS.orange,
  },
  cardStyle: {
    flex: 1,
    flexDirection: "row",
    width: WIDTH.productCardWidth,
    height: HEIGHT.productCardHeight,
    alignItems: "center",
    borderRadius: 20,
    elevation: 10,
    marginVertical: "1%",
    overflow: "hidden",
    backgroundColor: COLORS.white,
  },
  imgStyling: {
    width: "35%",
    height: "85%",
    borderRadius: 20,
    margin: "3%",
    resizeMode: "contain",
    // backgroundColor: "orange",
  },

  cardRight: {
    flexDirection: "column",
    width: "55%",
    height: "85%",
    padding: "2%",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "green",
  },
  Text: {
    height: "63%",
    width: "100%",
    // backgroundColor: "red",
  },
  prodTitle: {
    height: "32%",
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
    // backgroundColor:"orange"
  },
  prodDesc: {
    height: "40%",
    fontSize: 11,
    justifyContent: "center",
    color: COLORS.grey,
    // backgroundColor:"green"
  },
  price: {
    height: "30%",
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.green,
    // backgroundColor:"pink"
  },
  buttonView: {
    width: "100%",
    height: "30%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange,
  },
  btnText: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.white,
  },
  flexing: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default EditProduct;
