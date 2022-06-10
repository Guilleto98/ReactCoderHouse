import './item.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ name,img, stock}) => {

    return(
        <div className="divCart" >
            <h1>{name}</h1>
            <img src={img} alt=""/>
            <ItemCount stock={stock}/>
        </div>

    )
}

export default Item