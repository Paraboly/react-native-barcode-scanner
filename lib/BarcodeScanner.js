import React, { Component } from "react";
import { RNCamera } from "react-native-camera";

export default class BarcodeScanner extends Component {
  render() {
    const { onBarcodeRecognized } = this.props;
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.fullScreen}
        type={RNCamera.Constants.Type.back}
        onGoogleVisionBarcodesDetected={onBarcodeRecognized}
        {...this.props}
      />
    );
  }
}
