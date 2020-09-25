import React from "react";
import { View, Text, FlatList } from "react-native";
import Pets from "../component/Pets";
import cat from "../assets/cat.jpg";

function Petlist() {
  const petList = [
    {
      name: "Jackey",
      age: "10",
      location: "Tema",
      type: "bull",
      id: "1",
      image: { cat },
    },
    { name: "Flash", age: "8", location: "Ashaiman", type: "bull", id: "2" },
    { name: "Risky", age: "9", location: "Lashibi", type: "bull", id: "3" },
    { name: "Horror", age: "11", location: "Newtown", type: "bull", id: "4" },
    { name: "Bully", age: "15", location: "Kotoku", type: "bull", id: "5" },
  ];

  return (
    <FlatList
      data={petList}
      renderItem={({ item }) => {
        return (
          <Pets
            name={item.name}
            age={item.age}
            location={item.location}
            type={item.type}
            image={item.image}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
}

export default Petlist;
