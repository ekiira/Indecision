import React from 'react';
import './Header.css';

const Header = () => (
  <div className="header navbar-dark">
    <div className="header-container container py-3">
      <span className="header-brand font-weight-bold">
        Indecison
      </span>
      <br />
      <span className="header-sub-brand"> Put your life in the hands of a computer</span>
    </div>
  </div>
);

export default Header;
