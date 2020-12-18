import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const handleItemSelected = (params) => {
  params.navigation.navigate('RequestDetails')
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
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.requestService}>Solicitar Servicio</Text>
    </View>
  </TouchableOpacity>
)
