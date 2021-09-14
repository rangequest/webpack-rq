import React, { Component } from 'react'
import Counters from './counters.jsx'
import NavBar from './nav.jsx'
class App extends React.Component {
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
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
