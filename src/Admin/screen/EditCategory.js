import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "../../../axios.automate";

// const goToProductsScreen = (item) => {
//     console.log(item.categoryID);
//     axios
//       .get("getProduct", {
//         params: {
//           categoryID: item.categoryID,
//         },
//       })
//       .then((res) => {
//         if (res.data.success) {
//           console.log(res.data.productItems);
//           setProducts(res.data.productItems);

//           navigation.navigate("AdminStackScreen", {
//             screen: "AddProduct",
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

const EditCategory = ({ item, onPressNavigate, onPressDelete }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <TouchableOpacity activeOpacity={0.2} onPress={onPressNavigate}>
          <Image
            source={{ uri: item.categoryImage }}
            style={styles.imgStyling}
          />
          <Text style={styles.fontStyle}>{item.categoryName}</Text>
        </TouchableOpacity>
        <View style={styles.flexing}>
          <TouchableOpacity activeOpacity={0.2}>
            <FontAwesome name={"edit"} size={25} color={COLORS.orange} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.2} onPress={onPressDelete}>
            <MaterialIcons name={"delete"} size={25} color={COLORS.orange} />
          </TouchableOpacity>
        </View>
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
    height: HEIGHT.adminCategoryCardHeight,
    width: WIDTH.cardWidth,
    elevation: 10,
    marginVertical: "9%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  imgStyling: {
    display: "flex",
    width: WIDTH.imageWidth,
    height: HEIGHT.imageHeight,
    borderRadius: 10,
    top: "10%",
    marginHorizontal: "4%",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  fontStyle: {
    fontSize: 15,
    fontWeight: "bold",
    height: HEIGHT.imageHeight / 2.5,
    top: "15%",
    paddingLeft: "4%",
    // backgroundColor: "orange"
  },
  flexing: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "3%",
    top: "17%",
    // backgroundColor: "grey"
  },
});

export default EditCategory;
