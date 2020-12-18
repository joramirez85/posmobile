import {StatusBar} from 'react-native'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  list: {
    backgroundColor: Colors.darkBlue
  }
})

export default styles
