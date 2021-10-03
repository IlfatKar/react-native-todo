import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, delTodo, todos }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo delTodo={delTodo} todo={item} />}
        data={todos}
      />
    </View>
  )
}
const styles = StyleSheet.create({})
