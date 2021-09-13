import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter.jsx'
import Timer from './timer.jsx'

ReactDOM.render(<Counter />, document.getElementById('rq-comp'))
ReactDOM.render(<Timer />, document.getElementById('rq-timer'))
