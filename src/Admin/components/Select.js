import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Delivered from './Delivered'
import Accept from './Accept'

export default function Select() {
const [first, setFirst] = React.useStateate(false);

  let merge = null;
  if(first===false){
      <Accept />
  }
  else {
    <Delivered />
  }


  return (
    <View>
       {merge}
    </View>
  )
}