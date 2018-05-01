import React, { Component } from 'react';
import { Item, Text, Left, Right, Title, Body,  Card, CardItem, Thumbnail, Button,Image } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableOpacity,
} from 'react-native';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');


class PostCard  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play:false,
      audioload:false,
    };
    this.whoose = null ;
  }

  prepareToPlay(){
    if (this.state.play) {
      this.setState({play:false})
      this.whoose.pause();
    }else {
      this.setState({play:true},()=>{
        this.setState({audioload:true})
        if (this.whoose == null ) {
          this.whoose = new Sound('https://message-hosting-mobilehub-2133437836.s3.amazonaws.com/files%2Ftest.aac', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
        console.log('duration in seconds: ' + this.whoose.getDuration() + 'number of channels: ' + this.whoose.getNumberOfChannels());
        this.setState({audioload:false})
            this.whoose.play((success) => {
                  if (success) {
                  console.log('successfully finished playing');
                  this.whoose.release();
                  this.whoose = null;
                  this.setState({play:false})
                  } else {
                  console.log('playback failed due to audio decoding errors');
                  this.whoose.reset();
                  }
                });
              })
            }else {
              this.whoose.play();
            }
        });
    }
  }

  render() {

    return (
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://avatars3.githubusercontent.com/u/19162978?s=460&v=4'}} />
            <Body>
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Left style={{}}>
          {
            this.state.audioload ?
            <Text>Loading ...</Text>
            :
            <Text>My Audio File</Text>
          }
          </Left>
          <Body style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity  onPress={this.prepareToPlay.bind(this)}>
            {
              this.state.play ?
              <Icon name="pause" size={32} color="#000000"/>
              :
              <Icon name="play" size={32} color="#000000"/>
            }
            </TouchableOpacity>
          </Body>
        </CardItem>

        <CardItem>
        <Text style={{fontFamily: 'sans-serif-light',fontSize:14}}>there is some thing wrong with you there is some thing wrong with you there is some thing wrong with you there is some thing wrong with you</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="thumbs-o-up" size={24} />
              <Text>1,926 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }

}

export default PostCard;
