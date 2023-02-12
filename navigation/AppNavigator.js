import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator=()=> {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Splash">

          <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}} />
          <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name='Details' component={DetailScreen}/>

      </Stack.Navigator>


    </NavigationContainer>
  );
}

export default AppNavigator;
