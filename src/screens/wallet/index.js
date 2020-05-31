import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

class Wallet extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <SafeAreaView>
        <Text> transfer </Text>
        <Button
          title="Go to ListAccounts"
          onPress={() => this.props.navigation.navigate('ListAccounts')}
        />
      </SafeAreaView>
    )
  }
}

export default Wallet