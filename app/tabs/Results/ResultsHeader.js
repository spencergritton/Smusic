import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Layout } from 'react-native-ui-kitten';

class ResultsHeader extends React.Component {
    render() {
        return(
            <Layout>
                <Text style={styles.text}>Your Images</Text>
                <Layout style={styles.breakLine}></Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 20,
        fontFamily: 'Helvetica Neue',
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 30,
      },
      breakLine: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        margin: 10,
        alignSelf: 'stretch',
        borderBottomColor: 'black'
      },
  });

  
export default ResultsHeader;