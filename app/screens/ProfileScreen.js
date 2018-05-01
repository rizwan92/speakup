import React, { Component } from 'react';
import { Image , Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileScreen extends Component {
  state = {
   modalVisible: false,
 };

 openModal() {
   this.setState({modalVisible:true});
 }

 closeModal() {
   this.setState({modalVisible:false});
 }
  render() {
    return (
        <Content >
          <Card style={{margin:0,padding:0}}>
            <CardItem>
              <Left style={{}} >
                <TouchableOpacity onPress={this.openModal.bind(this)}>
                <Thumbnail style={{width:150,height:150}}  source={{uri: 'https://avatars3.githubusercontent.com/u/19162978?s=460&v=4'}} />
                </TouchableOpacity>
              </Left>
              <Right style={{height:'100%',alignItems:'flex-start',margin:0,padding:0}}>
              <Text>Rizwan Chouhan</Text>
              <Text note>male</Text>
              <Text>166 Followers</Text>
              <Text>299 follows</Text>
              <TouchableOpacity>
              <Icon name="pencil" size={24} color="#000000" style={{marginTop:10}} />
              </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>

            <TouchableOpacity style={{position:'absolute',top:10,right:10,margin:10}} onPress={this.closeModal.bind(this)} >
            <Icon name="close" size={24} color="#ffffff" style={{marginTop:10,margin:10}} />
            </TouchableOpacity>

            <View style={{height:300,backgroundColor:'#ffffff'}}>
            <Image source={{uri:'https://avatars3.githubusercontent.com/u/19162978?s=460&v=4'}}  style={{flex:1}}/>
            </View>

            </View>
          </Modal>
        </Content>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: 'black',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
