import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <AboutUs />
        <button onClick={() => navigate('/plants')}>Get Started</button>
      </div>
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
    <Router basename="/e-plantShopping">
      <AppContent />
    </Router>
  );
}
export default App;