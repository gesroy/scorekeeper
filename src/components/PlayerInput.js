import React, { Component } from 'react'

export default class PlayerInput extends Component {
  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  checkForEnterButton = event => {
    const { inputValue } = this.state
    //es ginge auch && inputValue !=''){
    if (event.key === 'Enter' && inputValue) {
      this.props.onSubmit(inputValue)
      this.setState({ inputValue: '' })
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
