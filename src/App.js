import { Container, Content } from './styles';
import Button from './components/Buttons';
import Input from './components/Input';
const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Button/>
      </Content>
    </Container>
  );
}

export default App;
