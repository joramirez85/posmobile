import { LoginService } from '../services/Login/Login'

export const login = async ({navigation, credentials}) => {
  const user = await LoginService(credentials)
  if (user.name === 'Vendedor') {
    navigation.navigate('RequestDetails')
  } else {
    navigation.navigate('CustomerList')
  }
  console.log('==== user: ', user)
}
