import React from 'react';
import { Text , View , Image , StyleSheet } from 'react-native';

const NetworkImage = () => {
    return(
        <View style = {styles.container}>
        <View style={styles.imageContainer}>
            <Image style = {styles.imageStyle} 
            source = {{ uri : 'https://images.search.yahoo.com/search/images?p=summit+image&fr=mcafee&imgurl=http%3A%2F%2Fwww.summitpost.org%2Fimages%2Foriginal%2F450266.jpg#id=11&iurl=http%3A%2F%2Fwww.summitpost.org%2Fimages%2Foriginal%2F450266.jpg&action=click'}}
            />
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    imageContainer : {
      height : 400,
      width : 400,
      borderRadius : 200,
      overflow : "hidden"
    
    },
    imageStyle : {
      height : '100%',
      width : '100%'
    }
  });
export default NetworkImage;