import React from 'react'
import './App.css';
import NavBar from './componentes/NavBar/NavBar'
/*import CountClass from './componentes/CountClass/CountClass'
import CountFunction from './componentes/CountFunction/CountFunction'*/
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'

function App() {

    return (
    <div classNam = "App">

        <NavBar className="NavBar"/>
        <ItemListContainer greeting="Preservando nuestra cultura"/>
        <ItemCount stock={10}/>
        {/* show ? <CountFunction /> : null */}
        {/*<CountClass />*/}
        {/*<CountFunction />*/}
    </div> 
  );
}

export default App;
