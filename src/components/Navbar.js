import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    paddingBottom: 10,
    height: 70,
    backgroundColor: '#3949ab',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
})
