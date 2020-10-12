import { sliceName } from './weatherDetailsReducer';

export const getStatus = (state) => state[sliceName].status;
export const getWeatherDetails = (state) => {
    const currentCityName = state[sliceName].currentCityName;
    return state[sliceName].data[currentCityName];
}
export const getMessage = (state) => state[sliceName].message;

export const getWeatherDetailsState = (state) => ({
    status: getStatus(state),
    data: getWeatherDetails(state),
    message: getMessage(state)
})