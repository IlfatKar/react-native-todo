import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = props => {
  const [value, setValue] = useState([])
  const pressHandler = () => {
    if(value.trim()){
      props.onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название задачи не должно быть пустым')
    }
  }
  return (
    <View style={styles.wrapper}>
      <TextInput onChangeText={setValue} value={value || ''} placeholder="Название задачи" autoCorrect={false}  autoCapitalize='none' style={styles.input}/>
      <Button style={styles.button} title="Добавить" onPress={pressHandler} />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    padding: 10,
    borderBottomColor: '#3949ab',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    width: '70%',
  },
  button:{},
})