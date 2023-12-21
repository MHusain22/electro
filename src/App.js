import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home'
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {

  const [user,setUserLogin] = useState({})
  return (
    <div>
      <BrowserRouter>
        
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {/* {
        user && user._id ? <Home /> : <Login setUserLogin={setUserLogin}/>
      } */}
      <Routes>
        <Route path="/login" element={<Login setUserLogin={setUserLogin}/>} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;