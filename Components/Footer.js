import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'

export default function Footer() {
  return (
    <View style={styles.container}>

      <View style={styles.pic1container}>
       <Image style={styles.pic1style} source={pic1}/>
       <Text style={styles.pic1head}>MH Blue</Text>
       <Text style={styles.pic1para}>Deepak Raj</Text>
      </View>

      <View style={styles.pic2container}>
      <Image style={styles.pic2style} source={pic2}/>
      <Text style={styles.pic2head}>Orage Path</Text>
      <Text style={styles.pic2para}>Sankalp Agrawal</Text>
      </View>


      <View style={styles.pic3container}>
       <Image style={styles.pic3style} source={pic3}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:335,
        height:424,
        marginTop:30
    },
    pic1container:{
        width:160,
        height:200,
        borderRadius:20
    },
    pic1style:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
        resizeMode:'cover',
        borderRadius:20
    },
    pic1head:{
        top:-70,
        left:16,
        color:'white',
        fontWeight:'700',
        fontSize:20,
        lineHeight:24
    },
    pic1para:{
        fontSize:12,
        fontWeight:'400',
        lineHeight:17,
        top:-65,
        color:'white',
        left:16
    },
    pic2container:{
        width:160,
        height:140,
        left:170,
        top:-200
        
    },
    pic2style:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        borderRadius:20
    },
    pic2head:{
        fontWeight:'700',
        fontSize:20,
        lineHeight:24,
        color:'white',
        top:-60,
        left:16
    },
    pic2para:{
        color:'white',
        left:16,
        fontSize:12,
        fontWeight:'400',
        lineHeight:17,
        top:-58
    },
    pic3container:{
        width:160,
        height:140,
        left:170,
        top:-180
    },
    pic3style:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        borderRadius:10
    }
})