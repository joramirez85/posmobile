import React from 'react'
import Item from './Item'

export default ({item, navigation}) => (
  <Item title={item.item.title} navigation={navigation} />
)
