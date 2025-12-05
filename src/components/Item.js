/* React Fragments <> </>

Todo componente React precisa ter um elemento pai, nesse sentido geralmente utilizaríamos uma div para encapsular os demais elementos.
O problema é que dessa forma criamos nós desnecessários no DOM e dificultamos a estilização em muitos casos. Usando o React Fragments ainda 
retornamos um elemento pai, tornando o HTML mais limpo, eficiente e semântico.

PropTypes 

Usado para definir tipos de propriedades (number, string...)

import PropTypes from 'prop-types' 

Definição:

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Definição de valores default

Item.defaultProps = {
    marca: "Não informado",
    ano: 0,
}

*/

import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
    return (
        <>
            <li> {marca} - {ano_lancamento} </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Não informado",
    ano: 0,
}

export default Item