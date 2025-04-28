import React, { useState } from 'react';
import './orders.css';

const Orders = () => {
  // Example selected items (In a real scenario, this would be from a context or state)
  const [orders, setOrders] = useState([
    { id: 1, name: 'Pizza Margherita', quantity: 2, price: 12.99 },
    { id: 2, name: 'Pasta Carbonara', quantity: 1, price: 10.99 },
    { id: 3, name: 'Caesar Salad', quantity: 1, price: 7.49 },
  ]);

  // Calculate the total price
  const totalPrice = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-item-details">
              <h3>{order.name}</h3>
              <p>Quantity: {order.quantity}</p>
              <p>Price: ${order.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Orders;
