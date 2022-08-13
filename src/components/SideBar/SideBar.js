import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { clearCookie } from "../../data/Cokkie";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/features/cart/cartSlice";
import { COLORS, FONT, HEIGHT } from "../../constants/theme";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
          <Drawer.Section style={styles.drawerView1}>
            <DrawerItem
              labelStyle={styles.drawerItems1}
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              labelStyle={styles.drawerItems1}
              label="Account"
              onPress={() => {
                props.navigation.navigate("AccountScreen");
              }}
            />
            <DrawerItem
              labelStyle={styles.drawerItems1}
              label="Orders"
              onPress={() => {
                // props.navigation.navigate("OrdersScreen");
                console.log("ORDERS SCREEN");
              }}
            />
            <DrawerItem
              labelStyle={styles.drawerItems1}
              label="Address"
              onPress={() => {
                // props.navigation.navigate("AddressScreen");
                console.log("ADDRESS SCREEN");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section title="Preferences" style={styles.drawerView2}>
        <DrawerItem
          labelStyle={styles.drawerItems2}
          label="Settings"
          onPress={() => {
            // props.navigation.navigate("SettingsScreen");
            console.log("SETTINGS SCREEN");
          }}
        />
        <TouchableRipple>
          <View style={styles.darkModeView}>
            <Text style={styles.darkText}>Dark Mode</Text>
            <Switch style={{ top: -13 }} />
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          labelStyle={{
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: FONT.f9,
            color: COLORS.gray,
          }}
          onPress={logout}
        ></DrawerItem>
      </Drawer.Section>
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
    height: "73%",
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
  },
  avatarRightView: {
    marginTop: "1%",
    marginLeft: "5%",
    // marginTop: 15,
  },
  separator: {
    width: "100%",
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
    // backgroundColor: "red",
  },
  drawerView2: {
    bottom: "16%",
    marginHorizontal: "6%",
    // backgroundColor: COLORS.green,
  },
  drawerItems1: {
    fontSize: 16,
    fontFamily: FONT.f9,
    color: COLORS.white,
    fontWeight: "bold",
  },
  drawerItems2: {
    marginBottom: "5%",
    fontSize: 16,
    fontFamily: FONT.f9,
    color: COLORS.gray,
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  darkModeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "7%",
    // backgroundColor: "red",
  },
  darkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#595959",
  },
  bottomDrawerSection: {
    marginBottom: "4%",
    marginHorizontal: "6%",
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    // backgroundColor: COLORS.red,
  },
});

export default SideBar;
