import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView, TextInput , Text, Image, TouchableOpacity} from 'react-native';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:" " ,
            password :" "

    }
    
    }
    render() {
        return (
            
                <View style={styles.container}>
                    
                <View style={{alignItems:'center'}} >
                    <Image source={require("../assets/logoig.png")}  style={{ width: 180 , height : 60}}/>
                <View>
                <Text style={styles.text}>Email</Text>
                    <TextInput  style={styles.input} placeholder='Masukan Email '
                    defaultValue={this.state.email}
                    onChangeText={(text=>this.setState({email:text}))}/>
                </View>
                 <View >
                    <Text style={styles.text}>Password</Text>
                    <TextInput  style={styles.input} placeholder='Masukan Password '
                    defaultValue={this.state.password}
                    onChangeText={(text=>this.setState({password:text}))}/>
                </View>

                <View>
                    <Button />
                </View>
               

                </View>
                </View>
        );
    }
}

const Button = ({navigation}) => {
    return(
        <View style={{marginTop:20}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homescreen', {name : "Dyas"})} >
        <Text>SIGN IN</Text>
        </TouchableOpacity>

    </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:"grey"
    },
    input :{
        width : "100%" ,
        backgroundColor: "white",
        borderRadius : 25 ,
        height: 50 ,
        justifyContent: 'center',
        padding: 20,
        marginBottom: 10,


    },
    text : {
        height: 25 ,
        color : "white"


    },

    button:{
       
        height: 50,
        width: "405%",
        justifyContent: "center",
        alignItems:'center',
        borderRadius: 25 ,
        backgroundColor : "white",
        alignSelf :'center',

    }
})

export default Login;
