import {
  Modal,
  StyleSheet,
  Image,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import cross from './assets/cross.png';
import modalDark from './assets/ModalDark.png';
import modalLight from './assets/ModalLight.png';
import {GlobalColors} from '../../constants/Colors';
import CustomButton from '../../Customs/CustomButton';

interface CustomModalProps {
  visible: boolean;
  phone: string;
  theme: string;
  code: string;
  setModalVisible: (visible: boolean) => void;
  navOtp: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  phone,
  theme,
  code,
  setModalVisible,
  navOtp,
}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View
        style={[
          styles.centeredView,
          {
            backgroundColor:
              theme === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
          },
        ]}>
        <View
          style={[
            styles.modalView,
            {
              backgroundColor:
                theme === 'dark'
                  ? GlobalColors.light.ContentPrimary
                  : GlobalColors.light.bg,
            },
          ]}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              alignSelf: 'flex-end',
            }}>
            <Image
              source={cross}
              style={{
                alignSelf: 'flex-end',
                marginTop: 30,
                marginRight: 30,
              }}
            />
          </TouchableOpacity>
          <Image
            source={theme === 'dark' ? modalDark : modalLight}
            style={{alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: responsiveScreenHeight(2.7),
              textAlign: 'center',
              marginHorizontal: responsiveScreenWidth(6),
              marginTop: 20,
              fontFamily: 'Poppins-Bold',
              color:
                theme === 'dark'
                  ? GlobalColors.light.ContentSecondary
                  : GlobalColors.light.ContentSecondary,
            }}>
            Verify your mobile number before we send code
          </Text>
          <Text
            style={{
              fontSize: responsiveScreenHeight(1.5),
              textAlign: 'center',
              margin: responsiveScreenWidth(6),
              marginTop: 5,
              fontFamily: 'Poppins-Regular',
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentDisabled
                  : GlobalColors.light.ContentDisabled,
            }}>
            Is this correct?{' '}
            <Text style={{fontWeight: '800'}}>
              {code} {phone}
            </Text>
          </Text>
          <CustomButton
            title="Yes"
            onPress={navOtp}
            style={{
              marginBottom: 0,
            }}
          />
          <CustomButton
            title="No"
            onPress={() => setModalVisible(false)}
            style={{
              marginTop: 5,
              backgroundColor:
                theme === 'dark'
                  ? GlobalColors.dark.ContentSecondary
                  : GlobalColors.light.bg,
              borderColor:
                theme === 'dark'
                  ? GlobalColors.dark.BorderAccent
                  : GlobalColors.light.primaryColor,
              borderWidth: 1,
            }}
            textStyle={{
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentAccent
                  : GlobalColors.light.primaryColor,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: GlobalColors.light.primaryColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 8,
    width: responsiveScreenWidth(93),
    height: responsiveScreenHeight(60),
  },
});

export default CustomModal;
