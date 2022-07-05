import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import LandingPage from "./src/screen/LandingPage";
import SearchBar from "./src/components/SearchBar/SearchBar";
import ProductsScreen from "./src/screen/ProductsScreen";
import HomeScreen from "./src/screen/HomeScreen";
import Cart from "./src/screen/Cart";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <ProductsScreen /> */}
        {/* <HomeScreen /> */}

        {/* <Cart /> */}
        
        {/* <SearchBar/> */}
        {/* <SearchHeader /> */}
        
        <LandingPage />
      </NavigationContainer>
    </PaperProvider>
  );
}
