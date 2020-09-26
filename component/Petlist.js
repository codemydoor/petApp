import React from "react";
import { View, Text, FlatList } from "react-native";
import Pets from "../component/Pets";

function Petlist() {
  const petList = [
    {
      name: "Jackey",
      age: "10",
      location: "Tema",
      type: "bull",
      id: "1",
      image: require("../assets/flash.jpg"),
    },
    {
      name: "Flash",
      age: "8",
      location: "Ashaiman",
      type: "bull",
      id: "2",
      image: require("../assets/parrot.jpg"),
    },
    {
      name: "Risky",
      age: "9",
      location: "Lashibi",
      type: "bull",
      id: "3",
      image: require("../assets/rabbit.jpg"),
    },
    {
      name: "Horror",
      age: "11",
      location: "Newtown",
      type: "bull",
      id: "4",
      image: require("../assets/cat.jpg"),
    },
    {
      name: "Bully",
      age: "15",
      location: "Kotoku",
      type: "bull",
      id: "5",
      image: require("../assets/damal.jpg"),
    },
  ];

  return (
    <FlatList
      data={petList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View>
            <Pets
              name={item.name}
              age={item.age}
              location={item.location}
              type={item.type}
              image={item.image}
            />
          </View>
        );
      }}
    />
  );
}

export default Petlist;
