import React from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';

const No3 = () => {
    return (
        <View style={styles.body}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../component/assets1/ibik.png')} style={{ width: 70, height: 70 }}
            />
        </View>
        <Text style={{ color: 'white', marginBottom: 100 }}>Loading...</Text>
    </View >
    );
}

export default No3;


const styles = StyleSheet.create({

    body:{
        flex : 1,
        alignItems : 'center',
        backgroundColor : "purple"

    }
})

