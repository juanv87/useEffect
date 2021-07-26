import React, {useState, useEffect} from 'react'

const Lifecycle = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

   /*
    Es una funcion como todos los hooks. Recibe 2 parametros: 1. una funcion y 2. un array de dependencias, que podemos enviarlo o no.
    De acuerdo a lo que le pasemos al array de dependencias el useEffect se comportará de una forma distinta.
   
    La funcion que está dentro del efecto se va a ejecutar cada vez que haya un render del componente, 
    es decir, cada vez que se cargue o cambie un estado del componente.
   */
    useEffect(() => {
        console.log('useEffect no dependency')
    })
    
    /*
    Al pasarle un array vacío, esta función, solo se ejecuta una sola vez.
    */
    useEffect(() => {
        console.log('useEffect []')
    }, [])

    /* Esta funcion se ejecutará cada vez que haya un cambio en el estado del [counter1] */
    useEffect(() => {
        console.log('useEffect [counter1]')
    }, [counter1])
    
    /* Esta funcion se ejecutará cada vez que haya un cambio en el estado del [counter2] */
    useEffect(() => {
        console.log('useEffect [counter2]')
    }, [counter2])
    
    useEffect(() => {
        console.log('useEffect [counter1], [counter2]')
    }, [counter1, counter2])

    return (
        <div>
            <h1>Clicks c1: {counter1}</h1>
            <h1>Clicks c2: {counter2}</h1>
            <button onClick={() => setCounter1(counter1+1)}>
                Increment c1 
            </button>
            <button onClick={() => setCounter2(counter2+1)}>
                Increment c2 
            </button>
        </div>
    )
}

export default Lifecycle
