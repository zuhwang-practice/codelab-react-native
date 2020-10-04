import React from 'react';
import styled from 'styled-components/native';

const App = () => {
  return (
    <Container>
      <Contents>
        {(() => {
          return (
            <TodoItem>
              <TodoItemText>할 일 목록 표시</TodoItemText>
              <TodoItemButton title='삭제' onPress={() => {}}></TodoItemButton>
            </TodoItem>
          );
        })()}
      </Contents>
      <InputContainer>
        <Input />
        <Button title='전송' onPress={() => {}}></Button>
      </InputContainer>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid pink;
  /* justify-content: center; */
  /* align-items: center; */
`;
const Contents = styled.ScrollView`
  flex: 1;
  background-color: skyblue;
  padding: 8px 24px;
`;
const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TodoItemText = styled.Text``;
const TodoItemButton = styled.Button``;
const TempText = styled.Text`
  flex: 1;
  padding: 5px;
`;
const InputContainer = styled.View`
  border: 1px solid gray;
  flex-direction: row;
  padding: 10px 20px;
`;
const Input = styled.TextInput`
  flex: 1;
  border: 1px solid lightgray;
`;
const Button = styled.Button``;
const Title = styled.Text`
  font-size: 30px;
`;
export default App;
