import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import CustomerList from '../screens/CustomerList/CustomerList'
import RequestDetails from '../screens/RequestDetails/RequestDetails'
import ServiceDetails from '../screens/ServiceDetails/ServiceDetails'
import CreateUser from '../screens/User/CreateUser'
import ServiceLocation from '../screens/ServiceLocation/ServiceLocation'

import ProviderList from '../screens/ProviderList/ProviderList'

export default function Navigation () {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

function RootNavigator () {
  return (
    <Stack.Navigator
      initialRouteName='Login'
    >
      <Stack.Screen options={{headerShown: false, title: 'Inicio'}} name='Login' component={Login} />
      <Stack.Screen options={{title: 'Datos Personales'}} name='SignUp' component={SignUp} />
      <Stack.Screen options={{title: 'Crear Usuario'}} name='CreateUser' component={CreateUser} />
      <Stack.Screen options={{title: 'Crear Servicio'}} name='RequestDetails' component={RequestDetails} />
      <Stack.Screen options={{title: 'Localizacion'}} name='ServiceLocation' component={ServiceLocation} />

      <Stack.Screen options={{title: 'Lista de Servicios'}} name='CustomerList' component={CustomerList} />
      <Stack.Screen options={{title: 'Detalles de Servicio'}} name='ServiceDetails' component={ServiceDetails} />
    </Stack.Navigator>
  )
}
