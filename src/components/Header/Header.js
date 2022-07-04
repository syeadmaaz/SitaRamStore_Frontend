import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name="sort-variant" size={28} color={COLORS.white} />
      <Icon
        name="cart-outline"
        size={28}
        color={COLORS.white}
        // onPress={logOut}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    header: {
    width: WIDTH.screenWidth,
    height: HEIGHT.screenHeight / 14,
    paddingVertical: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    backgroundColor: COLORS.orange,
  },
});

export default Header;
