import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// routes
import Wallet from './navigation/wallet'
import Landing from './navigation/landing'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wallet" headerMode="none">
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;