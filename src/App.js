import { Container, Content, Row, Collumn } from './styles';
import Button from './components/Button';
import Input from './components/Input';
const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Row>
          <Button label='X'/>
          <Button label='/'/>
          <Button label='C'/>
          <Button label='X'/>
        </Row>
        <Row>
          <Button label='7'/>
          <Button label='8'/>
          <Button label='9'/>
          <Button label='-'/>
        </Row>
        <Row>
          <Button label='4'/>
          <Button label='5'/>
          <Button label='6'/>
          <Button label='+'/>
        </Row>
        <Row>
          <Button label='3'/>
          <Button label='2'/>
          <Button label='1'/>
          <Button label='='/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
