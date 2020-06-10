import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Input, Icon, Item } from 'native-base'
import { debounce } from 'lodash'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getAccount } from './../../../helpers/hive/client'
// components
import Username from './username'

class InputPermission extends Component{
  constructor (props) {
    super(props)
    this.state = {
      account: null,
      chain: null,
      keys: {
        active: "",
        posting: "",
        memo: ""
      }
    }
    this.account = null
    
    this.handleChangeUsername = debounce(this.onUpdateUssername.bind(this), 500);
    this.handleChangeKey = this.onUpdateKey.bind(this)
  }

  async onUpdateUssername(name) {
    let username = name.toLowerCase().replace(/\s/g, '')
    try {
      this.account = await getAccount(username)
      if(this.account) {
        return this.setState({ account: username })
      }
    } catch (error) {
      this.account = null
    }
    this.setState({ account: null });
  }

  onUpdateKey(permission, key) { // Active, P53m....

  }
  
  render() {
    let { account } = this.state
    console.log(this.account)
    return (
      <KeyboardAwareScrollView>
        <View style={styles.containerFull}>
          <Text style={styles.textOption}> Import Permission </Text>
          { Username(account) }

          <Item style={styles.textInput}>
            <Input
              placeholderTextColor="#4D4D4D"
              placeholder="Username"
              autoCapitalize='none'
              onChangeText={(value)=> this.handleChangeUsername(value)}
            />
          </Item>

          <Item style={styles.textInput}>
            <Input placeholder='Active'/>
            <Icon active type='MaterialCommunityIcons' name='qrcode-scan' />
          </Item>

          <Item style={styles.textInput}>
            <Input placeholder='Posting'/>
            <Icon active type='MaterialCommunityIcons' name='qrcode-scan' />
          </Item>

          <Item style={styles.textInput}>
            <Input placeholder='Memo'/>
            <Icon active type='MaterialCommunityIcons' name='qrcode-scan' />
          </Item>

        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerFull: {
    margin: 10,
    marginBottom: 0,
  },
  textInput: {
    height: 40,
    borderColor: '#D4D4D5',
    backgroundColor: "#D4D4D5",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1
  },
  textOption: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  }
})

export default connect(null, null)(InputPermission)
