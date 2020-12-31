import React from 'react'
import PaymentItem from './PaymentItem'

export default ({item, navigation}) => (
  <PaymentItem
    navigation={navigation}
    amountPayment={item.item.amountPayment}
    datePayment={item.item.datePayment}
    paymentRescheduledDate={item.item.paymentRescheduledDate}
  />
)
