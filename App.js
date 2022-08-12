import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import LandingPage from "./src/screen/LandingPage";

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
