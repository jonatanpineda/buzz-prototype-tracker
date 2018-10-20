import React, { Component } from 'react';
import Input from './Input'
import Button from './Button'
import {
  Platform,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal,
  KeyboardAvoidingView
} from 'react-native';
import { compose } from 'recompose'
import withMachine from './withMachine'
import { connect } from 'react-redux'
import { matchesState } from 'xstate'
import { doConnectBus } from '../actions/bus'

class ConnectBus extends Component {
  state = {
    code: ''
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { machine, onConnectBus } = this.props
    const { code } = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.heading}>
          <Image
            source={require('../assets/icon.png')}
            style={styles.headingImage}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.greeting]}>
          Buzz Tracker
        </Text>
        <Text style={[styles.greeting2]}>
          Ingresa el código
        </Text>
        <View style={[styles.inputContainer]}>
          <Input
            placeholder="Código"
            type='code'
            onChangeText={this.onChangeText}
            value={this.state.code}
            secureTextEntry
          />
        </View>
        {
          matchesState('connectBusScreen.showingError', machine)  ?
            <Text style={[styles.errorMessage]}>Código no valido</Text> :
            null

        }
        <Button
          isLoading={matchesState('connectBusScreen.connectingBus', machine)}
          title='Entrar'
          onPress={() => onConnectBus(code)}
        />
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onConnectBus: code => dispatch(doConnectBus(code))
})

export default compose(
  withMachine,
  connect(
    null,
    mapDispatchToProps
  )
)(ConnectBus) 

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row'
  },
  headingImage: {
    width: 38,
    height: 38
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'red',
  },
  inputContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  greeting: {
    marginTop: 20,
    fontSize: 24,
  },
  greeting2: {
    color: '#666',
    fontSize: 24,
    marginTop: 5,
  }
});
