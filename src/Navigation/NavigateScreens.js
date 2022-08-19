import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, FONT } from "../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

//SideBar
import SideBar from "../components/SideBar/SideBar";

// App Start
import SplashScreen from "../screen/SplashScreen";
import WelcomeScreen from "../screen/WelcomeScreen";

// Customer Side
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import HomeScreen from "../screen/HomeScreen";
import ProductsScreen from "../screen/ProductsScreen";
import CartScreen from "../screen/CartScreen";
import CheckOutScreen from "../screen/CheckOutScreen";
import AccountScreen from "../screen/AccountScreen";
import OrdersScreen from "../screen/OrdersScreen";
import AddressScreen from "../screen/AddressScreen";
import AddAddressScreen from "../screen/AddAddressScreen";
import NotificationScreen from "../screen/NotificationScreen";
import SettingScreen from "../screen/SettingScreen";
import SupportScreen from "../screen/SupportScreen";
import DeveloperScreen from "../screen/DeveloperScreen";

// Admin Side
import AdminHomescreen from "../Admin/screen/AdminHomescreen";
import MyComponent from "../Admin/screen/NewOrder";
import CategoryUpdate from "../Admin/screen/CategoryUpdate";
import newCategoryUpload from "../Admin/screen/newCategoryUpload";
import newProductUpload from "../Admin/screen/newProductUpload";
import AddProduct from "../Admin/components/AddProduct";
import ThankYouScreen from "../screen/ThankYouScreen";

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AddressStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

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
      <ProductStack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <ProductStack.Screen name="ThankYouScreen" component={ThankYouScreen} />
      <ProductStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <ProductStack.Screen name="SettingScreen" component={SettingScreen} />
      <ProductStack.Screen name="SupportScreen" component={SupportScreen} />
      <ProductStack.Screen name="DeveloperScreen" component={DeveloperScreen} />
    </ProductStack.Navigator>
  );
}

function AddressStackScreen() {
  return (
    <AddressStack.Navigator
      initialRouteName="AddressScreen"
      screenOptions={{ 
        headerShown: false, 
        animationEnabled: false 
      }}
    >
      <AddressStack.Screen name="AddressScreen" component={AddressScreen}/>
      <AddressStack.Screen name="AddAddressScreen" component={AddAddressScreen}/>
    </AddressStack.Navigator>
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
      <AdminStack.Screen name="CategoryUpdate" component={CategoryUpdate} />
      <AdminStack.Screen
        name="newCategoryUpload"
        component={newCategoryUpload}
      />
      <AdminStack.Screen name="newProductUpload" component={newProductUpload} />
      <AdminStack.Screen name="AddProduct" component={AddProduct} />
    </AdminStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainStackScreen" component={MainStackScreen} />
      <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      <RootStack.Screen
        name="ProductStackScreen"
        component={ProductStackScreen}
      />
      <RootStack.Screen name="AdminStackScreen" component={AdminStackScreen} />
    </RootStack.Navigator>
  );
}

const NavigateScreens = () => {
  return (
    <View style={{ width: "100%", background: "white", height: "100%" }}>
      <DrawerStack.Navigator
        drawerContent={(props) => <SideBar {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: COLORS.white,
          drawerActiveTintColor: COLORS.dark,
          drawerInactiveTintColor: COLORS.white,
          drawerLabelStyle: {
            marginLeft: "-12%",
            fontFamily: FONT.f9,
            fontSize: 16,
            fontWeight: "bold",
          },
        }}
      >
        <DrawerStack.Screen
          name="Home"
          component={RootStackScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <DrawerStack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <DrawerStack.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="shopping-bag" size={22} color={color} />
            ),
          }}
        />
        <DrawerStack.Screen
          name="Address"
          component={AddressStackScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="location-outline" size={22} color={color} />
            ),
          }}
        />
      </DrawerStack.Navigator>
    </View>
  );
};

export default NavigateScreens;
