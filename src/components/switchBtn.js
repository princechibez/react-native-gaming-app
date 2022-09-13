import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const switchBtn = props => {
  const [gameMode, setGameMode] = useState('freemode');

  const switchAction = (mode) => {
    setGameMode(mode)
    props.setGameTab(mode)
  }
  return (
    <View
      style={{
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40AF',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => switchAction('freemode')}
        style={{
          flex: 1,
          backgroundColor: gameMode === 'freemode' ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: gameMode === 'freemode' ? 'white' : '#AD40AF',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>{props.option1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => switchAction('paidmode')}
        style={{
          flex: 1,
          backgroundColor: gameMode === 'paidmode' ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: gameMode === 'paidmode' ? 'white' : '#AD40AF',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>
          {props.option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default switchBtn;
