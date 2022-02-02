import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Routing = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default Routing;