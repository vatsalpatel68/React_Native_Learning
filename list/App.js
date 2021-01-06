import React , {useState} from 'react';
import { StyleSheet, Text, View , ScrollView, Button } from 'react-native';



export default function App() {
  //Manage the state for button and backgrounf color configuration.
  const [isOn , setLight] = useState(false);
  const [buttonTitle , setButtonTitle] = useState('Turn Light ON');


  const changestate = () => {
    if(isOn)
    {
      //When bulb is already on.
      setLight(false);
      //Change the title.
      setButtonTitle('Tuen Light ON')
    }
    else
    {
      //When bulb is already off.
      setLight(true);
      //Change the title.
      setButtonTitle('turn Light OFF');
    }
  }
  return (
    <View style={styles.container}>
      {/*Assaign a class as per the bulb situation.*/}
      <View style = {isOn ? styles.primaryContainer : styles.primaryContainer2}>
      <Text>{isOn ? "ON" : "OFF" }</Text>
      <Button color = {"skyblue"}  title = {buttonTitle} onPress= {changestate}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : 'center',
  },
  primaryContainer2 : {
    borderWidth : 5,
    borderColor : 'red',
    backgroundColor : 'green'
  },
  //The only difference is in the background color.
  primaryContainer : {
    borderWidth : 5,
    borderColor : 'red',
    backgroundColor : 'red'
    
  }

})


 {/*

  import First from './components/first';
import Second from './components/second';
import PlatFormApi from './components/platformApi';

const [allGuesses , set] = useState(['1','2','3','4','5', '6' , '7' , '8'  , '9' , '10']);

const styles = StyleSheet.create({
  container : {
      flex : 1,
      marginTop : 30,
      marginHorizontal : 10     
  },
  listContainer : {
      flex : 1,
      width : '100%',
      alignSelf : 'center',
      margin : 5,
      flexDirection : 'column-reverse'
  },
  scrollStyle : {
      flexGrow : 1,
      flexDirection : 'column-reverse'
  },
  
  listItemContainer : {
      borderWidth : 0.5,
      borderRadius : 10,
      marginTop : 5,
      height : 100,
      width : '100%',
      alignSelf : "center",
      alignItems : "center" ,
      flexDirection : "row",
      justifyContent : "space-around"   
  }

})


 
      <View  style = {styles.listContainer}>
            <ScrollView contentContainerStyle = {styles.scrollStyle}>
            {allGuesses.map((once , index) => <View key = {index} style = {styles.listItemContainer}><Text>#{index + 1}</Text><Text>{once}</Text></View>)}
            </ScrollView>  
        </View> 
      
      
      <First />
        
      <Second />

      

      <PlatFormApi />*/}