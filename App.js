import React from 'react'
import {View, StatusBar, StyleSheet} from 'react-native'
import Header from './src/components/Header';
import { colors } from './src/global/styles';
function App() {
  return (
    <View style={styles.container}>
      <StatusBar
      barStyle='light-content'
      backgroundColor={colors.statusBar}
      />
      <Header title= 'My Account'/>
    </View>
  );
}

const styles  = StyleSheet.create({
  container:{
    flex:1
  }
})
export default App