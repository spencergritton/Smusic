import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

class PhotoScreen extends React.Component {
  render() {
      console.log(this.props.navigation)
        return(
            <View><Text>{this.props.navigation.getParam('photo').uri}</Text></View>
        );
    }
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Constants.statusBarHeight,
    flexWrap: 'wrap'
  },
});

export default PhotoScreen;