import React, { Component } from 'react'
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar <span className="badge badge-pill badge-secondary">{this.props.counters}</span>
        </a>
      </nav>
    )
  }
}

export default NavBar
