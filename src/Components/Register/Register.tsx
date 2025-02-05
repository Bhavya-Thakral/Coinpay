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

const Register = ({navigation}) => {
  const theme = useColorScheme();

  const navLogin = () => {
    navigation.navigate('Login');
  };
  const navSignUp = () => {
    navigation.navigate('SignUpStack');
  };
  return (
    <ScrollView
      style={[
        {
          backgroundColor:
            theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
        },
        styles.main,
      ]}>
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
      <Image
        source={theme === 'dark' ? SignDark : SignLight}
        style={styles.img}
      />
      <Text
        style={[
          {
            color:
              theme === 'dark'
                ? GlobalColors.dark.ContentPrimary
                : GlobalColors.light.ContentPrimary,
          },
          styles.title,
        ]}>
        Create Your Coinpay account
      </Text>
      <Text
        style={[
          {
            color:
              theme === 'dark'
                ? GlobalColors.dark.ContentPrimary
                : GlobalColors.light.ContentPrimary,
          },
          styles.discription,
        ]}>
        Coinpay is a powerful tool that allows you to easily send, receive, and
        track all your transactions.
      </Text>
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
            backgroundColor:
              theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
            borderColor:
              theme === 'dark'
                ? GlobalColors.dark.ContentAccent
                : GlobalColors.light.primaryColor,
          },
          styles.customButtonTwo,
        ]}
        textStyle={{
          color:
            theme === 'dark'
              ? GlobalColors.dark.ContentAccent
              : GlobalColors.light.primaryColor,
        }}
      />
      <Text
        style={[
          {
            color:
              theme === 'dark'
                ? GlobalColors.dark.ContentPrimary
                : GlobalColors.light.ContentPrimary,
          },
          styles.agree,
        ]}>
        By continuing, you accept our{' '}
        <Text
          style={[
            styles.conditions,
            {
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentAccent
                  : GlobalColors.light.primaryColor,
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
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentAccent
                  : GlobalColors.light.primaryColor,
            },
          ]}>
          {' '}
          Privacy Policy
        </Text>
      </Text>
    </ScrollView>
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
    resizeMode: 'contain',
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
