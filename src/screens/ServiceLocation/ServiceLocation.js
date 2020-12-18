import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import styles from './styles'
import { Context } from '../../store'

const renderInstructions = () => {
  return (
    <View style={styles.disclaimer}>
      <Text style={styles.textDisclaimer}>
        De manera inicial te ubicamos en tu <Text style={styles.highlightOrange}>ubicación actual</Text>, si deseas que el servicio sea para otra diferente, por favor seleccionala en el mapa
      </Text>
    </View>
  )
}

export default class ServiceLocation extends Component {
  static contextType = Context
  constructor (props) {
    super(props)
    
    this.state = {
      address: '',
      location: {coords: { latitude: 37.78825, longitude: -122.4324}},
      mapRegion: null,
      errorMesage: ''
    }

    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMesage: 'This will not work on Android emulator'
      })
    } else {
      this.getLocationAsync()
    }
  }

  componentDidMount() {
    const { store } = this.context
    this.setState({
      address: store.personalData.address
    })
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMesage: 'Permission to access location was denied'
      })
    }

    const location = await Location.getCurrentPositionAsync({})
    this.setState({
      location
    })

    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.002
      }
    })
    await this.attemptReverseGeocodeAsync()
  }

  handleMapRegionChange = mapRegion => {
    console.log(mapRegion)
    this.setState({ mapRegion })
  }

  attemptReverseGeocodeAsync = async () => {
    // this.setState({ inProgress: true })
    console.log('=== this.state.location: ', this.state.location)
    try {
      const coords = {
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude
      }
      let result = await Location.reverseGeocodeAsync(coords)
      console.log('====== result: ', result)
      const [element] = result
      const address = `${element.name}, ${element.city}`
      this.setState({ address })
    } catch (e) {
      this.setState({ errorMesage: e });
      console.log('== Error: ', e)
    } /* finally {
      this.setState({ inProgress: false });
    } */
  }

  handleConfirm = () => {
    console.log('== handleConfirm')
  }

  handleChangeLocation = (e) => {
    console.log('e.nativeEvent.coordinate: ', e.nativeEvent.coordinate)
    const coords = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude
    }

    this.setState({
      location: {coords}
    }, async () => {
      await this.attemptReverseGeocodeAsync()
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.address}>
          <Text style={styles.title}>Direccion:</Text> { this.state.address }
        </Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.containerMap}
          region={this.state.mapRegion}
          onPress={this.handleChangeLocation}
        >
          <Marker
            draggable
            image={require('../../../assets/marker.png')}
            coordinate={this.state.location.coords}
            title="Mi ubicación"
            description="Destino de mi servicio"
          />
        </MapView>
        {renderInstructions()}
        <TouchableOpacity
            style={styles.signupBtn}
            onPress={this.handleConfirm}
          >
            <Text style={styles.signupText}>Confirmar</Text>
          </TouchableOpacity>
      </View>
    )
  }

}
