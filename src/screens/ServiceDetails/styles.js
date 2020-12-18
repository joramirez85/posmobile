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
    fontSize: 20,
    color: Colors.softRed,
    marginBottom: 40,
    paddingLeft: 20,
    paddingTop: 20
  },
  labelText: {
    color: Colors.white,
    paddingLeft: 10
  },
  infoView: {
    //  padding: 10
    paddingBottom: 10
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  acceptBtn: {
    width: '40%',
    backgroundColor: Colors.softRed,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginRight: 20,
    marginBottom: 30
  },
  cancelBtn: {
    width: '40%',
    backgroundColor: Colors.softRed,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 30
  },
  
  optionText: {
    color: Colors.white
  }
})

export default styles
