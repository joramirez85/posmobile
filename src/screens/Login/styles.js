import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: Colors.greyCustom,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: Colors.softRed,
    marginBottom: 40
  },
  inputView: {
    width: '80%',
    backgroundColor: Colors.green,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: Colors.white
  },
  forgot: {
    color: Colors.black,
    fontSize: 15
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Colors.ORANGE_BKY,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  loginText: {
    color: Colors.white
  },
  optsText: {
    color: Colors.black,
    fontSize: 15
  },
  tinyLogo: {
    paddingBottom: 20,
    marginBottom: 30,
    width: 250,
    height: 205,
  }
})

export default styles
