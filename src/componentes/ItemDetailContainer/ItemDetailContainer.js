import React from 'react'
import { useParams } from 'react-router-dom'
import getItem, { products } from '../../asyncmock' 


const ItemDetailContainer = () => {
    const {id} = useParams
    getItem.then(item => {
        products.map(product => {
            if(product.id === id){
                return product
            }
        }
        )}
)}

export default ItemDetailContainer 
