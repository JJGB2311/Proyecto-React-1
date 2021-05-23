import React from 'react';

import './style/Navbar.css';
import logo from '../Image/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
       
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
        
        </div>
      </div>
    );
  }
}

export default Navbar;