import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import { Link } from 'react-router-dom';

const plantsData = [
  {
    category: 'Air Purifiers', emoji: '🌬️',
    plants: [
      { name: 'Peace Lily', cost: '$12.99', image: 'https://images.unsplash.com/photo-1687858001773-d58b6cec5bdf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Spider Plant', cost: '$8.99', image: 'https://images.unsplash.com/photo-1608161779298-f42256d2c58d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: "Devil's Ivy", cost: '$9.99', image: 'https://images.unsplash.com/photo-1775402962231-6b7e102acb99?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Aloe Vera', cost: '$10.99', image: 'https://images.unsplash.com/photo-1569745358610-b01866003860?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Boston Fern', cost: '$14.99', image: 'https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Bamboo Palm', cost: '$19.99', image: 'https://images.unsplash.com/photo-1651691702390-85d1b7b7e38e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
  category: 'Low Maintenance', emoji: '😌',
  plants: [
    { name: 'Snake Plant', cost: '$15.99', image: 'https://images.unsplash.com/photo-1687552212914-03a30c82053c?w=400' },
    { name: 'ZZ Plant', cost: '$18.99', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
    { name: 'Jade Plant', cost: '$11.99', image: 'https://images.unsplash.com/photo-1621552330975-f5f9c85dc9c9?w=400' },
    { name: 'Pothos', cost: '$7.99', image: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?w=400' },
    { name: 'Cast Iron Plant', cost: '$16.99', image: 'https://media.istockphoto.com/id/2251124601/photo/green-dracaena-compacta-plant-near-white-wall-space-for-text-house-decor.jpg?s=612x612' },
    { name: 'Rubber Plant', cost: '$21.99', image: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=400' },
  ],
},
{
  category: 'Tropical Statement', emoji: '🌴',
  plants: [
    { name: 'Monstera Deliciosa', cost: '$24.99', image: 'https://images.unsplash.com/photo-1585598117002-9fb152e67dbf?w=400' },
    { name: 'Bird of Paradise', cost: '$39.99', image: 'https://images.unsplash.com/photo-1585598116402-c686b02ba581?w=400' },
    { name: 'Fiddle Leaf Fig', cost: '$34.99', image: 'https://images.unsplash.com/photo-1663742163165-49e1a1534493?w=400' },
    { name: 'Elephant Ear', cost: '$27.99', image: 'https://images.unsplash.com/photo-1675687774174-085f47ca9693?w=400' },
    { name: 'Calathea Orbifolia', cost: '$22.99', image: 'https://images.unsplash.com/photo-1714507767656-2fb307e1b03d?w=400' },
    { name: 'Philodendron', cost: '$17.99', image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=400' },
  ],
}
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (name) => cartItems.some((i) => i.name === name);
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="product-page">
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

      <div className="product-hero">
        <h2>Our Plant Collection</h2>
      </div>

      {plantsData.map((cat) => (
        <div className="category-section" key={cat.category}>
          <h3 className="category-title">{cat.emoji} {cat.category}</h3>

          <div className="plants-grid">
            {cat.plants.map((plant) => (
              <div className="plant-card" key={plant.name}>

                {/* ✅ IMAGE FIX (IMPORTANT) */}
                <img
                src={plant.image}
                alt={plant.name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/300x200/2d6a4f/white?text=Plant";
                    }}
                />

                <div className="plant-card-body">
                  <div className="plant-name">{plant.name}</div>
                  <div className="plant-price">{plant.cost}</div>

                  <button
                    className="add-to-cart-btn"
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart(plant.name)}
                  >
                    {isInCart(plant.name) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;