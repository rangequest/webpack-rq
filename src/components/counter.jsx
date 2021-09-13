import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends React.Component {
  state = {
    count: 1,
    tags: ['tag1', 'tag2', 'tag3'],
    // tags: [],
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length !== 0 && <p>List not empty</p>}
        {this.state.tags.length === 0 ? (
          <p>No Tags</p>
        ) : (
          <ul>
            {this.state.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

export default Counter
