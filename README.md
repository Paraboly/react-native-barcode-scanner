<img alt="React Native Barcode Scanner" src="assets/logo.png" width="1050"/>

[![React Native Barcode Scanner](https://img.shields.io/badge/-React%20Native%20Library%20Boilerplate-lightgrey?style=for-the-badge)](https://github.com/Paraboly/react-native-barcode-scanner)

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-barcode-scanner.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-barcode-scanner)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-barcode-scanner.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-barcode-scanner)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

# Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-barcode-scanner
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-camera": ">= 3.31.0"
```

## Do not forget to add this on Podfile

```swift
pod 'react-native-camera', path: '../node_modules/react-native-camera', subspecs: [
    'TextDetector',
    'FaceDetectorMLKit',
    'BarcodeDetectorMLKit'
  ]
```

# Usage

## Import

```js
import BarcodeScanner from "@paraboly/react-native-barcode-scanner";
```

## Navigation Usage

I suggest you that you the barcode scanner as a new Screen and make it a part of Navigation Service.

```js
<BarcodeScanner />
```

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Barcode Scanner is available under the MIT license. See the LICENSE file for more info.
