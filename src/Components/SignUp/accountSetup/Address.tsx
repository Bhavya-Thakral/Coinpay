import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomScreen from '../CustomScreen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../Customs/CustomTextInput';
import {useTheme} from '../../../context/ThemeContext';
import {GlobalColors} from '../../../constants/Colors';
import {useFinTech} from '../../../context/Context';

const Address = ({navigation}) => {
  const theme = useTheme();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const {setaddress} = useFinTech();

  const setAdd = () => {
    setaddress({
      line: address,
      city: city,
      postcode: postcode,
    });
    navigation.navigate('CreatePasscode');
  };
  return (
    <CustomScreen
      head="Home Address"
      title="Continue"
      onPress={setAdd}
      style={[
        address.length === 0 || city.length === 0 || postcode.length === 0
          ? {backgroundColor: GlobalColors.light.ContentDisabled}
          : {},
        {alignSelf: 'center'},
      ]}
      disabled={
        address.length === 0 || city.length === 0 || postcode.length !== 6
      }>
      <View style={{gap: responsiveFontSize(1)}}>
        <View style={{gap: responsiveFontSize(1)}}>
          <Text style={{color: theme.ContentPrimary}}>Address Line</Text>
          <CustomTextInput
            keyboardType="default"
            maxLength={100}
            onChangeText={setAddress}
            placeholderText="Near Geeta Mandir, Kamla Colony"
            value={address}
            multiline={true}
          />
        </View>
        <View style={{gap: responsiveFontSize(1)}}>
          <Text style={{color: theme.ContentPrimary}}>City</Text>
          <CustomTextInput
            keyboardType="default"
            maxLength={50}
            onChangeText={setCity}
            placeholderText="Bikaner"
            value={city}
          />
        </View>
        <View style={{gap: responsiveFontSize(1)}}>
          <Text style={{color: theme.ContentPrimary}}>Postcode</Text>
          <CustomTextInput
            keyboardType="number-pad"
            maxLength={6}
            onChangeText={setPostcode}
            placeholderText={'XXXXXXX'}
            value={postcode}
          />
        </View>
      </View>
    </CustomScreen>
  );
};

export default Address;

const styles = StyleSheet.create({});
