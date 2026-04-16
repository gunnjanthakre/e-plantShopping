import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';
import { Link, useNavigate } from 'react-router-dom';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = () => cartItems.reduce((t, i) => t + parseFloat(i.cost.slice(1)) * i.quantity, 0).toFixed(2);
  const itemTotal = (item) => (parseFloat(item.cost.slice(1)) * item.quantity).toFixed(2);
  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);

  const handleIncrement = (item) => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const handleDecrement = (item) => {
    if (item.quantity > 1) dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    else dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">🌿 <span>Paradise</span> Nursery</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              🛒{totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart-container">
        <div className="cart-header-section"><h2>Your Shopping Cart</h2></div>
        <div className="cart-summary-bar">
          <div className="summary-stat"><span className="label">Total Plants</span><span className="value">{totalItems}</span></div>
          <div className="summary-stat"><span className="label">Total Cost</span><span className="value">${totalAmount()}</span></div>
        </div>
        {cartItems.length === 0 ? (
          <div className="cart-empty"><h3>Your cart is empty 🌱</h3></div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-unit-price">Unit: {item.cost}</div>
                <div className="item-subtotal">Subtotal: ${itemTotal(item)}</div>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button className="qty-btn" onClick={() => handleDecrement(item)}>−</button>
                  <span className="qty-count">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button className="delete-btn" onClick={() => dispatch(removeItem(item.name))}>🗑 Delete</button>
              </div>
            </div>
          ))
        )}
        <div className="cart-actions">
          <button className="btn-continue" onClick={() => onContinueShopping ? onContinueShopping() : navigate('/plants')}>← Continue Shopping</button>
          <button className="btn-checkout" onClick={() => alert('Functionality to be added for future reference')}>Checkout →</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;