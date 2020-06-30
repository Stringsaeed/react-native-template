import { StyleSheet } from 'react-native';
import { transparentDark } from './colors';

const { create } = StyleSheet;

export default create({
  container: {
    flex: 1
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  noGrow: {
    flexGrow: 0
  },
  noShrink: {
    flexShrink: 0
  },
  absolute: {
    position: 'absolute'
  },
  noOverflow: {
    overflow: 'hidden'
  },
  fill: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  spaceEvenly: {
    justifyContent: 'space-evenly'
  },
  centerRow: {
    justifyContent: 'center'
  },
  centerCol: {
    alignItems: 'center'
  },
  flexStartRow: {
    justifyContent: 'flex-start'
  },
  flexEndRow: {
    justifyContent: 'flex-end'
  },
  flexStartVertical: {
    alignItems: 'flex-start'
  },
  flexEndVertical: {
    alignItems: 'flex-end'
  },
  selfStart: {
    alignSelf: 'flex-start'
  },
  selfEnd: {
    alignSelf: 'flex-end'
  },
  selfCenter: {
    alignSelf: 'center'
  },
  selfStretch: {
    alignSelf: 'stretch'
  },
  shrink: {
    flexShrink: 1
  },
  noShadow: {
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowColor: transparentDark
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch'
  }
});
