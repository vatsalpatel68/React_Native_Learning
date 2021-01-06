import React from 'react';
import { View , Text , StyleSheet , StatusBar} from 'react-native';


const Header = (props) => {
    return(
        <View style = {Styles.headerStyle}>
            <StatusBar backgroundColor = "#8f8f7f"/>
            <Text style = {Styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    headerStyle : {
        width : '100%',
        height : 100,
        justifyContent : 'center',
        alignItems : "center",
        backgroundColor : '#8f8f7f',
        opacity : 0.8
    },
    headerTitle : {
        paddingTop : 10,
        fontSize : 30,
        fontWeight : "bold"
    }
})

export default Header;