import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalColors} from '../../constants/Colors';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import CustomWindow from '../../Customs/CustomWindow';

import { ReactNode } from 'react';

const CustomHeader = ({children}: {children: ReactNode}) => {
  return (
    <CustomWindow>
      <View
        style={[
          {
            backgroundColor: GlobalColors.light.Border,
          },
          styles.stepsCont,
        ]}>
        <View
          style={[
            {
              backgroundColor: GlobalColors.light.BorderAccent,
            },
            styles.step,
          ]}
        />
      </View>
      {children}
    </CustomWindow>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  stepsCont: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(0.4),
  },
  step: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenHeight(0.4),
    borderRadius: 50,
  },
});
