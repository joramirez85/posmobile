import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyCustom,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  containerMap: {
    width: Dimensions.get('window').width - 20, // 340,
    height: Dimensions.get('window').height - 400, // 370,
    marginBottom: 10
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
  },
  address: {
    fontSize: 20,
    color: Colors.black,
    marginBottom: 40,
    paddingLeft: 20,
    // paddingTop: 20
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 40,
    // paddingLeft: 20,
    // paddingTop: 20
  },
  disclaimer: {
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 9,
    backgroundColor: Colors.softGreen ,
    borderRadius: 10,
  },
  textDisclaimer: {
    textAlign: 'center',
    // fontSize: textViewPort(13),
    lineHeight: 19,
    color: '#121212',
  },
  highlightOrange: {
    fontWeight: 'bold',
    color: Colors.ORANGE_BKY,
  }
})

export default styles
