import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdminHomescreen from "../screen/AdminHomescreen";
import MyComponent from '../screen/NewOrder';
// import { NavigationContainer } from "@react-navigation/native";
// import NewOrderList from "../screen/NewOrderList";

// const AdminStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();

// function OrderStackScreen() {
//     return (
      
//     );
//   }

  const NavigateScreen = () => {
    return (
       <View style={{width: '100%', height: '100%'}}>
         <OrderStack.Navigator
        initialRouteName="AdminHomescreen"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <OrderStack.Screen name="AdminHomescreen" component={AdminHomescreen} />
        <OrderStack.Screen name="MyComponent" component={MyComponent} />
        
      </OrderStack.Navigator>
       </View>
    //   <View style={{ width: "100%", background: "white", height: "100%" }}>
    //     <AdminStack.Navigator screenOptions={{ headerShown: false }}>
    //       <AdminStack.Screen name="OrderStackScreen" component={OrderStackScreen} />
    //     </AdminStack.Navigator>
    //   </View>
    );
  };
  
  export default NavigateScreen;