import axios from 'axios'

export const LoginService = async ({email, password}) => {
  console.log('.... calling Login: ', email, password)
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({ userName: email, password })
  }

  const { data: user } = await axios('http://192.168.1.78:8085/api/v1/usuarios/auth', requestOptions)
  return user
}
