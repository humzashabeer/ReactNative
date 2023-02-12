import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
      (async () => {
        // await SplashScreen.preventAutoHideAsync();
      })();
  
      setTimeout(() => {
        navigation.navigate('Welcome');
      }, 7000);
    }, []);
  
    return (
      <ImageBackground source={require('../assets/images/BGSplash.jpg')} style={styles.container}>
        <Text style={styles.textStyle}>Loading......</Text>
        <Text style={styles.textStyle}>App By @HumzaShabeer</Text>
        <Image
          source={require('../assets/images/MpIcon.png')}
          style={styles.image}
        />
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'pink'
    },
    image: {
      width: '60%',
      height: '50%',
      margin:8
    },

    textStyle:{margin:15,
       fontSize:25,
       fontWeight:'bold',
      color:'red' }
  });

  export default SplashScreen;