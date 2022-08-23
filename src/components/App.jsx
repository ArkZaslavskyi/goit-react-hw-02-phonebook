import React, { Component } from "react";
import { nanoid } from "nanoid";

import Form from "components/Form";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import Box from "components/Box";

import initialContacts from 'contacts.json';
import { PhonebookTitle, PnonebookSubtitle } from "./App.styled";

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  }

  deleteContact = contactId => {
    const { contacts } = this.state;

    const newList = contacts.filter(contact =>
      contact.id !== contactId);
    
    this.setState({
      contacts: [...newList],
    })
  }

  handleInput = ({ target: { name, value } }) => {
      // console.log(name);
      // console.log(value);
      this.setState({
          [name]: value,
      });
  };
  
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(normalizeFilter));
  }

  render() {

    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      
      <Box width={350} ml='auto' mr='auto' border='1px solid' borderColor='gray' p='20px 20px'>

        <PhonebookTitle>Phonebook</PhonebookTitle>

        {/* Form component */}
        <Form
          onSubmit={this.addContact}
          onInput={this.handleInput} />

        <PnonebookSubtitle>Contacts</PnonebookSubtitle>

        {/* Filter component */}
        <Filter
          filter={filter}
          onInput={this.handleInput} />
        
        {/* Contacts list Component */}
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />

      </Box>
    );
  };
  
};

export default App;