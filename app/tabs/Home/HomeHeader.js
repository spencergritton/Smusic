import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, Layout } from 'react-native-ui-kitten';

class HomeHeader extends React.Component {
    render() {
        return(
            <Layout>
                <Text style={styles.text}>Home Screen</Text>
                <Layout style={styles.breakLine}></Layout>
            </Layout>
        );
    }
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    text: {
        paddingTop: 20,
        fontFamily: 'Helvetica Neue',
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 30,
        width: width
      },
      breakLine: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        margin: 10,
        alignSelf: 'stretch',
        borderBottomColor: 'black'
      },
  });

  
export default HomeHeader;