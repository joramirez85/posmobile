import React, {useLayoutEffect} from 'react'
import { Button } from 'react-native'
import CommonPayments from './CommonPayments'
import {PayPaymentService} from '../../services/Payments/PaymentsService'

const PayPayment = (props) => {
  console.log('PayPayment props: ', props)
  const {
    amountPayment
  } = props.props.route.params.item

  /* useLayoutEffect(() => {
    console.log('useLayoutEffect!!! ', props.props.navigation)
    props.props.navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => {
            console.log('Ahi la llevamos')
            props.props.navigation.push('ServiceDetails')
          }}
          title='<Atras' 
        />
      ),
      headerRigth: () => {}
    })
  }, [props.props.navigation]) */

  return (
    <>
      <CommonPayments
        title='Pago a realizar: '
        payment={amountPayment}
        date='12/12/2021'
        titleBtn='Abonar'
        item={props.props.route.params.item}
        serviceFn={PayPaymentService}
        setReloadFn={props.props.route.params.setReloadFn}
      />
    </>
  )
}

export default PayPayment
