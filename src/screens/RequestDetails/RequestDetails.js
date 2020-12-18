import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native'

import styles from './styles'

const renderServicesMessage = () => {
  return (
    <View style={styles.disclaimer}>
      <Text style={styles.textDisclaimer}>
        Pagamos los servicios de <Text style={styles.highlightOrange}>Luz</Text>, <Text style={styles.highlightOrange}>Telefono</Text>, 
        <Text style={styles.highlightOrange}> Agua</Text>. Tambien hacemos <Text style={styles.highlightOrange}> Depositos Bancarios</Text>, 
        <Text style={styles.highlightOrange}> Pagos en Elektra, etc. </Text> Por un costo desde
        <Text style={styles.highlightBlue}> $25</Text> pesos dependiendo del servicio que se valla a pagar.
      </Text>
    </View>
  )
}

const renderShoppingMessage = () => {
  return (
    <View style={styles.disclaimer}>
      <Text style={styles.textDisclaimer}>
        Ya no pagues taxi o gastes en gasolina para ir a <Text style={styles.highlightOrange}>surtir tu despensa</Text>,
        nosotros te compramos tu mandado por un costo desde <Text style={styles.highlightBlue}> $25 </Text>
        pesos dependiendo del volumen de compra. Hacemos envios a los alrededores de <Text style={styles.highlightOrange}>Huetamo</Text> y la tarifa
        puede variar dependiendo del lugar
      </Text>
    </View>
  )
}

const factoryMessage = (opt) => {
  switch (opt) {
    case 'service':
      return renderServicesMessage()
    default:
      return renderShoppingMessage()
  }
}

export default class RequestDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      initTime: new Date(),
      finishTime: new Date(),
      mode: 'date',
      showDate: false,
      showInitTime: false,
      showFinishTime: false,
      optionService: 'service'
    }
  }

  handleRequest = () => {
    console.log('saving request')
    this.props.navigation.navigate('ServiceLocation')
    /* Alert.alert(
      'Servicio Creado',
      'El servicio ha sido creado correctamente',
      [
        {
          text: 'Aceptar',
          onPress: () => {
            console.log('correct')
          }
        }
      ]
    ) */
  }

  handleService = () => {
    console.log(' service')
    this.setState({
      optionService: 'service'
    })
  }

  handleShopping = () => {
    console.log('shopping')
    this.setState({
      optionService: 'shopping'
    })
  }

  render () {
    console.log('this.state.optionService: ', this.state.optionService)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Selecciona un servicio</Text>
        <TouchableOpacity
          style={this.state.optionService === 'service' ? styles.serviceBtnSelected : styles.serviceBtn}
          onPress={this.handleService}
        >
          <Text style={styles.requestText}>1. Pago de Servicios</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.optionService === 'shopping' ? styles.serviceBtnSelected : styles.serviceBtn}
          onPress={this.handleShopping}
        >
          <Text style={styles.requestText}>2. Surtir Despensa</Text>
        </TouchableOpacity>

        {factoryMessage(this.state.optionService)}

        <TouchableOpacity
          style={styles.continueBtn}
          onPress={this.handleRequest}
        >
          <Text style={styles.requestText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
