import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

class ListAccounts extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View>
        <Text> ListAccounts </Text>
        <Button
          title="Go to Wallet"
          onPress={() => this.props.navigation.navigate('Wallet')}
        />
      </View>
    )
  }
}

export default ListAccounts