import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Location() {
  return (
    <View style={styles.container}>
      <View style={styles.countrynameconatiner}>
        <Text style={styles.countryname}>India</Text>
        <TouchableOpacity>
          <FontAwesome name="caret-down" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      <View style={styles.countrylocationcontainer}>
        <TouchableOpacity>
          <MaterialIcons name="my-location" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.locationname}>India,Rajkot</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    top: 50,
  },
  countrynameconatiner: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 78,
    height: 41,
    
  },
  countryname: {
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
    left:-22
  },
  countrylocationcontainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 78,
    height: 41,
    gap: 10,
  },
  locationname: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.71,
    color: "#292929",
  },
});
