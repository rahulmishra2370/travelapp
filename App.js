import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Location from "./Components/Location";
import HorizontalScrollView from "./Components/HorizontalScrollView";
import Bigcards from "./Components/Bigcards";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Location />
      <HorizontalScrollView/>
      <Bigcards/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
