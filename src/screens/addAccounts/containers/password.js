import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Item, Input, Button } from 'native-base'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { debounce } from 'lodash'
import { getAccount } from './../../../helpers/hive/client'
import { loginAccounts } from './../../../modules/accounts'
import { getWifAccount } from './../../../utils/hive'
// components
import Username from './username'

class InputPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      account: null
    }

    this.handleChangeUsername = debounce(this.onUpdateUssername.bind(this), 500);
    this.handleChangePassword = this.onUpdatePassword.bind(this)
  }

  async onUpdateUssername(name) {
    let username = name.toLowerCase().replace(/\s/g, '')
    try {
      let account = await getAccount(username)
      if(account) {
        return this.setState({ account, username })
      }
    } catch (error) {
    }
    this.setState({ account: null });
  }

  onUpdatePassword(password) {
    this.setState({ password })
  }

  async addAccount () {
    let { username, account, password } = this.state
    let keys, result
    try {
      keys = getWifAccount(username, password)
      result = loginAccounts(account, keys)
    } catch (error) {
      console.log(error)
    }
    console.log(result)
  }
  
  render () {
    let { username, account, password } = this.state
    let disabeldButton = account && password
    return (
      <KeyboardAwareScrollView>
        <View style={styles.containerFull}>
          <Text style={styles.textOption}> Import Password </Text>
          { Username(username) }

          <Item style={styles.textInput}>
            <Input
              placeholderTextColor="#4D4D4D"
              placeholder="Username"
              autoCapitalize='none'
              onChangeText={(value)=> this.handleChangeUsername(value)}
            />
          </Item>

          <Item style={styles.textInput}>
            <Input
              secureTextEntry={true}
              placeholderTextColor="#4D4D4D"
              placeholder="Password"
              onChangeText={(value)=> this.handleChangePassword(value)}
            />
          </Item>

          <Button
            full
            style={{ ...styles.button, backgroundColor: (disabeldButton ? "#E31337" : "#626569") }}
            onPress={() => this.addAccount()}
            disabled={!disabeldButton}
          >
            <Text style={styles.buttonText}> Add account </Text>
          </Button>

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
  },
  button: {
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default connect(null, null)(InputPassword);