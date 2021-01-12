import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
  
     index:IndexScreen,
     show:ShowScreen,
     create:CreateScreen,
     edit:EditScreen
     
  }, 
{
  initialRouteName:'index',
  defaultNavigationOptions:{
    title:'Blog'
  }
}
);

const App =  createAppContainer(navigator);

export default  () => {
  
  return <Provider>
          <App/>
        </Provider>
  
}
