import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './navigation/BottomTab';
import Homescreen from './screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';

export default function App() {
  return (
    // <Login />
    
       <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  
  
   
    
  
 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
