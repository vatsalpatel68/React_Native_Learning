import React  from 'react';
import { View , Text , StyleSheet , FlatList , TouchableOpacity, Button } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import { HeaderButtons , Item } from 'react-navigation-header-buttons';
import CustomButton from '../components/CustomButton';


const CatagoryScreen = props => {

    const gridItem = (data) => {
    return <TouchableOpacity style = {styles.gridContainer} onPress  = {() => props.navigation.navigate('CatagoryMeal' , {
        id : data.item.id,
        title : data.item.title
    })}>
        <View style={{...styles.gridItems , backgroundColor : data.item.color }}>
            <Text style = {styles.gridText}>
                {data.item.title}
            </Text>
        </View>
    </TouchableOpacity>
    }



    return(
        <FlatList 
        data = {CATEGORIES}
        renderItem = {gridItem}
        numColumns = {2}
        />
    )
}

CatagoryScreen.navigationOptions = (navigationData) => {
    return{
        headerLeft : () => {
        return <HeaderButtons HeaderButtonComponent = {CustomButton}>
            <Item title = "Menu" iconName = "ios-menu" size = {23} color = "white" onPress = {() => {navigationData.navigation.toggleDrawer()}} /> 
            </HeaderButtons>
        },
    }
}


const styles = StyleSheet.create({
    gridContainer : {
        //flex : 1,
        flex : 1,
        height : 150,
        margin : 10 
    },
    gridItems : {
        flex : 1,
        borderRadius : 10,
        justifyContent : 'flex-end',
        alignItems : 'flex-end',
        height  : 150,
        padding : 10
    },
    gridText : {
        fontSize : 20
    }
});

export default CatagoryScreen;
