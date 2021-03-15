import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black,
    marginBottom: 5,
    paddingLeft: 20,
    paddingTop: 5
  },
  customerName: {
    color: Colors.BLUE_BKY,
    paddingLeft: 14
  },
  containerDetails: {
    marginTop: 12
  },
  inputText: {
    height: 50,
    color: Colors.white
  },
  inputView: {
    width: '95%',
    backgroundColor: Colors.blue,
    borderRadius: 25,
    height: 50,
    marginBottom: 8,
    justifyContent: 'center',
    padding: 20,
    marginLeft: 8
  },
  loginBtn: {
    width: '95%',
    backgroundColor: Colors.ORANGE_BKY,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
    marginLeft: 8
  },
  loginText: {
    color: Colors.white
  },
  dateContainer: {
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 12
  },
  dateComponent: {
    height: 50
  },
  btnDate: {
    marginTop: 25
  },

  inputDate: {
    height: 50,
    color: Colors.blue,
  },
  dateBtn: {
    width: '95%',
    backgroundColor: Colors.blue,
    borderRadius: 25,
    height: 50,
    marginBottom: 30,
    marginLeft: 8,
    paddingLeft: 15
  },
})

export default styles
