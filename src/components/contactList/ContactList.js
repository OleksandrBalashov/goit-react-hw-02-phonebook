import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    contacts.length !== 0 && (
        <ul className={styles.list}>
            {contacts.map(({name, number, id}) => (
                <li key={name} className={styles.item}>
                    <p className={styles.text}>{name}: {number}</p>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete</button>
                </li>
            ))}
        </ul>
    )
);

ContactList.defaultProps = {
    contacts: [],
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func
};

export default ContactList;
