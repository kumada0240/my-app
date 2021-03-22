import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'

import MemoListScreen from './src/screens/MemoListScreen';
import MemoListDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreatScreen';
import LoginScreen from './src/screens/LoginScreen';
import SingUpScreen from './src/screens/SingUpScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SingUp"
        screenOptions={{
          headerStyle:{backgroundColor:'#467FD3'},
          headerTitleStyle:{color:'#ffffff'},
          headerTitle:'MemoApp',
          headerTintColor:'#ffffff',
          headerBackTitle:'Back',
          cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection:'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoListDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="Login" component={LoginScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SingUp" component={SingUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
