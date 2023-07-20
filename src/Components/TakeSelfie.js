import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

export class TakeSelfie extends Component {
  constructor() {
    super();
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.props.handleStepChange(4);
      console.log(data.uri);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../imgs/cameraOverlay.png')}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9,
            resizeMode: 'cover',
          }}
        />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 80,
            left: 0,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            zIndex: 9,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            100%
          </Text>
          <Text style={{fontSize: 14, color: '#fff'}}>verifying your face</Text>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14, color: '#000'}}> Continue </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TakeSelfie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
