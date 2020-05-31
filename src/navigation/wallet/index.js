import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TAB_BAR } from './../../constants/StyleNavigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

// screens
import accounts from './containers/accounts'
import explorer from './containers/explorer'
import settings from './containers/settings'

class Wallet extends Component{
  render(){
    return (
      <Tab.Navigator tabBarOptions={TAB_BAR}>

        <Tab.Screen
          name="Accounts"
          component={accounts}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Explorer"
          component={explorer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="link-variant" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings-outline" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    )
  }
}

export default Wallet