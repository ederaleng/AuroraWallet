import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TAB_BAR } from './../../constants/StyleNavigation'
import { Icon } from 'native-base'

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
              <Icon type='MaterialCommunityIcons' name="account-group-outline" style={{ fontSize: size, color: color }} />
            )
          }}
        />
        <Tab.Screen
          name="Explorer"
          component={explorer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon type='MaterialCommunityIcons' name="link-variant" style={{ fontSize: size, color: color }} />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon type='MaterialCommunityIcons' name="settings-outline" style={{ fontSize: size, color: color }} />
            )
          }}
        />
      </Tab.Navigator>
    )
  }
}

export default Wallet