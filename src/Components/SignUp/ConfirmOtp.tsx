import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {GlobalColors} from '../../constants/Colors';
import CustomButton from '../../Customs/CustomButton';
import CustomHeader from './CustomHeader';
import {useTheme} from '../../context/ThemeContext';
import {useFinTech} from '../../context/Context';
import {verifyOtp} from '../../api/api';
import Toast from 'react-native-toast-message';

const ConfirmOtp = ({navigation}) => {
  const theme = useTheme();
  const [code, setCode] = useState('');
  const {phoneNo, setUserInfo} = useFinTech();
  const [loading, setLoading] = useState(false);

  const confirmOtp = async () => {
    Alert.alert("here")
    setLoading(true);
    try {
      const res = await verifyOtp(phoneNo, code);
      if (res.userExists) {
        setUserInfo(res.data);
        setLoading(false);
        navigation.navigate('CardStack');
      } else {
        setUserInfo(res.data);
        navigation.navigate('SignUpStack');
      }
      Toast.show({
        type: 'success',
        text1: 'OTP verified successfully',
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Error verifying OTP',
        text2: 'Please try again.',
      });
    }
  };

  return (
    <CustomHeader>
      <View style={styles.view}>
        <Text
          style={[
            {
              color: theme.ContentPrimary,
            },
            styles.title,
          ]}>
          Confirm your phone
        </Text>
        <Text
          style={[
            {
              color: theme.ContentPrimary,
            },
            styles.head,
          ]}>
          We have sent a 6 digit code to {phoneNo}
        </Text>
        <View style={styles.phone}>
          <TextInput
            value={code}
            onChangeText={setCode}
            maxLength={6}
            placeholder="000000"
            keyboardType="numeric"
            style={[
              {
                color: theme.ContentPrimary,
                backgroundColor: theme.bg,
                borderColor: theme.Border,
              },
              styles.input,
            ]}
          />
        </View>
        <CustomButton
          onPress={() => confirmOtp()}
          title="Verify your number"
          style={[
            code.length !== 6
              ? {backgroundColor: GlobalColors.light.ContentDisabled}
              : {},
            {alignSelf: 'center'},
          ]}
          disabled={code.length !== 6}
          loading={loading}
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
    width: responsiveScreenWidth(35),
    height: responsiveScreenHeight(5),
    borderRadius: 10,
    borderBottomWidth: 1,
    paddingHorizontal: responsiveScreenWidth(3),
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins',
    alignSelf: 'center',
    letterSpacing: 10,
    textAlign: 'center',
  },
});
