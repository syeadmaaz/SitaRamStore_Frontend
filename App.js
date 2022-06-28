import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import LandingPage from "./src/screen/LandingPage";
import LoginScreen from "./src/screen/LoginScreen";

export default function App() {
  return (
    <PaperProvider>
      {/* <LoginScreen /> */}
      <NavigationContainer>
        <LandingPage />
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
