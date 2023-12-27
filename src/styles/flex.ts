import {StyleSheet, ViewStyle} from 'react-native';
import {generateScalingStyles} from './utils';

const flex = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex: {
    display: 'flex',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  flexNoWrap: {
    flexWrap: 'nowrap',
  },
  flexJustifyStart: {
    justifyContent: 'flex-start',
  },
  flexJustifyEnd: {
    justifyContent: 'flex-end',
  },
  flexJustifyCenter: {
    justifyContent: 'center',
  },
  flexJustifyBetween: {
    justifyContent: 'space-between',
  },
  flexJustifyAround: {
    justifyContent: 'space-around',
  },
  flexAlignStart: {
    alignItems: 'flex-start',
  },
  flexAlignEnd: {
    alignItems: 'flex-end',
  },
  flexAlignCenter: {
    alignItems: 'center',
  },
  flexAlignStretch: {
    alignItems: 'stretch',
  },
  flexAlignBaseline: {
    alignItems: 'baseline',
  },
  flexSelfAuto: {
    alignSelf: 'auto',
  },
  flexSelfStart: {
    alignSelf: 'flex-start',
  },
  flexSelfEnd: {
    alignSelf: 'flex-end',
  },
  flexSelfCenter: {
    alignSelf: 'center',
  },
  flexSelfStretch: {
    alignSelf: 'stretch',
  },
});

const flexGap = generateScalingStyles<{
  gap1: ViewStyle;
  gap2: ViewStyle;
  gap3: ViewStyle;
  gap4: ViewStyle;
  gap5: ViewStyle;
  gap6: ViewStyle;
}>('gap', 'gap', 0, 6);
const flexGrow = generateScalingStyles<{
  grow0: ViewStyle;
  grow1: ViewStyle;
  grow2: ViewStyle;
  grow3: ViewStyle;
  grow4: ViewStyle;
  grow5: ViewStyle;
  grow6: ViewStyle;
}>('grow', 'flexGrow', 0, 6);
const flexShrink = generateScalingStyles<{
  shrink0: ViewStyle;
  shrink1: ViewStyle;
  shrink2: ViewStyle;
  shrink3: ViewStyle;
  shrink4: ViewStyle;
  shrink5: ViewStyle;
  shrink6: ViewStyle;
}>('shrink', 'flexShrink', 0, 6);
const flexBasis = generateScalingStyles<{
  basis0: ViewStyle;
  basis1: ViewStyle;
  basis2: ViewStyle;
  basis3: ViewStyle;
  basis4: ViewStyle;
  basis5: ViewStyle;
  basis6: ViewStyle;
}>('basis', 'flexBasis', 0, 6);

const flexStyles = StyleSheet.create({
  ...flex,
  ...flexGap,
  ...flexGrow,
  ...flexShrink,
  ...flexBasis,
});

export default flexStyles;
