import React from 'react'

const styles = {
  navbar: {
    fontFamily: "'Open Sans', sans-serif",
  },
}


function Header() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="/">Marium Ladha // Web Developer </a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="projects"> Projects </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="contact"> Contact Me </a>
      </li>
    </ul>
  </div>
</nav>
     )
}

export default Header

