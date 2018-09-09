import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => (props.color ? props.color : 'lightblue')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  border-radius: 10px;
  margin: 10px;
`

export default class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        {this.props.children}
      </StyledButton>
    )
  }
}
