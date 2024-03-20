import { StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import React from 'react'
import logo from '../assets/searchicon.png'
import { useRecoilState } from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext'

export default function Navbar() {

    const [searchValue, setSearchValue]=useRecoilState(inputtextwallpaper)
   const  onChangeTextinput=(text)=>{
      setSearchValue(text)
     
    }
  return (
    <View style={styles.container}>
    <View style={styles.searchcontainer}>  
    <Image style={styles.icon}source={logo}/>
    <TextInput onChange={this.onChangeTextinput} style={styles.searchinput} placeholder='search'/> 
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingVertical:10,
        alignItems:'center'
        
    },
    icon:{
        height:30,
        width:30, 
    },
    searchcontainer:{
        backgroundColor:'white',
        elevation:10,
        flexDirection:'row',
        width:'80%', 
        paddingLeft:10
    },
    searchinput:{
        width:'80%',
        fontSize:18
    }
  
})