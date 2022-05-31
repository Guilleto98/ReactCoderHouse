const Item = ({id, name, price,img,description}) => {

    return(
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <img src={img} alt=""/>
            <h4>{description}</h4>
        </div>

    )
}

export default Item