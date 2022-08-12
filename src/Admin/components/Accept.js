import { View, Text } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";

export default function Accept(props) {
  return (
    <View style={{ padding: '3%'}}>
      <Card>
        <Card.Actions style={{ flex: 1 }}>
          <Button onPress = {props.onPressAccept}
            style={{
              width: "40%",
              backgroundColor: "green",
              padding: 1,
              flex: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Accept Order</Text>
          </Button>

          <Button onPress = {props.onPressReject}
            style={{
              width: "40%",
              backgroundColor: "red",
              padding: 1,
              flex: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Reject Order</Text>
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
