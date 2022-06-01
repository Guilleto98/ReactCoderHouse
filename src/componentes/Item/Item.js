import './item.css'

const Item = ({id, name, price,img,description}) => {

    return(
        <div className="divCart">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <img src={img} alt=""/>
            <p>{description}</p>
            <button className="btnCart">Agregar al carrito</button>
        </div>

    )
}

export default Item