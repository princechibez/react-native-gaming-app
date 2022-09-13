import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ListItem = (props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={props.gameDetails.poster}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: 150}}>
          <Text
            style={{color: '#333', fontFamily: 'Roboto-Medium', fontSize: 14}}>
            {props.gameDetails.subTitle}
          </Text>
          <Text
          numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {props.gameDetails.title}
          </Text>
        </View>
      </View>

      <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
        style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
            textAlign: 'center',
          }}>
          {props.gameDetails.isFree === 'Yes' ? "Play" : props.gameDetails.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
