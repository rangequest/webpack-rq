import React, { Component } from 'react'
import Counter from './counter.jsx'
class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDelete } = this.props

    if (counters.length === 0) return <p>No counters found.</p>

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    )
  }
}

export default Counters
