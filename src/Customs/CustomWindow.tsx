import {StyleSheet, View} from 'react-native';
import React from 'react';

import {ReactNode} from 'react';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {useTheme} from '../context/ThemeContext';
import { ScrollView } from 'react-native';

const CustomWindow = ({children}: {children: ReactNode}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.bg,
        },
        styles.main,
      ]}>
      {children}
    </View>
  );
};

export default CustomWindow;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: responsiveScreenWidth(5),
  },
});
