import React from 'react';
import styles from './Contact.module.css';

const ContactList = ({ contacts }) => (
    contacts.length !== 0 && (<div className={styles.wrap}>
        <h2 className={styles.title}>Contacts</h2>
        <ul className={styles.list}>
            {contacts.map(({ name, number }) => (
                <li key={name}>
                    <p className={styles.text}>{name}: {number}</p>
                </li>
            ))}
        </ul>
    </div>
    )
);

export default ContactList;
