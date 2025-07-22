import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './layout/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './layout/Footer';
import History from './pages/History';
import Service from './pages/Service';
import Structure from './pages/Structure';
import PlacesToVisit from './pages/PlacesToVisit';
import Events from './pages/Events';
import HowToGet from './pages/HowToGet';
import FeedBack from './pages/FeedBack';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/services" element={<Service />} />
          <Route path="/Structure" element={<Structure />} />
          <Route path="/surroundings" element={<PlacesToVisit />} />
          <Route path="/events" element={<Events />} />
          <Route path="/howtoget" element={<HowToGet />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
