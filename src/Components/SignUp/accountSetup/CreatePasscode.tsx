import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomScreen from '../CustomScreen';
import {GlobalColors} from '../../../constants/Colors';
import CustomTextInput from '../../../Customs/CustomTextInput';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';

const CreatePasscode = ({navigation}) => {
  const [code, setCode] = useState('');

  const setcode = () => {
    navigation.navigate('Welcome');
  };

  return (
    <CustomScreen
      head="Create Passcode"
      onPress={setcode}
      title="Create"
      style={[
        code.length !== 4
          ? {backgroundColor: GlobalColors.light.ContentDisabled}
          : {},
        {alignSelf: 'center'},
      ]}
      disabled={code.length !== 4}
      headerStyle={{
        width: responsiveScreenWidth(50),
      }}>
      <CustomTextInput
        keyboardType="number-pad"
        maxLength={4}
        onChangeText={setCode}
        placeholderText={'0000'}
        value={code}
        secureTextEntry={true}
        style={{
          width: responsiveScreenWidth(30),
          alignSelf: 'center',
          letterSpacing: responsiveScreenWidth(4),
        }}
      />
    </CustomScreen>
  );
};

export default CreatePasscode;

const styles = StyleSheet.create({});
