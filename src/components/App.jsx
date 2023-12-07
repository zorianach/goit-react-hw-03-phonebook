import { Component } from "react";
import AddContactForm from "./Forms/AddContactForm";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
import data from '../components/contacts.json'
import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
    ],
    filter: '',
  }

  componentDidMount() {
		const localData = localStorage.getItem('contacts')
		if (localData && JSON.parse(localData).length > 0) {
			this.setState({
				todo: JSON.parse(localData),
			})
		} else
			this.setState({
				contacts: data,
			})
	}
  // createContactList = (data) => {
	// 	const newList = {
	// 		...data,
	// 		id: nanoid(),
	// 	}
	// 	const isDuplicated = this.state.contacts.find((el) => el.name === data.name)
	// 	if (isDuplicated) return
	// 	this.setState((prev) => ({
	// 		contacts: [...prev.contacts, newList],
	// 	}))
  //   console.log(this.state)
  // }

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    this.state.contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        Notify.failure(`${name}: is already in contacts`, {
          position: 'top-center',
          timeout: 5000,
          width: '400px',
          fontSize: '24px'
      });
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact], 
    }));
    // console.log(contact)
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state)
  };
  
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render(){ 
    const {filter} = this.state;
    const filteredContacts = this.filteredContacts();

  return (
    <>
    <Section title="Phonebook">
      <AddContactForm onSubmit={this.addContact}/>
    </Section>
    <Section title="Contacts">
      <Filter value={filter} onChange={this.changeFilter}/>
      <ContactList contacts={filteredContacts} onDelete={this.deleteContacts}/>
    </Section>
    </>
  );
};
}

export default App;

   // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>