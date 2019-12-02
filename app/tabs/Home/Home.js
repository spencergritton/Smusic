import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import Constants from 'expo-constants';
import HomeHeader from './HomeHeader';

export default class Home extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Layout>
          <HomeHeader />
        </Layout>
        <Layout style={styles.emptyContainerCentered}>
          <Text>This is a work in progress. Go check out the other menus!</Text>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  emptyContainerCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
});