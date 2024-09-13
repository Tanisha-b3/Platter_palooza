import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './/components/Slidebar/Slider'
import { Route, Routes } from 'react-router-dom';
import Order from './pages/orders/Order';
import List from './pages/List/List';
import Add from './pages/Add/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
      <ToastContainer />
        <Slider />
        <Routes>
          <Route path="/add" element={<Add/>} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
          <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback Route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
