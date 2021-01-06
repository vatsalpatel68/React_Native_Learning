import React from 'react';
import { View , Text , StyleSheet , StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {CATEGORIES , MEALS } from '../data/dummy-data';
import Meal from '../components/Meal';

const FavoritesScreen = props => {
    return(
        <View style = {styles.screen}>
            <FlatList 
                data = {MEALS}
                renderItem = {(once) => <Meal title = {once.item.title} onSelectMeal = {() => props.navigation.navigate('FavMealDetail' ,  { id : once.item.id , title : once.item.title})} duration = {once.item.duration} complexity = {once.item.complexity} affordability = {once.item.affordability} uri = {once.item.imageUrl} />}
                style = {{ width : "100%"}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
});

export default FavoritesScreen;
