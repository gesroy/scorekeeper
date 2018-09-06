import React, { Component } from 'react'
import styled from 'styled-components'

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  height: 32px;
  background: #eee;
`

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
  scrollerRef = React.createRef()

  comnponentDidUpdate() {
    const scroller = this.scrollerRef.current
    scroller.scrollerLeft = scroller.scrollWidth
  }

  render() {
    let { scores } = this.props
    scores = scores.length ? scores : [0]
    return (
      <StyledRoundsBar>
        <Scroller innerRef={this.scrollerRef}>
          {scores.map((score, i) => (
            <StyledRoundBox key={i}>{score}</StyledRoundBox>
          ))}
        </Scroller>
      </StyledRoundsBar>
    )
  }
}
