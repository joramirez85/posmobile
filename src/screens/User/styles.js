import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyCustom,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40
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
  signupBtn: {
    width: '80%', 
    height: 50, 
    backgroundColor: Colors.ORANGE_BKY,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 25,
    bottom: 10
  },
  signupText: {
    color: Colors.white
  }
})

export default styles
