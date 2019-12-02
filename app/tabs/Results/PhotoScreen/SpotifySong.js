import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Layout } from 'react-native-ui-kitten';
import { Linking } from 'expo';

class SpotifySong extends React.Component {
  render() {
        return(
            <Layout style={styles.container}>
                <TouchableOpacity 
                    onPress={() => {
                        Linking.openURL(this.props.trackUrl);
                    }}>
                    <Image source={{uri: this.props.image}} style={styles.coverArt}></Image>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.artist}>by: {this.props.artist}</Text>
                </TouchableOpacity>
            </Layout>
        );
    }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center'
    },
    coverArt: {
        height: .6 * height,
        width: .8 * width,
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontWeight: '300',
    },
    artist: {
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
    }
});

export default SpotifySong;