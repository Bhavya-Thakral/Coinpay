import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import CustomHeader from '../SignUp/CustomHeader';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useTheme} from '../../context/ThemeContext';
import welLight from './assets/welLight.png';
import welDark from './assets/welDark.png';
import CustomButton from '../../Customs/CustomButton';

const Welcome = ({navigation}) => {
  const theme = useTheme();
  const imgTheme = useColorScheme();

  const navLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <CustomHeader
      style={{
        width: responsiveScreenWidth(100),
      }}>
      <Image
        source={imgTheme === 'dark' ? welDark : welLight}
        style={styles.img}
      />
      <View
        style={{
          width: responsiveScreenWidth(90),
          flex: 1,
          alignSelf: 'center',
          gap: 10,
        }}>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(4),
            textAlign: 'center',
          }}>
          Congratulations! Welcome to CoinPay
        </Text>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(1.9),
            lineHeight: 25,
            textAlign: 'center',
          }}>
          We are happy to have you. It's time to send,recieve and track your
          expense.
        </Text>
      </View>
      <CustomButton
        title="Continue"
        onPress={navLogin}
        style={{
          alignSelf: 'center',
        }}
      />
    </CustomHeader>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  img: {
    width: responsiveScreenWidth(100),
    alignSelf: 'center',
    height: responsiveScreenHeight(40),
  },
});
