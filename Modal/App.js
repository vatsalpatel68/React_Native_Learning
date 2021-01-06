import { StatusBar } from 'expo-status-bar';
import React , { useState} from 'react';
import { StyleSheet, Text, View  , Modal , Button} from 'react-native';

export default function App() {
  const [isVisible  , changeVisibility ] = useState(false);
  return (
    <View style = {{
      height : '100%',
      justifyContent : 'center',
      width : '50%',
      alignSelf : "center"
    
    }}>

    <Button title = "Show Modal" onPress = {() => changeVisibility(true)}/>
    <Modal visible = {isVisible} animationType = "fade">
    <View  style={styles.container}>
      <Text>This is a Modal example</Text>
      <StatusBar style="auto" />
    </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
