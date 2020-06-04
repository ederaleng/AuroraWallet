import React, { Component } from 'react'
import { View, Image, Text, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import { Icon } from 'native-base'
import styles from './listAccountsStyles'
import { setCurrentAccount } from './../../../redux/actions/accounts'

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
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>

          <View style={{ flex: 1 }}>

            <View style={styles.containerChain}>
              <View style={styles.containerNameChain}>
                <Image style={styles.iconChain} source={require('./../../../assets/chain/hive.png')} />
                <Text style={{ marginLeft: 6 }} > Hive accounts </Text>
              </View>
              <Icon
                onPress={() => this.props.navigation.navigate('AddAccounts')}
                type='MaterialCommunityIcons'
                name="account-plus"
                style={{ fontSize: 25, color: "#212529" }}
              />
            </View>


            {
              Array.isArray(this.props.listAccounts) && this.props.listAccounts.length ? 
              this.props.listAccounts.map((item, index) => (
                <TouchableWithoutFeedback key={`hive-${index}`} onPress={() => this.setAccount(item.account)}>
                  <View style={styles.containerAccount}>
                    <Image style= {styles.iconAccount} source={{ uri: `https://images.hive.blog/u/${item.account}/avatar` }} />
                    <View style={styles.viewNameAccount}>
                      <Text> { item.account } </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ))
              :
              <View style={styles.emptyAccounts}>
                <Icon
                  onPress={() => this.props.navigation.navigate('AddAccounts')}
                  type='MaterialCommunityIcons'
                  name="account-off"
                  style={{ fontSize: 30, color: "#212529" }}
                />
                <Text style={{ color: "#212529" }}> You don't have accounts </Text>
              </View>
            }

          </View>
          

        </ScrollView>
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