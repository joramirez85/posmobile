import React, { useContext, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import styles from './styles'
import RenderItem from '../../components/ProviderItems/ProviderItems'
import { Context } from '../../store'

const list = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Maria Juarez Gomez",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Josefina Martinez Perez",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Alicia Rojas Garcia",
  },
]

const ProviderList = (props) => {
  const { store, dispatch } = useContext(Context)

  useEffect(() => {
    console.log('** user: ', store.email)
    dispatch({
      type: 'setProviders',
      providers: list
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={store.providers}
        renderItem={item => (
          <RenderItem 
            item={item}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default ProviderList
