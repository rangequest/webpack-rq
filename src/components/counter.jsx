import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends React.Component {
  state = {
    value: this.props.value,
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    console.log(this.props)
    return (
      <div className="row mb-2">
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} type="button" className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount = () => {
    const { value: count } = this.state
    const z = 'zero'
    return count === 0 ? z : count
  }
}

export default Counter
