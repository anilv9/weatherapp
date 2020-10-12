import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { DATA_LOAD_STATUS } from './constants';
import weatherDetailsreducer, { sliceName } from './weatherDetailsreducer';
import * as actions from './weatherDetailsActions';
import * as selectors from './weatherDetailsSelector';
import * as weatherServices from 'services/weatherServices';

const rootReducer = combineReducers({
    [sliceName]: weatherDetailsreducer
});

const middlewares = [thunk];
const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
);

const LAWeatherData = {
    name: 'Los Angeles',
    forecast: [
        { Date: '04/05/2019', Time: '2.59pm', temprature: 67, feels: 50 },
        { Date: '04/06/2019', Time: '2.59pm', temprature: 77, feels: 65 },
        { Date: '04/07/2019', Time: '2.59pm', temprature: 65, feels: 54 },
        { Date: '04/08/2019', Time: '2.59pm', temprature: 71, feels: 60 },
        { Date: '04/09/2019', Time: '2.59pm', temprature: 78, feels: 75 }
    ],
    currentDate: '04/05/2019'
}

describe('weatherDetailsreducer should return next state properly on', () => {
    test('SET_STATUS action', () => {
        store.dispatch(actions.setStatusAction(DATA_LOAD_STATUS.DATA_LOADING));
        expect(selectors.getStatus(store.getState())).toEqual(DATA_LOAD_STATUS.DATA_LOADING);
    })
    test('SET_WEATHER_DETAILS action', () => {
        store.dispatch(actions.setWeatherDetailsAction(LAWeatherData));
        store.dispatch(actions.setCurrentCityAction(LAWeatherData.name));
        expect(selectors.getWeatherDetails(store.getState())).toEqual(LAWeatherData);
        expect(selectors.getWeatherDetailsState(store.getState()).data).toEqual(LAWeatherData)
    })
    test('SET_ERROR action', () => {
        const errorMessage = 'Some error occured';
        store.dispatch(actions.setErrorAction(errorMessage));
        expect(selectors.getMessage(store.getState())).toEqual(errorMessage);
        expect(selectors.getStatus(store.getState())).toEqual(DATA_LOAD_STATUS.DATA_LOAD_ERROR);
    })
    test('loadCityWeatherDetailsAction', async () => {
        jest.spyOn(weatherServices, 'getWeatherData').mockResolvedValueOnce(LAWeatherData);
        await store.dispatch(actions.loadCityWeatherDetailsAction(LAWeatherData.name));
        expect(selectors.getStatus(store.getState())).toEqual(DATA_LOAD_STATUS.DATA_LOADED);
    })
    test('loadCityWeatherDetailsAction on error', async () => {
        jest.spyOn(weatherServices, 'getWeatherData').mockRejectedValueOnce({});
        await store.dispatch(actions.loadCityWeatherDetailsAction(LAWeatherData.name));
        expect(selectors.getStatus(store.getState())).toEqual(DATA_LOAD_STATUS.DATA_LOAD_ERROR);
    })
})