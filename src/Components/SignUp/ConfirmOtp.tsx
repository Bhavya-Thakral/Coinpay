import {Alert, StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {GlobalColors} from '../../constants/Colors';
import CustomButton from '../../Customs/CustomButton';
import CustomHeader from './CustomHeader';

const ConfirmOtp = ({navigation}) => {
  const theme = useColorScheme() || 'light';
  const [code, setCode] = useState('');

  const confirmOtp = ()=>{
    navigation.navigate('Residence')
  }

  return (
    <CustomHeader>
      <View style={styles.view}>
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
          Create an account
        </Text>
        <Text
          style={[
            {
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentPrimary
                  : GlobalColors.light.ContentPrimary,
            },
            styles.head,
          ]}>
          Enter your mobile number to create an account
        </Text>
        <View style={styles.phone}>
          <TextInput
            value={code}
            onChangeText={setCode}
            maxLength={4}
            placeholder="XXXX"
            keyboardType="numeric"
            style={[
              {
                color:
                  theme === 'dark'
                    ? GlobalColors.dark.ContentPrimary
                    : GlobalColors.light.ContentPrimary,
                backgroundColor:
                  theme === 'dark'
                    ? GlobalColors.dark.bg
                    : GlobalColors.light.bg,
                borderColor:
                  theme === 'dark'
                    ? GlobalColors.dark.Border
                    : GlobalColors.light.Border,
              },
              styles.input,
            ]}
          />
        </View>
        <CustomButton
          onPress={() => confirmOtp()}
          title="Continue"
          style={[
            code.length !== 4
              ? {backgroundColor: GlobalColors.light.Border}
              : {},
            {alignSelf: 'center'},
          ]}
          disabled={code.length !== 4}
        />
      </View>
    </CustomHeader>
  );
};
export default ConfirmOtp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: responsiveScreenWidth(5),
  },
  stepsCont: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(0.4),
  },
  step: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenHeight(0.4),
    borderRadius: 50,
  },
  title: {
    fontSize: responsiveScreenHeight(3),
    fontFamily: 'Poppins-SemiBold',
  },
  view: {
    marginVertical: responsiveScreenWidth(1.5),
    gap: responsiveScreenHeight(0.8),
    height: responsiveScreenHeight(100),
    marginHorizontal: responsiveScreenHeight(2),
  },
  head: {
    fontFamily: 'Poppins',
    fontWeight: '200',
    fontSize: responsiveScreenFontSize(1.5),
  },
  phone: {
    marginTop: responsiveScreenHeight(2),
    gap: responsiveScreenHeight(0.75),
    flex: 0.75,
  },
  phoneHead: {
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins-bold',
  },
  input: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(5),
    borderRadius: 10,
    borderBottomWidth: 1,
    paddingHorizontal: responsiveScreenWidth(3),
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins',
    alignSelf: 'center',
    letterSpacing: 18,
  },
});
