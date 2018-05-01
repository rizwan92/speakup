import React, { PureComponent } from 'react';
import { Text, Left, Right, Body, CheckBox, List, ListItem} from 'native-base';

class ContactCard  extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked:false
    };
    this.whoose = null ;
    this.onPressCheckBox = this.onPressCheckBox.bind(this)

  }
  addcontacts(newcontact){
    this.props.addcontacts(newcontact)
  }

  removecontacts(oldcontact){
    this.props.removecontacts(oldcontact)
  }


  onPressCheckBox(contact){
    if (this.state.checked) {
      this.removecontacts(contact)
      this.setState({checked:false})
    }else {
      this.addcontacts(contact)
      this.setState({checked:true})
    }
  }


  render() {
    return (
      <List>
        <ListItem icon>
          <Body>
            <Text>{this.props.item.givenName} </Text>
          </Body>
          <Right>
            <CheckBox checked={this.state.checked} style={{marginLeft:10}} onPress={()=>this.onPressCheckBox(this.props.item)}/>
          </Right>
        </ListItem>
      </List>
    );
  }

}

export default ContactCard;
