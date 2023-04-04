import React from 'react';
import {View, StyleSheet, Text , Image, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Post = ({post}) => {
    return (
        <View style={{marginBottom : 30}}>
            <Divider width={1} orientation='vertical' color='white'/>
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter post={post} />
            <PostCaption post={post} />
            
        </View>
    );
}

const PostHeader = ({post}) => (

    <View  style={{flexDirection: 'row' , alignItems :'center' , justifyContent :'space-between'}}>


        <View style={{flexDirection : 'row' , alignItems:'center'}}>
        <Image source={ (post.gender === "M") ? require("../../assets/boy.png") : require("../../assets/girl.jpg")}
                    style={{...styles.img}} />
        
        <Text style={{marginLeft: 5 , fontWeight : '700', color : 'white'}}>{post.user}</Text>

        </View>
        <Text style={{fontWeight:'900' , paddingRight : 10, color : 'white', alignItems :'center'}}>...</Text>
         
    </View>

)

const PostImage = ({post}) => (

    <View style={{width : '100%' , height : 450}}>


   
    <Image source={{uri: post.imageUrl }} style={{height: '100%' ,resizeMode :  'cover'}}/>
    </View>

)

const PostFooter =({post}) => (

    <TouchableOpacity>

        <View style={{flexDirection:'row', padding: 8}}>
        <View style={styles.iconsContainerleft}>
         <FontAwesome5 name={'heart'} size={25} color={'white'} style={styles.icon}/>
         <FontAwesome5 name={'comment'} size={25} color={'white'}  style={styles.icon}/>
         <FontAwesome5 name={'paper-plane'} size={25} color={'white'}  style={styles.icon}/>
        </View>
         <View style={{flex: 1 , alignItems :'flex-end'}}>
            <FontAwesome5 name={'bookmark'} size={25} color={'white'} style={styles.icon}/>
      </View>
        </View>

    </TouchableOpacity>

)

const PostCaption =({post}) => (

    <View style={{marginTop: 3, paddingLeft :15}}>
         <Text style={{color : 'white'}}>
         <Text style={{fontWeight:'700'}}>{post.user}</Text>
         <Text> {post.caption}</Text>
    </Text>

    </View>
   



    )

const styles = StyleSheet.create({

    img :{
        width : 40 ,
        height : 40,
        borderWidth : 2 ,
        borderRadius : 50,
        marginLeft : 6
    },
    iconsContainerleft :{
        flexDirection : 'row' ,
        width : '40%',
        justifyContent : 'flex-start'
       
    },
    icon : { 
        marginLeft : 5 ,
        width : 30,
        height : 30 ,
        


    }
})

export default Post;
