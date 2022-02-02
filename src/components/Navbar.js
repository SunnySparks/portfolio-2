import React, { useState } from 'react';
import '../App.css';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="cont">
        <div className="navigation">
          <input
            type="checkbox"
            className="toggle-menu"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <div className="hamburger" />
          <ul className="menu">
            <li>
              <div className="logo">
                <div>
                  <p />
                </div>
              </div>
            </li>
            <li><Link to="/" className="navLink" onClick={() => setChecked((c) => !c)}>Home</Link></li>
            <li><Link to="/about" className="navLink" onClick={() => setChecked((c) => !c)}>About</Link></li>
            <li><Link to="/portfolio" className="navLink" onClick={() => setChecked((c) => !c)}>Portfolio</Link></li>
            <li><Link to="/contact" className="navLink" onClick={() => setChecked((c) => !c)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;