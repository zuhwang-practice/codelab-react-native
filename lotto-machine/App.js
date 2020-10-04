import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native';

let LOTTOS = [];
_.times(45, (n) => LOTTOS.push(n + 1));
export default function App() {
  const [numbers, setNumbers] = React.useState([]);
  const [bonusNumber, setBonusNumber] = React.useState(0);
  const suffleAndSort = (arr) => {
    arr = _.shuffle(arr);
    let resultArr = arr.slice(0, 6);
    return resultArr.sort((a, b) => a - b);
  };
  const setNewNumbers = React.useCallback(() => {
    const newArray = suffleAndSort(LOTTOS);
    setNumbers(newArray);
  }, []);
  const setNewBonusNumber = React.useCallback(() => {
    const LOTTOS_WITHOUT_6_NUMBURS = LOTTOS.filter(
      (num) => !numbers.includes(num),
    );
    console.log('보너스뽑기', LOTTOS_WITHOUT_6_NUMBURS.join(', '));
    const bonus = _.shuffle(LOTTOS_WITHOUT_6_NUMBURS);
    setBonusNumber(bonus[0]);
  }, [numbers]);
  React.useEffect(() => {
    setNewBonusNumber();
  }, [numbers]);
  React.useEffect(() => {
    setNewNumbers();
  }, [setNewNumbers]);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Row>
        <Ball range={numbers[0]}>
          <Number>{numbers[0]}</Number>
        </Ball>
        <Ball range={numbers[1]}>
          <Number>{numbers[1]}</Number>
        </Ball>
        <Ball range={numbers[2]}>
          <Number>{numbers[2]}</Number>
        </Ball>
        <Ball range={numbers[3]}>
          <Number>{numbers[3]}</Number>
        </Ball>
        <Ball range={numbers[4]}>
          <Number>{numbers[4]}</Number>
        </Ball>
        <Ball range={numbers[5]}>
          <Number>{numbers[5]}</Number>
        </Ball>
      </Row>
      <ButtonWrapper>
        <Button
          style={styles.button}
          title='다시 뽑기'
          onPress={setNewNumbers}
        />
      </ButtonWrapper>
      <Row>
        <Ball range={bonusNumber}>
          <Number>{bonusNumber}</Number>
        </Ball>
      </Row>
      <ButtonWrapper>
        <Button
          style={styles.button}
          title='뽀너스 뽑기'
          onPress={setNewBonusNumber}
        />
      </ButtonWrapper>
    </SafeAreaView>
  );
}

const Title = styled.Text`
  font-weight: bold;
  color: gray;
`;
const ButtonWrapper = styled.View`
  margin: 24px;
  border-radius: 50px;
  padding: 5px 12px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Ball = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${({ range }) => {
    if (range > 0 && range < 11) return '#FFD827';
    if (range > 10 && range < 21) return '#27BAFF';
    if (range > 20 && range < 31) return '#FF4327';
    if (range > 30 && range < 41) return '#35D715';
    if (range > 40) return '#7F7293';
    return 'black';
  }};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
const Number = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
