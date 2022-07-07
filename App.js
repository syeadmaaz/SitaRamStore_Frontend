import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import LandingPage from "./src/screen/LandingPage";

import HomeScreen from "./src/screen/HomeScreen";


import ImageUpload from "./src/screen/ImageUpload"


export default function App() {
  return (
    <PaperProvider>
      {/* <HomeScreen/> */}
      {/* <ImageUpload/> */}
      {/* <NavigationContainer>
        <LandingPage />
      </NavigationContainer> */}
      <StatusBar style="auto" />
      <StatusBar style="auto" />
      <NavigationContainer>
        <LandingPage />
      </NavigationContainer>
    </PaperProvider>
    // <PaperProvider>
    //   <AdminUpload />
    // </PaperProvider>
    // <AdminUpload/>
  );
}
