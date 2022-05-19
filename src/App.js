import './App.css';
import NavBar from './componentes/NavBar/NavBar'
import CountClass from './componentes/CountClass/CountClass'
import CountFunction from './componentes/CountFunction/CountFunction'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div classNam = "App">

        <NavBar className="NavBar"/>
        <CountClass />
        <CountFunction />
        <ItemListContainer greeting="Preservando nuestra cultura"/>
        
    </div> 
  );
}

export default App;
