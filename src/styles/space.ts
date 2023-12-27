import {StyleSheet, ViewStyle} from 'react-native';
import {generateScalingStyles} from './utils';

const paddingStyles = generateScalingStyles<{
  p0: ViewStyle;
  p1: ViewStyle;
  p2: ViewStyle;
  p3: ViewStyle;
  p4: ViewStyle;
  p5: ViewStyle;
  p6: ViewStyle;
}>('p', 'padding', 0, 6);
const marginStyles = generateScalingStyles<{
  m0: ViewStyle;
  m1: ViewStyle;
  m2: ViewStyle;
  m3: ViewStyle;
  m4: ViewStyle;
  m5: ViewStyle;
  m6: ViewStyle;
}>('m', 'margin', 0, 6);

const paddingTopStyles = generateScalingStyles<{
  pt0: ViewStyle;
  pt1: ViewStyle;
  pt2: ViewStyle;
  pt3: ViewStyle;
  pt4: ViewStyle;
  pt5: ViewStyle;
  pt6: ViewStyle;
}>('pt', 'paddingTop', 0, 6);

const paddingBottomStyles = generateScalingStyles<{
  pb0: ViewStyle;
  pb1: ViewStyle;
  pb2: ViewStyle;
  pb3: ViewStyle;
  pb4: ViewStyle;
  pb5: ViewStyle;
  pb6: ViewStyle;
}>('pb', 'paddingBottom', 0, 6);

const paddingLeftStyles = generateScalingStyles<{
  pl0: ViewStyle;
  pl1: ViewStyle;
  pl2: ViewStyle;
  pl3: ViewStyle;
  pl4: ViewStyle;
  pl5: ViewStyle;
  pl6: ViewStyle;
}>('pl', 'paddingLeft', 0, 6);

const paddingRightStyles = generateScalingStyles<{
  pr0: ViewStyle;
  pr1: ViewStyle;
  pr2: ViewStyle;
  pr3: ViewStyle;
  pr4: ViewStyle;
  pr5: ViewStyle;
  pr6: ViewStyle;
}>('pr', 'paddingRight', 0, 6);

const paddingVerticalStyles = generateScalingStyles<{
  pv0: ViewStyle;
  pv1: ViewStyle;
  pv2: ViewStyle;
  pv3: ViewStyle;
  pv4: ViewStyle;
  pv5: ViewStyle;
  pv6: ViewStyle;
}>('pv', 'paddingVertical', 0, 6);

const paddingHorizontalStyles = generateScalingStyles<{
  ph0: ViewStyle;
  ph1: ViewStyle;
  ph2: ViewStyle;
  ph3: ViewStyle;
  ph4: ViewStyle;
  ph5: ViewStyle;
  ph6: ViewStyle;
}>('ph', 'paddingHorizontal', 0, 6);

const marginVerticalStyles = generateScalingStyles<{
  mv0: ViewStyle;
  mv1: ViewStyle;
  mv2: ViewStyle;
  mv3: ViewStyle;
  mv4: ViewStyle;
  mv5: ViewStyle;
  mv6: ViewStyle;
}>('mv', 'marginVertical', 0, 6);

const marginHorizontalStyles = generateScalingStyles<{
  mh0: ViewStyle;
  mh1: ViewStyle;
  mh2: ViewStyle;
  mh3: ViewStyle;
  mh4: ViewStyle;
  mh5: ViewStyle;
  mh6: ViewStyle;
}>('mh', 'marginHorizontal', 0, 6);

const marginTopStyles = generateScalingStyles<{
  mt0: ViewStyle;
  mt1: ViewStyle;
  mt2: ViewStyle;
  mt3: ViewStyle;
  mt4: ViewStyle;
  mt5: ViewStyle;
  mt6: ViewStyle;
}>('mt', 'marginTop', 0, 6);

const marginBottomStyles = generateScalingStyles<{
  mb0: ViewStyle;
  mb1: ViewStyle;
  mb2: ViewStyle;
  mb3: ViewStyle;
  mb4: ViewStyle;
  mb5: ViewStyle;
  mb6: ViewStyle;
}>('mb', 'marginBottom', 0, 6);

const marginLeftStyles = generateScalingStyles<{
  ml0: ViewStyle;
  ml1: ViewStyle;
  ml2: ViewStyle;
  ml3: ViewStyle;
  ml4: ViewStyle;
  ml5: ViewStyle;
  ml6: ViewStyle;
}>('ml', 'marginLeft', 0, 6);

const marginRightStyles = generateScalingStyles<{
  mr0: ViewStyle;
  mr1: ViewStyle;
  mr2: ViewStyle;
  mr3: ViewStyle;
  mr4: ViewStyle;
  mr5: ViewStyle;
  mr6: ViewStyle;
}>('mr', 'marginRight', 0, 6);

const spacingStyles = StyleSheet.create({
  ...paddingStyles,
  ...marginStyles,
  ...paddingTopStyles,
  ...paddingBottomStyles,
  ...paddingLeftStyles,
  ...paddingRightStyles,
  ...paddingVerticalStyles,
  ...paddingHorizontalStyles,
  ...marginVerticalStyles,
  ...marginHorizontalStyles,
  ...marginTopStyles,
  ...marginBottomStyles,
  ...marginLeftStyles,
  ...marginRightStyles,
});

export default spacingStyles;
