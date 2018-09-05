import React, { Component } from 'react'
import Button from './Button.js'
import styled from 'styled-components'

const StyledScoreUpdater = styled.section`
  display: flex;
  flex-direction: row;
  margin: 10px;
`

export default class ScoreUpdater extends Component {
  render() {
    const { onClick } = this.props

    return (
      <StyledScoreUpdater>
        <Button onClick={() => onClick(-10)}> -10 </Button>
        <Button onClick={() => onClick(-5)}> -5 </Button>
        <Button onClick={() => onClick(-1)}> -1 </Button>
        <Button onClick={() => onClick(+1)}> +1 </Button>
        <Button onClick={() => onClick(+5)}> +5 </Button>
        <Button onClick={() => onClick(+10)}> +10 </Button>
      </StyledScoreUpdater>
    )
  }
}
