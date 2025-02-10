import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from './CustomHeader';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useTheme} from '../../context/ThemeContext';
import CustomButton from '../../Customs/CustomButton';

interface CustomScreenProps {
  head: string;
  subHead?: string;
  children: any;
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  style?: {};
  textStyle?: {};
  headerStyle?:{}
}

const CustomScreen: React.FC<CustomScreenProps> = ({
  head,
  subHead,
  children,
  onPress,
  title,
  disabled,
  loading,
  style,
  textStyle,
  headerStyle
}) => {
  const theme = useTheme();

  return (
    <CustomHeader style={headerStyle}>
      <View
        style={{width: responsiveScreenWidth(90), alignSelf: 'center', gap: 5}}>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(3.5),
          }}>
          {head}
        </Text>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(2),
            lineHeight: 25,
          }}>
          {subHead || 'This info need to be accurate with your ID document.'}
        </Text>
      </View>
      <View style={{flex: 1,width:responsiveScreenWidth(90),alignSelf:'center'}}>{children}</View>

      <CustomButton
        onPress={onPress}
        title={title}
        disabled={disabled}
        loading={loading}
        style={style}
        textStyle={textStyle}
      />
    </CustomHeader>
  );
};

export default CustomScreen;

const styles = StyleSheet.create({});
