import React, {Component} from 'react'
import moment from 'moment'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import styles from './styles'
import Colors from '../../constants/Colors'

export default class ServiceDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: 'Maria Luisa Garcia Vargas',
      date: '29/07/2020',
      initTime: '12:30 PM',
      finishTime: '02:30 PM',
      instructions: 'Limpieza de cuartos',
      address: 'Castilla 209, Campos Verdes'
    }
  }

  handleAccept = () => {}

  handleCancel = () => {}

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.customer}</Text>
        <View style={styles.infoView}>
          <Text style={styles.labelText}>Direccion: {this.state.address}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.labelText}>Fecha: {this.state.date}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.labelText}>Hora de Inicio: {this.state.initTime}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.labelText}>Hora de Finalizacion: {this.state.finishTime}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.labelText}>Indicaciones: {this.state.instructions}</Text>
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.acceptBtn}
            onPress={this.handleAccept}
          >
            <Text style={styles.optionText}>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={this.handleCancel}
          >
            <Text style={styles.optionText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
