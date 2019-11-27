import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import photoReducer from '../reducers/rootReducer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './tabs/Home/index';
import CameraExample from './tabs/Camera/index';
import Results from './tabs/Results/index';
import PhotoScreen from './tabs/Results/photoScreen/index';

const TabConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="igloo" size={30} color={tintColor} />
      )
    }
  },
  CameraExample: {
    screen: CameraExample,
    navigationOptions: {
      tabBarLabel: 'Camera',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="camera-retro" size={30} color={tintColor} />
      )
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="poll" size={30} color={tintColor} />
      )
    }
  },
}

const TabStyleConfig = {
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    tintColor: '#333',
    activeTintColor: 'red',
  },
}

const PhotoNavigator = createStackNavigator({
  PhotoScreen: {
    screen: PhotoScreen,
  },
});

const TabNavigator = createBottomTabNavigator(TabConfig, TabStyleConfig);

const AppNavigator = createSwitchNavigator({
  Tabs: {
    screen: TabNavigator,
  },
  Photos: {
    screen: PhotoNavigator,
  },
});

const Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    const store = createStore(photoReducer);
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}