import { ACTION_TYPES } from './weatherDetailsReducer';
import { DATA_LOAD_STATUS } from './constants';
import { getWeatherData } from 'services/weatherServices';

export function loadCityWeatherDetailsAction(cityName) {
    return async (dispatch) => {
        dispatch(setStatusAction(DATA_LOAD_STATUS.DATA_LOADING));
        try {
            const { success, ...cityData } = await getWeatherData(cityName);
            dispatch(setWeatherDetailsAction(cityData));
        } catch (err) {
            dispatch(setErrorAction('Unable to fetch weather details for ' + cityName))
        }
    }
}

export function setCurrentCityAction(cityName) {
    return {
        type: ACTION_TYPES.SET_CURRENT_CITY,
        cityName
    }
}

export function setStatusAction(status) {
    return {
        type: ACTION_TYPES.SET_STATUS,
        status
    }
}

export function setWeatherDetailsAction(cityData) {
    return {
        type: ACTION_TYPES.SET_WEATHER_DETAILS,
        data: cityData
    }
}

export function setErrorAction(errorMessage) {
    return {
        type: ACTION_TYPES.SET_ERROR,
        errorMessage
    }
}