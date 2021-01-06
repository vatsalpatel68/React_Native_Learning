import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {Styles.container}>
      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'pink',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>1</Text>
      </View>

      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>2</Text>
      </View>
      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'pink',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>3</Text>
      </View>

      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>4</Text>
      </View>
      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'pink',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>5</Text>
      </View>

      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>6</Text>
      </View>

      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'pink',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>7</Text>
      </View>

      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>8</Text>
      </View>
      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'pink',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>9</Text>
      </View>

      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>10</Text>
      </View>
      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'pink',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>11</Text>
      </View>

      <View style = {{
        height : "25%",
        width : "33.33%",
        backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>12</Text>
      </View>
      
    </View>
  );
}




const Styles = StyleSheet.create({
  container : {
    width : "90%" ,
    height : "90%" ,
    marginTop : "10%",
    marginLeft : "5%",
    marginRigth : "5%",
    flexDirection : "row",
    flexWrap : "wrap"
  }
})