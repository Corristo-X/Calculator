import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions,TouchableOpacity } from 'react-native';
import {React,useEffect,useState} from 'react'



export default function App() {
  
 
 const [wartosc,setwartosc]=useState('');
  const [result,setresult]=useState();
  const [fontsizeresult,setfontsizeResult]=useState(30)
  const [fontsizewarotsc,setfontsozewartosc]=useState(50)
 
  
  useEffect(()=>{
    
    setwartosc('')
    setresult('')

  },[])

  const click = (value)=>{
    
   
 switch(value){
  case '=':
    {
      setfontsizeResult(50)
      setfontsozewartosc(30)
      break;
    }
  default:
    {
      const add = wartosc+value
      setwartosc(add)
      const calculate = parseFloat(add)
      setresult(calculate)
    }
  }
}
 
  const clr =()=>{
    setwartosc("")
    setresult("")
    setfontsizeResult(30)
    setfontsozewartosc(50)
      
  }
  const remove=()=>{
    const lastletterremove = wartosc.slice(0,-1)
    setwartosc(lastletterremove)
  }

  
    
    //setwartosc(value)
      
      
     
  
  return (
    <View style={styles.container}>
      <Text style ={[{fontSize:fontsizewarotsc},styles.wartosc]} >{wartosc}</Text>
      <Text style ={[{fontSize:fontsizeresult},styles.result]}>={result}</Text>
      <View style={styles.container2}>
        <TouchableOpacity 
        
        onPress={clr}>
      <Image
          
           source={require('./assets/AC.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={remove}>
           
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
      <TouchableOpacity
       onPress={()=>click(7)}
      >
     
      <Image
     
           source={require('./assets/7.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
            onPress={()=>click(8)}>
            <Image
            
           source={require('./assets/8.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
            onPress={()=>click(9)}
           >
             <Image
             
           source={require('./assets/9.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity>
            <Image
           source={require('./assets/X.png')}
           />
           </TouchableOpacity>
    </View>
    <View style={styles.container2}>
    <TouchableOpacity
     onPress={()=>click(4)}
    >
      <Image
      
           source={require('./assets/4.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
            onPress={()=>click(5)}
           >
            <Image
            
           source={require('./assets/5.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
            onPress={()=>click(6)}
           >
             <Image
             
           source={require('./assets/6.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity>
            <Image
           source={require('./assets/-.png')}
           />
           </TouchableOpacity>
    </View>
    <View style={styles.container2}>
    <TouchableOpacity
     onPress={()=>click(1)}
    >
    <Image
    
           source={require('./assets/1.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>click(2)}
           >
            <Image
             
           source={require('./assets/2.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
            onPress={()=>click(3)}
           >
             <Image
             
           source={require('./assets/3.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>click('+')}
           >
            <Image
           source={require('./assets/plus.png')}
           />
           </TouchableOpacity>
    </View>
    <View style={styles.container2}>
    <TouchableOpacity>
    <Image
           source={require('./assets/extension.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>click(0)}
           >
            <Image
             
           source={require('./assets/0.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity>
             <Image
           source={require('./assets/comma.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>click('=')}
           >
            <Image
           source={require('./assets/equal.png')}
           />
           </TouchableOpacity>
    </View>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    
    
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'flex-end',
  },
  container2:{
    flexDirection:'row',
 
  },
  wartosc:{
   

width:Dimensions.get('window').width,
textAlign:'right'


  },
  result:{
    
    width:Dimensions.get('window').width,
    textAlign:'right'

  },



});
