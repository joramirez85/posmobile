import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.darkModerateBlue,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleView: {
    width: '80%',
    minWidth: 200,
    height: 40
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    height: 40
  },
  requestService: {
    fontSize: 12,
    color: Colors.softRed,
    height: 40
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    width: '20%',
    minWidth: 55,
    height: 40
  }
})

export default styles
