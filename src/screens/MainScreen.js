import React from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, delTodo, todos, onOpen }) => {
  return (
    <View style={styles.container}>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo onOpen={onOpen} delTodo={delTodo} todo={item} />}
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
