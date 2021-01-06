import React from 'react';
import {Ionicons } from '@expo/vector-icons';


const Icons = (props) => {

   return <Ionicons name={props.name} size={100} color={props.color} />
}

export default Icons;