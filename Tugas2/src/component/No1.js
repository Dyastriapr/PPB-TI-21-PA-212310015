import React from 'react';
import { View ,Text, Image , StyleSheet, SafeAreaView} from 'react-native';


const No1 = () => {
    return (



        <SafeAreaView>

        <View style={styles.container} >
        <Text style={styles.text}>History of Bicycle</Text>
        <Text style={styles.paragraph}>A b, also called a
            <Text style={[styles.paragraph, { color: 'red' }]}> pedal cycle</Text>,
            <Text style={[styles.paragraph, { fontWeight: 'bold' }]}> bike</Text>,
            <Text style={[styles.paragraph, { fontStyle: 'italic' }]}>push-bike, or cycle</Text>,
            is a human-powered or motor-powered assisted, single-track vehicle having two wheels attached to a frame ,one behind the other.A bicycle rider is called a cyclist. or bicyclist</Text>
        </View>

    

        <View style={{ backgroundColor: 'aqua', padding: 20 , justifyContent : 'center' ,alignItems:'center'}}>
            <View style={{ borderWidth: 1, backgroundColor: 'white' }}>
                <Image source={require('../component/assets1/avatar.png')} style={{ width: 100, height: 100  }} />
            </View>
        </View>




      



        </SafeAreaView>
       


      

    );
}

export default No1;

const styles = StyleSheet.create({
    container: {
        width: 200,
        borderWidth: 1
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "brown",
        color: "#fff",
        textAlign: "center",
        textDecorationLine: "underline",
        padding: 10,
        marginBottom: 10
    },
    paragraph: {
        fontSize: 20,
        textAlign: "justify"
    }
})
  
