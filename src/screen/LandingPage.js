import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import NavigateScreens from "../Navigation/NavigateScreens";

import {Provider} from "react-redux";
import store from "../redux/store";

const LandingPage = () => {
  return (
    <Provider store={store}>
      <NavigateScreens />
    </Provider>
  );
};

export default LandingPage;
