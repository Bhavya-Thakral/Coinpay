import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomScreen from '../CustomScreen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../Customs/CustomTextInput';
import {GlobalColors} from '../../../constants/Colors';
import {useTheme} from '../../../context/ThemeContext';
import {useFinTech} from '../../../context/Context';

const Email = ({navigation}) => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const {setemail} = useFinTech();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setUser = () => {
    setemail(email);
    navigation.navigate('Welcome');
  };

  return (
    <CustomScreen
      head="Add your personal info"
      onPress={setUser}
      title="Continue"
      style={[
        email.length === 0 && emailRegex.test(email) ? {backgroundColor: GlobalColors.light.ContentDisabled} : {},
        {alignSelf: 'center'},
      ]}
      disabled={email.length === 0}>
      <View style={{gap: responsiveFontSize(1)}}>
        <View style={{gap: responsiveFontSize(1)}}>
          <Text style={{color: theme.ContentPrimary}}>Email</Text>
          <CustomTextInput
            keyboardType="email-address"
            maxLength={50}
            onChangeText={setEmail}
            placeholderText="bhavyathakral.btt@gmail.com"
            value={email}
          />
        </View>
      </View>
    </CustomScreen>
  );
};

export default Email;

const styles = StyleSheet.create({});
