import React from 'react';
import { View , Text , FlatList , StyleSheet , TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'; 

import {deleteToDo} from '../store/actions/action';


function Output(props)
{

    const renderList = (once) => <TouchableOpacity  key = {once.item.id}  onPress = {() => props.DELETE({id : once.item.id})}><View style = {styles.txtContainer}><Text>{once.item.data}</Text></View></TouchableOpacity>
    
    
    return(
        <View style = {styles.container}>
            <FlatList
                data = {props.datas}
                renderItem = {renderList}
                keyExtractor = {(data) => data.id}
            />
        </View>
    )   
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '80%',
        margin : 20
    },
    txtContainer : {
        height : 50,
        borderWidth : 1,
        margin : 5,
        justifyContent : 'center',
        paddingLeft : 10
    }
})


const mapStateToProps = (state) => {
    return {
        datas : state.datas
    }
}

const mapDipatchToProps = (dispatch) => {
    return{
        DELETE : (data) => dispatch(deleteToDo(data))
    }    
}

export default connect(mapStateToProps , mapDipatchToProps)(Output);