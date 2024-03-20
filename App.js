import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/Navbar';
import Screen1 from './Components/Screen1';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <View style={styles.container}>
      <RecoilRoot>
      <Navbar/>
      <Screen1/>     
      </RecoilRoot>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop:25
  },
});
