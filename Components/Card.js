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
    borderRadius: 10,
    margin: 10,
    width: 100,
    height: 100,
    top:70,
    overflow: 'hidden',
    borderRadius:15
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
    lineHeight:20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    paddingTop:60
  },
});

export default Card;
