import React from 'react';
import styled from 'styled-components/native';
import { Container, Row } from './components/styled/basic';
import { Text } from 'react-native';
import moment from 'moment';

const App = () => {
  const [now, setNow] = React.useState(moment());
  React.useEffect(() => {
    setInterval(() => {
      setNow(moment());
    }, 1000);
  }, []);
  return (
    <Container>
      <Row>
        <DateText>{now.format('ddd / MMM Do/ YYYY')}</DateText>
      </Row>
      <Row>
        <Hour>{now.format('HH')}</Hour>
        <ClockText visible={parseInt(now.format('s'), 10)}>:</ClockText>
        <Minute>{now.format('mm')}</Minute>
        <ClockText visible={parseInt(now.format('s'), 10)}>:</ClockText>
        <Second>{now.format('ss')}</Second>
      </Row>
    </Container>
  );
};
const DateText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: gray;
`;
const ClockText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  ${({ visible }) => {
    if (visible) {
      return visible % 2 === 0 ? `color : transparent;` : `color : gray;`;
    }
  }}
`;
const Hour = styled(ClockText)`
  color: #629af5;
`;
const Minute = styled(ClockText)`
  color: #bd62f5;
`;
const Second = styled(ClockText)`
  color: #f562ba;
`;

export default App;
