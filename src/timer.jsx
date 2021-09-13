import React, { Component } from 'react'
class Timer extends React.Component {
  state = {
    seconds: 0,
    secondFraction: 0,
  }

  tickFraction = () => {
    const timeVal = (this.state.secondFraction + 1) % 100
    this.setState({
      secondFraction: timeVal,
    })
  }

  tick = () => {
    this.setState({
      seconds: this.state.seconds + 1,
    })
  }

  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)

    this.timerF = setInterval(() => {
      this.tickFraction()
    }, 10)
  }

  componentWillUnmount = () => {
    this.timer = null
    this.timerF = null
  }

  render() {
    return (
      <div className="card mt-4">
        <h5 className="card-header">Timer</h5>
        <div className="card-body">
          <h5 className="card-title">
            {this.state.seconds} : {this.state.secondFraction}
          </h5>
          <p className="card-text">This is the timer</p>
          <a href="#" className="btn btn-primary">
            Log Time
          </a>
        </div>
      </div>
    )
  }
}

export default Timer
