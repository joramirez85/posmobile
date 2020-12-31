import { StyleSheet } from "react-native";
import { textViewPort } from '../../../utils/utils'

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  circle: (size) => ({
    width: size ? size : 60,
    height: size ? size : 60,
    borderRadius: size ? size/2 : 30,
    backgroundColor: '#FBFBFB',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  bg: (size) => ({
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: size ? size/2 : 30,
  }),
  title: {
    textAlign: 'center',
    marginTop: 8,
    color: '#414141',
    // fontFamily: 'Manrope',
    fontSize: textViewPort(14),
    fontWeight: 'bold',
    lineHeight: 18,
  },
  disabled: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
  },
});

export default styles;
