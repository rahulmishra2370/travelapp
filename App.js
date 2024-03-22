import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Location from "./Components/Location";
import HorizontalScrollView from "./Components/HorizontalScrollView";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Location />
      <HorizontalScrollView/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
