import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const handleItemSelected = (params) => {
  console.log('props params :: ',  params)
  params.navigation.navigate('ServiceDetails', params)
}

export default (props) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => handleItemSelected(props)}
  >
    <View style={styles.titleView}>
      <Text
        style={styles.title}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {props.customer}
      </Text>
      <Text
        style={styles.address}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {props.city}
      </Text>
    </View>
    <View style={styles.rightContainer}>
      <Text
        style={styles.saleDate}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {props.saleDate}
      </Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>Ver Detalles</Text>
      </View>
    </View>
  </TouchableOpacity>
)
