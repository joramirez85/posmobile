import React from 'react'
import {
  Text
} from 'react-native'
import CommonPayments from './CommonPayments'
import { PayPaymentService } from '../../services/Payments/PaymentsService'

const ReschedulePayment = (props) => {
  console.log('ReschedulePayment props: ', props)
  return (
    <>
      <CommonPayments
        childType='reschedule'
        hide={true}
        saleCreditId={props.props.route.params.saleCreditId}
        title='- Reagendar cobro a otra fecha'
        payment={' -'}
        date='12/12/2021'
        titleBtn='Reagendar'
        item={props.props.route.params.item}
        serviceFn={PayPaymentService}
        setReloadFn={props.props.route.params.setReloadFn}
      />
    </>
  )
}

export default ReschedulePayment
