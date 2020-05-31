import React, { Component } from 'react'
import { FlatList, View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './listAccountsStyles'
import { connect } from 'react-redux'
import { setCurrentAccount } from './../../redux/actions/accounts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class ListAccounts extends Component{
  constructor(props){
    super(props)
  }
  
  setAccount (account) {
    this.props.setCurrentAccount(account)
    this.props.navigation.navigate('Wallet')
  }

  render(){
    return (
      <SafeAreaView>

        <View style={styles.containerChain}>
          <View style={styles.containerNameChain}>
            <Image style={styles.iconChain} source={require('./../../assets/chain/hive.png')} />
            <Text style={{ marginLeft: 6 }} > Hive accounts </Text>
          </View>
          <MaterialCommunityIcons name="account-plus" color="#212529" size={25} />
        </View>

        <FlatList
          data={this.props.listAccounts}
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


const mapStateToProps = state => ({
  listAccounts: state.accounts.listAccounts
})

const mapDispatchToProps = dispatch => ({
  setCurrentAccount: value => dispatch(setCurrentAccount(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListAccounts);