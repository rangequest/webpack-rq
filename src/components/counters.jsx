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

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  render() {
    if (this.state.counters.length === 0) return <p>No counters found.</p>

    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    )
  }
}

export default Counters
