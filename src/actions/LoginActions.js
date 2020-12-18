export const login = ({navigation, credentials}) => {
  console.log('** login action: ', credentials.email)
  if (credentials.email === 'customer@test.com') {
    navigation.navigate('RequestDetails')
  } else {
    navigation.navigate('CustomerList')
  }
}