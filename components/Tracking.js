import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import withMachine from './withMachine'
import { doDisconnectBus, doStartBusTracking } from '../actions/bus'

class Tracking extends Component {
  componentDidMount() {
    this.props.onStartBusTracking()
  }
  render() {
    const { onDisconnectBus } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Image
            source={require('../assets/icon.png')}
            resizeMode='contain'
          />
          <Button
            title="Desconectar"
            isLoading={false}
            onPress={onDisconnectBus} 
          />
        </View>
      </View>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  onDisconnectBus: () => dispatch(doDisconnectBus()),
  onStartBusTracking: () => dispatch(doStartBusTracking())
})

export default compose(
  withMachine,
  connect(
    null,
    mapDispatchToProps
  )
)(Tracking)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  homeContainer: {
    alignItems: 'center'
  },
  welcome: {
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    marginTop: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  registration: {
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
})

