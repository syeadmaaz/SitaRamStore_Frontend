import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import LandingPage from "./src/screen/LandingPage";
import HomeScreen from "./src/screen/HomeScreen";
import ProductsScreen from "./src/screen/ProductsScreen";
import CartScreen from "./src/screen/CartScreen";


export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <LandingPage />
      </NavigationContainer>
    </PaperProvider>
  );
}
