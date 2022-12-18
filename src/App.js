import { Container, Content, Row, Collumn } from './styles';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
  }
  const handleCurrentNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='X' onClick={() => handleCurrentNumber('')}/>
          <Button label='/' onClick={() => handleCurrentNumber('')}/>
          <Button label='C' onClick={() => handleOnClear()}/>
          <Button label='X' onClick={() => handleCurrentNumber('')}/>
        </Row>
        <Row>
          <Button label='7' onClick={() => handleCurrentNumber('7')}/>
          <Button label='8' onClick={() => handleCurrentNumber('8')}/>
          <Button label='9' onClick={() => handleCurrentNumber('9')}/>
          <Button label='-' onClick={() => handleCurrentNumber('')}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleCurrentNumber('4')}/>
          <Button label='5' onClick={() => handleCurrentNumber('5')}/>
          <Button label='6' onClick={() => handleCurrentNumber('6')}/>
          <Button label='+' onClick={() => handleCurrentNumber('')}/>
        </Row>
        <Row>
          <Button label='3' onClick={() => handleCurrentNumber('3')}/>
          <Button label='2' onClick={() => handleCurrentNumber('2')}/>
          <Button label='1' onClick={() => handleCurrentNumber('1')}/>
          <Button label='=' onClick={() => handleCurrentNumber('')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
