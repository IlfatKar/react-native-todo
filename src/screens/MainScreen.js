import React, { useContext } from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'

export const MainScreen = () => {
  const { todos, addTodo, delTodo } = useContext(TodoContext)
  const { changeScreen } = useContext(ScreenContext)
  return (
    <View style={styles.container}>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo onOpen={changeScreen} delTodo={delTodo} todo={item} />}
        data={todos}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
