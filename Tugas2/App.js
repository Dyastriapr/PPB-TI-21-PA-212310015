import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';
import No1 from './src/component/No1';
import No2 from './src/component/No2';
import No3 from './src/component/No3';
import No4RFC from './src/component/No4RFC';
import No4RCC from './src/component/No4RCC';



export default function App() {
  return (
    <View style={styles.container}>

     {/* <No1 /> */}
     <No2 />
     {/* <No3 /> */}
     {/* <No4RFC /> */}
     {/* <No4RCC /> */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
