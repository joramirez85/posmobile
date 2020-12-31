import React, { useState, useEffect } from 'react'
import {
  View,
  FlatList
} from 'react-native'

import styles from './styles'
import { CircularButton } from '../../components/atoms/'
import { ChevronLeftIcon } from '../../components/Icons'
import RenderItem from '../../components/PaymentItems/PaymentItems'
import { viewPort } from '../../utils/utils'
import { PaymentsService } from '../../services/Credit/CreditList'
import { formatCurrentDate, numberFormat } from '../../utils/utils'

const ServiceDetails = (props) => {
  const [data, setData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payments = await PaymentsService(props.route.params.saleCreditId)
        setData(mapData(payments))
      } catch (error) {
        console.log('== Error - PaymentsService: ', error)
      }
    }

    fetchData()
  }, [])

  const mapData = (payments) => {
    return payments.data.payments.map(data => {
      console.log('===== data: ', data)
      return {
        datePayment: formatCurrentDate(data.paymentDate),
        amountPayment: numberFormat(data.paymentAmount, 2),
        paymentRescheduledDate: data.paymentRescheduledDate ? formatCurrentDate(data.paymentRescheduledDate) : '-',
        id: data._id
      }
    })
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={item => {
          
          console.log('kjashdjahsdjkdhaskjdhaskjdasjdkdh item: ', item)
          return (
          <RenderItem 
            item={item}
            navigation={props.navigation}
          />
        )}
      }
        keyExtractor={item => item.id}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 14,
          justifyContent: 'center',
          alignSelf: 'center',
          
        }}>
        <CircularButton
          onPress={() => { console.log('one') }}
          title="Productos"
          icon={<ChevronLeftIcon />}
          size={viewPort(60).width}
          lg
        />
        <CircularButton
          onPress={() => console.log('two')}
          title="Detalles"
          size={viewPort(60).width}
          lg
        />
        <CircularButton
          onPress={() => console.log('three')}
          title="Agregar Abono"
          size={viewPort(60).width}
          lg
        />
      </View>
    </>
  )
}

export default ServiceDetails
