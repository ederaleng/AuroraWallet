import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// routes
import ListAccounts from './../../../screens/accounts'
import Wallet from './../../../screens/wallet'

function Accounts() {
  return (
    <Stack.Navigator initialRouteName="Accounts">
      <Stack.Screen options={{ animationEnabled: false }} name="Accounts" component={ListAccounts} />
      <Stack.Screen options={{ animationEnabled: false }} name="Wallet" component={Wallet} />
    </Stack.Navigator>
  )
}

export default Accounts