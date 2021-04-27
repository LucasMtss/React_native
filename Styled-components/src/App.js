import {Title, TitleSmall} from './styles';

function App() {
  return (
    <div className="App">
      <Title fontSize={50}>
        Hello world
        <span>
          texto menor
        </span>
      </Title>
      <TitleSmall>
        Title small
      </TitleSmall>
    </div>
  );
}

export default App;
