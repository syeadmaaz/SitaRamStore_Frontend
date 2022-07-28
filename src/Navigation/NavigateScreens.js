import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screen/SplashScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import ProductsScreen from "../screen/ProductsScreen";
import CartScreen from "../screen/CartScreen";
import AdminHomescreen from "../Admin/screen/AdminHomescreen";
import MyComponent from "../Admin/screen/NewOrder";

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <MainStack.Screen name="SplashScreen" component={SplashScreen} />
      <MainStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </MainStack.Navigator>
  );
}

function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <ProductStack.Screen name="HomeScreen" component={HomeScreen} />
      <ProductStack.Screen name="ProductsScreen" component={ProductsScreen} />
      <ProductStack.Screen name="CartScreen" component={CartScreen} />
      {/* <ProductStack.Screen name="Address" component={AddressScreen} />
      <ProductStack.Screen name="PlaceOrder" component={PlaceOrder} />
      <ProductStack.Screen name="ThankYou" component={ThankYou} /> */}
    </ProductStack.Navigator>
  );
}
function AdminStackScreen() {
  return (
    <AdminStack.Navigator
    initialRouteName="AdminHomescreen"
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}
  >
    <AdminStack.Screen name="AdminHomescreen" component={AdminHomescreen} />
    <AdminStack.Screen name="MyComponent" component={MyComponent} />
    
  </AdminStack.Navigator>
  )
}

const NavigateScreens = () => {
  return (
    <View style={{ width: "100%", background: "white", height: "100%" }}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainStackScreen" component={MainStackScreen} />
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
        <RootStack.Screen
          name="ProductStackScreen"
          component={ProductStackScreen}
        />
        <RootStack.Screen name="AdminStackScreen" component={AdminStackScreen} />
      </RootStack.Navigator>
    </View>
  );
};

export default NavigateScreens;
