import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactListElement from './ContactListElement/ContactListElement';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    const ifNameExist = this.state.contacts.some(
      el => el.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (ifNameExist) {
      alert(`${inputValue} is already in contacts.`);
    } else {
      this.setState(state => ({
        contacts: [
          ...state.contacts,
          { name: state.name, number: state.number, id: nanoid() },
        ],
      }));
    }
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = e => {
    console.log(e);
  };

  render() {
    const { contacts, filter } = this.state;
    const filtered = contacts.filter(el =>
      el.name.toLowerCase().includes(filter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList>
          <ContactListElement
            filtered={filtered}
            handleDelete={this.handleDelete}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
