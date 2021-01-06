import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import React from 'react';
import { Transition } from 'react-native-reanimated';

//Import the components.
import  First  from '../components/first';
import  Second  from '../components/second';
import  Third  from '../components/third';
import Fourth from '../components/fourth';

/*
const navigator1 = createStackNavigator({
    first : {
        screen : First
    },
    second : {
        screen : Second
    },
    third : {
        screen : Third
    },
    fourth : {
        screen : Fourth
    }
    
})
*/


const MySwitch = createAnimatedSwitchNavigator(
    {
      first: First,
      second: Second,
      third : Third,
      fourth : Fourth
    },
    {
      // The previous screen will slide to the bottom while the next screen will fade in
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    }
  );

const Appcontainer = createAppContainer(MySwitch);
export default Appcontainer;