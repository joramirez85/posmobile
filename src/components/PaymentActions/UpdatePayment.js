import React from 'react'
import {
  Text
} from 'react-native'
import CommonPayments from './CommonPayments'
import {UpdatePaymentService} from '../../services/Credit/CreditList'

const UpdatePayment = (props) => {
  console.log('UpdatePayment props: ', props)
  const {
    amountPayment
  } = props.props.route.params.item

  return (
    <>
      <CommonPayments
        title='Pago a realizar: '
        payment={amountPayment}
        date='12/12/2021'
        titleBtn='Actualizar'
        item={props.props.route.params.item}
        serviceFn={UpdatePaymentService}
        setReloadFn={props.props.route.params.setReloadFn}
      />
    </>
  )
}

export default UpdatePayment
