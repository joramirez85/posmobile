import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import { PaymentsService } from '../../services/Credit/CreditList'
import styles from './styles'

// const [spinner, setSpinner] = useState(false)
// const [totalPaidPayments, setTotalPaidPayments] = useState({})

const handleItemSelected = ({ item }, props, type = 'abono') => {
  // console.log('item: ',  item, ' ID: ', item.id)
  // console.log('props: ', props)
  const params = {
    type,
    item,
    setReloadFn: props.setReloadFn
  }
  // console.log('params: ', params)
  props.navigation.navigate('PaymentUpdate', params)
}

const getTotalPaid = async (saleCreditId) => {
  // console.log('***** getTotalPaid: ', saleCreditId)
  try {
    // setSpinner(true)
    const payments = await PaymentsService(saleCreditId)
    console.log('===== ***** payments.data.totalPaidPayments: ', payments.data.totalPaidPayments)
    // setTotalPaidPayments(payments.data.totalPaidPayments)
    return payments.data.totalPaidPayments
  } catch (error) {
    console.log('== Error - PaymentsService: ', error)
  } finally {
    // setSpinner(false)
  }
}

const showDetails = async (item, props) => {
  // console.log('77777 showDetails: ', item.item.saleCreditId)
  const totalPaidPayments = await getTotalPaid(item.item.saleCreditId)
  const params = {
    type: 'details',
    customer: item.item.customer,
    city: item.item.city,
    totalPaidPayments,
    item: item.item
  }
  console.log('showDetails params: ', params) 
  props.navigation.navigate('PaymentUpdate', params)
}

const defineStatus = (item) => {
  let status = 'Por Cobrar'
  if (item.item.isRescheduled) {
    status = 'Reagendado'
  }

  return status
}

const defineAction =(item, props) => {
  return (
    <View style={styles.detailsContainer}>
      <TouchableOpacity
        style={styles.btnAction}
        onPress={() => handleItemSelected(item, props, 'abono')}
      >
        <Text style={styles.details}>Abonar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnAction}
        onPress={() => handleItemSelected(item, props, 'reagendar')}
      >
        <Text style={styles.details}>Reagendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnAction}
        onPress={() => showDetails(item, props)}
      >
        <Text style={styles.details}>Detalles</Text>
      </TouchableOpacity>
    </View>
  )
}

export default (props) => {
  // console.log('=== props PaymentItem: ', props)
  return (
    <View
      style={styles.item}
      onPress={() => handleItemSelected(props)}
    >
      <View style={styles.titleView}>
        <Text
          style={styles.address}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          Monto A Pagar: ${props.item.item.amountPayment}
        </Text>
        
        <Text
          style={styles.address}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          Fecha a Pagar: {props.item.item.datePayment}
        </Text>
        
        <Text
          style={styles.address}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          Fecha Reagendada: {props.item.item.paymentRescheduledDate}
        </Text>
        <Text
          style={styles.address}
        >
          Cliente: {props.item.item.customer}
        </Text>
        <Text
          style={styles.address}
        >
          Ciudad: {props.item.item.city}
        </Text>
        <Text
          style={styles.address}
        >
          Status: <Text style={styles.status}>{defineStatus(props.item)}</Text>
        </Text>
      </View>
      <View style={styles.rightContainer}>
        {defineAction(props.item, props)}
      </View>
    </View>
  )
}
