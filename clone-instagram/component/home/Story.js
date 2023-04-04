import React from 'react';
import {View, StyleSheet , Text , Image} from 'react-native';
import { UsersObj } from '../../data/UserItems';
import { ScrollView } from 'react-native';

const Story = () => {
    return (
        <View style={{marginBottom : 13 , padding : 5}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {UsersObj.map((v, index) => (
                <View key={index}>
                    <Image source={ (v.gender === "M") ? require("../../assets/boy.png") : require("../../assets/girl.jpg")}
                    style={{...styles.img}} />
                    <Text style={{textAlign :'center' , color: 'white'}}>{v.name}</Text>
                

                    </View>
                    ))}
            </ScrollView>
          
        </View>
    );
}

const styles = StyleSheet.create({

    img :{
        width : 80 ,
        height : 80,
        borderWidth : 4 ,
        borderRadius : 50,
        marginLeft : 6,
        borderColor: 'white'
    }

})

export default Story;
