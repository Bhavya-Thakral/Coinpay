import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
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

const Residence = () => {
  const theme = useColorScheme() || 'light';
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState('🇮🇳');
  const [countryCode, setCountryCode] = useState('India');

  return (
    <CustomHeader>
      <View
        style={{width: responsiveScreenWidth(90), alignSelf: 'center', gap: 5}}>
        <Text
          style={{
            color:
              theme === 'dark'
                ? GlobalColors.dark.ContentPrimary
                : GlobalColors.light.ContentPrimary,
            fontSize: responsiveScreenFontSize(3.5),
          }}>
          Country of residence
        </Text>
        <Text
          style={{
            color:
              theme === 'dark'
                ? GlobalColors.dark.ContentPrimary
                : GlobalColors.light.ContentPrimary,
            fontSize: responsiveScreenFontSize(2),
            lineHeight: 25,
          }}>
          This info need to be accurate with your ID document.
        </Text>
      </View>
      <View style={{gap:responsiveScreenHeight(1)}}>
        <Text
          style={{
            color:
              theme === 'dark'
                ? GlobalColors.dark.ContentPrimary
                : GlobalColors.light.ContentPrimary,
            fontSize: responsiveScreenFontSize(2),
            paddingLeft:responsiveScreenWidth(5)
          }}>Country</Text>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            width: responsiveScreenWidth(90),
            height: responsiveScreenHeight(5),
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor:
              theme === 'dark'
                ? GlobalColors.dark.Border
                : GlobalColors.light.Border,
            alignSelf: 'center',
            flexDirection:'row',
            justifyContent:'space-between'
          }}
          >
          <Text
            style={{
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentPrimary
                  : GlobalColors.light.ContentPrimary,
              fontSize: responsiveScreenFontSize(1.8),
              gap: 8,
            }}>
            {flag}    {countryCode}
          </Text>
          <Icon name="download" color={ theme === 'dark'
                ? GlobalColors.dark.Border
                : GlobalColors.light.Border} size={responsiveScreenFontSize(2)} />
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
              backgroundColor:
                theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
            },
            itemsList: {
              backgroundColor:
                theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
            },
            countryButtonStyles: {
              backgroundColor:
                theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
            },
            countryName: {
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentPrimary
                  : GlobalColors.light.ContentPrimary,
            },
            textInput: {
              backgroundColor:
                theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentPrimary
                  : GlobalColors.light.ContentPrimary,
            },
            searchMessageText: {
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentPrimary
                  : GlobalColors.light.ContentPrimary,
            },
          }}
        />
      </View>
      <CustomButton
        title="Continue"
        onPress={() => Alert.alert('Continue')}
        style={{width: responsiveScreenWidth(90), alignSelf: 'center'}}
      />
    </CustomHeader>
  );
};

export default Residence;

const styles = StyleSheet.create({});
