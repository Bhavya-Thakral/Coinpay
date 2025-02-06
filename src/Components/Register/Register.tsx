import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {GlobalColors} from '../../constants/Colors';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import SignLight from './assets/SignLight.png';
import SignDark from './assets/SignDark.png';
import CustomButton from '../../Customs/CustomButton';
import {useTheme} from '../../context/ThemeContext';
import CustomHeader from '../SignUp/CustomHeader';

const Register = ({navigation}) => {
  const theme = useTheme();

  const navLogin = () => {
    navigation.navigate('Login');
  };
  const navSignUp = () => {
    navigation.navigate('SignUpStack');
  };
  return (
    <CustomHeader>
      <Image source={theme ? SignDark : SignLight} style={styles.img} />
      <View>
        <Text
          style={[
            {
              color: theme.ContentPrimary,
            },
            styles.title,
          ]}>
          Create Your Coinpay account
        </Text>
        <Text
          style={[
            {
              color: theme.ContentPrimary,
            },
            styles.discription,
          ]}>
          Coinpay is a powerful tool that allows you to easily send, receive,
          and track all your transactions.
        </Text>
      </View>
      <View>
        <CustomButton
          title="Sign Up"
          onPress={() => navSignUp()}
          style={styles.customButtonOne}
        />
        <CustomButton
          title="Log In"
          onPress={() => navLogin()}
          style={[
            {
              backgroundColor: theme.bg,
              borderColor: theme.primaryColor,
            },
            styles.customButtonTwo,
          ]}
          textStyle={{
            color: theme.primaryColor,
          }}
        />
      </View>
      <Text
        style={[
          {
            color: theme.ContentPrimary,
          },
          styles.agree,
        ]}>
        By continuing, you accept our{' '}
        <Text
          style={[
            styles.conditions,
            {
              color: theme.primaryColor,
            },
          ]}>
          {' '}
          Terms of Service{' '}
        </Text>
        and{' '}
        <Text
          style={[
            styles.conditions,
            {
              color: theme.primaryColor,
            },
          ]}>
          {' '}
          Privacy Policy
        </Text>
      </Text>
    </CustomHeader>
  );
};

export default Register;

const styles = StyleSheet.create({
  conditions: {
    textDecorationLine: 'underline',
  },
  agree: {
    fontSize: responsiveScreenFontSize(1.8),
    textAlign: 'center',
    marginHorizontal: responsiveScreenWidth(20),
    fontFamily: 'Poppins',
    fontWeight: '100',
  },
  customButtonTwo: {
    borderWidth: 1,
    alignSelf: 'center',
  },
  customButtonOne: {
    alignSelf: 'center',
    marginBottom: responsiveScreenHeight(0),
  },
  discription: {
    fontSize: responsiveScreenFontSize(1.8),
    textAlign: 'center',
    marginHorizontal: responsiveScreenWidth(2),
    marginVertical: responsiveScreenHeight(2),
    fontFamily: 'Poppins',
    fontWeight: '100',
  },
  title: {
    fontSize: responsiveScreenFontSize(4.5),
    textAlign: 'center',
    marginHorizontal: responsiveScreenWidth(15),
    fontFamily: 'Poppins-Bold',
  },
  img: {
    width: responsiveScreenWidth(100),
    alignSelf: 'center',
  },
  main: {flex: 1, gap: responsiveScreenWidth(5)},
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
