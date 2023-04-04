import React from 'react';
import {View, StyleSheet, SafeAreaView ,Text, ScrollView} from 'react-native';
import Head from '../component/home/head';
import Story from '../component/home/Story';
import Post from '../component/home/Post';
import { Feed } from '../data/Feed';


const Homescreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <View><Head /></View>
            <View>  <Story /> </View>


            <ScrollView> 
                {Feed.map((post , index)=> (

                <Post post={post} key={index}/> 

                ))}
            </ScrollView>
            </View>

        
            
          
          
           

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : "black"
        
    }
})

export default Homescreen;
