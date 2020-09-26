import { StatusBar } from "expo-status-bar";

import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Petlist from "./component/petList";
// import Pets from "./component/Pets";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Pets /> */}
      <Petlist />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDADF",
  },
});
