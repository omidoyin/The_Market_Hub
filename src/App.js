import logo from './logo.svg';
import './App.css';
import Navbar from './homepage/Navbar';
import Shop from './shop/Shop';
import HomePage from './homepage/HomePage';
import { BrowserRouter as Router, Routes, Route,Navigate, Link } from 'react-router-dom';
import ProductDetails from './productDetails/ProductDetails';
import Sellerstore from './sellerstore/Sellerstore';
import Test from './shop/Test';

function App() {
  
  return (
    <div className="App">
      
      
      <Router>
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/productdetails' element={<ProductDetails/>}/>
          <Route path='/sellerstore' element={<Sellerstore/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
