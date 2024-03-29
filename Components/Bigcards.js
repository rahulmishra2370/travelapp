import React from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet,Image } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const peopleImages = [
    'https://i.pinimg.com/564x/07/fc/88/07fc8899ec19e3c4b3dc14ae09076fe9.jpg',
    'https://i.pinimg.com/564x/06/eb/0a/06eb0a04c10b3ef5e226e400d2f60dab.jpg',
    'https://i.pinimg.com/564x/40/cd/54/40cd54c0d7b4428dbc68d357ca713332.jpg',
    'https://i.pinimg.com/736x/6e/a0/39/6ea039375e391e4de092df7da516b0b3.jpg'
  ];
// Define city data
const cities = [
  { icon: 'day-sunny',info:'A bustling metropolis where dreams take flight amidst towering skyscrapers, vibrant street life, and the silver screens magic allure.',name: 'Mumbai', imageUrl: 'https://i.pinimg.com/564x/ac/a5/63/aca56396218cfb0bdb86c32e317284ba.jpg' },
  { icon: 'day-sunny',info:'A utopian blend of modernist architecture and lush greenery, where orderly grids harmonize with natures organic splendor',name: 'Chandigarh', imageUrl: 'https://i.pinimg.com/564x/28/5f/cc/285fcc0ce3df8f76713182d24b97fb4b.jpg' },
  { icon: 'day-sunny',info:'A vibrant tapestry of innovation and tradition, where tech titans thrive amidst verdant gardens, ancient temples, and dynamic culture.',name: 'Banglore',  imageUrl: 'https://i.pinimg.com/564x/c7/d5/91/c7d59113584287c62d9417bb037516e1.jpg' },
  { icon: 'day-sunny',info:'A timeless mosaic of ancient grandeur and contemporary flair, where history whispers through labyrinthine alleys and iconic monuments stand tall.',name: 'Delhi', imageUrl: 'https://i.pinimg.com/564x/eb/ba/f6/ebbaf66ca2971f9c41a06c3976b83ec3.jpg' },
  { icon: 'day-sunny',info:'A jewel nestled amid azure lakes and majestic palaces, where romance blooms amidst Rajputana opulence and sunset-hued vistas enchant.',name:'Udaipur', imageUrl: 'https://i.pinimg.com/564x/c8/52/5c/c8525cc6f0f5e7c6ff3b2568f7dca7d2.jpg'},
  { icon: 'day-sunny',info:'A fairytale retreat where misty mountains embrace colonial charm, winding lanes beckon exploration, and whispers of bygone eras linger.',name: 'Shimla', imageUrl: 'https://i.pinimg.com/736x/dc/12/58/dc1258320d2fec76e02661f1bb983bc5.jpg' },
  { icon: 'day-sunny',info:'A city of contrasts where ancient heritage meets modern aspirations, echoing with the symphony of academia, culture, and innovation.',name: 'Pune', imageUrl: 'https://i.pinimg.com/564x/f9/fc/4b/f9fc4bbf6997be154059fe3aa691369e.jpg' },
  { icon: 'day-sunny',info:' A regal haven where Nawabi splendor dances with Mughlai flavors, intricate architecture whispers tales, and culture thrives in royal elegance.',name: 'Lucknow', imageUrl: 'https://i.pinimg.com/564x/1b/6c/af/1b6cafdf30ae66a7167ec2bc0bb6aab3.jpg' },
  // Add more cities as needed
];

// Card component to display city information
const CityCard = ({ city }) => (
  <View style={styles.card}>
    <ImageBackground source={{ uri: city.imageUrl }} style={styles.image}>
   <View style={styles.iconview}>
   <Fontisto  style={styles.iconstyle}name={city.icon} size={24} color="white" />
   <Text  style={styles.tempstyle}>21.7°C</Text>
   </View> 
      <View style={styles.overlay}>
        <Text style={styles.name}>{city.name}</Text>
        <Text style={styles.nameinfo}>{city.info}</Text>
         
        <View style={styles.peopleContainer}>
        {peopleImages.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.circularImage} />
        ))}
      </View>
        
      <View style={styles.numofpeoplecontainer}>
      <Ionicons style={styles.peopleicon} name="people" size={20} color="white" />
           <Text style={styles.numtxt}>12,442,373</Text>
      </View>  

      </View>
    </ImageBackground>
  </View>
);

// Component to display horizontal scrollable cards for cities
export default function Bigcards() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cities.map(city => (
        <CityCard key={city.name} city={city} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 310,
    height: 480,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop:45
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    height:70,
    width:265,
    top:80,
    left:24
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight:28,
    color: '#FFFFFF',
  },
  nameinfo:{
    fontWeight:'400',
    fontSize:14,
    lineHeight:18,
    color:'#E2E5DE'
  },
  iconview:{
     width:70,
     height:20,
     top:21,
     left:236,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center'
  },
  iconstyle:{
    width:20,
    height:20,
    left:4

  },
  tempstyle:{
    fontSize:14,
    fontWeight:'400',
    lineHeight:16.71,
    color:'white',
    left:8
  },
  peopleContainer: {
    flexDirection: 'row',
    marginTop: 40,
    width:152,
    height:34,
  },
  circularImage: {
    width: 34,
    height: 34,
    borderRadius: 99,
    marginHorizontal:2
  },
  numofpeoplecontainer:{
    width:100,
    height:17,
    flexDirection:'row',
    left:170,
    top:-30,
    justifyContent:'center',
    alignItems:'center',
  },
  numtxt:{
    fontWeight:'400',
    fontSize:14,
    lineHeight:16.71,
    color:'white'
  }
 
});
