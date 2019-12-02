import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import NavigationService from '../../NavigationService';

export default class ClickablePhoto extends React.Component {
  render() {
    return (
      <Layout>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('PhotoScreen', { photo: this.props.photo });
          }}>
          <Image source={{ uri: this.props.photo.uri }} style={styles.image} />
        </TouchableOpacity>
        <Layout style={styles.emptyView}/>
      </Layout>
    );
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
      height: height * .4,
      width: width * .35,
      borderRadius: 10
    },
    emptyView: {
      height: 10
    }
  });