import axios from 'axios'
import {authHeader} from '../../utils/utils'

// Prod
const URL = 'http://ecommerceeasy.club:8085'

// Local
// const URL = 'http://192.168.1.81:8085'

const PayPaymentService = async (data) => {
  console.log('.............. calling PayPaymentService: ', data)
  const headers = await authHeader()
  const requestOptions = {
    method: 'PUT',
    data,
    headers
  }

  console.log(`URL: ${URL}/api/v1/payments/${data.id}`)

  const response = await axios(`${URL}/api/v1/payment/${data.id}`, requestOptions)
  return response
}

const AddPaymentService = async (data) => {
  console.log('.............. calling AddPaymentService: ', data)
  const headers = await authHeader()
  const requestOptions = {
    method: 'POST',
    headers,
    data: {
      payDate: data.payDate,
      amountPaid: data.amountPaid,
      saleCreditId: data.saleCreditId
    }
  }

  console.log(`URL: ${URL}/api/v1/payments/${data.id}`)

  const response = await axios(`${URL}/api/v1/payment/add/`, requestOptions)
  return response
}

const PaymentsDayService = async (startDate) => {
  console.log('.............. calling PaymentsDayService: ', startDate)
  const headers = await authHeader()
  const requestOptions = {
    method: 'GET',
    headers,
    params: {
      startDate
    }
  }

  const response = await axios(`${URL}/api/v1/paymentscurrent/`, requestOptions)
  return response
}

export {
  PayPaymentService,
  AddPaymentService,
  PaymentsDayService
}