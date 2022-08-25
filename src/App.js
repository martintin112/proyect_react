// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const color = {color: "Red"}
  const fondo = {backgroundColor: "Black"}
  const greeting = "Hola! Esta es mi app en React"

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
