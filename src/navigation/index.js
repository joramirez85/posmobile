import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import PaymentsList from '../screens/PaymentsList/PaymentsList'
import ServiceDetails from '../screens/ServiceDetails/ServiceDetails'
import PaymentUpdate from '../screens/PaymentUpdate/PaymentUpdate'
import PaidPaymentsByDate from '../screens/PaidPaymentsByDate/PaidPaymentsByDate'

import ServiceLocation from '../screens/ServiceLocation/ServiceLocation'

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
      <Stack.Screen options={{title: 'Cobranza'}} name='PaymentsList' component={PaymentsList} />
      <Stack.Screen options={{title: 'Abonos'}} name='ServiceDetails' component={ServiceDetails} />
      <Stack.Screen options={{title: 'Pago'}} name='PaymentUpdate' component={PaymentUpdate} />
      <Stack.Screen options={{title: 'Corte de Caja'}} name='PaidPaymentsByDate' component={PaidPaymentsByDate} />

      <Stack.Screen options={{title: 'Localizacion'}} name='ServiceLocation' component={ServiceLocation} />
    </Stack.Navigator>
  )
}
