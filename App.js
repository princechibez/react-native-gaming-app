import * as React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import changeNavigationBarColor, {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TabNavigation from './navigation/TabNavigation';
import GamonImg from './Assets/svg/gameon1.svg';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={TabNavigation} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = props => {
  changeNavigationBarColor("translucent", false)
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#20315f',
            fontFamily: 'Inter-Bold',
          }}>
          GAMEON
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <GamonImg
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>
      <TouchableOpacity
      activeOpacity={0.9}
        onPress={() => props.navigation.navigate('Home')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
