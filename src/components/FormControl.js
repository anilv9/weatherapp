import React, { useState } from 'react';
import Button from './Button';
import styles from './FormControl.module.css';


function FormControl({ showCityDetails }) {
    const [city, setCity] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        showCityDetails(city);
    }
    return (
        <form className={styles.root} onSubmit={onSubmit}>
            <label>Enter city</label>
            <input type="text" name="name" onChange={e => setCity(e.target.value)} placeholder="Enter city" />
            <Button onClick={onSubmit} data-testid="searchCityBtn">Submit</Button>
        </form>
    )
}

export default FormControl;