import React, { Component } from 'react';

class NavBar extends Component {

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#">Organika</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" id="ulStyle">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Link
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <li><a className="dropdown-item" href="/#">Action</a></li>
          <li><a className="dropdown-item" href="/#">Another action</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="/#">Something else here</a></li>
        </ul>
      </li>
    </ul>
    <form className="d-flex">
      <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
         );
    }
}
 
export default NavBar;