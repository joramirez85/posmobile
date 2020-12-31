import { LoginService } from '../services/Login/Login'
import * as SecureStore from 'expo-secure-store'

export const login = async ({navigation, credentials}) => {
  const user = await LoginService(credentials)
  // console.log('==*** user: ', user)
  
  await SecureStore.setItemAsync(
    'userInfo',
    JSON.stringify(user)
  )

  if (user.name === 'Vendedor') {
    navigation.navigate('RequestDetails')
  } else {
    navigation.navigate('PaymentsList')
  }
  console.log('==== user: ', user)
}
