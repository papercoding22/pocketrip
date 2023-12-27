import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const combineStyles = (styles: any[]) => {
  return StyleSheet.flatten(styles);
};

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const generateScalingStyles = <
  T extends NamedStyles<T> | NamedStyles<any>,
>(
  prefix: string,
  property: keyof ViewStyle | keyof TextStyle | keyof ImageStyle,
  start: number,
  end: number,
  scaleFactor = 16,
): T => {
  const styles: T & NamedStyles<any> = {} as T & NamedStyles<any>;
  for (let i = start; i <= end; i++) {
    const key = `${prefix}${i}` as keyof T;
    const scalingStyle = {
      [property]: i * scaleFactor,
    };
    styles[key] = scalingStyle as unknown as (T & NamedStyles<any>)[keyof T];
  }
  return StyleSheet.create(styles);
};
