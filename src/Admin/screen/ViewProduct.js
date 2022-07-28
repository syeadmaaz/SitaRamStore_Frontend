import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Card } from "react-native-paper";
import NewOrderList from "./NewOrderList";

export default function ViewProduct() {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
                    
                    <View style={styles.hideStyle}>
                    <NewOrderList />
                    <View style={styles.cbtnStyle}>
                    <Pressable
                    style={styles.closeStyle}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={{textAlign: 'center'}}>Close</Text>       
                        </Pressable>
                    </View>
                    </View>
                </Modal>
                <View style={styles.modStyle}>
                <Pressable
                    style={styles.showStyle}
                onPress={() => setModalVisible(true)}
                >
                <Text style={{textAlign: 'center'}}>View Product List</Text>
                </Pressable>
                </View>
            </View>
                    
  )
}

const styles = StyleSheet.create({
    modStyle: {
        marginTop: '10%',
        padding: 20,
    },
    
    showStyle:{
        backgroundColor: 'orange',
        width: '100%',
        textAlign: 'center',
        padding: 7,
        borderRadius: 20,
        alignItems: 'center'
    },
    hideStyle: {
        marginTop: '10%',
        padding: 10,
    },
    closeStyle: {
        backgroundColor: 'orange',
        width: '40%',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#b2dfed',
        marginTop: '3%'
    },
    cbtnStyle: {
        alignItems: 'center',

        
    }
})