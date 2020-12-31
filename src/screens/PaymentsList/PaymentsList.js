import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  FlatList
} from 'react-native'

import styles from './styles'
import RenderItem from '../../components/CustomerItems/CustomerItems'
import { CreditListService } from '../../services/Credit/CreditList'
import { formatCurrentDate } from '../../utils/utils'
import Spinner from 'react-native-loading-spinner-overlay'

const PaymentsList = (props) => {
  const [data, setData] = useState(false)
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true)
        const creditSales = await CreditListService()
        setData(mapData(creditSales))
      } catch (error) {
        console.log('Error - PaymentsList: ', error)
      } finally {
        setSpinner(false)
      }
    }

    fetchData()
  }, [])

  const mapData = (credits) => {
    return credits.data.map(data => {
      return {
        customer: data.sale.customer.name,
        city: data.sale.customer.address,
        saleDate: formatCurrentDate(data.sale.saleDate),
        id: data._id
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Spinner
          visible={spinner}
          textContent={'Cargando...'}
        />
      <FlatList
        data={data}
        renderItem={item => (
          <RenderItem 
            item={item}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default PaymentsList
