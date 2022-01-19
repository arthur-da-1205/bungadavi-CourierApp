import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

import {
  AssignOrderScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SummaryScreen,
  OnDeliveryScreen,
  DoneScreen,
  SplashScreen,
  DetailScreen,
  QRCodeScreen,
} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AssignOrderScreen"
        component={AssignOrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnDeliveryScreen"
        component={OnDeliveryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoneScreen"
        component={DoneScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRCodeScreen"
        component={QRCodeScreen}
        options={{title: 'Scan for DO and Card Message'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
