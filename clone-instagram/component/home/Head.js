import React from 'react';
import {View, StyleSheet , Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Head = () => {
    return (
        
        <View style={styles.container}>

            <View>
            <Image
           style={{ width: 150 , height : 50 , padding : 20}}  
              source={require('../../assets/logoig.png')} />
              </View>
         

            <View style={styles.iconsContainer}>
            <FontAwesome5 name={'heart'} size={25} color={'white'} style={styles.icon}/>
            <FontAwesome5 name={'paper-plane'} size={25} color={'white'}  style={styles.icon}/>
            </View>

         </View> 
      
    );
}

const styles = StyleSheet.create({

    container : {
    backgroundColor : 'black',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
        

    },

    iconsContainer :{
        flexDirection : 'row' ,
        resizeMode : 'contain'
    },
    icon : { 
        marginLeft : 10 ,
        width : 30,
        height : 30 ,
        marginLeft : 10 ,
        resizeMode : 'contain'


    }
    



})

export default Head;

