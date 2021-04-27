import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    height: 31,
    color: colors.white,
    backgroundColor: colors.primary,
    lineHeight: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.padding,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: fonts.small,
  },
  'button-outline': {
    backgroundColor: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.small,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  'text-outline': {
    color: colors.primary,
  },
});

export default styles;
