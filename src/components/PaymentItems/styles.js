import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.darkModerateBlue,
    paddingTop: 10,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleView: {
    width: '70%',
    minWidth: 200,
    height: 48
  },
  details: {
    fontSize: 14,
    color: Colors.white
  },
  detailsContainer: {
    backgroundColor: Colors.ORANGE_BKY,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 5,
    marginTop: 5,
    height: 40,
    width: 95
  },
  saleDate: {
    fontSize: 12,
    color: Colors.white
  },
  address: {
    fontSize: 12,
    // backgroundColor: Colors.ORANGE_BKY,
    color: Colors.white,
    height: 20
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.ORANGE_BKY,
    height: 20
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    minWidth: 55,
    height: 40
  }
})

export default styles
