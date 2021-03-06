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
    width: '70%',
    minWidth: 200,
    height: 40
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    height: 30
  },
  details: {
    fontSize: 12,
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
    width: 90
  },
  saleDate: {
    fontSize: 12,
    color: Colors.white
  },
  address: {
    fontSize: 12,
    color: Colors.white,
    height: 40
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
