import React, {useEffect, useState} from 'react';
import {Alert, StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {AppProvider} from './src/context/Context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Login/Login';
import NetInfo from '@react-native-community/netinfo';
import OnBoarding from './src/Components/OnBoarding/OnBoarding';
import Register from './src/Components/Register/Register';
import {GlobalColors} from './src/constants/Colors';
import CreateAccount from './src/Components/SignUp/CreateAccount';
import ConfirmOtp from './src/Components/SignUp/ConfirmOtp';
import Residence from './src/Components/SignUp/accountSetup/Residence';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isConnected, setIsConnected] = useState(true); // Track connection status

  useEffect(() => {
    // Hide splash screen after a delay
    const splashTimeout = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      if (!state.isConnected && isConnected) {
        setIsConnected(false);
        Alert.alert('No internet connection');
      } else if (state.isConnected && !isConnected) {
        setIsConnected(true);
        Alert.alert('Connected to the internet');
      }
    });

    // Cleanup
    return () => {
      clearTimeout(splashTimeout);
      unsubscribe();
    };
  }, [isConnected]); // Re-run effect when connection status changes

  const backgroundStyle = {
    backgroundColor: isDarkMode ? GlobalColors.dark.bg : GlobalColors.light.bg,
  };

  const SignUpStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Residence"
        screenOptions={{
          headerStyle: {backgroundColor: backgroundStyle.backgroundColor},
        }}>
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ConfirmOtp"
          component={ConfirmOtp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Residence"
          component={Residence}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <AppProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignUpStack"
          screenOptions={{
            headerStyle: {backgroundColor: backgroundStyle.backgroundColor},
          }}>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name="SignUpStack"
            component={SignUpStack}
            options={{
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
