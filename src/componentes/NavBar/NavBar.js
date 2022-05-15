import './NavBar.css'

const NavBar = ()=> {
    return(
        <nav>
            <h1 className="name">Origen Oriental</h1>
            <div className="nav">
                <button className="buttons-nav">Inicio</button>
                <button className="buttons-nav">Catalogo</button>
                <button className="buttons-nav">Personalizados</button>
                <button className="buttons-nav">Testimonios</button>
            </div>
        </nav>
    )
}


export default NavBar