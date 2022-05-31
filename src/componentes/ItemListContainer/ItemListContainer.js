import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect} from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
        const [products, setProducts] = useState([])

    useEffect (() =>{
        getProducts().then (response =>{
            setProducts(response)

        })
    }, [])
    return (
        <div>
            <h1 className="h1">{greeting}</h1>
            <div className="cartItem">
                <ItemList products={products}/>
            </div>
            
        </div>
    )
        
}

export default ItemListContainer