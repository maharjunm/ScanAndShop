import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ViewCart extends React.Component {

  render() {
    return (
    <View style={{flex: 1, flexDirection:'column'}}>
        <View>
            <Image
              style={styles.header}
              source={require('./../../images/logo.png')}
            />
         </View>
        <View style={styles.footer}>
            <Image style={styles.cart} source={require('./../../images/basket.png')} />
            <TouchableHighlight style={styles.bottomButtons}>
                <Text style={styles.footerText}>Basket</Text>
            </TouchableHighlight>
         </View>
        <View style={styles.item}>
            <Image style={styles.cart} source={require('./../../images/tomato.png')} />
            <TouchableHighlight style={styles.itemDiv}>
                <Text style={styles.itemText}> Tomatoes</Text>
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
cart: {
    height: 30,
    width: 40,
    backgroundColor: 'white'
},
item: {
  top: 70,
  left: 40,
  flexDirection:'row',
  alignItems:'center',
},
footer: {
  top: 40,
  left: 10,
  flexDirection:'row',
  alignItems:'center',
},
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
},
itemDiv: {
  alignItems:'center',
  justifyContent: 'center',
},
footerText: {
  color:'black',
  alignItems:'center',
  left: 5,
  justifyContent: 'center',
  fontSize: 20,
},
itemText: {
  color:'black',
  alignItems:'center',
  left: 5,
  justifyContent: 'center',
  fontSize: 18,
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
