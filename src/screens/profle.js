import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StatusBar barStyle='dark-content' />
      <Text style={{color: 'black'}}>profile</Text>
    </View>
  )
}

export default Profile