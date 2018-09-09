import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid #333;
  height: 48px;
  border-radius: 3px;
  font-size: 1em;
  margin: 20px 20px 20px 0;
  border-radius: 10px;
`

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
      <StyledInput
        onChange={this.updateInputValue}
        onKeyUp={this.checkForEnterButton}
        placeholder="Player name"
        autoFocus
        value={this.state.inputValue}
        type="text"
      />
    )
  }
}
