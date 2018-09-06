import React, { Component } from 'react'
import Button from './Button.js'
import styled from 'styled-components'

const StyledPointBar = styled.section`
  display: flex;
  flex-direction: row;
  margin: 10px;
`

const FlexButton = styled(Button)`
  flex: 0 1 auto;
`

export default class PointButtonBar extends Component {
  render() {
    const { onClick } = this.props

    return (
      <StyledPointBar>
        <Button onClick={() => onClick(-10)}> -10 </Button>
        <Button onClick={() => onClick(-5)}> -5 </Button>
        <Button onClick={() => onClick(-1)}> -1 </Button>
        <Button onClick={() => onClick(+1)}> +1 </Button>
        <Button onClick={() => onClick(+5)}> +5 </Button>
        <Button onClick={() => onClick(+10)}> +10 </Button>
      </StyledPointBar>
    )
  }
}
