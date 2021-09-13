import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends React.Component {
  constructor() {
    super()
    console.log('this in Constructor ', this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  state = {
    count: 1,
  }

  handleIncrement() {
    console.log('this in handleIncrement', this)
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} type="button" className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.Fragment>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { count } = this.state
    const z = 'zero'
    return count === 0 ? z : count
  }
}

export default Counter
