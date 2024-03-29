import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Card = ({ title, imageUrl }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
  margin:5,
    width: 140,
    height: 180,
   marginTop:20,
    overflow: 'hidden',
    borderRadius: 15 // Removed duplicate declaration
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    // Removed paddingTop: 60
  },
});


export default Card;
