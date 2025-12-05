import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

const nome = "Ricardo"

function App() {
  return (
    <div className="App">
      <h1> Alterando o JSX </h1>
      < HelloWorld />
      <Frase />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Ricardo"
        idade="24"
        profissao="Desenvolvedor"
      />
      <List />
      <Evento />
      <Form />
    </div>
  );
}

export default App;
