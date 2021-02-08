import React from 'react'
import PaymentItem from './PaymentItem'

export default ({item, navigation, setReloadFn}) => (
  <PaymentItem
    navigation={navigation}
    amountPayment={item.item.amountPayment}
    paymentAmountPaid={item.item.paymentAmountPaid}
    datePayment={item.item.datePayment}
    paymentRescheduledDate={item.item.paymentRescheduledDate}
    item={item}
    setReloadFn={setReloadFn}
  />
)
