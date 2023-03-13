import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  font, SliderBase,SafeAreaView } from 'react-native';
import React, { Component } from 'react';





export default function App() {
  return (
    <View style={{flex : 1}}>


      <StatusBar style='inverted'/>
       

      <View style={{flex: 0.25, backgroundColor : "#000000"}}>
      </View>
      <View style={{justifyContent: "center",alignItems :"center"}} />
      <View style= {{justifyContent: "center" , alignItems:"center"}}>
        <Image source={require('./assets/gambar1.jpg')}
        style={{ width: 150, height: 150, borderRadius: 100 , position : 'absolute'}} /> 
        </View>

      <View style={{ marginTop : 100}}>
          <Text style={{ color: "#000000" , fontWeight:"bold" ,fontSize : 20 , textAlign:"center"  }}>Dyas Tri Apriliansyah</Text>
          <Text style={{ textAlign : "center"}}>@dyastriape</Text>
        </View>

  

        <View style= {{marginTop:50}}>
         <Text style={{ fontSize : 15 , fontWeight :'bold' , textAlign : 'justify'}}> About Me </Text>
         <Text style={{textAlign :'justify'}}>Nama Saya Dyas Tri Apriliansyah , saya lahir di Bogor 24 April 2003.Hobi saya bisanya nonton film atau bermain game, saya punya pengalaman ekstrakulikuler Paskibra dan Pramuka saat SMP-SMK , sekarang saya kuliah semester 4 di IBIK jurusan Teknologi Informasi , mungkin IT terlalu pusing karena SMK saya mengambil RPL jadi saya meneruskan ke jurusan IT lagi ibarat nyemplung jangan sekalian basah gitu mungkin itu aja kalian bisa hubungi saya lewat sosial media dibawah ya </Text>

        </View>


        <View >
          <View style={{alignItems:'center' , marginTop : 40 , flexDirection : 'row' }}>
          <Image source={require('./assets/whatsapp.png')} style={{ width :20 , height :20}} />
        <Text> +6283879631235 </Text>
        
        </View>

        <View style={{alignItems:'center' , marginTop : 10 , flexDirection : 'row' }}>
        <Image source={require('./assets/instagram.png')} style={{ width :20 , height :20}} />
        <Text> @dyastriapr </Text>
        </View>


        </View>


        
        
    </View>


    
    
  );
}



  




