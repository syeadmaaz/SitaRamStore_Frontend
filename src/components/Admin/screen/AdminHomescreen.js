import * as React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import {Card} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AdminHomescreen = ({navigation}) => {
    function goToMyComponent() {
        navigation.navigate("MyComponent");
      }

    function goToImageUpload() {
        navigation.navigate("ImageUpload");
    }

    function goToCategoryUpdate() {
        navigation.navigate("CategoryUpdate");
    }

  return (
    <SafeAreaView style={styles.deco}>
      <ScrollView>
        <Card style={styles.iconStyle}>
          <Icon name="logout" size={35} />
        </Card>
        <Card elevation={4} style={styles.crdStyling}>
          <Card elevation={4} style={styles.cardStyle}>
            <TouchableOpacity activeOpacity={0.2} onPress={goToMyComponent}>
              <Text style={styles.txtStyle}>New Order</Text>
            </TouchableOpacity>
          </Card>
          <Card elevation={4} style={styles.cardStyle}>
            <Text style={styles.txtStyle}>Order Status</Text>
          </Card>
          <Card elevation={4} style={styles.cardStyle}>
            <TouchableOpacity activeOpacity={0.2} onPress={goToCategoryUpdate}>
              <Text style={styles.txtStyle}>Add/Edit Category</Text>
            </TouchableOpacity>
          </Card>
          <Card elevation={4} style={styles.cardStyle}>
            <TouchableOpacity activeOpacity={0.2} onPress={goToImageUpload}>
              <Text style={styles.txtStyle}>
                Add/Edit Products to Existing Category
              </Text>
            </TouchableOpacity>
          </Card>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    deco: {
        padding: '1%',
        marginVertical: '4%'

    },
    iconStyle: {
        alignItems: 'flex-end',
        padding: '3%',
    },
    crdStyling: {
        // height: 400,
        padding: '3%',
        backgroundColor: '#faf0e8',
        marginTop: '3%',
        borderRadius: 25,

    },
    cardStyle: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        marginTop: '4%',
    },
    txtStyle: {
        fontSize: 23,
        padding: '2%',

    }
});

export default AdminHomescreen;