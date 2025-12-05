import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

const nome = "Ricardo"

function App() {
  return (
    <div className="App">
      <h1> Alterando o JSX </h1>
      < HelloWorld />
      <Frase> </Frase>
      <SayMyName nome="Matheus" > </SayMyName>
      <SayMyName nome="João" > </SayMyName>
      <SayMyName nome={nome} > </SayMyName>
      <Pessoa
        nome="Ricardo"
        idade="24"
        profissao="Desenvolvedor">
      </Pessoa>
      <List> </List>
    </div>
  );
}

export default App;
