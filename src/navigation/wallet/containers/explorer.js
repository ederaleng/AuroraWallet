import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// routes
import ListExplorer from './../../../screens/explorer'

function Explorer() {
  return (
    <Stack.Navigator initialRouteName="listExplorer">
      <Stack.Screen options={{ headerShown: false }} name="Explorer" component={ListExplorer} />
    </Stack.Navigator>
  )
}

export default Explorer