import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends React.Component {
  state = {
    count: 0,
    imgUrl: 'https://picsum.photos/200',
  }

  styles = {
    span: {
      fontSize: 14,
    },
    red: {
      color: '#333',
    },
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles.span} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button type="button" className="btn btn-secondary btn-sm">
          <span style={{ ...this.styles.red, fontSize: 30 }}>Increment</span>
        </button>
        {/* <img src={this.state.imgUrl} alt="rq image" /> */}
      </React.Fragment>
    )
  }

  formatCount() {
    const { count } = this.state
    const z = 'zero'
    return count === 0 ? z : count
  }
}

export default Counter
