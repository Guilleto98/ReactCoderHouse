import './App.css';
import NavBar from './componentes/NavBar/NavBar'
import CountClass from './componentes/CountClass/CountClass'
import CountFunction from './componentes/CountFunction/CountFunction'

function App() {
  return (
    <div classNam = "App">

        <NavBar className="NavBar"/>
        <CountClass />
        <CountFunction />
        
    </div> 
  );
}

export default App;
