import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from '../Header/Header';
import Section from '../Section/Section';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import { Container } from './App.styled';


function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? "";
});

  const addToList = submitContact => {
    const nameId = nanoid();
    const newContact = {
      id: nameId,
      name: submitContact.name,
      number: submitContact.number,
    };
    setContacts(contacts => [...contacts, newContact ]); 
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addToList} contacts={contacts}/>
        <Header title="Contacts" />
        {/* <Filter value={filter} onChange={changeFilter} /> */}
        {/* <ContactList
            contacts={visibleContacts}
            onDeleteContacts={deleteContacts}
          /> */}
      </Section>
    </Container>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevStage) {
//     if (this.state.contacts !== prevStage.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addToList = (name, number) => {
//     const nameId = nanoid();
//     const { contacts } = this.state;
//     const newContact = {
//       id: nameId,
//       name,
//       number,
//     };

//     if (contacts.find(contact => contact.name === newContact.name)) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };

//   deleteContacts = userId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(user => user.id !== userId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizeFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Container>
//         <Section title="Phonebook">
//           <ContactForm onSubmit={this.addToList} />
//           <Header title="Contacts" />
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             onDeleteContacts={this.deleteContacts}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }

export default App;
