import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardTypeOptions,
} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

interface CustomTextInputProps {
  placeholderText: string;
  keyboardType: KeyboardTypeOptions;
  maxLength: number;
  onChangeText: (text: string | number | any) => void;
  value: any;
  multiline?: boolean;
  secureTextEntry?:boolean
  style?:{}
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholderText,
  keyboardType,
  maxLength,
  onChangeText,
  value,
  multiline = false,
  secureTextEntry = false,
  style
}) => {
  const theme = useTheme();
  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: theme.Border,
          color: theme.ContentPrimary,
        },
        style
      ]}
      placeholder={placeholderText}
      placeholderTextColor={theme.ContentDisabled}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(5),
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: responsiveScreenWidth(3),
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins',
  },
});
