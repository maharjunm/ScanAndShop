'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ToastAndroid
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
      onSuccess(e) {
            ToastAndroid.showWithGravity(
              'Item has been added to the cart',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
            const {navigate} = this.props.navigation;
            navigate('ViewCart', {});
      }

      navigateToViewCart(event) {
          ToastAndroid.showWithGravity(
            'Item has been added to the cart',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          const {navigate} = this.props.navigation;
          navigate('ViewCart', {});
      }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Scan the QR code from here
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text onPress={(event) => {this.navigateToViewCart(event)}}  style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);