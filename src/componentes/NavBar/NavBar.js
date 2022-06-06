import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../img/logo.png'

const NavBar = ()=> {
    return(
        <nav>
            <img src={logo} alt="logo" width="8%"></img>
            <div className="nav">
                <button className="buttons-nav">Inicio</button>
                <button className="buttons-nav">Catalogo</button>
                <button className="buttons-nav">Personalizados</button>
                <button className="buttons-nav">Testimonios</button>
                <button className="buttons-nav">Testimonios</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar