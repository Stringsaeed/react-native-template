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
});
