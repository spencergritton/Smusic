import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text, Layout } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import ClickablePhoto from './ClickablePhoto';
import ResultsHeader from './ResultsHeader';

// Maybe make each possible page a component here
class Results extends React.Component {
  render() {
    if (this.props.photos.photosList.length === 0) {
      return(
        <Layout style={styles.emptyContainer}>
          <Layout>
            <ResultsHeader />
          </Layout>
          <Layout style={styles.emptyContainerCentered}>
            <Text>No photos added. Go take on on the photos menu!</Text>
          </Layout>
        </Layout>
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
        <Layout style={styles.containerWithImages}>
          <ResultsHeader />
          <ScrollView contentContainerStyle={styles.scrollView}>
            {clickablePhotos}
          </ScrollView>
        </Layout>
      );
    }
  }
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1, 
    paddingTop: Constants.statusBarHeight
  },
  emptyContainerCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  containerWithImages: {
    paddingTop: Constants.statusBarHeight,
    minHeight: height,
    flex: 1 
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Constants.statusBarHeight,
    flexWrap: 'wrap',
  },
});

const mapStateToProps = (state) => {
  const { photos } = state
  return { photos }
};

export default connect(mapStateToProps)(Results);