import React, { useState } from 'react';
import { StyleSheet, Text, View , StatusBar, SafeAreaView } from 'react-native';

//Imports the components.
import Header from './components/Header';
import InputScreen from './components/inputScreen';
import StartGameScreen from './components/StartGameScreen';
import WinningScreen from './components/WinningScreen';



export default function App() {
  const [number , setNumber ] = useState();
  const [isWinner , setWinner ] = useState(false);


  let setWinnerFromProps = () => {
    setWinner(true); 
  }

  let resetGame = () => {
    setWinner(false);
    setNumber(null);  
  }

  let screen = <InputScreen setNumber = {(value) => setNumber(value)} />

  if(number){
    screen = <StartGameScreen number={number} setWinner = {setWinnerFromProps} />
  }

  if(isWinner)
  {
    screen = <WinningScreen setWinner = {() => setWinner(true)} number = {number} resetGame = {resetGame} />
  }

 

  return (
    <SafeAreaView style={styles.container}>
      <Header title = "Guess a number"/>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
