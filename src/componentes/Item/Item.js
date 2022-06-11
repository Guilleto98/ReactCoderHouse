import './item.css'
import '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ name,img, id}) => {

    return(
        <div className="divCart" >
            <h1>{name}</h1>
            <img src={img} alt=""/>
            <button className="btnCart"><Link to={`/description/${id}`} > DESCRIPTION </Link></button>
        </div>

    )
}

export default Item