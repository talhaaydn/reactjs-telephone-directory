import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css'
import Contacts from "./Components/Contacts";

class App extends Component {
  state = {
    contacts: [
        { id: 1, name: "Talha AYDIN", phone: "0533 555 33 66" },
        { id: 2, name: "John Doe", phone: "0541 536 11 11" }
    ]
  }
  
  addContact = contact => {
    const { contacts } = this.state;
    contacts.push(contact);

    this.setState({
      contacts
    });
  }

  render() {
    return (
      <div className="App ui container" style={{ marginTop: '10px' }}>
        <Contacts
          contacts={this.state.contacts} 
          addContact={this.addContact} />
      </div>
    );
  }

}

export default App;
