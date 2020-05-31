import React, { Component } from 'react';
import { FlatList, View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './listAccountsStyles'

class ListAccounts extends Component{
  constructor(props){
    super(props)
  }
  setAccount (account) {
    console.log(account)
    this.props.navigation.navigate('Wallet')
  }

  render(){
    return (
      <SafeAreaView>

        <FlatList
          data={[
            {account: 'ederaleng'},
            {account: 'giveaway.tera'}
          ]}
          keyExtractor={(item, index) => item.account}
          renderItem={({item}) =>
            <TouchableWithoutFeedback onPress={() => this.setAccount(item.account)}>
              <View style={styles.containerAccount}>
                <Image style= {styles.iconAccount} source={{ uri: `https://images.hive.blog/u/${item.account}/avatar` }} />
                <View style={styles.viewNameAccount}>
                  <Text> { item.account } </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          }
        />

      </SafeAreaView>
    )
  }
}

export default ListAccounts