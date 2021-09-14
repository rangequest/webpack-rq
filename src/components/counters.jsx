import React, { Component } from 'react'
import Counter from './counter.jsx'
class Counters extends Component {
  render() {
    if (this.props.counters.length === 0) return <p>No counters found.</p>

    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    )
  }
}

export default Counters
