import {StyleSheet} from 'react-native';
const {create} = StyleSheet;

export default create({
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  noGrow: {
    flexGrow: 0,
  },
  noShrink: {
    flexShrink: 0,
  },
  absolute: {
    position: 'absolute',
  },
  fill: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
});
