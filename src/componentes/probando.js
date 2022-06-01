import { useState} from 'react-redux'

const mostrarCart = ({props}) =>{

    const [products, setProducts] = useState([]);

    useEffect (() =>{
        getProducts().then(result => setProducts(result));
    }, []) ;

    return (
        <div>
            <h1 className="h1">{greeting}</h1>
        </div>
  )
}

export default mostrarCart 