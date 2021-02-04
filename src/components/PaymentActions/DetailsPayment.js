import React from 'react'
import {
  Text,
  View,
  FlatList,
} from 'react-native'

import styles from './styles'
import { numberFormat } from '../../utils/utils'

const DetailsPayment = (props) => {
  const {
    customer,
    city
  } = props.props.route.params
  
  const {
    frequently,
    amountMonthsForCredit,
    amountInitPaymentForCredit,
    products,
    totalCredit,
    total
  } = props.props.route.params.item

  const {
    paymentAmountPaid
  } = props.props.route.params.totalPaidPayments

  const totalpaid = paymentAmountPaid + amountInitPaymentForCredit
  
  console.log('==== props.props.route.params  ITEM : ', props.props.route.params)

  return (
    <>
      <View style={styles.containerDetails}>
        <Text
        style={styles.title}
        >
          Cliente: <Text style={styles.customerName}> {customer} </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Ciudad: <Text style={styles.customerName}> {city} </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Total Precio a Credito: <Text style={styles.customerName}> ${numberFormat(totalCredit, 2)} </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Saldo Pendiente de Precio a Credito: <Text style={styles.customerName}> ${totalCredit - totalpaid} </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Total a Credito: <Text style={styles.customerName}> ${numberFormat(total, 2)} </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Saldo Pendiente del Credito: <Text style={styles.customerName}> ${total - totalpaid} </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Pago inicial: <Text style={styles.customerName}> ${ numberFormat(amountInitPaymentForCredit, 2) } </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Total Abonado: <Text style={styles.customerName}> ${ numberFormat(totalpaid, 2) } </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Meses a Credito: <Text style={styles.customerName}> { amountMonthsForCredit } </Text>
        </Text>
        <Text
        style={styles.title}
        >
          Frecuencia de Pagos: <Text style={styles.customerName}> { frequently } </Text>
        </Text>
      </View>
    </>
  )
}

export default DetailsPayment
