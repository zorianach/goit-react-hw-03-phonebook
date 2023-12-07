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
    contacts: null,
    filter: '',
  }

  componentDidMount() {
		const localData = localStorage.getItem('contacts')
		if (localData && JSON.parse(localData).length > 0) {
			this.setState({
				contacts: JSON.parse(localData),
			})
		} else
			this.setState({
				contacts: data,
			})
	}

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts?.length !== this.state.contacts.length)
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))

    if(prevState.contacts?.length > this.state.contacts.length){
this.setState({isDeleted:true})
    }
  }

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
    }), Notify.success(`Contact ${name} has been added to your Contacts`)
    );

  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state)
  };
  
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts && contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = (contactId, name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }), Notify.info(`Contact ${name} has been deleted from your Contacts`)
    );
  };


  render(){ 
    const {filter} = this.state;
    const filteredContacts = this.filteredContacts();
    // console.log(this.state.contacts)

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