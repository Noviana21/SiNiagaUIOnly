import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import ProductPage from './pages/ProductPage';
import ReportPage from './pages/ReportPage';

export default function App() {
  const isLoggedIn = true;

  return (
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
        <Footer />
      </Router>
  );
}