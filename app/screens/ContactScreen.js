import React, { Component } from 'react';
import { ScrollView ,ActivityIndicator, View, FlatList, ToastAndroid, TouchableOpacity} from 'react-native';
var Contacts = require('react-native-contacts')
import { Container, Header, Content, Text, Left, Body, Right, ListItem, Badge, Title} from 'native-base';
import ContactCard from '../components/ContactCard';
import Icon from 'react-native-vector-icons/FontAwesome';

class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts:[],
      selectedcontacts:[],
      mysize:60,
    };
    this.addcontacts = this.addcontacts.bind(this)
    this.removecontacts = this.removecontacts.bind(this)
    this.onEndReact = this.onEndReact.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  addcontacts(newcontact){
     let selectedcontacts = this.state.selectedcontacts;
      selectedcontacts.push(newcontact);
      this.setState({selectedcontacts})
  }
  removecontacts(oldcontact){
    let selectedcontacts = this.state.selectedcontacts;
    contactremoved = selectedcontacts.filter(function(el) {
        return el.recordID !== oldcontact.recordID;
    });
    this.setState({selectedcontacts:contactremoved})
  }

  componentWillMount() {
    Contacts.getAll((error,result)=>{
      this.setState({contacts:result})
    })
  }
  onEndReact(){
    let fullsize = this.state.contacts.length
    let oldsize = this.state.mysize
    let newsize = oldsize + 60
    if (newsize >= fullsize) {
      this.setState({mysize:fullsize})
    }else {
      this.setState({mysize:newsize})
    }

  }
  _renderItem = ({item}) => (
    <ContactCard item={item} addcontacts={this.addcontacts} removecontacts={this.removecontacts}/>
  );
  handleNext(){
    let next = this.state.selectedcontacts.length+1;
    if (next >= 6 ) {
      this.props.navigation.navigate("HomeScreen")
    }else {
      ToastAndroid.show('You Need To select 5 Contacts First', ToastAndroid.SHORT);
    }
  }
  render() {
    if (this.state.contacts.length == 0) {
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }else {
      var items = this.state.contacts.filter((cont,i)=>{
          if ( i <= this.state.mysize-1  ) {
            return cont;
          }
      })
      let mydata = [...items]
      let next = this.state.selectedcontacts.length+1;
      return (
        <Container>
         <Header  backgroundColor="#2196F3" androidStatusBarColor="#000000">
          <Left/>
          <Body>
            <Title>Invitation</Title>
          </Body>
          <Right >
          <TouchableOpacity onPress={this.handleNext}>
          <Icon name="arrow-right" size={24} color={ next >= 6 ? "#ffffff" : "grey" } />
          </TouchableOpacity>
          </Right>
        </Header>
         <ListItem itemDivider style={{borderWidth:1}}>
          {
            this.state.selectedcontacts.length == 0 ?
            <Text>Select Any 5 Contacts to go further</Text>
            :
            <ScrollView style={{height:40}} horizontal={true} >
            {
              this.state.selectedcontacts.map((contact,i)=>{
                return(
                  <Badge key={i} style={{ backgroundColor: 'black',width:70,marginLeft:5}} >
                  <Text style={{ color: 'white'}}>{contact.givenName}</Text>
                  </Badge>
                )
              })
            }
          </ScrollView>
          }
           </ListItem>

         <FlatList
           data={mydata}
          keyExtractor={(item, index) => item.recordID}
           initialNumToRender={30}
           renderItem={this._renderItem}
           getItemLayout={(outfits, index) => (
              { length: 40, offset: 40 * index, index }
           )}
          onEndReached={this.onEndReact}
          onEndReachedThreshold={20}
           />

       </Container>
      );
    }
  }
}

export default ContactScreen;
