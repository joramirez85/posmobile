import React from 'react'
import {
  Text
} from 'react-native'
import CommonPayments from './CommonPayments'
import {AddPaymentService} from '../../services/Payments/PaymentsService'

const AddPayment = (props) => {
  console.log('AddPayment props: ', props)
  return (
    <>
      <CommonPayments
        childType='add'
        saleCreditId={props.props.route.params.saleCreditId}
        title='- Agregar pago'
        payment={' -'}
        date='12/12/2021'
        titleBtn='Agregar'
        item={props.props.route.params.item}
        serviceFn={AddPaymentService}
        setReloadFn={props.props.route.params.setReloadFn}
      />
    </>
  )
}

export default AddPayment
