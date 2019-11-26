import React from 'react';
import { Text, View, Button } from 'react-native';

class Index extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/*
        <Button
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
        <Button
          title="Go to Machine Learning"
          onPress={() => this.props.navigation.navigate('MachineLearning')}
        />
        <Button
          title="Go to Spotify"
          onPress={() => this.props.navigation.navigate('Spotify')}
        />
        */}
      </View>
    );
  }
}

export default Index;