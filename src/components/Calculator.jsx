import React from "react"

export default class Calculator extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    sum: 0,
  }

  calculate = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({ sum: prevState.num1 + prevState.num2 }))
  }

  setNum = (e) => {
    const key = e.target.name
    const val = Number(e.target.value)
    this.setState({ [key]: val })
  }

  render() {
    return (
      <div className="calculator">
        <h1>Add with React!</h1>
        <form onSubmit={this.calculate}>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.setNum}
          />
          <span>+</span>
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.setNum}
          />
          <button type="submit">=</button>
          <h3>{this.state.sum}</h3>
        </form>
      </div>
    )
  }
}
