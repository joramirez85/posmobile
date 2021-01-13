import React, { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  Text
} from 'react-native'

import styles from './styles'
import { CircularButton } from '../../components/atoms/'
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import RenderItem from '../../components/PaymentItems/PaymentItems'
import { viewPort } from '../../utils/utils'
import { PaymentsService } from '../../services/Credit/CreditList'
import { formatCurrentDate, numberFormat } from '../../utils/utils'
import Spinner from 'react-native-loading-spinner-overlay'

const ServiceDetails = (props) => {
  const [data, setData] = useState(false)
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // console.log('== props.route.params: ', props.route.params)
      try {
        setSpinner(true)
        const payments = await PaymentsService(props.route.params.saleCreditId)
        setData(mapData(payments))
      } catch (error) {
        console.log('== Error - PaymentsService: ', error)
      } finally {
        setSpinner(false)
      }
    }

    fetchData()
  }, [])

  const mapData = (payments) => {
    return payments.data.payments.map(data => {
      return {
        datePayment: formatCurrentDate(data.paymentDate),
        amountPayment: numberFormat(data.paymentAmount, 2),
        paymentRescheduledDate: data.paymentRescheduledDate ? formatCurrentDate(data.paymentRescheduledDate) : '-',
        id: data._id,
        isPaid: data.isPaid,
        isRescheduled: data.isRescheduled
      }
    })
  }

  return (
    <>
    <Spinner
          visible={spinner}
          textContent={'Cargando...'}
        />
      <Text
      style={styles.title}
      >
        Cliente: <Text style={styles.customerName}> {props.route.params.customer} </Text>
      </Text>
      <Text
      style={styles.title}
      >
        Ciudad: <Text style={styles.customerName}> {props.route.params.city} </Text>
      </Text>
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
          icon={<FontAwesome name='product-hunt' size={24} color="black" />}
          size={viewPort(60).width}
          lg
        />
        <CircularButton
          onPress={() => console.log('two')}
          title="Detalles"
          icon={<MaterialCommunityIcons name="details" size={24} color="black" />}
          size={viewPort(60).width}
          lg
        />
        <CircularButton
          onPress={() => console.log('three')}
          title="Agregar Abono"
          icon={<Entypo name="add-to-list" size={24} color="black" />}
          size={viewPort(60).width}
          lg
        />
      </View>
    </>
  )
}

export default ServiceDetails
