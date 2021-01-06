import React , { useState } from 'react';
import { View , Text , StyleSheet , ScrollView , FLatList, FlatList } from 'react-native';

export default function Second(){
    const [datas , set] = useState([{
        key : Math.random().toString(),
        data : "1"
    },
    {
        key : Math.random().toString(),
        data : "2" 
    },
    {
        key : Math.random().toString(),
        data : "3" 
    },
    {
        key : Math.random().toString(),
        data : "4" 
    },
    {
        key : Math.random().toString(),
        data : "5" 
    },
    {
        key : Math.random().toString(),
        data : "6" 
    },
    {
        key : Math.random().toString(),
        data : "7" 
    },
    {
        key : Math.random().toString(),
        data : "8" 
    },
    {
        key : Math.random().toString(),
        data : "9" 
    },
    {
        key : Math.random().toString(),
        data : "10" 
    },
    {
        key : Math.random().toString(),
        data : "11" 
    },
    {
        key : Math.random().toString(),
        data : "12" 
    },
    {
        key : Math.random().toString(),
        data : "13" 
    },
    {
        key : Math.random().toString(),
        data : "14" 
    },
    {
        key : Math.random().toString(),
        data : "15" 
    },
    {
        key : Math.random().toString(),
        data : "16" 
    },
    {
        key : Math.random().toString(),
        data : "17" 
    },
    {
        key : Math.random().toString(),
        data : "18" 
    },
    {
        key : Math.random().toString(),
        data : "19" 
    }     
]);
    return(
        
        <View style = {styles.mainContainer}>
            <ScrollView horizontal={true}>
                
            <FlatList contentContainerStyle  = {styles.FlatListStyle} horizontal={true}
                    data = {datas}
                    renderItem = {(i) => <View style = {styles.textContainer}><Text>{i.item.data}</Text></View>}  />              
             </ScrollView>
             <ScrollView horizontal={true}>
                
            <FlatList contentContainerStyle  = {styles.FlatListStyle} horizontal={true}
                    data = {datas}
                    renderItem = {(i) => <View style = {styles.textContainer}><Text>{i.item.data}</Text></View>}  />              
             </ScrollView>
        </View>
       
    )
}


const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        
    },
    scrollStyle : {
        flex : 1,
    },
    FlatListStyle : {
        flex : 1,
        
    },
    textContainer : {
        padding : 50,
        margin : 5,
        alignItems : "center",
        justifyContent : 'center',
        borderWidth : 1    
    }
})