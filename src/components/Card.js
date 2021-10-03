import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Card = (props) => {
  return (
    <View style={styles.default}>
        {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: .3,
    shadowOffset: {width: 2, height: 2,},
    backgroundColor: '#fff',
    borderRadius:5,
    elevation: 5,
  }
})
