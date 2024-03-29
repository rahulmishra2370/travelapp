import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Likes() {
  return (
    <View style={styles.container}>

   <View style={styles.locationcontainer}>
   <FontAwesome6 name="location-dot" size={17} color="black" />
    <Text style={styles.locationtxt}>Mumbai</Text>
    </View>
    
    <View style={styles.likescontainer}>
    <AntDesign name="heart" size={18} color="red" />
    <Text style={styles.likestxt}>200 likes</Text>
    </View>

     </View>
    
   
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        flexDirection:'row',
        alignSelf:'flex-start',
        left:10,
        gap:10
    },
    locationcontainer:{
        flexDirection:'row',
        gap:2
    },
    likescontainer:{
        flexDirection:'row',
        gap:2
    },
    locationtxt:{
        fontWeight:'600',
        fontSize:13,
        lineHeight:17
    },
    likestxt:{
        fontWeight:'600',
        fontSize:13,
    }


})