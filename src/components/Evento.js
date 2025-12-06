import Button from './Button';

function Evento() {

    function dispararEvento() {
        console.log("Evento 1 disparado!")
    }

    function dispararEvento2() {
        console.log("Evento 2 disparado!")
    }

    return (
        <>
            <Button event={dispararEvento} text="Primeiro evento" />
            <Button event={dispararEvento2} text="Segundo evento" />
        </>
    )
}

export default Evento