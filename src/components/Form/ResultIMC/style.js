import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultIMC: {
    flex: 1,
    marginTop: 10,
    paddingTop: 10,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
  },
  resultNumber: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    color: '#ff0043',
    fontWeight: 'bold',
  },
  boxShare: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  shared: {
    backgroundColor: '#1877f2',
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
  },
  sharedText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
});

export default styles;
