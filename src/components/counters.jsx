import React, { Component } from 'react'
import Counter from './counter.jsx'
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 5 },
    ],
  }
  render() {
    if (this.state.counters.length === 0) return <p>No counters found.</p>

    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}></Counter>
        ))}
      </div>
    )
  }
}

export default Counters
