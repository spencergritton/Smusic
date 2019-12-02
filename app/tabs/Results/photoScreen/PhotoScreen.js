import React from 'react';
import { Image, StyleSheet, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { Text, Layout } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import * as SpotifyConfig from '../../../../assets/spotifyConfig';
import { addAuthorization } from '../../../../actions/spotify/spotifyAuthorizationActions';
import { bindActionCreators } from 'redux';
import * as randomTypes from '../../../utilities/randomReturner';
import Constants from 'expo-constants';
import NavigationService from '../../../NavigationService';
import SpotifySong from './SpotifySong';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

class PhotoScreen extends React.Component {
    state = {
        spotifyRequestJson: null,
        classification: randomTypes.returnRandomGenre() // Using this until I figure out how to import TF model
    }

    componentDidMount = () => {
        if (this.props.spotifyAuth.authorizationToken === null) {
            this.generateSpotifyAccessToken().then(
                (data) => {
                    this.requestSpotifyTracks(data['access_token'], this.state.classification).then(
                        (responseJson) =>
                        this.setState({
                            spotifyRequestJson: responseJson
                        })
                    )
                }
            )
        }
    }

    generateSpotifyAccessToken = async() => {
        const Buffer = require("buffer").Buffer;
        const encodedAuth = new Buffer(SpotifyConfig.clientId + ':' + SpotifyConfig.clientSecret).toString('base64');
        let response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + encodedAuth
            },
            body: 'grant_type=client_credentials'
        });
        let data = await response.json();
        return data;
    }

    requestSpotifyTracks = async(authorizationToken, genre) => {
        let response = await fetch('https://api.spotify.com/v1/recommendations?limit=5&market=US&seed_genres=' + genre, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authorizationToken
            },
        });
        let data = await response.json();
        return data;
    }

    render() {
        if (this.state.spotifyRequestJson === null) {
            return(
                <Layout style={styles.loadingContainer}>
                    <ActivityIndicator size='large' />
                    <Text style={{alignSelf:'center'}}>Analyzing your image for the best music</Text>
                </Layout>
            );
        } else {
            // Generate list of SpotifySong components
            const tracks = this.state.spotifyRequestJson['tracks'];
            let listOfSpotifySongObjects = [];
            for (var i=0; i<tracks.length; i++) {
                let songTitle = tracks[i]['name'];
                let artist = tracks[i]['album']['artists'][0]['name'];
                let imageUrl = tracks[i]['album']['images'][0]['url'];
                let trackUrl = tracks[i]['external_urls']['spotify'];
                listOfSpotifySongObjects.push(<SpotifySong title={songTitle} artist={artist} image={imageUrl} trackUrl={trackUrl} key={trackUrl}></SpotifySong>)
            }

            return(
                <Layout style={styles.container}>
                    <Layout style={styles.backHeader}>
                        <TouchableOpacity onPress={() => {
                            NavigationService.navigate('Results');
                        }}>
                            <Icon name="ios-arrow-back" size={40} style={styles.backIcon} />
                        </TouchableOpacity>
                    </Layout>
                    <ScrollView contentContainerStyle={styles.ScrollView}>
                        <Layout style={styles.centeredContainer}>
                            {
                            // this.props.navigation.getParam('photo').uri if photo from previous page is needed
                            }
                            <Image source={randomTypes.returnRandomGif().default} style={styles.dancingGif}/>
                            <Text style={styles.classificationText}>{randomTypes.returnRandomStartingPhrase()}!</Text>
                            <Text>It seems you're in the mood for {this.state.classification} music</Text>
                            <Layout style={styles.breakLine}></Layout>
                        </Layout>
                        <Layout style={styles.centeredContainer}>
                            <Text style={styles.text} style={styles.classificationText}>Try These Songs</Text>
                            <Text style={styles.text}>Recommended by Spotify</Text>
                            {listOfSpotifySongObjects}
                        </Layout>
                    </ScrollView>
                </Layout>
            );
        }
    }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'black'
  },
  centeredContainer: {
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center'
  },
  backHeader: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,

  },
  backIcon: {
    color: 'white',
    paddingRight: 15
  },
  dancingGif: {
    width: width,
    height: height*.6,
    paddingVertical: 10
  },
  text: {
    fontFamily: 'Helvetica Neue',
    textAlign: 'center'
  },
  classificationText: {
    fontSize: 30,
    fontWeight: '100',
    textAlign: 'center',
    paddingTop: 10
  },
  breakLine: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 20,
    alignSelf: 'stretch',
    borderBottomColor: 'black'
  },
  ScrollView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
});

const mapStateToProps = (state) => {
    const { spotifyAuth } = state
    return { spotifyAuth }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addAuthorization,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PhotoScreen);