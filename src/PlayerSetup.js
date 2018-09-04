import React, { Component } from 'react'

export default class PlayerSetup extends Component {
  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  checkForEnterButton = event => {
    if (event.key === 'Enter') {
      this.props.onSubmit(this.state.inputValue)
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.updateInputValue}
          onKeyUp={this.checkForEnterButton}
          placeholder="Player name"
          autoFocus
          value={this.state.inputValue}
          type="text"
        />
      </div>
    )
  }
}
