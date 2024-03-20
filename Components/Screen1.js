import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useRecoilState } from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext'

export default function Screen1() {

    const [searchValue, setSearchValue]=useRecoilState(inputtextwallpaper)
    onChangeTextinput=(text)=>{
      setSearchValue(text)
    }
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'yellow',
        
    }
})