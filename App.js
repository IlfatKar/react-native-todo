import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const delTodo = (id) => {
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить '${todos.find((t) => t.id === id).title}'?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            setTodoId(null)
            setTodos((prev) => prev.filter((t) => t.id !== id))
          },
        },
      ],
      { cancelable: true }
    )
  }

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ])
  }

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          t.title = title
        }
        return t
      })
    )
  }

  let content = <MainScreen onOpen={setTodoId} todos={todos} delTodo={delTodo} addTodo={addTodo} />

  if (todoId) {
    content = (
      <TodoScreen
        delTodo={delTodo}
        todo={todos.find((todo) => todo.id === todoId)}
        goBack={() => setTodoId(null)}
        onSave={updateTodo}
      />
    )
  }

  return (
    <View style={styles.wrapper}>
      <StatusBar style='auto' />
      <Navbar title='Todo App' />
      <View style={styles.container}>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 2,
  },
  wrapper: {
    flex: 1,
  },
})
