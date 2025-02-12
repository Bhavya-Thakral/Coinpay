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
import {ThemeProvider} from './src/context/ThemeContext';
import PersonalInfo from './src/Components/SignUp/accountSetup/PersonalInfo';
import Email from './src/Components/SignUp/accountSetup/Email';
import Address from './src/Components/SignUp/accountSetup/Address';
import CreatePasscode from './src/Components/SignUp/accountSetup/CreatePasscode';
import Welcome from './src/Components/Welcome/Welcome';
import Home from './src/Components/Home/Home';
import AddCard from './src/Components/AddCard/AddCard';
import CardDetals from './src/Components/AddCard/CardDetals';
import List from './src/Components/AddCard/List';
import VerifyCard from './src/Components/AddCard/VerifyCard';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const theme = useColorScheme();
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
    backgroundColor:
      theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
  };

  const SignUpStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Residence"
        screenOptions={{
          headerStyle: {backgroundColor: backgroundStyle.backgroundColor},
        }}>
        <Stack.Screen
          name="Residence"
          component={Residence}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePasscode"
          component={CreatePasscode}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  const CardStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{
          headerStyle: {backgroundColor: backgroundStyle.backgroundColor},
        }}>
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: '',
            headerTintColor: theme === 'dark' ? 'white' : 'black',
          }}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetals}
          options={{
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: '',
            headerTintColor: theme === 'dark' ? 'white' : 'black',
          }}
        />
        <Stack.Screen
          name="VerifyCard"
          component={VerifyCard}
          options={{
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: '',
            headerTintColor: theme === 'dark' ? 'white' : 'black',
          }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: '',
            headerTintColor: theme === 'dark' ? 'white' : 'black',
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <AppProvider>
      <ThemeProvider>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="CardStack"
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
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerBackButtonDisplayMode: 'minimal',
                headerTitle: '',
                headerTintColor: theme === 'dark' ? 'white' : 'black',
              }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUpStack"
              component={SignUpStack}
              options={{
                headerBackButtonDisplayMode: 'minimal',
                headerTitle: '',
                headerTintColor: theme === 'dark' ? 'white' : 'black',
              }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerBackButtonDisplayMode: 'minimal',
                headerTitle: '',
                headerTintColor: theme === 'dark' ? 'white' : 'black',
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerBackButtonDisplayMode: 'minimal',
                headerTitle: '',
                headerTintColor: theme === 'dark' ? 'white' : 'black',
              }}
            />
            <Stack.Screen
              name="ConfirmOtp"
              component={ConfirmOtp}
              options={{
                headerBackButtonDisplayMode: 'minimal',
                headerTitle: '',
                headerTintColor: theme === 'dark' ? 'white' : 'black',
              }}
            />

            <Stack.Screen
              name="CardStack"
              component={CardStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: '',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
