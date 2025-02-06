import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {GlobalColors} from '../../constants/Colors';
import CustomButton from '../../Customs/CustomButton';

import ReceiveMoneyDark from './assets/ReceiveMoneyDark.png';
import ReceiveMoneyLight from './assets/ReceiveMoneyLight.png';
import SendMoneyDark from './assets/SendMoneyDark.png';
import SendMoneyLight from './assets/SendMoneyLight.png';
import TrustDark from './assets/TrustDark.png';
import TrustLight from './assets/TrustLight.png';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useTheme } from '../../context/ThemeContext';

const {width} = Dimensions.get('window');

const images = [
  {
    id: '0',
    uriDark: TrustDark,
    uriLight: TrustLight,
    text: 'Trusted by millions of people, part of one part',
  },
  {
    id: '1',
    uriDark: SendMoneyDark,
    uriLight: SendMoneyLight,
    text: 'Spend money abroad, and track your expense',
  },
  {
    id: '2',
    uriDark: ReceiveMoneyDark,
    uriLight: ReceiveMoneyLight,
    text: 'Receive Money From Anywhere In The World',
  },
];

const OnBoarding = ({navigation}) => {
  const [index, setIndex] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const theme = useTheme();
  const imgTheme= useColorScheme()

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const finalIndex = Math.floor(contentOffsetX / width);
    setIndex(finalIndex);
  };

  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor:
          theme.bg,
      }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{
            width: responsiveScreenWidth(95),
            height: responsiveScreenHeight(50),
          }}>
          {images.map(image => (
            <View
              key={image.id}
              style={{
                width: width - 20,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 30,
              }}>
              <Image
                source={imgTheme === 'dark' ? image.uriDark : image.uriLight}
                style={{
                  width: responsiveScreenWidth(100),
                  height: responsiveScreenHeight(35),
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
              <View style={{marginTop: responsiveScreenWidth(2)}}>
                <AnimatedDotsCarousel
                  length={images.length}
                  scrollableDotsConfig={{
                    setIndex,
                    onNewIndex: newIndex => {
                      scrollViewRef?.current?.scrollTo?.({
                        x: newIndex * width,
                        animated: false,
                      });
                    },
                    containerBackgroundColor: 'rgba(230,230,230, 0.5)',
                    container: {
                      alignItems: 'center',
                      borderRadius: 15,
                      height: 30,
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                    },
                  }}
                  currentIndex={index}
                  maxIndicators={4}
                  interpolateOpacityAndColor={true}
                  activeIndicatorConfig={{
                    color: GlobalColors.light.primaryColor,
                    margin: 3,
                    opacity: 1,
                    size: 12,
                  }}
                  inactiveIndicatorConfig={{
                    color: GlobalColors.light.ContentDisabled,
                    margin: 3,
                    opacity: 0.5,
                    size: 8,
                  }}
                  decreasingDots={[
                    {
                      config: {
                        color: 'white',
                        margin: 3,
                        opacity: 0.5,
                        size: 9,
                      },
                      quantity: 1,
                    },
                    {
                      config: {
                        color: 'white',
                        margin: 3,
                        opacity: 0.5,
                        size: 4,
                      },
                      quantity: 1,
                    },
                  ]}
                />
              </View>
              <Text
                style={{
                  color:
                    theme.ContentPrimary,
                  fontSize: responsiveScreenFontSize(5),
                  margin: 8,
                  textAlign: 'center',
                  lineHeight: 40,
                  fontWeight: 'semibold',
                  letterSpacing: 0,
                }}>
                {image.text}
              </Text>
            </View>
          ))}
        </ScrollView>
        <CustomButton title="Next" onPress={() => navigateRegister()} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    marginVertical: 20,
  },
});
