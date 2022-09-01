// import logo from './logo.svg';
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App({contador, setContador}) {
  const color = {color: "Red"}
  const fondo = {backgroundColor: "Black"}
  const greeting = "Hola! Esta es mi app en React"
  // const start = 0
  // let stock = 15

  return (
  <>
    <div className="App">
      <NavBar />
      <ItemListContainer color={color} fondo={fondo} saludo={greeting}/>
    </div>
    
  </>
  );
}

export default App;
