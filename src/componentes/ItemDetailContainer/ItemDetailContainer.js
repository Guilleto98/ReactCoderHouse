import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProduct } from '../../asyncmock' 
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    //estado para guardarme el producto
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    getProduct(id)
    .then(product => {
        setProducto(product)
    })

    return(
        <ItemDetail product={producto} />
    )

}
export default ItemDetailContainer