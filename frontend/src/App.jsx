import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/home'
import PlaceOrder from './pages/Placeorder/placeorder';
import Cart from './pages/cart/cart';
import Footer from './components/footer/footer';
import { useState } from 'react';
import LoginPop from './components/LOgin/LoginPop';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPop setShowLogin={setShowLogin}/> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
