import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { THEME } from '../theme'

export const Navbar = (props) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({ ios: styles.navbarIos, android: styles.navbarAndroid }),
      }}
    >
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    paddingBottom: 10,
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
    fontSize: 20,
  },
})
