import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StatusBar barStyle='dark-content' />
      <Text style={{color: 'black'}}>favourite</Text>
    </View>
  )
}

export default Favourite