import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { colors } from "react-native-elements";
import SigninScreen from "./src/screens/authentication/SigninScreen";
import './src/global/style.css' 

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.StatusBar}
      />
      <SigninScreen />
    </View>
  );
}


const style = StyleSheet.create({
  container:{
    flex:1
  }
})