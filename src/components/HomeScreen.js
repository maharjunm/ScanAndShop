import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class HomeScreen extends React.Component {

    navigateToScanScreen(event) {
        const {navigate} = this.props.navigation;
        navigate('ScanScreen', {});
    }

    navigateToViewCart(event) {
        const {navigate} = this.props.navigation;
        navigate('ViewCart', {});
    }

  render() {
    return (
    <View style={{flex: 1, flexDirection:'column'}}>
        <View >
            <Image
              style={styles.header}
              source={require('./../../images/logo.png')}
            />
         </View>
         <View style={styles.footer}>
            <TouchableHighlight style={styles.bottomButtons}>
                <Text onPress={(event) => {this.navigateToScanScreen(event)}} style={styles.footerText}>Scanner</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bottomButtons}>
                <Text style={styles.footerText}>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bottomButtons}>
                <Text style={styles.footerText}>Favorites</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bottomButtons}>
                <Text onPress={(event) => {this.navigateToViewCart(event)}} style={styles.footerText}>Cart</Text>
            </TouchableHighlight>
         </View>
     </View>
    );
  }
}
var styles = StyleSheet.create({
header: {
  flexDirection:'row',
  height:30,
  left: 10,
  top: 10,
  width: 120
},
footer: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'#3DC5E6',
  flexDirection:'row',
  height:60,
  alignItems:'center',
},
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
  marginBottom: 11,
  flex:1,
},
footerText: {
  color:'black',
  alignItems:'center',
  justifyContent: 'center',
  fontSize:12,
},
textStyle: {
  alignSelf: 'center',
  color: 'orange'
},
scrollViewStyle: {
  borderWidth: 2,
  borderColor: 'blue'
}
});
