import React from 'react'
import { View } from 'react-sketchapp'

export class Row extends React.Component {
  render() {

    const RowStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }

    return (
      <View name='Row' style={ RowStyle }>
        { this.props.children }
      </View>
    )
  }
}

export class Col extends React.Component {
  render() {

    let ColStyle = null

    if (this.props.span !== undefined) {
      ColStyle = {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: calcColPercentage(this.props.span)
      }
    } else {
      ColStyle = {
        flexGrow: 1,
        flexShrink: 0
      }
    }

    return (
      <View
        name='Col'
        style={ ColStyle }
      >
        { this.props.children }
      </View>
    )
  }
}