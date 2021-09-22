import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Loading" component={View} />
    </Navigator>
  );
};

export default RootNavigation;
