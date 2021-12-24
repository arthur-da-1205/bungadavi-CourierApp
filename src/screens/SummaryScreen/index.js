import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTask from './AllTask';
import FinishedTask from './FinishedTask';
import RejectedTask from './RejectedTask';

import {TopBarNavigation} from '../../components';

const SummaryScreen = () => {
  const TopNavigation = createMaterialTopTabNavigator();

  return (
    <TopNavigation.Navigator tabBar={props => <TopBarNavigation {...props} />}>
      <TopNavigation.Screen
        name="All Task"
        component={AllTask}
        options={{tabBarShowLabel: false}}
      />
      <TopNavigation.Screen
        name="Finished Task"
        component={FinishedTask}
        options={{tabBarShowLabel: false}}
      />
      <TopNavigation.Screen
        name="Rejected Task"
        component={RejectedTask}
        options={{tabBarShowLabel: false}}
      />
    </TopNavigation.Navigator>
  );
};

export default SummaryScreen;
