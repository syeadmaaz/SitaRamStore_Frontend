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

const NewOrders = [
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
  },
];

const MyComponent = ({ navigation }) => {
  const [accepted, setAccepted] = React.useState(false);
  const [rejected, setRejected] = React.useState(false);
  const [delivered, setDelivered] = React.useState(false);
  const [unDelivered, setUnDelivered] = React.useState(false);

  // let container = null;
  // if(accepted===false){
  //   container =(
  //     <View>
  //        <Accept/ >
  //     </View>
  //   );
  // }
  // else{
  //   container = (
  //     <View>
  //       <Delivered />
  //     </View>
  //   );
  // }

  const acceptHandler = () => {
    setAccepted(true);
  };
  const rejectHandler = () => {
    setRejected(true);
  };
  const deliverHandler = () => {
    setDelivered(true);
  };
  const unDeliverHandler = () => {
    setUnDelivered(true);
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

  // const accept = () => {
  //   return (
  //     <View>
  //       <Card>
  //           <Card.Actions style={{flex: 1}}>
  //               <Button onPress={() => {setAccepted(true)}} style={{width: '40%', backgroundColor: 'green', padding: 1, flex: 2}}><Text style={{color: 'white', fontSize: 15}}>Accept Order</Text></Button>
  //               <Button style={{width: '40%', backgroundColor: 'red', padding: 1, flex: 2}}><Text style={{color: 'white', fontSize: 15}}>Reject Order</Text></Button>
  //           </Card.Actions>
  //       </Card>
  //     </View>
  //   );
  // };

  // const deliver = () => {
  //     return(
  //       <View>
  //       <Card >
  //            <Card.Actions style={{flex: 1}}>
  //                <Button  style={{width: '40%', backgroundColor: 'green', padding: 1, flex: 2}}><Text style={{color: 'white', fontSize: 15}}>Order Delivered</Text></Button>
  //                <Button style={{width: '40%', backgroundColor: 'red', padding: 1, flex: 2}}><Text style={{color: 'white', fontSize: 15}}>Order Cancelled</Text></Button>
  //            </Card.Actions>
  //       </Card>
  //    </View>
  //     );
  // };

  const renderData = (item) => {
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

          {/* {container} */}

          {accepted ? (
            delivered ? (
              <Text> Order Delivered</Text>
            ) : unDelivered ? (
              <Text>Undelivered</Text>
            ) : (
              <Delivered
                onPressDelivered={deliverHandler}
                onPressUndelivered={unDeliverHandler}
              />
            )
          ) : rejected ? (
            <Text>Rejected </Text>
          ) : (
            <Accept
              onPressAccept={acceptHandler}
              onPressReject={rejectHandler}
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
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.key}`}
          ListHeaderComponent={<LowerHeader />}
        />
      </View>
    </SafeAreaView>
  );
};
export default MyComponent;
