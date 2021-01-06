import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data  , setData] = useState("My name is Vatsal");
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <Button title = "Click me" onPress = {() => setData('Clicked')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
