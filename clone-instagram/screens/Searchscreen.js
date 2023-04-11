import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ExpScrollView from '../component/search/ExpScrollView';
import { UsersObj } from '../data/UserItems';



export default function App() {
  return (
   <SafeAreaView>
    

    <View>
    <SearchBar />
    </View>
    
    <View style={styles.body}>
      <ExpScrollView UsersObj={UsersObj}/>

    </View>


   

   </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body:{
    backgroundColor : "black"
  
  }
});
