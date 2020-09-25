import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import flash from "../assets/flash.jpg";
import Petlist from "./petList";
function Pets({ name, location, age, type, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.images} /> */}
        {/* <View style={styles.images}>{image} </View> */}
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.petname}>{name}</Text>
        <Text style={styles.petdetails}>{type} </Text>
        <Text style={styles.petdetails}> {age} </Text>
        <Text style={styles.petdetails}>{location}</Text>
      </View>
    </View>
  );
}
export default Pets;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 40,
  },
  imageContainer: {},
  textContainer: {
    backgroundColor: "#f2f2f2",
    height: 90,
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 20,
  },
  images: {
    height: 130,
    width: 110,
    borderRadius: 10,
  },
  petname: {
    marginHorizontal: 10,
    color: "blue",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  petdetails: {
    marginHorizontal: 10,
    color: "#BEB8C7",
    fontSize: 12,
    marginBottom: 3,
  },
});
