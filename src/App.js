import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: localStorage.getItem("name")
    }
  }

  componentDidMount() {
    console.log("component did mount")
    localStorage.setItem("name", "benoit")
    localStorage.setItem("age", 99)
    localStorage.setItem("blabla", "blabla")
    console.log(localStorage)
  }

  handleClick() {
    localStorage.removeItem("name")
    // localStorage.clear()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.name}
        <button onClick={this.handleClick}>Remove localStorage item</button>
      </div>
    )
  }
}

export default App
