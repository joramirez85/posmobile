import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.softRed,
    marginBottom: 10,
    paddingLeft: 20,
    paddingTop: 5
  },
  customerName: {
    color: Colors.black,
    paddingLeft: 14
  }
})

export default styles
