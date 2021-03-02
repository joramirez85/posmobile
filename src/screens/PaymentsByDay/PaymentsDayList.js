import React, { useState, useEffect } from 'react'
import {
  FlatList
} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import PaymentDayItem from '../../components/PaymentDayItem/PaymentDayItem'
import { PaymentsDayService } from '../../services/Payments/PaymentsService/'
import {
  formatCurrentDate,
  numberFormat,
  transformFrequently
} from '../../utils/utils'

const PaymentsDayList = (props) => {
  const [data, setData] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [reload, setReload] = useState(false)

  const getData = async () => {
    console.log('==== props getData: ', props)
    try {
      setSpinner(true)
      const startDate = new Date()
      const payments = await PaymentsDayService(formatCurrentDate(startDate))
      // console.log('===== ***** payments: ', payments)
      setData(mapData(payments))
      setSpinner(false)
    } catch (error) {
      console.log('== Error - PaymentsService: ', error)
    } finally {
      setSpinner(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      // console.log('== props.route.params: ', props.route.params)
      console.log('fetchData ServiceDetails')
      await getData()
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      await getData()
    }

    if (reload) {
      console.log('PaymentsDayList fetching data')
      fetchData()
      setReload(false)
    }
  }, [reload])

  const mapData = (payments) => {
    return payments.data.payments.map(data => {
      // console.log('000000 data: ', data)
      return {
        datePayment: formatCurrentDate(data.paymentDate),
        amountPayment: numberFormat(data.paymentAmount, 2),
        paymentAmountPaid: data.paymentAmountPaid > 0 ? data.paymentAmountPaid : 0,
        paymentRescheduledDate: data.paymentRescheduledDate ? formatCurrentDate(data.paymentRescheduledDate) : '-',
        id: data._id,
        isRescheduled: data.isRescheduled,
        customer: data.salecredit.sale.customer.name,
        city: data.salecredit.sale.customer.address,
        saleCreditId: data.salecredit._id,
        frequently: transformFrequently(data.salecredit.paymentFrequently),
        amountMonthsForCredit: data.salecredit.amountMonthsForCredit,
        totalCredit: data.salecredit.sale.totalCredit,
        amountInitPaymentForCredit: data.salecredit.amountInitPaymentForCredit,
        total: data.salecredit.totalSalesForCredit,
        products: data.salecredit.sale.products
      }
    })
  }

  return (
    <>
      <Spinner
        visible={spinner}
        textContent={'Cargando Pagos del dia...'}
      />
      <FlatList
        data={data}
        renderItem={item => (
          <PaymentDayItem 
            item={item}
            navigation={props.navigation}
            setReloadFn={setReload}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default PaymentsDayList
