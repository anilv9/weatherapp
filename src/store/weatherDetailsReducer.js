import { DATA_LOAD_STATUS } from './constants';
export const initialState = {
    status: DATA_LOAD_STATUS.INITIAL,
    currentCityName: '',
    data: {

    },
    message: ''
}

export const sliceName = 'weatherDetails';

export const ACTION_TYPES = {
    SET_WEATHER_DETAILS: 'SET_WEATHER_DETAILS',
    SET_CURRENT_CITY: 'SET_CURRENT_CITY',
    SET_STATUS: 'SET_STATUS',
    SET_ERROR: 'SET_ERROR'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case ACTION_TYPES.SET_WEATHER_DETAILS: {
            return {
                ...state,
                status: DATA_LOAD_STATUS.DATA_LOADED,
                data: {
                    ...state.data,
                    [action.data.name.toLowerCase()]: action.data
                }
            }
        }
        case ACTION_TYPES.SET_CURRENT_CITY: {
            return {
                ...state,
                currentCityName: action.cityName.toLowerCase()
            }
        }
        case ACTION_TYPES.SET_ERROR: {
            return {
                ...state,
                status: DATA_LOAD_STATUS.DATA_LOAD_ERROR,
                message: action.errorMessage
            }
        }
        default:
            return state;
    }
}