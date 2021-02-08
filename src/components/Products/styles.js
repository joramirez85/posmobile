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
    width: '100%',
    minWidth: 200,
    height: 40
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    height: 30
  },
  qty: {
    fontSize: 12,
    color: Colors.white,
    height: 40
  },
  qtyLabel: {
    fontSize: 12,
    color: Colors.ORANGE_BKY,
    height: 40
  }
})

export default styles
