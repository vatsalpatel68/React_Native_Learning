import React , { useState } from 'react';
import { StyleSheet,  View , ScrollView ,   Text, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';

//Imports components.
import Input from './components/input';
import OutputList from './components/outputList';

import OutputList2  from './components/OutputList2';

export default function App() {

  const [data , setData ] = useState([]);
  const [instance , setInstance ] = useState('');

  const changeText = (text) => {
      setInstance(text);
  }
  
  const deleteItem = (id) => {
      setData(() => {
        return data.filter(i => {
          return i.key != id;
        })  
      })
  }

  const AddData = (instance) => {
    
    setData([ ...data  , { key : Math.random().toString() , name : instance}]);
    setInstance('');
     
  }

  return (
    <View style = {{paddingTop : 70}}>
      <Input AddData = {AddData} instance = {instance} changeText = {changeText}/>
        
        <FlatList 
      data = {data}
      renderItem = {i => <OutputList i = {i} deleteItem = {deleteItem}/>}
     />
     </View>
   
  );
}

//Define a styles.
const Styles = StyleSheet.create({
  inputField : {
    borderBottomColor : "black" ,
    borderBottomWidth : 1 ,
    width : "70%" ,
    height : 30 ,
    marginRight : 10
  },
 
  listItem : {
    width : '96%',
    height : 30,
    margin : 5,
    paddingLeft : '3%',
    borderWidth : 0.7,
    backgroundColor : "#6eb4d4",
    alignItems : 'flex-start',
    justifyContent : "center"
  }
})

{
/*   <View style = {Styles.listContainer}>
      <ScrollView>
        {data.map((i , j) => <View style = {Styles.listItem}><Text key = {j}>{i}</Text></View>)}
       </View>
      </ScrollView>
    </View>
*/
}   

