import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/contactForm';
import Layout from './components/layout';
import ContactList from './components/contactList';

export default class App extends Component {
    state = {
        contacts: [],
    };

    addContact = (contact) => {
        this.setState(prevState => ({ contacts: [...prevState.contacts, {id: uuidv4(), ...contact}] }))
    };

    render() {
        const { contacts } = this.state;
        return (
            <Layout>
                <h1 className="app__title">Phonebook</h1>
                <ContactForm onSubmitForm={this.addContact} />
                <ContactList contacts={contacts} />
            </Layout>
        )
    };
};
