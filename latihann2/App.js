import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import { ImageBackground, SafeAreaView , Image } from 'react-native-web';
import Car from './src/component/Car';
import Motor from './src/component/Motor';
import Sepeda from './src/component/Sepeda';
import Student from './src/component/Student';

export default function App() {
  return (
     

    // <ImageBackground
    // source={{
    //   uri: "https://kis.ibik.ac.id/environment/ibik/images/background.jpg"
    // }}
    // resizeMode ="cover"
    // style={{flex : 1}} >
    
   
    <SafeAreaView>
      <StatusBar hidden= {true}/>

      
     <Student/>
    </SafeAreaView>
    // </ImageBackground>
    // {/* // <Motor/>
    // <Sepeda /> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  
});
