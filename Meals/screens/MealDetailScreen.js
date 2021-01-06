import React , {useEffect} from 'react';
import { View , Text , StyleSheet , Button , Image , ScrollView} from 'react-native';
import { MEALS } from '../data/dummy-data';
import  CustomButton  from '../components/CustomButton';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';


//Imports for redux store.
import {connect} from 'react-redux';
import {TOGGLEFAV} from '../store/actions/action';



const MealDetailScreen = props => {
    const ID = props.navigation.getParam('id');
    const DATAS = MEALS.find(once => once.id === ID);

    const savedata = () => {
        console.log("called");
        props.toggle(ID);
    }

    const data = props.data;
    console.log(data.favorite);

    useEffect(() => {
        props.navigation.setParams({"savedata" :() =>  savedata()});
    }, [])
    


    return(
    <ScrollView>
        <Image source = {{uri : DATAS.imageUrl}} style = {styles.image}/>
        <View style={styles.mealDetail}>
            <Text>{DATAS.duration}m</Text>
            <Text>{DATAS.complexity.toUpperCase()}</Text>
            <Text>{DATAS.affordability.toUpperCase()}</Text>
        </View>
        <Text style = {styles.mealTitle}>Ingredients</Text>
        {DATAS.ingredients.map(ingredient => {
            return <View key={ingredient} style = {styles.steps}><Text >{ingredient}</Text></View>
        })}
        <Text style = {styles.mealTitle}>Steps</Text>
        {DATAS.steps.map(ingredient => {
            return <View key={ingredient} style = {styles.steps}><Text >{ingredient}</Text></View>
        })}
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    },
    image : {
        width : "100%",
        height : 200,

    },
    mealDetail : {
        width : "100%",
        justifyContent : "space-around",
        flexDirection : "row",
        padding : 10
    },
    mealTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : "center",
        marginTop : 10
    },
    steps : {
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderColor : "#ccc",
        borderWidth : 1
    }

});




MealDetailScreen.navigationOptions = (navigationData) => {
    const ID = navigationData.navigation.getParam('id');
    const DATAS = MEALS.find(once => once.id === ID);

    return {
        headerTitle : DATAS.title,
        headerRight : () => {
            return <HeaderButtons HeaderButtonComponent = {CustomButton}>
                    <Item title="search" iconName="ios-star" onPress={navigationData.navigation.getParam('savedata')} />
                </HeaderButtons>
        }
    }
}


//For the Redux store.
const mapStateToProps = (state) => {
    return {
        data : state.meals    
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toggle : (id) => dispatch(TOGGLEFAV(id))
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(MealDetailScreen);
