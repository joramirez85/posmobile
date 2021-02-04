import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const handleItemSelected = ({ item }, props, type = 'abono') => {
  console.log('item: ',  item, ' ID: ', item.id)
  console.log('props: ', props)
  const params = {
    type,
    item
  }
  props.navigation.navigate('PaymentUpdate', params)
}

const defineStatus = (item) => {
  let status = 'Por Cobrar'
  // console.log('======== item: ', item)
  if (item.item.isPaid) {
    status = 'Pagado'
  } else if (item.item.isRescheduled) {
    status = 'Reagendado'
  }

  return status
}

const defineAction =(item, props) => {
  if (!item.item.isPaid) {
    return (
      <View style={styles.detailsContainer}>
        <TouchableOpacity
          style={styles.btnAction}
          onPress={() => handleItemSelected(item, props, 'abono')}
        >
          <Text style={styles.details}>Abonar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnAction}
          onPress={() => handleItemSelected(item, props, 'reagendar')}
        >
          <Text style={styles.details}>Reagendar</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View style={styles.detailsContainer}>
        <TouchableOpacity
          style={styles.btnAction}
          onPress={() => handleItemSelected(item, props, 'actualizar')}
        >
          <Text style={styles.details}>Actualizar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default (props) => (
  <View
    style={styles.item}
    onPress={() => handleItemSelected(props)}
  >
    <View style={styles.titleView}>
      <Text
        style={styles.address}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        Monto A Pagar: ${props.amountPayment}
      </Text>
      <Text
        style={styles.address}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        Fecha a Pagar: {props.datePayment}
      </Text>
      <Text
        style={styles.address}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        Fecha Reagendada: {props.paymentRescheduledDate}
      </Text>
      <Text
        style={styles.address}
      >
        Status: <Text style={styles.status}>{defineStatus(props.item)}</Text>
      </Text>
    </View>
    <View style={styles.rightContainer}>
      {defineAction(props.item, props)}
    </View>
  </View>
)
