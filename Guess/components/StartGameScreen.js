import React ,   { useState  , useRef , useEffect } from 'react';
import { View , Text , StyleSheet , Alert  , ScrollView, Dimensions } from 'react-native';
//Import the Icons.
import { AntDesign } from '@expo/vector-icons'; 

const StartGameScreen  = (props) => {  
    
    const [orientaion , setOrientation] = useState(Math.random());
    
    Dimensions.addEventListener("change" , () => {
        setOrientation(Math.random());
    })

    const generateRandomNumber = (min , max , exclude) =>
    {
        min = Math.ceil(min);
        max  = Math.floor(max);

        let random = Math.floor(Math.random() * (max - min)) + min;

        if(random === exclude)
        {
              generateRandomNumber(min , max , exclude);
        }
         else
         { 
             return random;
        }
    } 

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    let temp = generateRandomNumber(1,100, props.number);
    const [currentGuess , setCurrentGuess] = useState(() => temp);
    const[allGuesses , addNewGuess] = useState([temp]);

    const setNewGuess = (direction) => {
        
        if((direction === "lower" && currentGuess < props.number) || (direction == 'upper' && currentGuess > props.number))
        {
            //When user speak lie.
            Alert.alert("Don't lie!" , "You know what is the Truth!" , [{text : "Sorry!"}]);
            return;
        }
        if(direction === 'lower')
        {
            currentHigh.current = currentGuess;  
            
        }
        else{
            
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current + 1, currentHigh.current , currentGuess);
        addNewGuess([...allGuesses , nextNumber]);
        if(nextNumber == props.number)
        {
            props.setWinner();
        }
        setCurrentGuess(nextNumber);
    }
    useEffect(() => {
        if(currentGuess == props.number)
        {
            props.setWinner();
        }
          
    })
    if(Dimensions.get('window').height < Dimensions.get('window').width)
    {
        
        //Phone is in the landscape mode.
        return(
            <View style={styles.primary}>
            <View style = {styles.mainContainer}>
                <Text> Opponent's guess </Text>
                <View style = {styles.containerLandscape}>
                <AntDesign style = {styles.icon} name="minussquareo" size={40} color="red" onPress = {setNewGuess.bind(this , 'lower')} />
                    <Text style = {styles.number} >{currentGuess}</Text>
                <AntDesign style = {styles.icon} name="plussquareo" size={40} color="green" onPress = {setNewGuess.bind(this , 'upper')} />
                </View>
                </View>
           
            <View  style = {styles.listContainer}>
                <ScrollView contentContainerStyle = {styles.scrollStyle}>
                {allGuesses.map((once , index) => <View key = {index} style = {styles.listItemContainer}><Text>#{index + 1}</Text><Text>{once}</Text></View>)}
                </ScrollView>  
            </View>
            
            </View>
        )
    }
    
    return(
        <View style={styles.primary}>
        <View style = {styles.mainContainer}>
            <Text> Opponent's guess </Text>
            <View style = {styles.container}>
                <Text style = {styles.number} >{currentGuess}</Text>
            </View>

            <View style = {styles.buttonContainer}>
                {/*
                <Button title = "LESSER" onPress = {setNewGuess.bind(this , 'lower')}/>
               <Button title = "GREATER" onPress = {setNewGuess.bind(this , 'upper')}/>
                */}
                <AntDesign name="minussquareo" size={40} color="red" onPress = {setNewGuess.bind(this , 'lower')} />
                <AntDesign  name="plussquareo" size={40} color="green" onPress = {setNewGuess.bind(this , 'upper')} />
               </View>
        </View>
       
        <View  style = {styles.listContainer}>
            <ScrollView contentContainerStyle = {styles.scrollStyle}>
            {allGuesses.map((once , index) => <View key = {index} style = {styles.listItemContainer}><Text>#{index + 1}</Text><Text>{once}</Text></View>)}
            </ScrollView>  
        </View>
        
        </View>

       
    )    
}


const styles = StyleSheet.create({
    primary : {
        flex : 1,
              
    },
    mainContainer : {
        //height : "20%",
        width : "40%",
        alignItems : "center", 
        alignSelf : "center",       
        borderWidth : 1,
        borderRadius : 10,
        marginTop : 30,
        justifyContent : "center",
        paddingBottom : 5
    },
    container : {
        marginTop : 10,
        padding : 10,
        width : '40%',
        borderWidth : 2,
        borderRadius : 10,
        borderColor : "brown",
        justifyContent : "center",
        alignItems : "center",     
    },
    containerLandscape : {
        marginTop : 10,
        padding : 10,
        width : '60%',
        borderWidth : 2,
        borderRadius : 10,
        flexDirection : 'row',
        borderColor : "brown",
        justifyContent : "space-around",
        alignItems : "center",     
    },
    number : {
       fontSize : 30,
       color : "skyblue"
    },
    buttonContainer : {
        flexDirection : "row",
        width : '100%',
        marginTop : 30,
        justifyContent : 'space-around'
    },
    listContainer : {
        flex : 1,
        width : '50%',
        alignSelf : 'center',
        margin : 10,
        flexDirection : 'column-reverse'
    },
    scrollStyle : {
        flexGrow : 1,
        flexDirection : 'column-reverse'
    },
    
    listItemContainer : {
        borderWidth : 0.5,
        borderRadius : 10,
        marginTop : 5,
        height : '15%',
        width : '100%',
        alignSelf : "center",
        alignItems : "center" ,
        flexDirection : "row",
        justifyContent : "space-around"   
    }

})

export default StartGameScreen;