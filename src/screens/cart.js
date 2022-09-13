import { View, Text, StatusBar} from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StatusBar barStyle='dark-content' />
      <Text style={{color: 'black'}}>Cart</Text>
    </View>
  )
}

export default Cart