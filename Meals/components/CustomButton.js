import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


import { HeaderButton } from 'react-navigation-header-buttons';

const CustomButton = (props) =>{ 
    return(
       <HeaderButton IconComponent = {Ionicons} iconSize = {23} color = "white" {...props}/>
    )

}
export default CustomButton;