import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import No1 from './No1';

class No2 extends Component {
    render() {
        return (
            <View style={{flex : 1 , alignItems : 'center', justifyContent: 'center'}}>

            <No1 />


            </View>
          
        );
    }
}

export default No2;
