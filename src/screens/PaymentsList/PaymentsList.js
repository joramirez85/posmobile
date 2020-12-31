import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  FlatList
} from 'react-native'

import styles from './styles'
import RenderItem from '../../components/CustomerItems/CustomerItems'
import { CreditListService } from '../../services/Credit/CreditList'
import { formatCurrentDate } from '../../utils/utils'

const PaymentsList = (props) => {
  const [data, setData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const creditSales = await CreditListService()
      setData(mapData(creditSales))
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
