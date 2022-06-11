import React from 'react'
/* import estilosDetail from './ItemDetail.css' */
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ product }) => {

    return(
        <div className='contenedor-grande'>
            <div className='card-detail'>
            <h1>{product.name}</h1>
            <img src={product.img} className="imagen-detalle" alt={product.name} />
            <h1>{product.price}</h1>
            </div>
            <div className='card-detail-descripcion'>
            <p className='descripcion'>
                    {product.descriptionLarga}
            </p>
            </div>
            <ItemCount stock={product.stock}/>
        </div>
    )
}

export default ItemDetail