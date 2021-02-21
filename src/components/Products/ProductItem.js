import React from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './styles'

export default (props) => {
  console.log('ProductItem: ', props)
  const {
    description,
    qty
  } = props.item

  return (
  <View style={styles.item}>
    <View style={styles.titleView}>
      <Text
        style={styles.title}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {description}
      </Text>
      <Text
        style={styles.qty}
      >
        <Text style={styles.qtyLabel}> Cantidad: </Text> {qty}
      </Text>
    </View>
  </View>
)
}
