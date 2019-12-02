import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPhoto } from '../../../actions/photos/photosActions';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/FontAwesome5';

class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    flash: 'on',
    photo: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      // This means the directory already exists (which is good)
    });
  }

  takePicture = async () => {
    if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        this.setState({ photo: photo })
    }
  };

  saveAndSendPicture = async () => {
    let directory = `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`
    await FileSystem.moveAsync({
      from: this.state.photo.uri,
      to: directory,
    });

    let savedPhoto = Object.assign({}, this.state.photo);
    savedPhoto.uri = directory;
    this.setState({ photo: null });
    this.props.addPhoto(savedPhoto);

    this.props.navigation.navigate('Results');
  }

  // Split this into components in the future to enhance readability
  render() {
    const { hasCameraPermission, photo } = this.state;
    if (hasCameraPermission === null) {
      return <View/>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
        if (photo == null) {
            return (
                <View style={{ flex: 1 }}>
                  <Camera ref={ref => {
                    this.camera = ref;
                    }}
                    style={{ flex: 1 }} 
                    type={this.state.type} 
                    flashMode={this.state.flash}
                    >
                      <View style={styles.cameraUtilities}>
                        <TouchableOpacity
                            onPress={() => {
                            this.setState({
                                type:
                                this.state.type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                            });
                            }}>
                            <Icon name="sync" size={30} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => {
                            if (this.state.flash == 'off') {
                              this.setState({ flash: 'on' });
                            }
                            else if (this.state.flash == 'on') {
                              this.setState({ flash: 'off' });
                            }
                        }}>
                            <Icon name='bolt' style={this.state.flash == 'on' ? styles.iconFlash : styles.iconFlashRed} size={30} />
                        </TouchableOpacity>
                      </View>
        
                      <View style={styles.cameraButton}>
                        <TouchableOpacity
                            onPress={() => {
                                this.takePicture()
                            }}>
                            <Icon name='circle' color='white' size={60} />
                        </TouchableOpacity>
                      </View>
        
                  </Camera>
                </View>
              );
        } else {
            let {height, width} = Dimensions.get('window');
            return(
                <ImageBackground source={{uri: this.state.photo.uri}} style={{height: height-24, width: width}} >
                    <View style={styles.cameraConfirm}>
                        <TouchableOpacity
                                onPress={() => {
                                    this.setState({ photo: null })
                                }}>
                                <Icon name='times' size={30} style={styles.iconConfirm} />
                        </TouchableOpacity>
                        <TouchableOpacity
                                onPress={() => {
                                    this.saveAndSendPicture()
                                }}>
                                <Icon name='check' size={30} style={styles.iconConfirm} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            );
        }
    }
  }
}

const styles = StyleSheet.create({
    icon: {
      color: 'white',
      paddingEnd: 10,
    },
    iconFlash: {
      color: 'white',
      paddingTop: 15,
      paddingEnd: 12,
    },
    iconFlashRed: {
        color: 'red',
        paddingTop: 15,
        paddingEnd: 12,
    },
    iconConfirm: {
        color: 'white',
        paddingHorizontal: 12,
    },
    cameraButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    cameraUtilities: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingTop: Constants.statusBarHeight
    },
    cameraConfirm: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: Constants.statusBarHeight
    },
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addPhoto,
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(CameraScreen);