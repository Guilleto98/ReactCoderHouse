import carrito from '../../img/carrito1.png'

const CartWidget = () =>{
    return(
        <div className="div-CartWidget">

            <img className="img-Carrito"  src = {carrito} alt="cart-widget" width="25px"></img>

            <span className="contadorCarrito">5</span>

        </div>
        
                   
    )
}

export default CartWidget