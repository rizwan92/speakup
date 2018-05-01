import React, { Component } from 'react';
import { Container, Header, Content,Footer, FooterTab, Title, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewsFeedScreen from './NewsFeedScreen';
import MyFavouriteScreen from './MyFavouriteScreen';
import AddPostScreen from './AddPostScreen';
import ProfileScreen from './ProfileScreen';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
     screenstate: 4,
    };
  }

  render() {
      const { navigate } = this.props.navigation;
    return (
      <Container>
      <Header backgroundColor="#2196F3" androidStatusBarColor="#000000">
        <Body>
          <Title style={{color:'#ffffff'}}>Speak Up</Title>
        </Body>
        <Right />
      </Header>

      {
        this.state.screenstate == 1 ? <NewsFeedScreen  navigation={this.props.navigation}/>
         :
         this.state.screenstate == 2 ? <MyFavouriteScreen posts={this.props.posts} navigation={this.props.navigation} />
         :
         this.state.screenstate == 3 ? <AddPostScreen navigation={this.props.navigation} />
         :
         this.state.screenstate == 4 ? <ProfileScreen navigation={this.props.navigation} />
         :
         null
      }

      <Footer >
        <FooterTab style={{backgroundColor:'#2196F3'}}>
          <Button  active={this.state.screenstate == 1 ? true : false} onPress={()=>{this.setState({screenstate:1})}}>
            <Icon name="newspaper-o" size={24} color={this.state.screenstate == 1 ? "#000000" : "#ffffff" }/>
          </Button>
          <Button  active={this.state.screenstate == 2 ? true : false} onPress={()=>{this.setState({screenstate:2})}}>
            <Icon name="heart-o"  size={24}color={this.state.screenstate == 2 ? "#000000" : "#ffffff" } />
          </Button>
          <Button  active={this.state.screenstate == 3 ? true : false} onPress={()=>{this.setState({screenstate:3})}}>
            <Icon active name="plus-square-o"  size={24} color={this.state.screenstate == 3 ? "#000000" : "#ffffff" }/>
          </Button>
          <Button  active={this.state.screenstate == 4 ? true : false} onPress={()=>{this.setState({screenstate:4})}}>
            <Icon name="user-o"  size={24} color={this.state.screenstate == 4 ? "#000000" : "#ffffff" } />
          </Button>
        </FooterTab>
      </Footer>
    </Container>

    );
  }

}

export default HomeScreen;
