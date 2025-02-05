import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

import {ReactNode} from 'react';
import {GlobalColors} from '../constants/Colors';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';

const CustomWindow = ({children}: {children: ReactNode}) => {
  const theme = useColorScheme() || 'light';

  return (
    <View
      style={[
        {
          backgroundColor:
            theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
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
