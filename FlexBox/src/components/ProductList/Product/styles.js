import {StyleSheet, Dimensions} from 'react-native';
import {colors, metrics, fonts} from '../../../../styles';

const {width} = Dimensions.get('window');
const widthProduct = (width - 45) / 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginBottom: metrics.padding,
    width: widthProduct,
  },

  imageContainer: {
    padding: metrics.padding,
  },

  infoContainer: {
    borderTopWidth: 1,
    borderColor: colors.ligth,
    padding: metrics.padding,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },

  checkIcon: {
    color: colors.primary,
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    zIndex: 1,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
  },

  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller,
  },

  price: {
    textAlign: 'center',
    color: colors.ligth,
    fontSize: fonts.regular,
    marginTop: 5,
  },
});

export default styles;
