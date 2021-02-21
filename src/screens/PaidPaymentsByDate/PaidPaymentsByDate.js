import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'
import Spinner from 'react-native-loading-spinner-overlay'
import moment from 'moment'

import { AmountPaidByDateService } from '../../services/Credit/CreditList'
import {
  formatCurrentDate,
  numberFormat
} from '../../utils/utils'
import styles from './styles'

const PaidPaymentsByDate = (props) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [startShow, setStartShow] = useState(false)
  const [endShow, setEndShow] = useState(false)
  const [amount, setAmount] = useState('')
  const [spinner, setSpinner] = useState(false)

  const offset = new Date().getTimezoneOffset() * -1

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData PaidPaymentsByDate: ', startDate, ' - ', endDate)
      /* try {
        setSpinner(true)
        const amountByDate = await AmountPaidByDateService(startDate, endDate)
        console.log('===== ***** amountByDateee: ', amountByDate.data.totalPaidByDate)
        // setAmount(amountByDate.data.totalPaidByDate)
        setAmount('0')
      } catch (error) {
        console.log('== Error - AmountPaidByDateService: ', error)
      } finally {
        setSpinner(false)
      } */
      await requestAmountByDate(startDate, endDate)
    }

    fetchData()
  }, [])

  const requestAmountByDate = async () => {
    console.log('execute requestAmountByDate')
    try {
      setSpinner(true)
      const amountByDate = await AmountPaidByDateService(formatCurrentDate(startDate, 'YYYY-MM-DD'), formatCurrentDate(endDate, 'YYYY-MM-DD'))
      // console.log('===== ***** amountByDateee 123: ', amountByDate.data.totalPaidByDate.paymentAmountPaid)
      setAmount(`$${numberFormat(amountByDate.data.totalPaidByDate.paymentAmountPaid, 1)}`)
    } catch (error) {
      console.log('== Error - AmountPaidByDateService: ', error)
    } finally {
      setSpinner(false)
    }
  }

  const onChangeStartDate = (event, selectedDate) => {
    console.log('===== selectedDate: ', selectedDate, ' ---- ' , date)
    const birthDateUTC = moment(selectedDate || date).utc()
    const birthDateFormat = birthDateUTC.format('YYYY-MM-DD')

    const date = new Date();
    const offsetInHours = date.getTimezoneOffset() / 30

    console.log('birthDateUTC.toDate(): ', birthDateUTC.add(offsetInHours, 'h').toDate())


    setStartShow(Platform.OS === 'ios')
    setStartDate(selectedDate)
  }

  const onChangeEndDate = (event, selectedDate) => {
    console.log('===== selectedEndDate: ', selectedDate, ' ---- ' , date)
    const birthDateUTC = moment(selectedDate || date).utc()
    const birthDateFormat = birthDateUTC.format('YYYY-MM-DD')

    const date = new Date();
    const offsetInHours = date.getTimezoneOffset() / 30

    console.log('birthDateUTC.toDate(): ', birthDateUTC.add(offsetInHours, 'h').toDate())


    setEndShow(Platform.OS === 'ios')
    setEndDate(selectedDate)
  }

  const handlePaymentPaid = async () => {
    console.log('handlePaymentPaid')
    await requestAmountByDate()
  }

  return (
    <>
      <Spinner
        visible={spinner}
        textContent={'Abonando...'}
      />
      <Text style={styles.title}>
        Fecha Inicio:
      </Text>
      {
      Platform.OS !== 'ios' &&
      <TouchableOpacity onPress={() => {
          setStartShow(true)
        }}
        style={styles.dateBtn}
        activeOpacity={0.6}>
          <TextInput
            value={formatCurrentDate(startDate, 'YYYY-MM-DD')}
            style={styles.inputText}
            placeholder='Fecha Inicio'
            placeholderTextColor={Colors.white}
            editable={false}
          />
      </TouchableOpacity>
      }
      {
      (startShow || Platform.OS === 'ios') && 
      <View style={styles.dateContainer}>
        <View style={Platform.OS === 'ios' && styles.date}>
          <DateTimePicker
            style={styles.dateComponent}
            value={startDate}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeStartDate}
            timeZoneOffsetInMinutes={offset}
          />
        </View>
      </View>
      }

      <Text style={styles.title}>
        Fecha Fin:
      </Text>
      {
      Platform.OS !== 'ios' &&
      <TouchableOpacity onPress={() => {
          setEndDate(true)
        }}
        style={styles.dateBtn}
        activeOpacity={0.6}>
          <TextInput
            value={formatCurrentDate(endDate, 'YYYY-MM-DD')}
            style={styles.inputText}
            placeholder='Fecha Inicio'
            placeholderTextColor={Colors.white}
            editable={false}
          />
      </TouchableOpacity>
      }
      {
      (endShow || Platform.OS === 'ios') && 
      <View style={styles.dateContainer}>
        <View style={Platform.OS === 'ios' && styles.date}>
          <DateTimePicker
            style={styles.dateComponent}
            value={endDate}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeEndDate}
            timeZoneOffsetInMinutes={offset}
          />
        </View>
      </View>
      }

      <Text style={styles.title}>Total recaudado por cobranza:</Text>
      <View style={styles.inputView}>
        <TextInput
          value={amount}
          style={styles.inputText}
          placeholder='$0'
          disabled
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handlePaymentPaid}
        >
          <Text style={styles.loginText}>Consultar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default PaidPaymentsByDate
