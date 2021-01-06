import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

import NetworkImage from './components/NetworkImage';


export default function App() {
  return (
    <View style={styles.container}>
      {/*
      <View style={styles.imageContainer}>
        <Image source =  {require("./stuff/success.png")} style = {styles.imageStyle} resizeMode = 'stretch' fadeDuration = {2300} />
      </View> 
      */}
      {<NetworkImage />}
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer : {
    height : 400,
    width : 400,
    borderRadius : 200,
    overflow : "hidden"
  
  },
  imageStyle : {
    height : '100%',
    width : '100%'
  }
});
