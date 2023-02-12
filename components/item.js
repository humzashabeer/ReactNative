import React from "react";
import {TouchableOpacity,Text,Image, StyleSheet, View, ImageBackground} from 'react-native';

const Item = ({name, image, image1, sound, id, onPress}) => (
  <ImageBackground source={require('../assets/images/BGHome.jpg')} style={styles.container}>
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.listStyle}>
       <Image source={image} style={styles.imageStyle}/>
      <Text style={styles.nameStyle}>{name}</Text>
      <Text>{sound}</Text>
      </View>
      
     
    </TouchableOpacity></ImageBackground>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
    },
    item: {
        borderRadius: 8,
        justifyContent:'space-between',
        alignItems:'center',
        
      },
    nameStyle:{
      fontSize: 25,
      fontWeight:'bold',
      color:'black',
      textAlign:'center',
      margin:15
      
    },
    imageStyle:{
        height:150,
        width:150,
        marginTop:10,
        borderRadius:20,
       
      },
      listStyle:{
        borderRadius:12,
        borderColor:'black',
        borderWidth:3,
        height:300,
        width:300,
        marginTop:10,
        backgroundColor:'cyan',
        justifyContent:'center',
        alignItems:'center'
      }

  });
  export default Item;

