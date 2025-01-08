import { useContext } from 'react';
import PropTypes from 'prop-types';
import { assets } from "../../assets/assets";
import './fooditem.css';
import { StoreContext } from '../context/context';

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  console.log(id)
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt={name} />
        {
          !cartItem[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt="Add to cart"
            />
          ) : (
            <div className="food-item-counter">
              <img
                className="remove"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="Remove from cart"
              />
              <p>{cartItem[id]}</p>
              <img
                className="increment"
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt="Increase quantity"
              />
            </div>
          )
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

Fooditem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Fooditem;
