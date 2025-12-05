import { useState } from "react"

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} cadastrado com sucesso!`)
    }

    const [name, setName] = useState()

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default Form