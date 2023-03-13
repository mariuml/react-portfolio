import React from 'react'

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Marium Ladha // Web Developer </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
    
          <li className="nav-item">
            <a className="nav-link" href="/"> Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="projects"> Projects </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact"> Contact me </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Header
