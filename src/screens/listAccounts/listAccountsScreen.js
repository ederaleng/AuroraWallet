import React, { Component } from 'react'
import { FlatList, View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import md5 from 'md5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './listAccountsStyles'
import { setCurrentAccount } from './../../redux/actions/accounts'

class ListAccounts extends Component{
  constructor(props){
    super(props)
  }
  
  setAccount (account) {
    this.props.setCurrentAccount(account)
    this.props.navigation.navigate('Wallet')
  }

  haveData () {
    console.log(Array.isArray(this.props.listAccounts) && this.props.listAccounts.length==0)

  }

  render(){
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <View style={styles.containerChain}>
          <View style={styles.containerNameChain}>
            <Image style={styles.iconChain} source={require('./../../assets/chain/hive.png')} />
            <Text style={{ marginLeft: 6 }} > Hive accounts </Text>
          </View>
          <MaterialCommunityIcons name="account-plus" color="#212529" size={25} />
        </View>

        <FlatList
          data={this.props.listAccounts}
          contentContainerStyle={
            Array.isArray(this.props.listAccounts) && this.props.listAccounts==0 ?
            styles.emptyAccounts : {}
          }
          keyExtractor={(item) => md5(item.account)}
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
          ListEmptyComponent={() =>
            <View>
              <MaterialCommunityIcons name="account-off" color="#212529" size={120} />
              <Text> Not have accounts </Text>
            </View>
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