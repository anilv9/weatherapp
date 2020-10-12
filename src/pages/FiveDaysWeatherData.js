import React, { useEffect } from 'react';
import { DATA_LOAD_STATUS } from "store/constants";
import { useSelector, useDispatch } from 'react-redux';
import Page from "components/Page";
import Button from 'components/Button';
import Throbber from "components/Throbber";
import Temprature from "components/Temprature";
import { getWeatherDetailsState } from 'store/weatherDetailsSelector';
import * as actions from 'store/weatherDetailsActions';
import styles from './FiveDaysWeatherData.module.css';



function FiveDaysWeatherData({ history, match }) {
    const { status, data = { forecast: [] }, message } = useSelector(getWeatherDetailsState);
    const cityName = decodeURI(match.params.cityName);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === DATA_LOAD_STATUS.INITIAL) {
            dispatch(actions.setCurrentCityAction(cityName));
            dispatch(actions.loadCityWeatherDetailsAction(cityName));
        }
    }, [cityName, dispatch, status])

    const goBack = (event) => {
        event.preventDefault();
        history.goBack();
    }
    return <Page>
        {status === DATA_LOAD_STATUS.DATA_LOADING && <Throbber />}
        <Button onClick={goBack}>&#8592; Back</Button>
        <h3 className={styles.title}>Five days weather data for {data.name}</h3>
        {status === DATA_LOAD_STATUS.DATA_LOAD_ERROR && <p><br />{message}</p>}
        <div className={styles.dataGrid}>
            <h4>Date</h4>
            <h4>Temprature</h4>
            <h4>Feels</h4>
            {
                data.forecast.map(dayData => <React.Fragment key={dayData.Date}>
                    <h4>{dayData.Date}</h4>
                    <h4><Temprature temprature={dayData.temprature} /></h4>
                    <h4><Temprature temprature={dayData.feels} /></h4>
                </React.Fragment>)
            }
        </div>
    </Page>
}

export default FiveDaysWeatherData;