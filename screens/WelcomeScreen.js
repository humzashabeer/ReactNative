import { Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";


const WelcomeScreen=({navigation})=>{

    const goToHome=()=>{
        navigation.navigate('Home');
    }
    return(
        <ImageBackground style={styles.container} source={require('../assets/images/bGimage.jpg')}>

        
           
            <Text style={styles.textStyle}>Welcome To Music Player App</Text>
            <Text style={styles.textStyle}>Final Task By @HumzaShabeer</Text>
            <Text style={styles.textStyle} >Readiness Program By @PSEB @Techlift @DevSpot</Text>
            <Image style={styles.imageStyle} source={require('../assets/images/Humza.jpeg')}></Image>
            <TouchableOpacity style={styles.touchStyle} onPress={goToHome}>
                <Text style={styles.textStyle}>Let's Start</Text>
                </TouchableOpacity>
            
        </ImageBackground>



    );
}

export default WelcomeScreen;

const styles= StyleSheet.create({


    container:{
        flex:1,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center'
    },

    viewStyle:{

        
    },

    imageStyle:{
        height:350,
        width:200,
        borderBottomRightRadius:45,
        borderTopLeftRadius:45,
        borderWidth:6,
        borderColor:'red',
        margin:8,
        
    },

    textStyle:{
        fontSize:25,
        color:'white',
        textShadowColor:'red',
        textShadowOffset:{
            height:9,
            width:9
        },
        margin:8
    },

    touchStyle:{
        backgroundColor:'gray',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        height:60,
        width:200
        


      }
      
})