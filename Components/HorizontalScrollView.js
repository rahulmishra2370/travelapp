import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Card from './Card';

const HorizontalScrollView = () => {
  // Sample data for 8 cards (you can replace it with your actual data)
  const cards = [
    { id: 1, title: 'Mumbai', imageUrl: 'https://i.pinimg.com/564x/ac/a5/63/aca56396218cfb0bdb86c32e317284ba.jpg' },
    { id: 2, title: 'Chandigarh', imageUrl: 'https://i.pinimg.com/564x/28/5f/cc/285fcc0ce3df8f76713182d24b97fb4b.jpg' },
    { id: 3, title: 'Banglore', imageUrl: 'https://i.pinimg.com/564x/c7/d5/91/c7d59113584287c62d9417bb037516e1.jpg' },
    { id: 4, title: 'Delhi', imageUrl: 'https://i.pinimg.com/564x/eb/ba/f6/ebbaf66ca2971f9c41a06c3976b83ec3.jpg' },
    { id: 5, title: 'Udaipur', imageUrl: 'https://i.pinimg.com/564x/c8/52/5c/c8525cc6f0f5e7c6ff3b2568f7dca7d2.jpg'},
    { id: 6, title: 'Shimla', imageUrl: 'https://i.pinimg.com/736x/dc/12/58/dc1258320d2fec76e02661f1bb983bc5.jpg' },
    { id: 7, title: 'Pune', imageUrl: 'https://i.pinimg.com/564x/f9/fc/4b/f9fc4bbf6997be154059fe3aa691369e.jpg' },
    { id: 8, title: 'Lucknow', imageUrl: 'https://i.pinimg.com/564x/1b/6c/af/1b6cafdf30ae66a7167ec2bc0bb6aab3.jpg' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default HorizontalScrollView;
