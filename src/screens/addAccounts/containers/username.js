import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

function _username(username) {
  return(
    <View style={styles.containerImagenNewAccount}>
      <Image style={styles.imagenNewAccount} source={{ uri: `https://images.hive.blog/u/${username}/avatar` }} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerImagenNewAccount: {
    alignItems: "center",
    marginBottom: 10
  },
  imagenNewAccount: {
    width: 80,
    height: 80,
    borderRadius: 80/2
  },
})

export default _username;