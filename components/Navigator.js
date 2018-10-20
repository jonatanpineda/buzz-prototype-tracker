import React, { Component } from 'react'
import ConnectBus from './ConnectBus'
import Tracking from './Tracking'
import { compose } from 'recompose'
import withMachine from './withMachine'
import { matchesState } from 'xstate'


class Navigator extends Component {
  render() {
    const { machine } = this.props
    if(matchesState('connectBusScreen', machine))
      return (<ConnectBus />)
    if(matchesState('trackingScreen', machine))
      return (<Tracking />)
    return null
  }
}

export default compose(
  withMachine
)(Navigator)
