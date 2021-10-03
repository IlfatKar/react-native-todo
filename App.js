import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Navbar } from './src/components/Navbar'

export default function App() {
  const [todos, setTodos] = useState([])

  const delTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
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

  return (
    <View style={styles.wrapper}>
      <StatusBar style='auto' />
      <Navbar title='Todo App' />
      <View style={styles.container}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 2,
  },
  wrapper: {
    flex: 1,
  },
})
