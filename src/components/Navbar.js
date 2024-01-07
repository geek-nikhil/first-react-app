import React,{useState} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return(
    <>
<nav className = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="About">{props.aboutText}</Link>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
</div>
    </div>
  </nav>
    <div className={`form-check form-switch my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input my-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick= {props.toggleMode}/>
    <label className="form-check-label" hmtlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
    </div>
    </>
  )
}

Navbar.propTypes = {
  title: propTypes.string,
  aboutText: propTypes.string,
  mode:propTypes.string
}

Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'About text',
  MIDIConnectionEvent: 'About text'
};
