import React from 'react';
import { View , Text , StyleSheet , StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {CATEGORIES , MEALS } from '../data/dummy-data';
import Meal from '../components/Meal';


const CatagoryMealScreen = (props) => {
    const ID = props.navigation.getParam('id');

    const DATA = MEALS.filter(once => once.categoryIds.indexOf(ID) >= 0);

    return(
        <View style = {styles.screen}>
            <FlatList 
                data = {DATA}
                renderItem = {(once) => <Meal title = {once.item.title} onSelectMeal = {() => props.navigation.navigate('MealDetail' ,  { id : once.item.id})} duration = {once.item.duration} complexity = {once.item.complexity} affordability = {once.item.affordability} uri = {once.item.imageUrl} />}
                style = {{ width : "100%"}}
            />
        </View>
    )
}

CatagoryMealScreen.navigationOptions = (navigationData) => 
{
    const ID = navigationData.navigation.getParam('id');

    const data = CATEGORIES.find(once => once.id === ID);

    return{
        headerTitle : data.title
    }
}


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
});

export default CatagoryMealScreen;
