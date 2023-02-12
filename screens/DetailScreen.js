import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
// import Sound from "react-native-sound";
import { useState } from "react";
import { useEffect } from "react";
import { Audio } from 'expo-av';






const DetailScreen=({route})=>{
  const {selectedItem} = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackInstance, setPlaybackInstance] = useState(null);


  const loadAudio = async (audioFile) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(audioFile);
      setPlaybackInstance(soundObject);
    } catch (error) {
      console.error(error);
    }
  };

  
  useEffect(() => {
    loadAudio(selectedItem.sound);
  }, []);

  const togglePlayback = async () => {
    if (playbackInstance !== null) {
      if (isPlaying) {
        await playbackInstance.pauseAsync();
      } else {
        await playbackInstance.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };



  return(

    <ImageBackground source={require('../assets/images/BGDetail.jpg')} style={styles.container}>
       
        <Image source={selectedItem.image1} style={styles.imageStyle}/>
        <Text style={styles.textStyle}>{selectedItem.name}</Text>
        <TouchableOpacity style={styles.touchStyle} onPress={togglePlayback}>
        <Text style={styles.textStyle}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
        </ImageBackground>
      

          );
}



export default DetailScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent:'center'
    },
   
    textStyle:{
      fontSize: 20,
      fontWeight:'bold',
      color:'cyan',
      textAlign:'center',
      margin:15,
      padding:2,
      textShadowColor:'yellow',
      textShadowOffset:{
        height:9,
        width:9
      }
      
    },
    imageStyle:{
        height:250,
        width:250,
        margin:10,
        borderRadius:20,
       
      },

      touchStyle:{
        backgroundColor:'black',
        borderRadius:8,
        textAlign:'center',
        margin:15,
        height:60,
        width:150
        


      }
      

  });

