import React, { Component } from "react";
import { nanoid } from "nanoid";
import Box from "./Box";
import initialContacts from 'contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    name: '',
    number: '',
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

  handleSubmit = e => {
    e.preventDefault();

    this.addContact(this.state.name, this.state.number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    })
  };

  handleInput = ({ target: { name, value } }) => {
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value,
    });
  };
  
  render() {

    const filteredContacts =
      this.state.contacts.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(
            this.state.filter
              .trim()
              .toLowerCase()));

    return (
      
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInput}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInput}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
            <label>
              Find contacts by name
              <input
                type="text"
                name="filter"
                value={this.state.filter}
                onChange={this.handleInput}
              />
          </label>
        <ul>
          {
            filteredContacts.map(contact => (
              <li
                key={contact.id}
              >
                {contact.name}: {contact.number}</li>
            ))
          }
        </ul>
      </div>
    );
  };
  
};

export default App;