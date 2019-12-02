import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import Constants from 'expo-constants';
import HomeHeader from './HomeHeader';

export default class Home extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <HomeHeader />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  }
});