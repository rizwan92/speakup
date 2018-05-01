import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import ContactNumberScreen from './screens/ContactNumberScreen';
import NameScreen from './screens/NameScreen';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

const ModalStack = StackNavigator({
  ContactNumberScreen: {
    screen: ContactNumberScreen,
    navigationOptions: {
      header:null
    },
  },
  NameScreen: {
    screen: NameScreen,
    navigationOptions: {
      header:null
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:null
    },
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: {
      header:null
    },
  },
  });

export default class App extends Component {
  render() {
    return (
    <ModalStack />
    );
  }
}
