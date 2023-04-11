import React from 'react';
import {View, StyleSheet , Text , Image, TouchableOpacity} from 'react-native';
import { UsersObj } from '../../data/UserItems';
import { ScrollView } from 'react-native';

const ExpScrollView = () => {
    return (


        <View style={{marginBottom : 13 , padding : 10 , flexDirection: "row", justifyContent :'space-between', alignItems: 'center'}}>
           
        <View style={{flexDirection: "row" , alignItems: 'center', justifyContent :'flex-start'}}>
        <ScrollView>

      
        {UsersObj.map((v, index) => (
        <View style={{ flexDirection:'row', alignItems:'center' , padding : 10}} key={index}>
        <Image source={ (v.gender === "M") ? require("../../assets/boy.png") : require("../../assets/girl.jpg")}
        style={{...styles.img}} />
        <Text style={{color: 'white'}}>{v.name}</Text>
   

      
       


        
        </View>
        ))}
         </ScrollView>
       

        </View>
       
    </View>
   
    );
}

const styles = StyleSheet.create({

    img :{
        width : 70 ,
        height : 70,
        borderWidth : 4 ,
        borderRadius : 50,
        marginRight:15 ,
        borderColor: 'white'
    }

})

export default ExpScrollView;
