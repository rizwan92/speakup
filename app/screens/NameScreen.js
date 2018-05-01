import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { Container, Header, Content, Item, Input, Form, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class NameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
    };
    this.onPressNext = this.onPressNext.bind(this)
  }

  onPressNext(){
    if (this.state.name === '') {
      ToastAndroid.show('Please Enter Name', ToastAndroid.SHORT);
    }else {
      this.props.navigation.navigate("ContactNumberScreen",{name:this.state.name})
    }
  }

  render() {
    return (
        <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Form>
             <Item rounded style={styles.input}>
               <Input placeholder="Enter Your Name"    onChangeText={(name) => this.setState({name:name})}/>
             </Item>
             <Button rounded info style={styles.button} >
               <TouchableOpacity onPress={this.onPressNext} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <Icon name="arrow-right" size={30} color="#ffffff" />
                </TouchableOpacity>
              </Button>
           </Form>
        </ScrollView>
    );
  }

}

export default NameScreen;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input:{
    width:DEVICE_WIDTH-80,
    borderColor:'blue',
    marginTop:20,
 },
  button:{
    width:50,
    padding:0,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
 },
})
