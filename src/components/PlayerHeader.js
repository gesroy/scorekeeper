import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  height: 50px;
  background-color: lightcyan;
  border-radius: 10px;
  padding: 10px;
  font-style: bold;
`

export default class PlayerHeader extends Component {
  render() {
    return (
      <StyledHeader>
        <span>{this.props.title}</span>
        <span>{this.props.score}</span>
      </StyledHeader>
    )
  }
}
