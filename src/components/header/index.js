import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class HeaderContainer extends Component{
  constructor(props){
    super(props)
  }

  render() {
    let {
      notBack=false,
      notLeft=false,
      notRight=false,
      contentLeft=null,
      contentRight=null,
      contentCenter=null,
      barColor='#212529',
      bgHeader='#212529'
    } = this.props

    return(
      <Header
        androidStatusBarColor={barColor}
        style={{ backgroundColor: bgHeader }}
      >

        {
          !notLeft ?
          <Left style={styles.LeftStyle}>
            {
              !notBack ?
              <Icon
                onPress={() => this.props.navigation.navigate('ListAccounts')}
                name='arrow-back'
                style={styles.ArrowStyle}
              />
              : null
            }
            { contentLeft }
          </Left>
          : null
        }

        <Body style={styles.CenterStyle}>
          { contentCenter }
        </Body>
        
        {
          !notRight ? 
          <Right style={styles.RightStyle}>
            { contentRight }
          </Right>
          : null
        }
        
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  CenterStyle: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LeftStyle: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  RightStyle: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  ArrowStyle: {
    color: 'white'
  }
})

export default HeaderContainer
