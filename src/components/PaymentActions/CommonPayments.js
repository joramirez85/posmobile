import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import Spinner from 'react-native-loading-spinner-overlay'

import Colors from '../../constants/Colors'
import {formatCurrentDate} from '../../utils/utils'
import styles from './styles'

const CommonPayment = (props) => {
  const [date, setDate] = useState(new Date())
  const [payment, setPayment] = useState(0)
  const [mode, setMode] = useState('date')
  const [spinner, setSpinner] = useState(false)
  const offset = new Date().getTimezoneOffset() * -1

  const handleChangeAmount = (value) => {
    console.log('value payment: ', value)
    setPayment(value)
  }

  const onChangeDate = (event, selectedDate) => {
    console.log('===== selectedDate: ', selectedDate)
    setDate(date)
  }

  const handlePayment = async () => {
    console.log('Calling handlePayment')

    const params = {
      paymentAmountPaid: payment,
      amountPaidDate: formatCurrentDate(date, 'YYYY-MM-DD'),
      isPaid: true,
      isRescheduled: false,
      id: props.item.id
    }

    console.log('Params: ', params)

    try {
      setSpinner(true)
      const response = await props.serviceFn(params)
      // console.log('response: ', response)
      props.setReloadFn(true)
      cleanValues()
    } catch(error) {
      console.log('Error - handlePayment: ', error)
    } finally {
      setSpinner(false)
    }
  }

  const cleanValues = () => {
    setDate(new Date())
    setPayment(0)
  }

  console.log('Params props: ', props)

  return (
    <>
      <Spinner
        visible={spinner}
        textContent={'Abonando...'}
      />
      <View style={styles.containerDetails}>
        <Text style={styles.title}>
          {props.title} <Text style={styles.customerName}>${props.payment}</Text>
        </Text>
        <Text style={styles.title}>
          Fecha:
        </Text>

        <View style={styles.dateContainer}>
          <View style={Platform.OS === 'ios' && styles.date}>
            <DateTimePicker
              style={styles.dateComponent}
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
              timeZoneOffsetInMinutes={offset}
            />
          </View>
        </View>

        <Text style={styles.title}>Abono:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='$0'
            placeholderTextColor={Colors.white}
            onChangeText={handleChangeAmount}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handlePayment}
        >
          <Text style={styles.loginText}>{props.titleBtn}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default CommonPayment