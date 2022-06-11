import React from 'react'
import './App.css';
import NavBar from './componentes/NavBar/NavBar'
/*import CountClass from './componentes/CountClass/CountClass'
import CountFunction from './componentes/CountFunction/CountFunction'*/
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {

    return (
      <BrowserRouter>
        <div classNam = "App">

          <NavBar className="NavBar"/>

          <Routes>
            <Route path="/" element={ <ItemListContainer greeting="Preservando nuestra cultura"/>} />
            <Route path="/*" element={ <ItemListContainer greeting="Preservando nuestra cultura"/>} />
            <Route path="/description/:id" element={<ItemDetailContainer/>} />
           {/*  <ItemListContainer greeting="Preservando nuestra cultura"/> */}
            {/* show ? <CountFunction /> : null */}
            {/*<CountClass />*/}
            {/*<CountFunction />*/}
            {/* <ItemDetail /> */}
          </Routes>
        </div> 
      </BrowserRouter>
        

  );
}

export default App;
