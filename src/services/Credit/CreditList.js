import axios from 'axios'
import {authHeader} from '../../utils/utils'

const CreditListService = async () => {
  console.log('.... calling CreditListService: ')
  const headers = await authHeader()
  const requestOptions = {
    method: 'GET',
    headers
  }
  // console.log('==== requestOptions: ', requestOptions)
  const response = await axios('http://192.168.1.78:8085/api/v1/sales_credit', requestOptions)
  return response
}

const PaymentsService = async (saleCreditId) => {
  console.log('.... calling PaymentsService: ')
  const headers = await authHeader()
  const requestOptions = {
    method: 'GET',
    headers
  }
  
  const response = await axios(`http://192.168.1.78:8085/api/v1/payments/${saleCreditId}`, requestOptions)
  return response
}

export {
  PaymentsService,
  CreditListService
}
