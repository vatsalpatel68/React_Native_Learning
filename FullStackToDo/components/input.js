import React , {useState} from 'react';
import { View , Text, TextInput , StyleSheet, Button } from 'react-native'; 


//import for redux.
import {connect} from 'react-redux';
import {addToDo} from '../store/actions/action';


function Input(props)
{
    const [data , setData] = useState('');
    const AddToDo = () => {
        //Redux data come here.
        if(data == "")
            return
        props.ADD(data);
        setData('');
    }

    return(
        <View>
            <TextInput value={data} placeholder = "Please enter a data" textAlign="center"  onChangeText={(text) => setData(text)} style={styles.inputStyle} />
            <Button title = "Add" onPress = {() => AddToDo()}  />
        </View>
    )
}


const styles = StyleSheet.create({
    inputStyle : {
        borderBottomWidth : 1,
        minWidth : "80%",
        maxWidth : "80%",
        marginVertical : 15
    }
})

const mapStateToProps = (state) => {
    return{
        datas : state.datas
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ADD : (data) => dispatch(addToDo(data))
    }   
}

export default connect(mapStateToProps , mapDispatchToProps)(Input);