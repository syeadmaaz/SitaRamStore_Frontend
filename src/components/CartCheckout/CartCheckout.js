import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  FlatList,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartCheckout = () => {
    return (
        <View style={styles.container}>
            <Text>HI</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
    }
}) 

export default CartCheckout
