import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Form, Button, Text} from 'native-base';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute
} from 'react-native-aws-cognito-js';

import Icon from 'react-native-vector-icons/FontAwesome';
class ContactNumberScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile:'',
      verify:'',
      condition:false,
    };
    this.onPressNext = this.onPressNext.bind(this)

  }

  onPressNext(){
    let mobile = this.state.mobile;
   // let name = this.props.navigation.state.params.name;
    if ( mobile === '') {
      ToastAndroid.show('Please Enter Number`', ToastAndroid.SHORT);
    }else {
      var pattern = /^\d{10}$/;
        if (pattern.test(mobile)) {
            const appConfig = {
              region: 'ap-south-1',
              IdentityPoolId: 'ap-south-1_RU91HgXry',
              UserPoolId: '',
              ClientId: '',
            }
            // this.props.navigation.navigate("ContactScreen")
        } else {
          ToastAndroid.show('Wrong Mobile Number', ToastAndroid.SHORT);
          return false;
      }
    }
  }

  render() {
    return (
        <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Form>
            {
              this.state.condition ?
              <Item rounded style={styles.input}>
                <Input placeholder="Verify"  keyboardType="numeric"  onChangeText={(verify) => this.setState({verify},()=>{console.log(verify);})}/>
              </Item>
              :
              <Item rounded style={styles.input}>
                <Input placeholder="Contact Number"  keyboardType="numeric"  onChangeText={(mobile) => this.setState({mobile},()=>{console.log(mobile);})}/>
              </Item>
            }



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

export default ContactNumberScreen;

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
    alignItems:'center'
 },
})
