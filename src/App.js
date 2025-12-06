import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

const nome = "Ricardo"

const meusItens = ['React', 'Vue', 'Angular']

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
      <Condicional> </Condicional>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
