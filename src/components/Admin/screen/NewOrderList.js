import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';

const Orderlist = [
    {
        id: '1',
        product: 'CocaCola 500ml',
        items: '3',
        netAmount: '100'
    },
    {
        id: '2',
        product: 'Kaju',
        items: '1 Kg',
        netAmount: '800'
    },
    {
        id: '3',
        product: 'Garnier Face Wash Medium size',
        items: '1',
        netAmount: '100'
    }
]



export default function NewOrderList() {

    const Table = ({item}) => {
        return(
            <View style={{marginTop: '2%', padding: '2%', display: 'flex',flex: 1, flexDirection: 'row'}}>
                <View style={{ fontSize: 10, flex: 1}}>
                    <Text >{item.id}</Text>
                </View>
                <View style={{ fontSize: 10, flex: 5}}>
                    <Text >{item.product}</Text>
                </View>
                <View style={{ fontSize: 10, flex: 3}}>
                    <Text >{item.items}</Text>
                </View>
                <View style={{ fontSize: 10, flex: 2}}>
                    <Text >Rs {item.netAmount}/-</Text>
                </View>
            </View>
        );
    };

    const LowerHeader = () => {
        return (
         
           <View style={{marginTop: '6%', padding: '2%', display: 'flex',flex: 1, flexDirection: 'row'}}>
               <View style={{ fontSize: 10, flex: 1}}>
                <Text >S No.</Text>
               </View>
               <View style={{ fontSize: 10, flex: 5}}>
                <Text >Product</Text>
               </View>
               <View style={{ fontSize: 10, flex: 3}}>
                <Text>Total Items</Text>
               </View>
               <View style={{ fontSize: 10, flex: 2}}>
                <Text>Net Amount</Text>
               </View>
           </View>
          
        );
      };

  return (
    <SafeAreaView>
        <Card elevation={8} style={{backgroundColor: '#b2dfed'}}>
        <FlatList 
        numColumns={1}
        data={Orderlist}
        renderItem={Table}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<LowerHeader />}
        />
        </Card>
    </SafeAreaView>
  )
}