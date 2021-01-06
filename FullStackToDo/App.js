import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//Imports the components.
import Input from './components/input';
import Output from './components/output';


import {createStore , applyMiddleware } from 'redux';
import  ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import ToDoReducer from './store/reducers/reducer';


//Create the store.
const store = createStore(ToDoReducer , applyMiddleware(ReduxThunk));


export default function App() {
  return (
    <Provider store = {store}>
        <View style={styles.container}>
          <Input />
          <Output />
          <StatusBar style="auto" />
        </View>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : "center",
    justifyContent: 'flex-start',
    marginTop : 70
  },
});
