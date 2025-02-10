import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import CustomWindow from '../../Customs/CustomWindow';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useTheme} from '../../context/ThemeContext';
import { CountryPicker } from 'react-native-country-codes-picker';
import CustomButton from '../../Customs/CustomButton';
import CustomModal from '../SignUp/CustomModal';
import { useFinTech } from '../../context/Context';
import { GlobalColors } from '../../constants/Colors';

const Login = ({navigation}) => {
  const theme = useTheme();
   const [show, setShow] = useState(false);
    const [flag, setFlag] = useState('🇮🇳');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const {phoneNo, setPhoneNo} = useFinTech();

    const navOtp = ()=>{
      setPhoneNo(phone);
      navigation.navigate('ConfirmOtp')
    }
  
  return (
    <CustomWindow>
      <View
        style={{width: responsiveScreenWidth(90), alignSelf: 'center', gap: 5}}>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(3.5),
          }}>
          Log in to Coinpay
        </Text>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(2),
            lineHeight: 25,
          }}>
          Enter your registered mobile number to log in.
        </Text>
      </View>
      <View style={styles.phone}>
          <Text
            style={[
              styles.phoneHead,
              {
                color: theme.ContentPrimary,
              },
            ]}>
            Phone
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                width: responsiveScreenWidth(23),
                height: responsiveScreenHeight(5),
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                borderColor: theme.Border,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: theme.ContentPrimary,
                  fontSize: responsiveScreenFontSize(1.8),
                  alignSelf: 'center',
                }}>
                {flag} {countryCode}
              </Text>
            </TouchableOpacity>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: theme.Border,
                  color: theme.ContentPrimary,
                },
              ]}
              placeholder="Mobile Number"
              placeholderTextColor={theme.ContentDisabled}
              keyboardType="phone-pad"
              maxLength={10}
              onChangeText={setPhone}
            />
          </View>

          <CountryPicker
            lang="en"
            show={show}
            pickerButtonOnPress={item => {
              setFlag(item.flag);
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            style={{
              modal: {
                height: responsiveScreenHeight(50),
                backgroundColor: theme.bg,
              },
              itemsList: {
                backgroundColor: theme.bg,
              },
              countryButtonStyles: {
                backgroundColor: theme.bg,
              },
              countryName: {
                color: theme.ContentPrimary,
              },
              textInput: {
                backgroundColor: theme.bg,
                color: theme.ContentPrimary,
              },
              searchMessageText: {
                color: theme.ContentPrimary,
              },
            }}
          />
        </View>
        <CustomButton
          onPress={navOtp}
          title="Continue"
          style={[
            phone.length !== 10
              ? {backgroundColor: GlobalColors.light.Border}
              : {},
            {alignSelf: 'center'},
          ]}
          disabled={phone.length !== 10}
        />
    </CustomWindow>
  );
};

export default Login;

const styles = StyleSheet.create({
  phone: {
      marginTop: responsiveScreenHeight(2),
      gap: responsiveScreenHeight(0.75),
      flex: 1,
      alignSelf:'center'
    },
    phoneHead: {
      fontSize: responsiveScreenFontSize(1.8),
      fontFamily: 'Poppins-bold',
    },
    input: {
      width: responsiveScreenWidth(65),
      height: responsiveScreenHeight(5),
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: responsiveScreenWidth(3),
      fontSize: responsiveScreenFontSize(1.8),
      fontFamily: 'Poppins',
    },
});
