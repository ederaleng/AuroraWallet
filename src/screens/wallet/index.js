import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

class Wallet extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View>
        <Text> transfer </Text>
        <Button
          title="Go to Accounts"
          onPress={() => this.props.navigation.navigate('Accounts')}
        />
      </View>
    )
  }
}

export default Wallet