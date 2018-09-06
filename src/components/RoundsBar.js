import React, { Component } from 'react'
import styled from 'styled-components'

const StyledRoundsBar = styled.section`
  display: flex;
  flex-direction: row-reverse;
  width: 300px;
  background: lightblue;
  align-items: center;
  border-radius: 10px;
`
const StyledRoundBox = styled.div`
  height: 30px;
  margin-left: 5px;
  background-color: papayawhip;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.25em;
`
export default class RoundsBar extends Component {
  state = {
    scores: [333, 98, 4, 1100, 2526, 44],
  }

  render() {
    const { scores } = this.state
    return (
      <StyledRoundsBar>
        {scores.map(score => (
          <StyledRoundBox>{score}</StyledRoundBox>
        ))}
      </StyledRoundsBar>
    )
  }
}
