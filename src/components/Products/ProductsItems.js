import React from 'react'
import ProductItem from './ProductItem'

export default ({item, navigation, data}) => (
  <ProductItem
    navigation={navigation}
    item={item.item}
  />
)
