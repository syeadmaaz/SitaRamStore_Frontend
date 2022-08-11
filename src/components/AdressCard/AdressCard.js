import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { COLORS, WIDTH, HEIGHT, FONT } from "../../constants/theme";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

function selectAddress() {
  console.log("selected");
}

function editAddress() {
  console.log("edit");
}

function deleteAddress() {
  console.log("Delete");
}

const AddressCard = ({ item, onPress }) => {
  return (
    <View style={styles.cardsContainer}>
      <Card style={styles.cardStyle}>
        <View style={styles.content}>
          <Text style={styles.nameText}>{item.name}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.fontStyle}>{item.address1}</Text>
            <Text style={styles.fontStyle}>{item.address2}</Text>
            <Text style={styles.fontStyle}>
              {item.city}, {item.state}
            </Text>
            <Text style={styles.fontStyle}>PIN - {item.pinCode}</Text>
            <Text style={styles.fontStyle}>Landmark: {item.landmark}</Text>
            <Text style={[styles.fontStyle, { color: "red" }]}>
              Mobile: {item.mobile}
            </Text>
          </ScrollView>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            activeOpacity={0.3}
            style={[
              styles.button,
              { backgroundColor: item.selected ? COLORS.grey : COLORS.yellow },
            ]}
            disabled={item.selected}
            onPress={() => selectAddress()}
          >
            <Text style={styles.btnText}>
              {item.selected ? "SELECTED" : "SELECT"}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => editAddress()}
        style={styles.editButton}
      >
        <FontAwesome name="edit" size={20} color="red" bold />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => deleteAddress()}
        style={styles.deleteButton}
      >
        <MaterialIcons name="delete" size={25} color="red" bold />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: WIDTH.screenWidth,
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: COLORS.red,
  },
  cardStyle: {
    flexDirection: "column",
    height: HEIGHT.adressCardHeight,
    width: WIDTH.productCardWidth,
    elevation: 10,
    marginVertical: "3%",
    paddingVertical: "3%",
    paddingHorizontal: "6%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: COLORS.blue,
  },
  content: {
    height: "78%",
    marginBottom: "2%",
    // backgroundColor: COLORS.red
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: FONT.f8,
    color: COLORS.green,
    // backgroundColor: "orange"
  },
  fontStyle: {
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: FONT.f7,
  },
  buttonView: {
    width: WIDTH.productCardWidth / 1.16,
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.green,
  },
  button: {
    width: WIDTH.buttonWidth / 2,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    // backgroundColor: COLORS.yellow,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  editButton: {
    top: "12%",
    right: "9%",
    position: "absolute",
    // backgroundColor: "green",
  },
  deleteButton: {
    top: "30%",
    right: "9%",
    position: "absolute",
  },
});

export default AddressCard;
