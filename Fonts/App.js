
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';

//Import for fonts.
import * as Font from 'expo-font';

const loadFont = () => {
  Font.loadAsync({
    'firstTypeFont' : require('./stuff/fonts/Yellowtail-Regular.ttf'),
    'SecondTypeFont' : require('./stuff/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf')
  })  
}
export default function App() {

  const [dataLoading , setDataLoading] = useState(false);

  if(dataLoading)
  {
    return <AppLoading startAsync = {loadFont} onFinish = {() => setDataLoading(true)}/>
  }
  return (
    <View style={styles.container}>
      <Text style= {styles.font1 , styles.style2}>Hello world</Text>
      <Text style = {styles.font2}>Hello world</Text>
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
  font1 : {
    fontFamily : 'SecondTypeFont'
  },
  style2 : {
    color : 'red'
  },
  font2 : {
    fontFamily : 'SecondTypeFont',
    fontSize : 30
  }
});
