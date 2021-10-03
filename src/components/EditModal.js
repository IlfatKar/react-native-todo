import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (!title.trim()) {
      Alert.alert('Ошибка', 'Поле не может быть пустым')
    } else {
      onSave(title)
    }
  }
  const cancelHandler = () => {
    setTitle(value)
    onCancel()
  }
  return (
    <Modal animationType='slide' transparent={false} visible={visible}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder='Введите название'
          autoCapitalize='none'
          style={styles.input}
        />
        <View style={styles.btns}>
          <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>Сохранить</AppButton>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '70%',
    marginBottom: 10,
    padding: 5,
  },
  btns: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
  },
})
