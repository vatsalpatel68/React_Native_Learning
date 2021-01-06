import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//imports.

import CustomButton from './components/CustomButton';
import Icons from './components/Icons';


const pressButton = () => {
  console.log('hello world');
}

export default function App() {
  return (
    <View style={styles.container}>
        {/*<CustomButton onPress = {() => pressButton()}>Press me !</CustomButton>*/}
        {
          <Icons name= "ios-information" color= "skyblue"/>
        }
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
});
