import React, { Component } from 'react';
import PostCard from '../components/PostCard';
import {  Content } from 'native-base';

class NewsFeedScreen extends Component {

  render() {
    return (
      <Content>
      <PostCard />
      </Content>
    );
  }

}

export default NewsFeedScreen;
