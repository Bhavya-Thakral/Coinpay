import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import CustomWindow from '../../Customs/CustomWindow';
import cardLight from './assets/cardLight.png';
import cardDark from './assets/cardDark.png';
import {useTheme} from '../../context/ThemeContext';
import {
    responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import CustomButton from '../../Customs/CustomButton';

const AddCard = ({navigation}) => {
  const imgTheme = useColorScheme();
  const theme = useTheme();

  const navDetails = ()=>{
    navigation.navigate('CardDetails');
  }

  return (
    <CustomWindow>
      <Image
        source={imgTheme === 'dark' ? cardDark : cardLight}
        style={styles.img}
      />
       <View
        style={{
          width: responsiveScreenWidth(90),
          flex: 1,
          alignSelf: 'center',
          gap: 10,
        }}>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(4),
            textAlign: 'center',
          }}>
          Let's add your card
        </Text>
        <Text
          style={{
            color: theme.ContentPrimary,
            fontSize: responsiveScreenFontSize(1.9),
            lineHeight: 25,
            textAlign: 'center',
          }}>
          Experience the power of financial organization with our platform.
        </Text>
      </View>
      <CustomButton
        title="+  Add your card"
        onPress={navDetails}
        style={{
          alignSelf: 'center',
        }}
      />
    </CustomWindow>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  img: {
    width: responsiveScreenWidth(100),
    alignSelf: 'center',
    height: responsiveScreenHeight(40),
  },
});
