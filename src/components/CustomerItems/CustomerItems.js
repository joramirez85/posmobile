import React from 'react'
import Item from './Item'

export default ({item, navigation}) => (
  <Item
    title={item.item.title}
    navigation={navigation}
    address={item.item.address}
    initTime={item.item.initTime}
    finishTime={item.item.finishTime}
    instructions={item.item.instructions}
  />
)
