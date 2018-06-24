import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">June 2018</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Junjie Chen <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <img src="/images/junjie-chen.jpg" alt="Profile Image" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
