import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import pic from "../assets/girlpic.jpeg";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function Header() {
  return (
    <View style={styles.contianer}>
      <View>
        <Image style={styles.imgstyle} source={pic} />
        <BlurView intensity={50} style={styles.shadow} />
      </View>

      <View style={styles.welocmemsg}>
        <View style={styles.welcomecontainer}>
          <Text style={styles.welcometxt}>WELCOME BACK</Text>
        </View>

        <View style={styles.namecontainer}>
          <Text style={styles.name}>Natasha Kasim</Text>
        </View>
      </View>
      <View style={styles.IconContainer}>
        <TouchableOpacity style={styles.searchIconContainer}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    marginTop:0
  },
  imgstyle: {
    width: 40,
    height: 40,
    top: 48,
    left: 20,
    borderRadius: 50,
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10, // Adjust as per your requirement
  },

  welocmemsg: {
    top: 50,
    left: 30,
  },

  welcometxt: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#292929",
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
  },

  IconContainer: {
    left: 150,
    top: 60,
    height: 30,
    width: 30,
  },
});