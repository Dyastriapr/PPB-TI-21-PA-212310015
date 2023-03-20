
import React, { Component } from 'react';
import { View , Text , Image } from 'react-native-web';


function Sepeda() {
    const city = "south west";
    const peoples = [{name :"Dyas" , fams:"Brother"},
                    {name :"pior" , fams:"Sister"},]


    return (
        <View style= {{padding : 10}}>
        <Text>Sepeda</Text>
        <TakeARide peoples={peoples} />
        {Place2Go(city)}
        <View>

        <Text>Sepeda gunung</Text>
        <Image source={{
            uri: "https://trexsporting.com/images/products/11-KbmXViHodZ.jpg"
        }}
        style={{width: 200 , height : 200}}
        />

        </View>

        <View>
            <Text> Sepeda Gunung</Text>
            <Image 
            source={require("../../assets/sepeda.png")}
            style = {{width : 200 , height : 200}}
            />


        </View>

        
    
    </View>
    
    );
}

export default Sepeda;

const TakeARide = ({peoples}) =>{
 return (
    <View>
         <Text>Let's go ridding with us :</Text>
         {peoples.map((v,index)=>(
            
            <View key={index}>
            <Text>{v.name}/ my{v.fams}</Text>
            </View>
         ))}
    </View>
   
 )
  
};

function Place2Go(value) {
    return <Text> We'r going to {value}south west now , come on </Text>;
}


