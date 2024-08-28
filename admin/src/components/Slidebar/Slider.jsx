import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/admin_assets/assets";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slidebar">
      <div className="slidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="Add items icon" />
          <p>ADD Items</p>
          </NavLink>
        
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="List items icon" />
          <p>LIST Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="Orders icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Slider;
