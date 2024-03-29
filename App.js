import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Location from "./Components/Location";
import HorizontalScrollView from "./Components/HorizontalScrollView";
import Bigcards from "./Components/Bigcards";
import Placetxt from "./Components/Placetxt";
import Likes from "./Components/Likes";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Location />
      <HorizontalScrollView/>
      <Bigcards/>
      <Placetxt/>
      <Likes/>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'flex-start'
  },
})