import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const NavBar = ()=> {
    return(
        <nav>
            <img src={logo} alt="logo" width="8%"></img>
            <div className="nav">
                <button className="buttons-nav"><Link to={'/inicio'}>Inicio</Link></button>
                <button className="buttons-nav"><Link to={'/catalogo'}>Catalogo</Link></button>
                <button className="buttons-nav"><Link to={'/personalizados'}>Personalizados</Link></button>
                <button className="buttons-nav"><Link to={'/testimonio'}>Testimonio</Link></button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar