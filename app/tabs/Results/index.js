import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import ClickablePhoto from './clickablePhoto';

class Results extends React.Component {
  render() {
    if (this.props.photos.photosList.length === 0) {
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text >
            No photos defined, go take one in the photo menu!
          </Text>
        </View>
      );
    } else {
      let photosList = this.props.photos.photosList;
      let clickablePhotos = [];
      for (let index in photosList) {
        clickablePhotos.push(
          <ClickablePhoto photo={photosList[index]} key={photosList[index].uri} />
        );
      }
      return (
        <View>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {clickablePhotos}
          </ScrollView>
        </View>
      );
    }
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

const mapStateToProps = (state) => {
  const { photos } = state
  return { photos }
};

export default connect(mapStateToProps)(Results);