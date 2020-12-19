import React, { useContext, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Context } from '../../store'

import Colors from '../../constants/Colors'
import {login} from '../../actions/LoginActions'
import styles from './styles'
import Spinner from 'react-native-loading-spinner-overlay'

const Login = (props) => {
  const { store, dispatch } = useContext(Context)
  const [spinner, setSpinner] = useState(false)

  handleChangeEmail = (email) => {
    dispatch({
      type: 'handleChangeEmail',
      email: email
    })
  }
  
  handleChangePassword = (password) => {
    dispatch({
      type: 'handleChangePassword',
      password: password
    })
  }

  const simulateLogin = () => {
    return {
      data: {
        name: 'Omar',
        lastname: 'Ramirez',
        address: 'San Lucas, 5, San Antonio Tomatlan',
        email: 'test@test.com',
        phone: '123456'
      },
      status: 200
    }
  }

  handleLogin = async () => {
    const { navigation } = props
    const credentials = {
      email: store.email,
      password: store.password
    }

    // login request
    const response = simulateLogin()
    // console.log('==== response: ', response)
    dispatch({
      type: 'setPersonalData',
      personalData: response.data
    })

    try {
      setSpinner(true)
      await login({navigation, credentials})
      setSpinner(false)
    } catch (e){
      console.log('e: ', e)
      Alert.alert(
        'Error',
        'Hubo un error al iniciar sesion',
        [
          {
            text: 'Aceptar',
            onPress: () => {
              console.log('correct')
              setSpinner(false)
            }
          }
        ]
      )
    }
  }
  
  return (
    <View style={styles.container}>
      <Spinner
        visible={spinner}
        textContent={'Cargando...'}
        textStyle={styles.spinnerTextStyle}
      />
      <Text style={styles.logo}>Muebleria</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder='Usuario...'
          placeholderTextColor={Colors.darkBlue}
          onChangeText={handleChangeEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder='Contraseña...'
          placeholderTextColor={Colors.darkBlue}
          onChangeText={handleChangePassword}
        />
      </View>
      
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
