import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import photoReducer from './reducers/rootReducer';
import NavigationService from './app/NavigationService'
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout } from 'react-native-ui-kitten';
import { mapping, dark } from '@eva-design/eva';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import Home from './app/tabs/Home/Home';
import CameraScreen from './app/tabs/Camera/CameraScreen';
import Results from './app/tabs/Results/Results';
import PhotoScreen from './app/tabs/Results/PhotoScreen/PhotoScreen';

const TabConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    }
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: {
      tabBarLabel: 'Camera',
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
    }
  },
}

// Add these later
const HomeIcon = (style) => (
  <Icon {...style} name='igloo'/>
);

const CameraIcon = (style) => (
  <Icon {...style} name='camera-retro'/>
);

const ResultsIcon = (style) => (
  <Icon {...style} name='poll'/>
);

const TabBarComponent = ({ navigation }) => {

  const onSelect = (index) => {
    const { [index]: selectedTabRoute } = navigation.state.routes;
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <Layout>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
        <BottomNavigationTab title='Home' />
        <BottomNavigationTab title='Camera' />
        <BottomNavigationTab title='Images' />
      </BottomNavigation>
    </Layout>
  );
};

const PhotoNavigator = createSwitchNavigator({
  PhotoScreen: {
    screen: PhotoScreen,
  },
});

const TabNavigator = createBottomTabNavigator(
  TabConfig, {
  tabBarComponent: TabBarComponent,
});

const AppNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      }
    },
    Photos: {
      screen: PhotoNavigator
    }
  }, {
    headerMode: 'none',
  }
);

const Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    const store = createStore(photoReducer);
    return (
      <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={dark}>
          <Navigation ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
            }}/>
        </ApplicationProvider>
      </Provider>
    );
  }
}