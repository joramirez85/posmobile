import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

import Colors from '../../constants/Colors'
import styles from './styles'

export default class CreateUser extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: '',
      password: '',
      passwordToValidate: ''
    }
  }

  validatePassword = () => {
    const { password, passwordToValidate, user } = this.state
    if ( (password !== passwordToValidate) || password === '' || user === '')  {
      return false
    }

    return true
  }

  handleSignUp = () => {
    console.log('asdasdsa')
    if (this.validatePassword()) {
      const params = {
        personalData: {
          name: this.props.route.params.name,
          lastname: this.props.route.params.lastname,
          address: this.props.route.params.address,
          email: this.props.route.params.email,
          phone: this.props.route.params.phone
        },
        userData: {
          user: this.state.user,
          password: this.state.password
        }
      }

      console.log('==== params: ', params)

      Alert.alert(
        'Usuario Creado',
        'El usuario ha sido creado correctamente',
        [
          {
            text: 'Aceptar',
            onPress: () => {
              console.log('correct')
              this.props.navigation.push('RequestDetails')
            }
          }
        ]
      )

    } else {
      Alert.alert(
        'Datos Invalidos',
        'La contraseña debe coincidir y todos los campos son requeridos',
        [
          {
            text: 'Aceptar',
            onPress: () => {
              console.log('correct')
            }
          }
        ]
      )
    }
  }

  handleChangeUser = (user) => {
    this.setState({
      user
    })
  }

  handleChangePassword = (password) => {
    this.setState({
      password
    })
  }

  handleChangeValidatePassword = (passwordToValidate) => {
    this.setState({
      passwordToValidate
    })
  }

  render () {
    return (
      
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Usuario...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handleChangeUser}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder='Contraseña ...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handleChangePassword}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder='Corroborar contraseña...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handleChangeValidatePassword}
            />
          </View>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={this.handleSignUp}
          >
            <Text style={styles.signupText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      
    )
  }
}
