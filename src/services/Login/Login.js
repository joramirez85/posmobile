import axios from 'axios'

// Prod
const URL = 'http://ecommerceeasy.club:8085'

// Local
// const URL = 'http://192.168.1.81:8085'

export const LoginService = async ({email, password}) => {
  console.log('.... calling Login: ', email, password)
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({ userName: email, password })
  }

  const { data: user } = await axios(`${URL}/api/v1/usuarios/auth`, requestOptions)
  return user
}
