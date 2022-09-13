import {StatusBar} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../src/screens/cart';
import Profile from '../src/screens/profle';
import Favourite from '../src/screens/favourite';
import HomeScreen from '../src/screens/HomeScreen';
import GameDetails from '../src/screens/GameDetailScreen'

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name='GameDetails' component={GameDetails} />
      </Stack.Navigator>
  )
}

const TabNavigation = () => {
  hideNavigationBar()
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {backgroundColor: '#AD40AF', height: 70},
      // tabBarStyle: {backgroundColor: '#AD40AF', borderRadius: 20, marginBottom: 10, height: 70, width: '80%', alignSelf: 'center'},
      tabBarActiveTintColor: 'yellow',
      tabBarInactiveTintColor: "#fff"
    }}>
      <Tab.Screen name="Home1" component={HomeStack} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarBadge: 3,
        tabBarBadgeStyle: {backgroundColor: 'yellow', top: 8},
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name='shopping-cart' size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Favourite" component={Favourite} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='heart-outline' size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name='person' size={size} color={color} />
        )}} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
