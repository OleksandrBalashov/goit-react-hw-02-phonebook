import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/contactForm';
import Layout from './components/layout';
import FilterContacts from './components/filterContacts';
import ContactList from './components/contactList';

export default class App extends Component {
    state = {
        // contacts: [],
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    };

    addContact = (contact) => {
        this.setState(prevState => ({ contacts: [...prevState.contacts, { id: uuidv4(), ...contact }] }))
    };

    handleFilterChange = (e) => {
        const { value } = e.currentTarget;

        this.setState({ filter: value });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter));
    };

    render() {
        const { contacts, filter } = this.state;
        const getVisibleContacts = this.getVisibleContacts();

        return (
            <Layout>
                <h1 className="app__title">Phonebook</h1>
                <ContactForm onSubmitForm={this.addContact} />
                {contacts.length !== 0 && (
                    <>
                        <h2 className="app__title contacts__title">Contacts</h2>
                        <FilterContacts value={filter} onChange={this.handleFilterChange} />
                        <ContactList contacts={getVisibleContacts} />
                    </>
                )
                }
            </Layout>
        );
    };
};
