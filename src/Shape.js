import React, { Component } from 'react'

export default class Shape extends Component {
  render () {
    return (
      <div
        style={{
          backgroundColor: this.props.bgColor,
          width: `${this.props.width}px`,
          height: `${this.props.height}px`
        }}
      ></div>
    )
  }
}
