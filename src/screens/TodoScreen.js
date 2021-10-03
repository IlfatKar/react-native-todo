import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppButton } from '../components/ui/AppButton'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

export const TodoScreen = ({ goBack, todo, delTodo, onSave }) => {
  const [modal, setModal] = useState(false)

  const saveHandler = (title) => {
    onSave(todo.id, title)
    setModal(false)
  }

  return (
    <View style={styles.container}>
      <EditModal value={todo.title} visible={modal} onCancel={() => setModal(false)} onSave={saveHandler} />

      <AppCard>
        <Text style={styles.title}>{todo.title}</Text>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name='edit' size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.btn}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
            <AntDesign name='back' size={20} color='#fff' />
          </AppButton>
        </View>
        <View style={styles.btn}>
          <AppButton onPress={() => delTodo(todo.id)} color={THEME.DANGER_COLOR}>
            <FontAwesome name='remove' size={20} color='#fff' />
          </AppButton>
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
  },
})
