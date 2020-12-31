import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const handleItemSelected = (params) => {
  console.log('props: ',  params)
  // params.navigation.navigate('ServiceDetails')
}

export default (props) => (
  <TouchableOpacity
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
      
    </View>
    <View style={styles.rightContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>Abonar</Text>
      </View>
    </View>
  </TouchableOpacity>
)
