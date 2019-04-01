import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ViewCart extends React.Component {

 constructor(props) {
    super(props);
    this.state = { count: 1 }
 }
    decrement() {
        const { count } = this.state;
        this.setState({count: count--});
    }

    increment() {
        const { count } = this.state;
        this.setState({count: count++});
    }

    isCountZero() {
        return this.state.count !== 1;
    }

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
            <Image style={styles.cart} source={require('./../../images/tomato.jpg')} />
            <TouchableHighlight style={styles.itemDiv}>
                <Text style={styles.itemText}> Tomatoes</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.itemDiv}>
                <Text onPress={() => {this.decrement()}} editable={this.isCountZero()} style={styles.minus}>  - </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.quantity}>
                <Text> {this.state.count} KG </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.itemDiv}>
                <Text onPress={() => {this.increment()}}  style={styles.minusRight}> +</Text>
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
itemList: {
    flexDirection: 'row',
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
},
quantity: {
    left: 30,
},
minus: {
    color:'black',
    justifyContent: 'flex-end',
    left: 20,
    height: 30,
    width: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    fontSize: 25,
  },
minusRight: {
    color:'black',
    justifyContent: 'flex-end',
    left: 40,
    height: 30,
    width: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    fontSize: 25,
  }
});
