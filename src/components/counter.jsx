import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends React.Component {
  state = {
    count: 1,
    tags: ['tag1', 'tag2', 'tag3'],
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button type="button" className="btn btn-secondary btn-sm">
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
