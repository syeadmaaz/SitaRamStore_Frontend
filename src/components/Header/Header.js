import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../../redux/selectors";

import { Badge } from "react-native-paper";
const Header = (props) => {
  const total = useSelector(cartTotalSelector);

  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPressMenu}>
        <Icon
          name="sort-variant"
          size={28}
          color={COLORS.white}
          // onPress={props.onPressMenu}
        />
      </TouchableOpacity>
      <View style={{ justifyContent: "center" }}>
        {props.title ? <Text style={styles.title}>{props.title}</Text> : null}
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPressCart}>
        <Icon
          name="cart-outline"
          size={28}
          color={COLORS.white}
          // onPress={props.onPressCart}
        />
        {total ? (
          <Badge
            visible={true}
            size={17}
            style={{ position: "absolute", backgroundColor: "black", top: -4 }}
          >
            {total}
          </Badge>
        ) : null}
      </TouchableOpacity>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default Header;
