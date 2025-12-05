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
                <Item marca="Ferrari" > </Item>
                <Item marca="Renault" > </Item>
                <Item marca="Fiat" > </Item>
            </ul>
        </>
    )
}

export default List