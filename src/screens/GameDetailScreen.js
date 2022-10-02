import { View, Text } from 'react-native'
import React from 'react'

const GameDetailScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Game Detail Screen</Text>
      <Text style={{color: 'black'}}>{route.params.gameDetails.title}</Text>
    </View>
  )
}

export default GameDetailScreen