import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../CustomHeader';
import CustomScreen from '../CustomScreen';
import {useTheme} from '../../../context/ThemeContext';
import CustomTextInput from '../../../Customs/CustomTextInput';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {GlobalColors} from '../../../constants/Colors';
import {useFinTech} from '../../../context/Context';

const PersonalInfo = ({navigation}) => {
  const theme = useTheme();

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [dob, setDob] = useState('');

  const {userForm, setUserForm} = useFinTech();

  const handleDobChange = (text: string) => {
    // Remove non-numeric characters
    const cleaned = text.replace(/\D/g, '');

    // Format the DOB as MM/DD/YYYY
    let formatted = cleaned;
    if (cleaned.length > 2 && cleaned.length <= 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    } else if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(
        2,
        4,
      )}/${cleaned.slice(4, 8)}`;
    }

    setDob(formatted);
  };

  const setUser = () => {
    setUserForm({
      name: fullName,
      userName: userName,
      dob: dob,
    });
    navigation.navigate('Email');
  };

  return (
    <CustomScreen
      head="Add your personal info"
      onPress={setUser}
      title="Continue"
      style={[
        fullName.length === 0 || userName.length === 0 || dob.length === 0
          ? {backgroundColor: GlobalColors.light.ContentDisabled}
          : {},
        {alignSelf: 'center'},
      ]}
      disabled={
        fullName.length === 0 || userName.length === 0 || dob.length === 0
      }>
      <View style={{gap: responsiveFontSize(1)}}>
        <View style={{gap: responsiveFontSize(1)}}>
          <Text style={{color: theme.ContentPrimary}}> Full Name</Text>
          <CustomTextInput
            keyboardType="default"
            maxLength={50}
            onChangeText={setFullName}
            placeholderText="Bhavya Thakral"
            value={fullName}
          />
        </View>
        <View style={{gap: responsiveFontSize(1)}}>
          <Text style={{color: theme.ContentPrimary}}> Username</Text>
          <CustomTextInput
            keyboardType="default"
            maxLength={50}
            onChangeText={setUserName}
            placeholderText="the_augustGirl_"
            value={userName}
          />
        </View>
        <View style={{gap: responsiveFontSize(1)}}>
          <Text style={{color: theme.ContentPrimary}}>Date of Birth</Text>
          <CustomTextInput
            keyboardType="number-pad"
            maxLength={50}
            onChangeText={handleDobChange}
            placeholderText={'MM/DD/YYYY'}
            value={dob}
          />
        </View>
      </View>
    </CustomScreen>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({});
