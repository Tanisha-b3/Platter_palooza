import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/home'
import PlaceOrder from './pages/Placeorder/placeorder';
import Cart from './pages/cart/cart';
import Footer from './components/footer/footer';
import { useState } from 'react';
import LoginPop from './components/LOgin/LoginPop.jsx';
import Orders from './components/orders/orders.jsx';
import ExploreMenu from './Exploremenu/Exploremenu.jsx';

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
          <Route path ="/orders" element={<Orders/>}/>
          <Route path ="/menu" element={<ExploreMenu/>}/>
          <Route path="/login" element={<LoginPop/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
