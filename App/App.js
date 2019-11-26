import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './Tabs/Index';
import CameraPage from './Tabs/Camera/CameraPage';
// import * as tf from '@tensorflow/tfjs';

const RootStack = createStackNavigator(
  {
    Index: Index,
    Camera: CameraPage,
  },
  {
    initialRouteName: 'Index',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}