import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Alert, Keyboard, Dimensions } from 'react-native'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'

export const AddTodo = (props) => {
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width)
  useEffect(() => {
    const update = (ev) => {
      setDeviceWidth(ev.window.width)
    }
    Dimensions.addEventListener('change', update)
    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })

  const [value, setValue] = useState('')
  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value)
      setValue('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Название задачи не должно быть пустым')
    }
  }
  return (
    <View style={styles.wrapper}>
      <TextInput
        width={deviceWidth - 160}
        onChangeText={setValue}
        value={value}
        placeholder='Название задачи'
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.input}
      />
      <Ionicons.Button style={styles.button} name='add' onPress={pressHandler}>
        Добавить
      </Ionicons.Button>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
  button: {},
})
