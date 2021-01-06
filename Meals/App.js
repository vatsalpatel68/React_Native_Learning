
import React , {useState}  from 'react';
import { StyleSheet, Text, View , StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading} from 'expo';

import BottomNav from './navigation/MealsNavigator';

//Import for Redux.
import { Provider } from 'react-redux';
import {createStore , combineReducers } from 'redux';
import { mealsReducer } from './store/reducers/reducer';

const combine = combineReducers({
  meals : mealsReducer
})
const store = createStore(combine);

const fontLoading = () => {
  return Font.loadAsync({
    'open-sans' : require('./fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const[isFontLoading , setFontLoading] = useState(false);

  if(!isFontLoading)
  {
    return (<AppLoading startAsync={() => fontLoading} onFinish = {() => setFontLoading(true)} />)
  }
  <StatusBar  backgroundColor = "grey"/>
 
  return (
    
    <Provider store = {store}><BottomNav /></Provider>
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
