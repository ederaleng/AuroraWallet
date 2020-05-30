import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// screens
import accounts from './containers/accounts'
import explorer from './containers/explorer'
import settings from './containers/settings'

class Wallet extends Component{
  render(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Accounts" component={accounts} />
        <Tab.Screen name="Explorer" component={explorer} />
        <Tab.Screen name="Settings" component={settings} />
      </Tab.Navigator>
    )
  }
}

export default Wallet