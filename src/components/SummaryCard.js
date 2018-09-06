import React, { Component } from 'react'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSummaryCard = styled.div`
  margin-bottom: 15 px;
  width: 300px;
  margin: 10px;
`

export default class SummaryCard extends Component {
  static propTypes = {
    title: PropTypes.strings,
    scores: PropTypes.arrayOf(PropTypes.number),
  }
  render() {
    const { title, scores } = this.props
    const total = scores.reduce((prev, curr) => prev + curr, 0) || 0
    return (
      <StyledSummaryCard>
        <PlayerHeader title={title} score={total} />
        <RoundsBar scores={scores} />
      </StyledSummaryCard>
    )
  }
}
