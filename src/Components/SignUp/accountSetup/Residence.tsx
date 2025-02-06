import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../CustomHeader';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {GlobalColors} from '../../../constants/Colors';
import {CountryPicker} from 'react-native-country-codes-picker';
import CustomButton from '../../../Customs/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '../../../context/ThemeContext';
import {useFinTech} from '../../../context/Context';

const Residence = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState('🇮🇳');
  const [countryCode, setCountryCode] = useState('India');
  const theme = useTheme();
  const {setcountry} = useFinTech();

  const onContinue = () => {
    setcountry(countryCode);
    navigation.navigate('PersonalInfo');
  };

  return (
    <CustomHeader>
      <View
        style={{width: responsiveScreenWidth(90), alignSelf: 'center', gap: 5}}>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(3.5),
          }}>
          Country of residence
        </Text>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(2),
            lineHeight: 25,
          }}>
          This info need to be accurate with your ID document.
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{gap: responsiveScreenHeight(1)}}>
          <Text
            style={{
              color: theme.ContentPrimary,
              fontSize: responsiveScreenFontSize(2),
              paddingLeft: responsiveScreenWidth(5),
            }}>
            Country
          </Text>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              width: responsiveScreenWidth(90),
              height: responsiveScreenHeight(5),
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              borderColor: theme.Border,

              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: responsiveScreenWidth(4),
              paddingRight: responsiveScreenWidth(4),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: theme.ContentPrimary,
                fontSize: responsiveScreenFontSize(1.8),
                gap: 8,
              }}>
              {flag} {countryCode}
            </Text>
            <Icon
              name="chevron-down"
              color={theme.Border}
              size={responsiveScreenFontSize(2)}
            />
          </TouchableOpacity>
          <CountryPicker
            lang="en"
            show={show}
            pickerButtonOnPress={item => {
              setFlag(item.flag);
              setCountryCode(item.name.en);
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
          title="Continue"
          onPress={onContinue}
          style={{
            width: responsiveScreenWidth(90),
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    </CustomHeader>
  );
};

export default Residence;

const styles = StyleSheet.create({});
