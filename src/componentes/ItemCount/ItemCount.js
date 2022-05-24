import './ItemCount.css'
import { useState } from 'react'

const ItemCount = (props) => {

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


    return ( <div className="divCount" style={{display:"flex"}}>
                <button className="btnCount" onClick={decrement} color='red' >-</button>
                <h1>{count}</h1>
                <button className="btnCount" onClick={increment} color='red' >+</button>
            </div>)
}

export default ItemCount