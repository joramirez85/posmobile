import React from 'react'
import {
  Text
} from 'react-native'

import {
  PayPayment,
  UpdatePayment,
  ReschedulePayment,
  DetailsPayment
} from '../../components/PaymentActions'

const factoryAction = (type, props) => {
  switch (type) {
    case 'abono':
      return (
        <PayPayment props={props} />
      )
    case 'actualizar': 
      return (
        <UpdatePayment props={props} />
      )
    case 'reagendar':
      return (
        <ReschedulePayment props={props} />
      )
    case 'details':
      return (
        <DetailsPayment props={props} />
      )
  }
}

const PaymentUpdate = (props) => {
  return (
    <>
      {factoryAction(props.route.params.type, props)}
    </>
  )
}

export default PaymentUpdate