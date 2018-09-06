import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => (props.color ? props.color : 'lightblue')};
  color: blue;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  border-radius: 10px;
  margin: 5px;
  &:hover {
    background-color: white;
  }
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
