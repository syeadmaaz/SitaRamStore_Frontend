import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, WIDTH, HEIGHT, FONT } from "../../constants/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AddressCardMain = ({ item, onPress }) => {
  // console.log(item);
  return (
    <View style={styles.cardsContainer}>
      <View style={styles.cardStyle}>
        <View style={styles.content}>
          <Text style={styles.nameText}>{item.name.value}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.fontStyle}>{item.address1.value}</Text>
            <Text style={styles.fontStyle}>{item.address2.value}</Text>
            <Text style={styles.fontStyle}>
              {item.city.value}, {item.state.value}
            </Text>
            <Text style={styles.fontStyle}>PIN: {item.pinCode.value}</Text>
            <Text style={styles.fontStyle}>
              Landmark: {item.landmark.value}
            </Text>
            <Text style={[styles.fontStyle, { color: "red" }]}>
              Mobile: {item.mobile.value}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <MaterialIcons name={"delete"} size={25} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.orange,
  },
  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.addressCardHeight,
    width: WIDTH.addressCardWidth,
    justifyContent: "space-between",
    elevation: 10,
    marginVertical: "3%",
    paddingHorizontal: "6%",
    paddingVertical: "6%",
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  content: {
    height: "78%",
    // backgroundColor: COLORS.slide1
  },
  buttonView: {
    height: "19%",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: COLORS.red,
  },
  editButton: {
    width: "81%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.slide2,
  },
  deleteButton: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
    backgroundColor: COLORS.slide2,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: FONT.f7,
    paddingBottom: "2%",
    color: COLORS.green,
  },
  fontStyle: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: FONT.f8,
    paddingTop: "1%",
    // backgroundColor: "orange"
  },
});

export default AddressCardMain;
