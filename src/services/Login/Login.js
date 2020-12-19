import axios from 'axios'

export const LoginService = async ({email, password}) => {
  console.log('.... calling Login: ', email, password)
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({ userName: email, password })
  }
  
  // const { data: user } = await axios(`${SERVER_HOST}${PORT}${BASE_PATH}${USERS_URL}/auth`, requestOptions)
  const { data: user } = await axios('http://192.168.1.65:8085/api/v1/usuarios/auth', requestOptions)
  // localStorage.setItem('currentUser', JSON.stringify(user))
  // currentUserSubject.next(user)
  return user
}

