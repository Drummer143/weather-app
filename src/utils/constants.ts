export const currentWeatherExampleResponse: OWCurrentWeatherResponse = {
    coord:
    {
        lon: 44.5096,
        lat: 40.1458
    },
    weather: [
        {
            id: 701,
            main: "Mist",
            description: "mist",
            icon: "50n"
        }
    ],
    base: "stations",
    main: {
        temp: 272.48,
        feels_like: 272.48,
        temp_min: 272.48,
        temp_max: 272.48,
        pressure: 1018,
        humidity: 74
    },
    visibility: 3500,
    wind: {
        speed: 0,
        deg: 0
    },
    clouds: {
        all: 3
    },
    dt: 1672000785,
    sys: {
        type: 1,
        id: 8851,
        country: "AM",
        sunrise: 1672028564,
        sunset: 1672062111
    },
    timezone: 14400,
    id: 616353,
    name: "Nor Aresh",
    cod: 200
};

export const navLinkInfo = [
    { to: '/current', text: 'Current' },
    { to: '/14-days', text: '3 days forecast' },
    { to: '/3-days', text: '14 days forecast' },
]