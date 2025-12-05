/* Os argumentos/parâmetros da função que serão as propriedades no hmtl são variáveis, dessa forma não preciso escrever props.xxx para cada propriedade
somente o nome da variável 

Lembrar sempre de colocar as {} já que são variáveis nos argumentos/parâmetros da função 
*/

function Pessoa({ nome, idade, profissao }) {
    return (
        <div>
            <p> Nome: {nome} </p>
            <p> Idade: {idade} </p>
            <p> Profissão: {profissao} </p>
        </div>
    )
}

export default Pessoa 