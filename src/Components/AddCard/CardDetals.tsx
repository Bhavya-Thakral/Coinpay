import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomWindow from '../../Customs/CustomWindow';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useTheme} from '../../context/ThemeContext';
import CustomTextInput from '../../Customs/CustomTextInput';
import CustomButton from '../../Customs/CustomButton';
import {GlobalColors} from '../../constants/Colors';
import { useFinTech } from '../../context/Context';

const CardDetals = ({navigation}) => {
  const theme = useTheme();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const {setCardPhoneNo,setCardDetails}=useFinTech()

  const handleCardChange = (text: string) => {
    const cleared = text.replace(/\D/g, '');

    let formatted = cleared;
    if (cleared.length > 4 && cleared.length <= 8) {
      formatted = `${cleared.slice(0, 4)} ${cleared.slice(4)}`;
    } else if (cleared.length > 8 && cleared.length <= 12) {
      formatted = `${cleared.slice(0, 4)} ${cleared.slice(
        4,
        8,
      )} ${cleared.slice(8)}`;
    } else if (cleared.length > 12 && cleared.length <= 16) {
      formatted = `${cleared.slice(0, 4)} ${cleared.slice(
        4,
        8,
      )} ${cleared.slice(8, 12)} ${cleared.slice(12)}`;
    }
    setCardNumber(formatted);
  };

  const handleExpiryDate = (text: string) => {
    let cleared = text.replace(/\D/g, '');

    let formatted = cleared;
    if (cleared.length > 2 && cleared.length <= 4) {
      formatted = `${cleared.slice(0, 2)}/${cleared.slice(2)}`;
    }

    setExpiryDate(formatted);
  };

  const navList = ()=>{
    setCardPhoneNo(email);
    setCardDetails({
          cardNumber:'',
          expiry:'',
          cvv:''
        
    })
    navigation.navigate('VerifyCard')
  }

  return (
    <CustomWindow>
      <View
        style={{
          width: responsiveScreenWidth(90),
          alignSelf: 'center',
          gap: 10,
        }}>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(4),
          }}>
          Add card
        </Text>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(1.9),
            lineHeight: 25,
          }}>
          Enter your credit card info into the box below.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: responsiveScreenWidth(90),
          alignSelf: 'center',
          gap: 10,
        }}>
        <View
          style={{
            gap: 5,
          }}>
          <Text
            style={[
              styles.phoneHead,
              {
                color: theme.ContentPrimary,
              },
            ]}>
            Account Holder Name
          </Text>
          <CustomTextInput
            keyboardType="default"
            maxLength={50}
            onChangeText={setFullName}
            placeholderText="Bhavya Thakral"
            value={fullName}
          />
        </View>
        <View
          style={{
            gap: 5,
          }}>
          <Text
            style={[
              styles.phoneHead,
              {
                color: theme.ContentPrimary,
              },
            ]}>
            Phone no.
          </Text>
          <CustomTextInput
            keyboardType="numeric"
            maxLength={10}
            onChangeText={setEmail}
            placeholderText="XXXXXXXXXX"
            value={email}
          />
        </View>
        <View
          style={{
            gap: 5,
          }}>
          <Text
            style={[
              styles.phoneHead,
              {
                color: theme.ContentPrimary,
              },
            ]}>
            Card Number
          </Text>
          <CustomTextInput
            keyboardType="number-pad"
            maxLength={19}
            onChangeText={handleCardChange}
            placeholderText="1234 5678 9101 2345"
            value={cardNumber}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              gap: 5,
            }}>
            <Text
              style={[
                styles.phoneHead,
                {
                  color: theme.ContentPrimary,
                },
              ]}>
              Expiry Date
            </Text>
            <CustomTextInput
              keyboardType="number-pad"
              maxLength={5}
              onChangeText={handleExpiryDate}
              placeholderText="08/28"
              value={expiryDate}
              style={{
                width: responsiveScreenWidth(40),
              }}
            />
          </View>
          <View
            style={{
              gap: 5,
            }}>
            <Text
              style={[
                styles.phoneHead,
                {
                  color: theme.ContentPrimary,
                },
              ]}>
              CVV/CVC
            </Text>
            <CustomTextInput
              keyboardType="number-pad"
              maxLength={3}
              onChangeText={setCvv}
              placeholderText="000"
              value={cvv}
              style={{
                width: responsiveScreenWidth(40),
              }}
            />
          </View>
        </View>
      </View>
      <CustomButton
        title="Add card"
        onPress={navList}
        style={[
          fullName.length === 0 ||
          email.length !== 10 ||
          cardNumber.length !== 19 ||
          expiryDate.length !== 5 ||
          cvv.length !== 3
            ? {backgroundColor: GlobalColors.light.ContentDisabled}
            : {},
          {alignSelf: 'center'},
        ]}
        disabled={
          fullName.length === 0 ||
          email.length !== 10 ||
          cardNumber.length !== 19 ||
          expiryDate.length !== 5 ||
          cvv.length !== 3
        }
      />
    </CustomWindow>
  );
};

export default CardDetals;

const styles = StyleSheet.create({
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
