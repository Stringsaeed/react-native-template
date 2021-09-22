import {StyleSheet} from 'react-native';

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch'
  }
});

export default CommonStyles;
