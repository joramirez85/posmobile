import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

import { ScrollView } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors'
import styles from './styles'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      address: '',
      email: '',
      phone: ''
    }
  }

  validateData = () => {
    if (
      this.state.name === '' ||
      this.state.lastname === '' ||
      this.state.address === '' ||
      this.state.email === '' ||
      this.state.phone === ''
    ) {
      return false
    }

    return true
  }

  handleSignUp = () => {
    const personalData = {
      name: this.state.name,
      lastname: this.state.lastname,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone
    }

    if (this.validateData()) {
      this.props.navigation.navigate('CreateUser', personalData)
    } else {
      Alert.alert(
        'Informacion Requerida',
        'Todos los campos son requeridos',
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

  handleName = (name) => {
    this.setState({
      name
    })
  }

  handleLastName = (lastname) => {
    this.setState({
      lastname
    })
  }

  handleAddress = (address) => {
    this.setState({
      address
    })
  }

  handleEmail = (email) => {
    this.setState({
      email
    })
  }

  handlePhone = (phone) => {
    this.setState({
      phone
    })
  }

  render () {
    return (
      
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Nombre...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handleName}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Apellidos ...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handleLastName}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Direccion...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handleAddress}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Email...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handleEmail}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Telefono...'
              placeholderTextColor={Colors.darkBlue}
              onChangeText={this.handlePhone}
            />
          </View>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={this.handleSignUp}
          >
            <Text style={styles.signupText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      
    )
  }
}
