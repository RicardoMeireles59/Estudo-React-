function Evento() {

    function dispararEvento() {
        console.log("Evento disparado!")
    }

    return (
        <>
            <button onClick={dispararEvento} > Disparar evento </button>
        </>
    )
}

export default Evento