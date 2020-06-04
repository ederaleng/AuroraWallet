import React, { Component } from 'react'
import styles from './addAccountsStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../../components'
import { View, TouchableWithoutFeedback  } from 'react-native'
import { Title, Icon, Text } from 'native-base'
import Password from '../containers/password'
import Permission from '../containers/permission'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


class AddAccounts extends Component{
  constructor(props){
    super(props)
    this.state = {
      option: null
    }
  }

  setOption(option) {
    this.setState({ option })
  }


  _menu = null;
  setMenuRef = ref => { this._menu = ref; };
  hideMenu = (option) => {
    this.setOption(option)
    this._menu.hide();
  };
  showMenu = () => { this._menu.show(); };
 
  render(){
    let { option } = this.state
    return (
      <SafeAreaView style={{flex: 1 }}>
        
        <Header
          {...this.props}
          contentCenter={ <Title> Add account </Title> }
          contentRight={
            option!==null ?
            <Menu
              ref={this.setMenuRef}
              button={
                <Icon
                  type='MaterialCommunityIcons'
                  name="menu"
                  onPress={this.showMenu}
                  style={styles.otherOptionIcon}
                /> 
              }
            >
              <MenuItem onPress={() => this.hideMenu('password')}> Password </MenuItem>
              <MenuItem onPress={() => this.hideMenu('permission')}> Permission </MenuItem>
            </Menu>
            : null
          }
        />


        {
          option !== null ? 
          (option === 'password' ? <Password /> : <Permission />)
          :
          <View style={styles.optionContainer}>

            <TouchableWithoutFeedback onPress={() => this.setOption('password')}>
              <View style={styles.optionBox}>
                <Icon
                  type='MaterialCommunityIcons'
                  name="textbox-password"
                  style={styles.optionIcons}
                />
                <Text style={styles.optionText}> Password </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => this.setOption('permission')}>
              <View style={styles.optionBox}>
                <Icon
                  type='MaterialCommunityIcons'
                  name="account-key"
                  style={styles.optionIcons}
                />
                <Text style={styles.optionText}> Keys </Text>
              </View>
            </TouchableWithoutFeedback>

          </View>
        }

      </SafeAreaView>
    )
  }
}

export default AddAccounts;