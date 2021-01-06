import { createAppContainer } from 'react-navigation';
import React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


import { Ionicons } from '@expo/vector-icons';

import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMealScreen from '../screens/CatagoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreeen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

const MealsNavigator = createStackNavigator({
    Catagory : CatagoriesScreen,
    CatagoryMeal : {
        screen : CatagoryMealScreen,
    },
    MealDetail : MealDetailScreen
},
{
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor : 'grey'
        },
        headerTintColor : "white",
    }
});

{/*
    //For hide the header of the component.

    const MealsNavigator = createStackNavigator({
    Catagory : CatagoriesScreen,
    CatagoryMeal : {
        screen : CatagoryMealScreen
    },
    MealDetail : MealDetailScreen
},
{
    headerMode : "none"
})*/}

const FavNavigator = createStackNavigator({
    Favorites : FavoritesScreeen,
    FavMealDetail : MealDetailScreen
},
{
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor : 'grey'
        },
        headerTintColor : "white",
    }
})




const commonTabBar = {
    Home : {
        screen : MealsNavigator,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Ionicons name="ios-restaurant" size = {23} color = {tabInfo.tintColor} />
            }
        }
    },
    Favorite : {
        screen : FavNavigator,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Ionicons name="ios-star" size = {23} color = {tabInfo.tintColor} />
            },
            //tabBarVisible  : false
        }
    }
}


const BottomNav = Platform.OS == 'ios' ? createBottomTabNavigator(commonTabBar,{
    defaultNavigationOptions : ({navigation}) => ({
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }
    })
}
) : createMaterialBottomTabNavigator({
    Home : {
        screen : MealsNavigator,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Ionicons name="ios-restaurant" size = {23} color = {tabInfo.tintColor} />
            },
           // tabBarColor : "yellow"  //It works only shifting is on.
        }
    },
    Favorite : {
        screen : FavNavigator,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Ionicons name="ios-star" size = {23} color = {tabInfo.tintColor} />
            },
            //tabBarColor : "pink"
            //tabBarVisible  : false
        }
    }
}
 , {
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    shifting : true,
    barStyle : {
        backgroundColor : "#7d90d0",
        
    
    }
})


const FilterNavigator = createStackNavigator({
    filter : {
        screen : FilterScreen,
        navigationOptions :  {
            headerStyle : {
                  backgroundColor : 'grey'
              }, 
            headerTintColor : "white",
            }
    }
})

const DrawerNavigator = createDrawerNavigator({
    Catagory : { 
        screen : BottomNav,
        navigationOptions : {
            drawerLabel : "Meals"
        }
    }, 
    Filter : {
        screen : FilterNavigator
    }
} , {
    contentOptions : {
        activeTintColor : "orange",
    }
})




export default createAppContainer(DrawerNavigator);