import React from 'react';

import { Text, View, Button } from 'react-native';


export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
      </View>
    );
  }
}