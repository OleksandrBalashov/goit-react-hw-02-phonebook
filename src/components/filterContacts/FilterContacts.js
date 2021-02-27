import React from 'react';
import styles from './FilterContacts.module.css';

const FilterContacts = ({ value, onChange }) => (
    (<label className={styles.label}>
        <p className={styles.text}>Find contacts by name:</p>
        <input
            type="text"
            className={styles.input}
            placeholder=' '
            value={value}
            onChange={onChange}
        />
    </label>)
);

export default FilterContacts;