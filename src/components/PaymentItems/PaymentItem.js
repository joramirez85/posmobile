import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const handleItemSelected = ({item}) => {
  console.log('props: ',  item.id)
  // params.navigation.navigate('ServiceDetails')
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

const defineAction =(item) => {
  if (item.item.isPaid) {
    return 'Reagendar'
  } else {
    return 'Actualizar'
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
      <View style={styles.detailsContainer}>
        <TouchableOpacity
        onPress={() => handleItemSelected(props.item)}
        >
          <Text style={styles.details}>{defineAction(props.item)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
