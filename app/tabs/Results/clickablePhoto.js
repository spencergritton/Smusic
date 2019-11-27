import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default class ClickablePhoto extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('here');
            this.props.navigation.navigate('PhotoScreen');
          }}>
          <Image source={{ uri: this.props.photo.uri }} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.emptyView}/>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
      height: height*.4,
      width: width*.4,
    },
    emptyView: {
      height: 10
    }
  });