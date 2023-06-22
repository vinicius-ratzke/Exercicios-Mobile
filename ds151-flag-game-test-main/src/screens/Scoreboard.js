import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import NormalScoreScreen from './NormalScoreScreen';
import TimeScoreScreen from './TimeScoreScreen';

const Tab = createMaterialTopTabNavigator();

const Scoreboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Normal" component={NormalScoreScreen} />
      <Tab.Screen name="Por tempo" component={TimeScoreScreen} />
    </Tab.Navigator>
  );
};

export default Scoreboard;
