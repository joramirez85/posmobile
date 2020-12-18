import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyCustom,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
    marginBottom: 40,
    paddingLeft: 20,
    paddingTop: 20
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.softRed
  },
  button: {
    // alignItems: 'center',
    marginBottom: 10,
    width: '100%'
  },
  labelText: {
    color: Colors.white,
    paddingLeft: 10
  },
  serviceBtn: {
    width: '45%',
    backgroundColor: Colors.darkGrey,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  serviceBtnSelected: {
    width: '45%',
    backgroundColor: Colors.green,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  requestBtn: {
    width: '80%',
    backgroundColor: Colors.black,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  continueBtn: {
    width: '80%', 
    height: 50, 
    // backgroundColor: '#FF9800', 
    backgroundColor: Colors.ORANGE_BKY,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 25,
    bottom: 10
  },
  requestText: {
    color: Colors.white
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputView: {
    width: '95%',
    backgroundColor: Colors.white,
    borderRadius: 25,
    height: 80,
    marginTop: 15,
    marginBottom: 10,
    // marginLeft: 10,
    // marginRight: 5,
    justifyContent: 'flex-end',
    padding: 20
  },
  textArea: {
    height: 80,
    color: Colors.grey
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
  },
  highlightBlue: {
    fontWeight: 'bold',
    color: Colors.black,
  }
})

export default styles
