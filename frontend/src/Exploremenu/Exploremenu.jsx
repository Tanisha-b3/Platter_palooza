
import { menu_list } from "../assets/assets";
import './Exploremenu.css';
import PropTypes from "prop-types"

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
            key={index}
            className="explore-menu-list-item"
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
  };
  