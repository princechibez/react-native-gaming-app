import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import React, {useRef} from 'react';
import { Swipeable } from 'react-native-gesture-handler';

const ListItem = props => {
  const zoomBtnRef = useRef(new Animated.Value(0)).current;
  const causePressAnimation = () => {
    // Animated.timing(zoomBtnRef, {
    //   toValue: 0,
    //   duration: 500,
    //   useNativeDriver: true
    // }).start();
    return props.onPress;
  }

  const leftAction = () => (
    <View style={{backgroundColor: 'blue'}}>
      <Text>Swiped left</Text>
    </View>
  )
  return (
    <Swipeable onSwipeableLeftOpen={() => console.log("Swiped")}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      }}>
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

      <Animated.View>
        <TouchableOpacity
          style={{
            backgroundColor: '#0aada8',
            padding: 10,
            width: 100,
            borderRadius: 10,
            // opacity: zoomBtnRef
            // transform: [{scaleX: zoomBtnRef}]
          }}
          activeOpacity={0.8}
          onPress={props.onPress}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textAlign: 'center',
            }}>
            {props.gameDetails.isFree === 'Yes'
              ? 'Play'
              : props.gameDetails.price}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
    </Swipeable>
  );
};

export default ListItem;
