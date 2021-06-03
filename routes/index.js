import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../src/screens/Home';
import Search from '../src/screens/Search';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Search" component={Search} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
