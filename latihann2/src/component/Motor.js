
import React, { Component } from 'react';
import { View , Text } from 'react-native-web';


var name = "Honda";
const Motor = () => {
    return (
        <View>
            <Text> Iam Motor</Text>
            <Text> Merek : {name}</Text> 
            <Text> Type : {types.type}</Text>
            <Text> Model : {types.model}</Text>

        </View>
    );
}

export default Motor;

const types = {type : "Matic" , model : "Vario"};