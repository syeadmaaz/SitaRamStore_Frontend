import * as React from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { Card } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { clearCookie } from "../../data/Cokkie";
import { COLORS } from "../../constants/theme";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";

const AdminHomescreen = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold On!", "Are you sure you want to Exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  function goToMyComponent() {
    navigation.navigate("MyComponent");
  }

  function goToImageUpload() {
    navigation.navigate("ImageUpload");
  }

  function goToCategoryUpdate() {
    navigation.navigate("CategoryUpdate");
  }

  const logout = async () => {
    await clearCookie();
    navigation.navigate("AuthStackScreen", { screen: "LoginScreen" });
  };

  return (
    <SafeAreaView style={styles.deco}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header title={"ADMIN HOME"} name2={"logout"} onPress2={logout} />
      <ScrollView>
        <Card elevation={4} style={styles.crdStyling}>
          <Card elevation={4} style={styles.cardStyle}>
            <TouchableOpacity activeOpacity={0.2} onPress={goToMyComponent}>
              <Text style={styles.txtStyle}>New Order</Text>
            </TouchableOpacity>
          </Card>
          <Card elevation={4} style={styles.cardStyle}>
            <Text style={styles.txtStyle}>Order Status</Text>
          </Card>
          <Card elevation={4} style={styles.cardStyle}>
            <TouchableOpacity activeOpacity={0.2} onPress={goToCategoryUpdate}>
              <Text style={styles.txtStyle}>Add/Edit Category</Text>
            </TouchableOpacity>
          </Card>
          <Card elevation={4} style={styles.cardStyle}>
            <TouchableOpacity activeOpacity={0.2} onPress={goToImageUpload}>
              <Text style={styles.txtStyle}>
                Add/Edit Products to Existing Category
              </Text>
            </TouchableOpacity>
          </Card>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    alignItems: "flex-end",
    padding: "3%",
  },
  crdStyling: {
    // height: 400,
    padding: "3%",
    backgroundColor: "#faf0e8",
    marginTop: "3%",
    borderRadius: 25,
  },
  cardStyle: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    marginTop: "4%",
  },
  txtStyle: {
    fontSize: 18,
    padding: "2%",
  },
});
export default AdminHomescreen;
