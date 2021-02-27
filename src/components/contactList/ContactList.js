import React from 'react';
import styles from './Contact.module.css';

const ContactList = ({ contacts }, value, onChange) => (
    contacts.length !== 0 && (
        <ul className={styles.list}>
            {contacts.map(({ name, number }) => (
                <li key={name} className={styles.item}>
                    <p className={styles.text}>{name}: {number}</p>
                    <button
                        type="button"
                        className={styles.button}
                    >
                        Delete</button>
                </li>
            ))}
        </ul>
    )
);

export default ContactList;
