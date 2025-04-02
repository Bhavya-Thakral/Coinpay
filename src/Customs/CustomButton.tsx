import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GlobalColors} from '../constants/Colors';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  loading?: boolean;
  [key: string]: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  loading,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <ActivityIndicator size={18} color={GlobalColors.light.ContentOnColor} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: responsiveScreenHeight(2.3),
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(90),
    borderRadius: 50,
    backgroundColor: GlobalColors.light.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: GlobalColors.light.ContentOnColor,
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
  },
});
