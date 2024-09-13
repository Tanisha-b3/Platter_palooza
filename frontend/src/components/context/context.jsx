import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [token , setToken ]= useState(""); 
const url ="http://localhost:4000";
  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItem((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotal = () => {
    let totalAmount = 0;
    for (const itemId of Object.keys(cartItem)) {
      if (cartItem[itemId] > 0) {
        const itemInfo = food_list.find(product => product._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[itemId];
        }
      }
    }
    return totalAmount;
  };
  
  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotal,
    url,
   token,
   setToken

  }
  ;

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
