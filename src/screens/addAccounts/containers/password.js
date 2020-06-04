import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { debounce } from 'lodash'
// components
import Username from './username'

class InputPassword extends Component {
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
    this.handleChangeUsername = debounce(this.onUpdateUssername.bind(this), 500);
    this.handleChangePassword = this.onUpdatePassword.bind(this)
  }

  onUpdateUssername(name) {
    let username = name.toLowerCase()
    this.setState({ account: username })
  }

  onUpdatePassword(password) {

  }
  
  render () {
    let { account } = this.state
    return (
      <View style={styles.containerFull}>
        <Text style={styles.textOption}> Import Password </Text>
        { Username(account) }
        <TextInput
          placeholderTextColor="#4D4D4D"
          placeholder="Username"
          style={styles.textInput}
          autoCapitalize='none'
          onChangeText={(value)=> this.handleChangeUsername(value)}
        />
        <TextInput
          placeholderTextColor="#4D4D4D"
          placeholder="Password"
          style={styles.textInput}
          onChangeText={(value)=> this.handleChangePassword(value)}
        />
      </View>
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

export default connect(null, null)(InputPassword);