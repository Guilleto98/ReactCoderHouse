import './item.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({id, name, price,img,description, stock}) => {

    return(
        <div className="divCart">
            <h1>{name}</h1>
            <h2>Precio ${price}</h2>
            <img src={img} alt=""/>
            <p>{description}</p>
            <ItemCount stock={stock}/>
        </div>

    )
}

export default Item