import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import LandingPage from "./src/screen/LandingPage";
import HomeScreen from "./src/screen/HomeScreen";
export default function App() {
  return (
    <PaperProvider>
      {/* <HomeScreen/> */}
      <NavigationContainer>
        <LandingPage />
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
