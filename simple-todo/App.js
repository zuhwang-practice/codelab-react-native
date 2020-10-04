import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'todoList';
const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const onChangeText = (value) => {
    setInputValue(value);
  };
  const setStorage = () => {
    // todoList가 변경될때마다 AsyncStorage 업데이트
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  };
  const onPressSubmit = () => {
    if (inputValue === '') return;
    const newItem = {
      id: Date.now(),
      todo: inputValue,
      done: false,
    };
    setTodoList([...todoList, newItem]);
    setInputValue('');
    setStorage();
  };
  const onPressDelete = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id));
    setStorage();
  };
  const onPressCheck = (id) => {
    setTodoList(
      todoList.map((list) => {
        if (list.id === id) list.done = !list.done;
        return list;
      }),
    );
  };
  React.useEffect(() => {
    (async () => {
      try {
        const result = await AsyncStorage.getItem(STORAGE_KEY);
        const data = JSON.parse(result);
        if (!data.length) return;
        setTodoList(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Contents>
          {todoList.length > 0 &&
            todoList.map((list) => (
              <TodoItem key={list.id}>
                <Check onPress={() => onPressCheck(list.id)}>
                  <CheckIcon>{list.done ? '🔵' : '⚪️'}</CheckIcon>
                </Check>
                <TodoItemText>{list.todo}</TodoItemText>
                <TodoItemButton
                  title='삭제'
                  onPress={() => onPressDelete(list.id)}></TodoItemButton>
              </TodoItem>
            ))}
        </Contents>
        <InputContainer>
          <Input value={inputValue} onChangeText={onChangeText} />
          <Button title='전송' onPress={onPressSubmit}></Button>
        </InputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid pink;
  padding-top: ${Constants.statusBarHeight + 'px'};
  /* justify-content: center; */
  /* align-items: center; */
`;
const Contents = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;
const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TodoItemText = styled.Text`
  flex: 1;
`;
const TodoItemButton = styled.Button``;
const InputContainer = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  background-color: snow;
`;
const Input = styled.TextInput`
  flex: 1;
  border: 1px solid lightgray;
  background-color: white;
`;
const Button = styled.Button``;
const Check = styled.TouchableOpacity`
  margin-right: 4px;
`;
const CheckIcon = styled.Text`
  font-size: 20px;
`;
const Title = styled.Text`
  font-size: 30px;
`;
export default App;
