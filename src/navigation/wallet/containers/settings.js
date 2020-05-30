import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// routes
import ListSettings from './../../../screens/settings'

function Settings() {
  return (
    <Stack.Navigator initialRouteName="ListAccounts">
      <Stack.Screen name="settings" component={ListSettings} />
    </Stack.Navigator>
  )
}

export default Settings