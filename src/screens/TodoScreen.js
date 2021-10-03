import React, {useState} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { THEME } from '../theme'
import {Card} from '../components/Card'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ goBack, todo, delTodo, onSave }) => {
  const [modal, setModal] = useState(false)

  const saveHandler = (title) => {
    onSave(todo.id, title)
    setModal(false)
  }

  return (
    <View style={styles.container}>
      <EditModal value={todo.title} visible={modal} onCancel={() => setModal(false)} onSave={saveHandler}/>

      <Card>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='Ред.' onPress={() => setModal(true)}/>
      </Card>
      <View style={styles.buttons}>
        <View style={styles.btn}>
          <Button title='Назад' color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.btn}>
          <Button title='Удалить' onPress={() => delTodo(todo.id)} color={THEME.DANGER_COLOR} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  btn: {
    width: '48%',
  },
  title: {
    flexShrink: 1,
    fontSize: 22,
  }
})
