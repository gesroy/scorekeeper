import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    return <div className="Score">{this.props.value}</div>
  }
}
