import React from 'react'
import Item from './Item'

export default ({item, navigation, data}) => (
  <Item
    navigation={navigation}
    customer={item.item.customer}
    city={item.item.city}
    saleDate={item.item.saleDate}
    saleCreditId={item.item.id}
    item={item.item}
  />
)
