import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  Button,
  Card,
  Modal,
  Paragraph,
  Portal,
  Provider,
  Text,
  Title,
} from "react-native-paper";

import ViewProduct from "./ViewProduct";
import Delivered from "../components/Delivered";
import Accept from "../components/Accept";
import Select from "../components/Select";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NewOrderList from "./NewOrderList";



const orders = [
  {
    key: "1",
    orderID: "01",
    date: "05-07-2022",
    address1: "SMIT, Rangpo",
    address2: "LandMark",
    mobile: "8796349827",
    pinCode: "210008",
    district: "Kanpur",
    state: "Uttar Pradesh",
    orderAmount: "1000",
    accepted: false,
    rejected: false,
    delivered: false,
    unDelivered: false
  },
  {
    key: "2",
    orderID: "02",
    date: "05-07-2022",
    address1: "OBH, Majhitar",
    address2: "LandMark",
    mobile: "8796349827",
    pinCode: "737136",
    district: "Rangpo",
    state: "Sikkim",
    orderAmount: "2000",
    accepted: false,
    rejected: false,
    delivered: false,
    unDelivered: false
  },
  {
    key: "3",
    orderID: "03",
    date: "05-07-2022",
    address1: "OBH, Majhitar",
    address2: "LandMark",
    mobile: "8796349827",
    pinCode: "737136",
    district: "Rangpo",
    state: "Sikkim",
    orderAmount: "2000",
    accepted: false,
    rejected: false,
    delivered: false,
    unDelivered: false
  },
  {
    key: "4",
    orderID: "04",
    date: "05-07-2022",
    address1: "OBH, Majhitar",
    address2: "LandMark",
    mobile: "8796349827",
    pinCode: "737136",
    district: "Rangpo",
    state: "Sikkim",
    orderAmount: "2000",
    accepted: false,
    rejected: false,
    delivered: false,
    unDelivered: false
  },
  {
    key: "5",
    orderID: "05",
    date: "05-07-2022",
    address1: "OBH, Majhitar",
    address2: "LandMark",
    mobile: "8796349827",
    pinCode: "737136",
    district: "Rangpo",
    state: "Sikkim",
    orderAmount: "2000",
    accepted: false,
    rejected: false,
    delivered: false,
    unDelivered: false
  },
];

const MyComponent = ({ navigation }) => {
  
  const [NewOrders,setNewOrders]= useState(orders)


  const acceptHandler = (index) => {
    console.log(NewOrders[index])
    NewOrders[index].accepted=true
    setNewOrders([...NewOrders])
    console.log(index)
  };

  const rejectHandler = (index) => {
    console.log(NewOrders);
    NewOrders[index].rejected = true;
    setNewOrders([...NewOrders]);
    console.log(index);
  };
  const deliverHandler = (index) => {
    console.log(NewOrders);
    NewOrders[index].delivered = true;
    setNewOrders([...NewOrders]);
    console.log(index);
  };
  const unDeliverHandler = (index) => {
    console.log(NewOrders);
    NewOrders[index].unDelivered = true;
    setNewOrders([...NewOrders]);
    console.log(index);
  };

  const LowerHeader = () => {
    return (
      <View style={{ marginTop: "6%", padding: "2%" }}>
        <View>
          <Text style={{ fontSize: 30 }}>New Orders</Text>
        </View>
      </View>
    );
  };

  const renderData = (item,index) => {
    return (
      <>
        <Card elevation={4} style={{ marginTop: "5%" }}>
          <Card.Content
            style={{ flex: 1, display: "flex", flexDirection: "row" }}
          >
            <Title style={{ flex: 2 }}>OrderID- {item.orderID}</Title>
            <Title style={{ flex: 1 }}>Date- {item.date}</Title>
          </Card.Content>
          <Card.Content>
            <Paragraph>
              Address- {item.address1}, {item.address2}
            </Paragraph>
            <Paragraph>
              {item.pinCode}, {item.district}, {item.state}
            </Paragraph>
            <Paragraph>Mobile- {item.mobile}</Paragraph>
            <Paragraph style={{ fontSize: 20, textAlign: "right" }}>
              Total Amount- {item.orderAmount}/- Rs
            </Paragraph>
          </Card.Content>
          <ViewProduct />

          {item.accepted ? (
            item.delivered ? (
              <Text> Order Delivered</Text>
            ) : item.unDelivered ? (
              <Text>Undelivered</Text>
            ) : (
              <Delivered
                onPressDelivered={()=>deliverHandler(index)}
                onPressUndelivered={()=>unDeliverHandler(index)}
              />
            )
          ) : item.rejected ? (
            <Text>Rejected </Text>
          ) : (
            <Accept
              onPressAccept={()=>acceptHandler(index)}
              onPressReject={()=>rejectHandler(index)}
            />
          )}
        </Card>
      </>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          numColumns={1}
          data={NewOrders}
          renderItem={({ item,index }) => {
            return renderData(item,index);
          }}
          keyExtractor={(item) => item.orderID}
          ListHeaderComponent={<LowerHeader />}
          extraData={NewOrders}
        />
      </View>
    </SafeAreaView>
  );
};
export default MyComponent;

