import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DATA_LOAD_STATUS } from "store/constants";
import { getWeatherDetailsState } from 'store/weatherDetailsSelector';
import * as actions from 'store/weatherDetailsActions';
import Page from "components/Page";
import Throbber from "components/Throbber";
import FormControl from 'components/FormControl';
import Button from 'components/Button';
import WeatherDetails from 'components/WeatherDetails';
import styles from './WeatherDetailsPage.module.css';


function WeatherDetailsPage({ history }) {
    const { status, data, message } = useSelector(getWeatherDetailsState);
    const dispatch = useDispatch();

    const openFiveDayData = (event) => {
        event.preventDefault();
        if (data && data.name) {
            history.push(`/five-days-weather/${data.name}`);
        }
    }
    const showCityDetails = (cityName) => {
        dispatch(actions.setCurrentCityAction(cityName));
        dispatch(actions.loadCityWeatherDetailsAction(cityName));
    }
    return (
        <Page>
            {status === DATA_LOAD_STATUS.DATA_LOADING && <Throbber />}
            <FormControl showCityDetails={showCityDetails} />

            {status === DATA_LOAD_STATUS.DATA_LOAD_ERROR && <p><br />{message}</p>}
            <hr className={styles.divider} />
            <div className={styles.fiveDayWeatherBtn}>
                <Button onClick={openFiveDayData} data-testid="5dayweather">5 Day Weather</Button>
            </div>
            <WeatherDetails data={data} />
        </Page>
    )
}

export default WeatherDetailsPage;