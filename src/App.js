import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import BookingPage from './pages/BookingPage/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking/ConfirmedBooking';
import NotFound from './pages/NotFound/NotFound';
import OrderOnline from './pages/OrderOnline/OrderOnline';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
