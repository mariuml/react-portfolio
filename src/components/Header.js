// BUG: bootstrap mobile toggler not working

import React from 'react'

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Marium Ladha // Web Developer </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#skills-section"> My skills </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work-section"> My work </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills-section"> Contact me </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#insert-resume-link"> Resume </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Header
