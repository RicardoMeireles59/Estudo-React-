/* React Fragments <> </>

Todo componente React precisa ter um elemento pai, nesse sentido geralmente utilizaríamos uma div para encapsular os demais elementos.
O problema é que dessa forma criamos nós desnecessários no DOM e dificultamos a estilização em muitos casos. Usando o React Fragments ainda 
retornamos um elemento pai, tornando o HTML mais limpo, eficiente e semântico.

*/

import Item from './Item'

function List() {
    return (
        <>
            <h1> Minha lista </h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1995} > </Item>
                <Item marca="Renault" ano_lancamento={1994} > </Item>
                <Item marca="Fiat" ano_lancamento={1993} > </Item>
                <Item />
            </ul>
        </>
    )
}

export default List