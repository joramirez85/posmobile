import React, {Component} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'

import styles from './styles'
import RenderItem from '../../components/CustomerItems/CustomerItems'

const list = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Pedro Gomez Perez",
    address: 'Gerona 201, Arroyo el Molino',
    initTime: '12:30 PM',
    finishTime: '01:30 PM',
    instructions: 'limpieza de cuartos'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Juan de Dios Perez Martinez",
    address: 'Gerona 201, Arroyo el Molino',
    initTime: '12:30 PM',
    finishTime: '01:30 PM',
    instructions: 'limpieza de cuartos'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Alfredo de la Cruz Garcia Escuadra",
    address: 'Gerona 201, Arroyo el Molino',
    initTime: '12:30 PM',
    finishTime: '01:30 PM',
    instructions: 'limpieza de cuartos'
  },
]

export default class CustomerList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: list
    })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={item => (
            <RenderItem 
              item={item}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}



