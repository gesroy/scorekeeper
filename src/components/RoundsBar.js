import React, { Component } from 'react'
import styled from 'styled-components'

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  height: 50px;
  background: #eee;
`

const StyledRoundScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  font-size: 1.2em;
  margin: 5px;
  &:first-child {
    margin-left: auto;
  }
  &:not(:first-child) {
    border-left: 1px solid #ddd;
  }
`

export default class RoundsBar extends Component {
  scrollerRef = React.createRef()

  comnponentDidUpdate() {
    const scroller = this.scrollerRef.current
    scroller.scrollerLeft = scroller.scrollWidth
  }

  render() {
    let { scores } = this.props
    scores = scores.length ? scores : [0]
    return (
      <Scroller innerRef={this.scrollerRef}>
        {scores.map((score, i) => (
          <StyledRoundScore key={i}>{score}</StyledRoundScore>
        ))}
      </Scroller>
    )
  }
}
