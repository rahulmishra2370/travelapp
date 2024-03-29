import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Placetxt() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingstyle}>Photoshoot places</Text>
      <Text style={styles.parastyle}>Let's figure out how much I spent on this trip of money and time,and then the story begins.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:335,
        height:76,
        marginTop:40,
    },
    headingstyle:{
        fontWeight:'700',
        fontSize:20,
        lineHeight:24
    },
    parastyle:{
        fontWeight:'400',
        fontSize:15,
        lineHeight:22,
        color:'#292929'
    },
})