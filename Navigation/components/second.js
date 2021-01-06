import React from 'react';
import { View , Text  , StyleSheet , Button } from 'react-native';
const Second = (props) => {
    return(
        <View style = {styles.container}>
            <Text> Second component </Text>
            <Button title = "third" onPress = {() => props.navigation.navigate('third')} />
        </View>
    )
}

//If you want to add default stack navigator style then use defaultStackNavigator at that time when you
//create a stack navigator.
Second.navigationOptions = {
    title : "Second component",
    headerTintColor : "yellow",
    headerRight : () => <Button title="alert" onPress = {() => alert('hello world')} />,
    headerStyle : {
        backgroundColor : "grey"
    }

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
})

export default Second;