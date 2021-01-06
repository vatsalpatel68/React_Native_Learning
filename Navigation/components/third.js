import React from 'react';
import { View , Text  , StyleSheet , Button} from 'react-native';
const Third = (props) => {
    return(
        <View style = {styles.container}>
            <Text> Third component </Text>
            <Button title = "fourth" onPress = {() => props.navigation.navigate('fourth')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
})

export default Third;