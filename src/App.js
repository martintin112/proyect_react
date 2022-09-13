// import logo from './logo.svg';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';

function App() {

  return (
  <>
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    
  </>
  );
}

export default App;
