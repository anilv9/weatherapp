const data = {
    "States": {
        "IL": {
            "currentdate": "04/05/2019",
            "time": "02:59 PM",
            "cities": [{
                "name": "Chicago",
                "forecast": [{
                    "Date": "04/05/2019",
                    "Time": "2.59pm",
                    "temprature": 47,
                    "feels": 40
                },
                {
                    "Date": "04/06/2019",
                    "Time": "2.59pm",
                    "temprature": 57,
                    "feels": 55
                },
                {
                    "Date": "04/07/2019",
                    "Time": "2.59pm",
                    "temprature": 45,
                    "feels": 44
                },
                {
                    "Date": "04/08/2019",
                    "Time": "2.59pm",
                    "temprature": 61,
                    "feels": 50
                },
                {
                    "Date": "04/09/2019",
                    "Time": "2.59pm",
                    "temprature": 68,
                    "feels": 65
                }
                ]
            },
            {
                "name": "Naperville",
                "forecast": [{
                    "Date": "04/05/2019",
                    "Time": "2.59pm",
                    "temprature": 47,
                    "feels": 40
                },
                {
                    "Date": "04/06/2019",
                    "Time": "2.59pm",
                    "temprature": 59,
                    "feels": 54
                },
                {
                    "Date": "04/07/2019",
                    "Time": "2.59pm",
                    "temprature": 47,
                    "feels": 46
                },
                {
                    "Date": "04/08/2019",
                    "Time": "2.59pm",
                    "temprature": 63,
                    "feels": 62
                },
                {
                    "Date": "04/09/2019",
                    "Time": "2.59pm",
                    "temprature": 70,
                    "feels": 68
                }
                ]
            }
            ]
        },
        "NY": {
            "currentdate": "04/05/2019",
            "time": "02:59 PM",
            "cities": [{
                "name": "New York",
                "forecast": [{
                    "Date": "04/05/2019",
                    "Time": "2.59pm",
                    "temprature": 57,
                    "feels": 50
                },
                {
                    "Date": "04/06/2019",
                    "Time": "2.59pm",
                    "temprature": 67,
                    "feels": 65
                },
                {
                    "Date": "04/07/2019",
                    "Time": "2.59pm",
                    "temprature": 55,
                    "feels": 54
                },
                {
                    "Date": "04/08/2019",
                    "Time": "2.59pm",
                    "temprature": 71,
                    "feels": 60
                },
                {
                    "Date": "04/09/2019",
                    "Time": "2.59pm",
                    "temprature": 78,
                    "feels": 75
                }
                ]
            },
            {
                "name": "Buffalo",
                "forecast": [{
                    "Date": "04/05/2019",
                    "Time": "2.59pm",
                    "temprature": 58,
                    "feels": 40
                },
                {
                    "Date": "04/06/2019",
                    "Time": "2.59pm",
                    "temprature": 68,
                    "feels": 64
                },
                {
                    "Date": "04/07/2019",
                    "Time": "2.59pm",
                    "temprature": 57,
                    "feels": 46
                },
                {
                    "Date": "04/08/2019",
                    "Time": "2.59pm",
                    "temprature": 63,
                    "feels": 62
                },
                {
                    "Date": "04/09/2019",
                    "Time": "2.59pm",
                    "temprature": 40,
                    "feels": 48
                }
                ]
            }
            ]
        },
        "CA": {
            "currentdate": "04/05/2019",
            "time": "02:59 PM",
            "cities": [{
                "name": "Los Angeles",
                "forecast": [{
                    "Date": "04/05/2019",
                    "Time": "2.59pm",
                    "temprature": 67,
                    "feels": 50
                },
                {
                    "Date": "04/06/2019",
                    "Time": "2.59pm",
                    "temprature": 77,
                    "feels": 65
                },
                {
                    "Date": "04/07/2019",
                    "Time": "2.59pm",
                    "temprature": 65,
                    "feels": 54
                },
                {
                    "Date": "04/08/2019",
                    "Time": "2.59pm",
                    "temprature": 71,
                    "feels": 60
                },
                {
                    "Date": "04/09/2019",
                    "Time": "2.59pm",
                    "temprature": 78,
                    "feels": 75
                }
                ]
            },
            {
                "name": "San francisco",
                "forecast": [{
                    "Date": "04/05/2019",
                    "Time": "2.59pm",
                    "temprature": 68,
                    "feels": 50
                },
                {
                    "Date": "04/06/2019",
                    "Time": "2.59pm",
                    "temprature": 78,
                    "feels": 64
                },
                {
                    "Date": "04/07/2019",
                    "Time": "2.59pm",
                    "temprature": 67,
                    "feels": 66
                },
                {
                    "Date": "04/08/2019",
                    "Time": "2.59pm",
                    "temprature": 73,
                    "feels": 72
                },
                {
                    "Date": "04/09/2019",
                    "Time": "2.59pm",
                    "temprature": 70,
                    "feels": 68
                }
                ]
            }
            ]
        }
    }
}
const cities = [];

const prepareCityData = () => {
    const stateKeys = Object.keys(data.States);

    stateKeys.forEach(stateKey => {
        const stateData = data.States[stateKey];
        stateData.cities.forEach(city => {
            cities.push({
                ...city,
                currentDate: stateData.currentdate,
                currentTime: stateData.time
            })
        })
    })
}

export const getWeatherData = async (cityName) => new Promise((resolve, reject) => {
    if (cities.length === 0) {
        prepareCityData();
    }
    const city = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());
    if (city) {
        resolve({
            success: true,
            ...city
        })
    } else {
        reject({
            success: false,
            message: 'Unable to find city details'
        })
    }
});