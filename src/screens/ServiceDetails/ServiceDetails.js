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
  const [totalPaidPayments, setTotalPaidPayments] = useState({})
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // console.log('== props.route.params: ', props.route.params)
      console.log('fetchData ServiceDetails')
      try {
        setSpinner(true)
        const payments = await PaymentsService(props.route.params.saleCreditId)
        // console.log('===== ***** payments: ', payments)
        setData(mapData(payments))
        setTotalPaidPayments(payments.data.totalPaidPayments)
      } catch (error) {
        console.log('== Error - PaymentsService: ', error)
      } finally {
        setSpinner(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      // console.log('== props.route.params: ', props.route.params)
      console.log('fetchData ServiceDetails')
      try {
        setSpinner(true)
        const payments = await PaymentsService(props.route.params.saleCreditId)
        // console.log('===== ***** payments: ', payments)
        setData(mapData(payments))
        setTotalPaidPayments(payments.data.totalPaidPayments)
      } catch (error) {
        console.log('== Error - PaymentsService: ', error)
      } finally {
        setSpinner(false)
      }
    }

    if (reload) {
      console.log('ServiceDetails fetching data')
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
        isPaid: data.isPaid,
        isRescheduled: data.isRescheduled
      }
    })
  }

  const showDetails = () => {
    console.log('jhajkshdjkashdjksa props.props.route.params.item: ', props.route.params.item)
    const params = {
      type: 'details',
      customer: props.route.params.customer,
      city: props.route.params.city,
      totalPaidPayments,
      item: props.route.params.item
    }
    props.navigation.navigate('PaymentUpdate', params)
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
            setReloadFn={setReload}
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
          onPress={() => showDetails()}
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
