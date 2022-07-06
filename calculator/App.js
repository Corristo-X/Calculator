import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions,TouchableOpacity } from 'react-native';
import {React,useState} from 'react'


export default function App() {
  const [wartosc,setwartosc]=useState(0);
  const onPress =() =>setwartosc(2)
  return (
    <View style={styles.container}>
      <Text style={styles.wartosc}>{wartosc}</Text>
      <View style={styles.container2}>
        <TouchableOpacity 
        onPress={onPress}>
      <Image

           source={require('./assets/AC.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity>
            <Image
           source={require('./assets/delete.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity>
             <Image
           source={require('./assets/%.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity>
            <Image
           source={require('./assets/divide.png')}
           />
           </TouchableOpacity>
    </View>
    <View style={styles.container2}>
      <Image
           source={require('./assets/7.png')}
           />
            <Image
           source={require('./assets/8.png')}
           />
             <Image
           source={require('./assets/9.png')}
           />
            <Image
           source={require('./assets/X.png')}
           />
    </View>
    <View style={styles.container2}>
      <Image
           source={require('./assets/4.png')}
           />
            <Image
           source={require('./assets/5.png')}
           />
             <Image
           source={require('./assets/6.png')}
           />
            <Image
           source={require('./assets/-.png')}
           />
    </View>
    <View style={styles.container2}>
    <Image
           source={require('./assets/1.png')}
           />
            <Image
           source={require('./assets/2.png')}
           />
             <Image
           source={require('./assets/3.png')}
           />
            <Image
           source={require('./assets/plus.png')}
           />
    </View>
    <View style={styles.container2}>
    <Image
           source={require('./assets/extension.png')}
           />
            <Image
           source={require('./assets/0.png')}
           />
             <Image
           source={require('./assets/comma.png')}
           />
            <Image
           source={require('./assets/equal.png')}
           />
    </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    
    
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent:'flex-end',
  },
  container2:{
    flexDirection:'row',
 
  },
  wartosc:{
    
fontSize:40,
width:Dimensions.get('window').width,
textAlign:'right'


  },
});
