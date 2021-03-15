import axios from 'axios'
import {authHeader} from '../../utils/utils'

// Prod
const URL = 'http://ecommerceeasy.club:8085'

// Local
// const URL = 'http://192.168.1.72:8085'

const CreditListService = async () => {
  console.log('.... calling CreditListService: ')
  const headers = await authHeader()
  const requestOptions = {
    method: 'GET',
    headers
  }
  // console.log('==== requestOptions: ', requestOptions)
  const response = await axios(`${URL}/api/v1/sales_credit`, requestOptions)
  return response
}

const PaymentsService = async (saleCreditId) => {
  // console.log('.... calling PaymentsService: ')
  const headers = await authHeader()
  const requestOptions = {
    method: 'GET',
    headers
  }
  
  const response = await axios(`${URL}/api/v1/payments/${saleCreditId}`, requestOptions)
  return response
}

const AmountPaidByDateService = async (startDate, endDate) => {
  console.log('.... calling AmountPaidByDateService: ')
  const headers = await authHeader()
  const requestOptions = {
    method: 'GET',
    headers,
    params: {
      startDate,
      endDate
    }
  }
  
  const response = await axios(`${URL}/api/v1/payments/`, requestOptions)
  return response
}

const UpdatePaymentService = async (data) => {
  console.log('.... calling UpdatePaymentService: ')
  const headers = await authHeader()
  const requestOptions = {
    method: 'PUT',
    headers,
    data
  }
  
  const response = await axios(`${URL}/api/v1/payment/${data.id}`, requestOptions)
  return response
}

export {
  PaymentsService,
  CreditListService,
  AmountPaidByDateService,
  UpdatePaymentService
}
