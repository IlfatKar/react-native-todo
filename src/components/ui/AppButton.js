import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, TouchableNativeFeedback, Platform } from 'react-native'
import { THEME } from '../../theme'

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR, style }) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper activeOpacity={0.7} onPress={onPress}>
      <View style={{ ...style, ...styles.button, backgroundColor: color }}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
  },
})
