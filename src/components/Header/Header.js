import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../redux/features/cart/selectors";
import { Badge } from "react-native-paper";

const Header = (props) => {
  const total = useSelector(cartTotalSelector);

  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress1}>
        <Icon name={props.name1} size={28} color={COLORS.white} />
      </TouchableOpacity>
      <View style={{ justifyContent: "center" }}>
        {props.title ? (
          <Text
            style={[
              styles.title,
              {
                paddingRight: !props.name2 ? "9%" : null,
                paddingLeft: !props.name1 ? "9%" : null,
              },
            ]}
          >
            {props.title}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress2}>
        <Icon name={props.name2} size={28} color={COLORS.white} />
        {props.name2 == "cart-outline" ? (
          total ? (
            <Badge
              visible={true}
              size={17}
              style={{
                position: "absolute",
                backgroundColor: "red",
                fontSize: 10,
                fontWeight: "bold",
                top: -4,
              }}
            >
              {total}
            </Badge>
          ) : null
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: WIDTH.screenWidth,
    height: HEIGHT.headerHeight,
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
