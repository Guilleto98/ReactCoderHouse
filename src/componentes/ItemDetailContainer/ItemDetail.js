import {useState, useEffect} from 'react'
import { getItem }from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

useEffect (() =>{
    
    getItem().then (response => {setItem(response)}) }, [])

return (
    <div ç>
            <ItemList products={item}/>
    </div>
)
    
}

export default ItemDetailContainer