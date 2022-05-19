import { useState } from 'react'
import Button from '../Button/Button'

const CountFunction = (props) => {

//***FORMA DE UTILIZAR ESTA HERRAMIENTA A LO CANARIO */
    /*const state = useState(0)

    const count = state[0]
    const setCount = state[1]*/

//***FORMA CORRECTA: DESTRUCTURAR EL ARRIVE ***/
    const [ count, setCount ] = useState(0)

    const decrement = () =>{
        setCount(count - 1)
    }

    const increment = () =>{
        setCount(count + 1)
    }


    return ( <div style={{display:"flex"}}>
                <Button handleClick={decrement} label='-' color='red' />
                <h1>{count}</h1>
                <Button handleClick={increment} label='+' color='green' />
            </div>)
}

export default CountFunction