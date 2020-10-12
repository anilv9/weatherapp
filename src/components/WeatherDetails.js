import React from 'react';
import Temprature from "components/Temprature";
import styles from './WeatherDetails.module.css';


function WeatherDetails({ data = { forecast: [] } }) {
    const currentDateWeather = data.forecast.find(dayData => dayData.Date === data.currentDate) || {};
    return (<div className={styles.root}>
        <h2 className={styles.title}>Weather details</h2>

        <h3 >City Name</h3>
        <h4>: {data.name || '-'}</h4>

        <h3 >Current Date</h3>
        <h4>: {data.currentDate || '-'}</h4>

        <h3 >Time</h3>
        <h4>:  {data.currentTime || '-'}</h4>

        <h3 >Temprature</h3>
        <h4>: <Temprature temprature={currentDateWeather.temprature || '-'} /></h4>

        <h3 >Feels</h3>
        <h4>: <Temprature temprature={currentDateWeather.feels || '-'} /></h4>
    </div>)
}

export default WeatherDetails;