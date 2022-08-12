import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { clearCookie } from "../../data/Cokkie";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/features/cart/cartSlice";

const SideBar = ({props, navigation}) => {
  const dispatch = useDispatch();

  const logout = async () => {
    // navigation.dispatch(DrawerActions.openDrawer());
    await clearCookie();
    dispatch(clear());
    navigation.navigate("AuthStackScreen", { screen: "LoginScreen" });
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={[styles.userInfoSection, { flexDirection: "row" }]}>
            <View style={{ marginTop: 15 }}>
              <Avatar.Image
                source={require("../../assets/images/icons/icon.png")}
              />
            </View>
            <View style={{ marginLeft: 9, marginTop: 15 }}>
              <Title style={styles.title}>Syed Maaz</Title>
              <Caption style={styles.caption}>8540972044</Caption>
            </View>
          </View>
          <View style={[styles.row, styles.userInfoSection]}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                80
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
            <View style={[styles.section, { marginLeft: 15 }]}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                120
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
          </View>
          <Drawer.Section style={{ flex: 1, marginTop: 15 }}>
            <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              label="Account"
              onPress={() => {
                props.navigation.navigate("AccountScreen");
              }}
            />
            {/* <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            /> */}
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple>
              <View style={styles.preference}>
                <Text>Dark Mode</Text>
                <Switch />
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          label="Sign Out"
          onPress={logout}
        ></Drawer.Item>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SideBar;
