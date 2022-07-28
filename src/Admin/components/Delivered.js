import { View, Text } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";

export default function Delivered(props) {
  return (
    <View>
      <Card>
        <Card.Actions style={{ flex: 1 }}>
          <Button onPress = {props.onPressDelivered}
            style={{
              width: "40%",
              backgroundColor: "green",
              padding: 1,
              flex: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>
              Order Delivered
            </Text>
          </Button>
          <Button onPress = {props.onPressUndelivered}
            style={{
              width: "40%",
              backgroundColor: "red",
              padding: 1,
              flex: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Undelivered</Text>
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
