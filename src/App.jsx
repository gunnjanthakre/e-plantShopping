import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <AboutUs />
      <button onClick={() => navigate('/plants')}>Get Started</button>
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem onContinueShopping={() => navigate('/plants')} />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;