import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const SearchHeader = () => {
  return (
    <View style={styles.lowerHeader}>
      <View style={{ flex: 1 }}>
        <Text style={styles.headerTitle}>Ready To Buy The Quality</Text>
        <Text style={styles.headerTitle}>Products</Text>
      </View>

      <View style={styles.search}>
        <View style={styles.searchInputContainer}>
          <Icon name="magnify" size={35} style={styles.searchIcon} />
          <TextInput placeholder="Search" style={styles.searchInput} />
          <TouchableOpacity activeOpacity={0.8} style={styles.sortBtn}>
            <Icon name="magnify" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lowerHeader: {
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 6.5,
    backgroundColor: COLORS.orange,
    // marginBottom: "10%",
    // marginTop: "10%"

  },
  headerTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    paddingHorizontal: "5%",
  },
  search: {
    maxWidth: WIDTH.screenWidth,
    top: "25%",
    height: HEIGHT.screenHeight / 13,
    marginHorizontal: "5%",
    // backgroundColor: COLORS.dark,
  },

  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "absolute",
    alignItems: "center",
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  searchIcon: {
    display: "flex",
    color: COLORS.dark,
    width: "10%",
    height: "100%",
    paddingVertical: "3%",
    marginHorizontal: "3%",
    // backgroundColor: COLORS.orange,
  },
  searchInput: {
    color: "black",
    display: "flex",
    width: "65%",
    height: "100%",
    paddingVertical: "3%",
    fontSize: 18,
    alignItems: "center",
    // backgroundColor: COLORS.grey,
  },
  sortBtn: {
    display: "flex",
    color: "white",
    height: "100%",
    width: "19%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange,
  },
});

export default SearchHeader;
