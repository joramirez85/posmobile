import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const handleItemSelected = (params) => {
  console.log('props: ',  params)
  params.navigation.navigate('ServiceDetails')
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
        {props.title}
      </Text>
      <Text
        style={styles.address}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {props.address}
      </Text>
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.requestService}>Ver Detalles</Text>
    </View>
  </TouchableOpacity>
)
