import './ItemCount.css'
import { useState } from 'react'
import swal from 'sweetalert';


// CORRECCIÓNES******
// ItemCount debería recibir stock por props.
// Para así poder limitar la cantidad máxima que el cliente puede agregar al carrito

const ItemCount = (props) => {

// recibo props entonces para acceder al stock, hago props.stock
// otra forma es hacer const { stock } = props y uso directamente stock.
// inicializo count en 1 porque quiero que el cliente agregue la cantidad 1 o mayor en el carriito

//***FORMA CORRECTA: DESTRUCTURAR EL ARRAY ***/
    const [ count, setCount ] = useState(0)

 // en decrement agrego un fi para que count nunca sea negativo    
    const decrement = () =>{
        if( count > 0){
            setCount(count - 1)
        }
    }

// en decrement  limito el máximo al stock disponible
    const increment = () =>{
        if (count < props.stock){
            setCount(count + 1)
        }
    }

    const notificacion = () => swal("Bien hecho!", "Agregaste " + count + " productos al carrtito!", "success")
      

    return ( <div className="divCountPadre" style={{display:"flex"}}>
                <div className="divCount">
                    <button className="btnCount" onClick={decrement} color='red' >-</button>
                    <h1>{count}</h1>
                    <button className="btnCount" onClick={increment} color='red' >+</button>
                </div>
                <button className="btnCart" onClick={notificacion}>Agregar al carrito</button>
            </div>)


}

export default ItemCount