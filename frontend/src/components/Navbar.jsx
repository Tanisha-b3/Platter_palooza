import { assets } from '../assets/assets';
import './Navbar.css';
import logo_black from '../assets/logo_black.png';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from './context/context';

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const { getTotal, setToken, token } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='Navbar'>
      <Link to='/'><img src={logo_black} className='logo' alt='logo' /></Link>
      <ul className='navbar-menu'>
        <li>
          <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li>
          <a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
        </li>
        <li>
          <a href='#App-Download' className={menu === "Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile-App</a>
        </li>
        <li>
          <a href='#footer' className={menu === "Contact-me" ? "active" : ""} onClick={() => setMenu("Contact-me")}>Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='search icon' />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='basket icon' /></Link>
          <div className={getTotal() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="profile icon" />
            <ul className='navbar-profile-dropdown'>
              <li>
                <img src={assets.bag_icon} alt='bag icon' />
                <p onClick={() => navigate('/orders')}>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logout icon" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
