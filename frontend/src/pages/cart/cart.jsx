import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/context/context";
import "./cart.css";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotal, addToCart, token, setToken } = useContext(StoreContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login logic - replace with your API call
    if (loginData.email === "user@example.com" && loginData.password === "password") {
      setToken("valid-token"); // Store token to indicate successful login
      setIsLoggedIn(true);
    } else {
      alert("Invalid login credentials");
    }
  };

  const cartHasItems = Object.keys(cartItem).length > 0 && getTotal() > 0;

  return (
    <div className="cart">
      {isLoggedIn ? (
        <>
          <h1>Your Cart</h1>
          {cartHasItems ? (
            <>
              <div className="cart-Items">
                <div className="cart-Items-header">
                  <p>Image</p>
                  <p>Title</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Actions</p>
                </div>
                <hr />
                {food_list
                  .filter((item) => cartItem[item._id] > 0)
                  .map((item) => (
                    <div className="cart-Item" key={item._id}>
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <p>{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="cart-quantity-controls">
                        <button onClick={() => addToCart(item._id)}>+</button>
                        <p>{cartItem[item._id]}</p>
                        <button onClick={() => removeFromCart(item._id)}>-</button>
                      </div>
                      <p>${(item.price * cartItem[item._id]).toFixed(2)}</p>
                      <button onClick={() => removeFromCart(item._id)} className="remove-btn">
                        Remove
                      </button>
                    </div>
                  ))}
              </div>
              <hr />
              <div className="cart-summary">
                <div className="cart-totals">
                  <h2>Cart Totals</h2>
                  <div className="cart-totals-row">
                    <p>Subtotal</p>
                    <p>${getTotal().toFixed(2)}</p>
                  </div>
                  <div className="cart-totals-row">
                    <p>Delivery Fee</p>
                    <p>${getTotal() === 0 ? "0.00" : "20.00"}</p>
                  </div>
                  <div className="cart-totals-row total-row">
                    <p>Total</p>
                    <p>${(getTotal() + (getTotal() === 0 ? 0 : 20)).toFixed(2)}</p>
                  </div>
                  <button onClick={() => navigate("/order")} className="checkout-btn">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
              <div className="cart-promo">
                <h3>Promo Code</h3>
                <div className="promo-input">
                  <input type="text" placeholder="Enter promo code" />
                  <button>Apply</button>
                </div>
              </div>
            </>
          ) : (
            <div className="cart-empty">
              <h2>Your cart is empty!</h2>
              <p>Browse our menu and add items to your cart.</p>
              <button onClick={() => navigate("/menu")} className="browse-menu-btn">
                Browse Menu
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="login-form">
          <h2>Please Log In</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
