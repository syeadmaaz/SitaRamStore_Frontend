import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { clearCookie } from "../../data/Cokkie";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/features/cart/cartSlice";
import { COLORS, FONT, HEIGHT } from "../../constants/theme";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logout = async () => {
    await clearCookie();
    dispatch(clear());
    navigation.navigate("AuthStackScreen", { screen: "LoginScreen" });
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.drawerContent}>
          <View style={[styles.userInfoSection]}>
            <View style={styles.avatarView}>
              <Avatar.Image
                source={require("../../assets/images/icons/icon.png")}
              />
            </View>
            <View style={styles.avatarRightView}>
              <Title style={styles.title}>Syed Maaz</Title>
              <Caption style={styles.caption}>8540972044</Caption>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.drawerView1}>
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerView2}>
        <TouchableOpacity
          style={styles.drawerItems2}
          activeOpacity={0.3}
          // onPress={goToNotification}
          onPress={() =>
            navigation.navigate("ProductStackScreen", {
              screen: "NotificationScreen",
            })
          }
        >
          <Ionicons name="notifications-outline" size={22} />
          <Text style={styles.itemsText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItems2}
          activeOpacity={0.3}
          onPress={() =>
            navigation.navigate("ProductStackScreen", {
              screen: "SettingScreen",
            })
          }
        >
          <Ionicons name="settings-outline" size={22} />
          <Text style={styles.itemsText}>Settings</Text>
        </TouchableOpacity>
        <TouchableRipple>
          <View style={styles.darkModeView}>
            <MaterialCommunityIcons name="theme-light-dark" size={22} />
            <Text style={styles.darkText}>Dark Mode</Text>
            <Switch style={{ top: "-5%" }} />
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.bottomDrawerSection}>
        <TouchableOpacity
          style={styles.drawerItems2}
          activeOpacity={0.3}
          onPress={logout}
        >
          <MaterialCommunityIcons name="logout-variant" size={22} />
          <Text style={styles.itemsText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    // backgroundColor: COLORS.white
  },
  contentContainerStyle: {
    height: "80%",
    paddingLeft: "6%",
    paddingRight: "6%",
    marginTop: "6%",
    justifyContent: "center",
    backgroundColor: COLORS.orange,
  },
  drawerContent: {
    flexDirection: "column",
    height: "100%",
  },
  userInfoSection: {
    flexDirection: "row",
    paddingLeft: "2%",
    // backgroundColor: COLORS.green
  },
  avatarView: {
    borderWidth: 3,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
    borderColor: COLORS.white,
    // backgroundColor: COLORS.white
  },
  avatarRightView: {
    marginTop: "1%",
    marginLeft: "5%",
    // marginTop: 15,
  },
  separator: {
    width: "100%",
    top: "2%",
    marginTop: "6%",
    marginBottom: "6%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: FONT.f7,
    color: COLORS.white,
  },
  caption: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: FONT.f4,
    color: COLORS.white,
  },
  drawerView1: {
    height: "64%",
    marginVertical: "3%",
    // backgroundColor: "black",
  },
  drawerView2: {
    height: "26%",
    bottom: "8%",
    justifyContent: "center",
    marginHorizontal: "6%",
    // backgroundColor: COLORS.blue,
  },
  drawerItems2: {
    flexDirection: "row",
    paddingLeft: "7%",
    marginBottom: "15%",
    // bottom: "10%",
    // backgroundColor: "red",
  },
  itemsText: {
    fontSize: 16,
    fontFamily: FONT.f9,
    fontWeight: "bold",
    marginLeft: "6%",
    color: COLORS.gray,
  },
  darkModeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "7%",
    // backgroundColor: "red",
  },
  darkText: {
    fontSize: 16,
    fontFamily: FONT.f9,
    fontWeight: "bold",
    marginLeft: "-23%",
    color: COLORS.gray,
  },
  bottomDrawerSection: {
    justifyContent: "center",
    top: "3%",
    paddingTop: "5%",
    marginHorizontal: "6%",
    borderTopWidth: 1,
    borderTopColor: "#f4f4f4",
    // backgroundColor: COLORS.red,
  },
});

export default SideBar;
