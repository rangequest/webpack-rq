import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Inside Component Counter</h1>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </React.Fragment>
    )
  }
}

export default Counter
