import React from 'react'
import './App.css';
import NavBar from './componentes/NavBar/NavBar'
/*import CountClass from './componentes/CountClass/CountClass'
import CountFunction from './componentes/CountFunction/CountFunction'*/
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetail from '../src/componentes/ItemDetailContainer/ItemDetail'

function App() {

    return (
    <div classNam = "App">

        <NavBar className="NavBar"/>
        <ItemListContainer greeting="Preservando nuestra cultura"/>
        {/* show ? <CountFunction /> : null */}
        {/*<CountClass />*/}
        {/*<CountFunction />*/}
        <ItemDetail />
        

    </div> 
  );
}

export default App;
