import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item link-offset-2 link-underline link-underline-opacity-0">
      
            <Link className="nav-link active link-offset-2 link-underline link-underline-opacity-0" aria-current="page" to='/'>Home</Link>
          
          </li>
          <li className="nav-item">
          
            <Link className="nav-link" to='/developer'>Developer</Link>
       
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}
