import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './login';
import Home from './home';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: true}}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen
          name="Home"
          options={{headerLeft: null, gestureEnabled: false}}
          component={Home}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
