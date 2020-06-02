import React, { Component } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import styles from './addAccountsStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { debounce } from 'lodash'
import hivejs from '@hiveio/hive-js';

class AddAccounts extends Component{
  constructor(props){
    super(props)
    this.state = {
      account: null,
      chain: "HIVE",
      keys: {
        active: null,
        posting: null,
        memo: null
      }
    }

    // update events
    this.handleChangeUsername = debounce(this.updateUsernameName.bind(this), 1000);
  }
  
  updateUsernameName(name) { this.setState({ account: name.toLowerCase() }) }
 
  render(){
    console.log("update")
    return (
      <SafeAreaView style={{flex: 1}}>

        <View style={styles.containerFull}>
          <View style={styles.containerImagenNewAccount}>
            <Image style={styles.imagenNewAccount} source={{ uri: `https://images.hive.blog/u/${this.state.account}/avatar` }} />
          </View>

          <TextInput
            placeholderTextColor="#4D4D4D"
            placeholder="Username"
            style={styles.textInput}
            onChangeText={this.handleChangeUsername}
          />

        </View>
          

      </SafeAreaView>
    )
  }
}


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(AddAccounts);