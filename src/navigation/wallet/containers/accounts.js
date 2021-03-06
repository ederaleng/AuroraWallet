import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { HEADER_MAIN } from './../../../constants/StyleNavigation'

const Stack = createStackNavigator();

// routes
import ListAccounts from './../../../screens/listAccounts'
import Wallet from './../../../screens/wallet'
import AddAccounts from './../../../screens/addAccounts'

function Accounts() {
  return (
    <Stack.Navigator initialRouteName="Accounts">
      <Stack.Screen options={{ animationEnabled: false, headerShown: false }} name="ListAccounts" component={ListAccounts} />
      <Stack.Screen options={{ animationEnabled: false, headerShown: false }} name="Wallet" component={Wallet} />
      <Stack.Screen options={{ animationEnabled: false, headerShown: false }} name="AddAccounts" component={AddAccounts} />
    </Stack.Navigator>
  )
}

export default Accounts