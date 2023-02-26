type OWCurrentWeatherResponse = {
    coord: {
        lon: number; // City geo location, longitude
        lat: number; //City geo location, latitude
    };
    weather: { // (more info Weather condition codes)
        id: number; // Weather condition id
        main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
        description: string; // Weather condition within the group. You can get the output in your language
        icon: string; // Weather icon id
    }[];
    base?: string; // Internal parameter
    main: {
        temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
        feels_like: number; // Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
        temp_min: number; // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
        temp_max: number; // Humidity, %
        pressure: number; // Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
        humidity: number; // Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
        sea_level: number; // Atmospheric pressure on the sea level, hPa
        grnd_level: number; // Atmospheric pressure on the ground level, hPa
    };
    visibility?: number; // Visibility, meter. The maximum value of the visibility is 10km
    wind: {
        speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
        deg: number; // Wind direction, degrees (meteorological)
        gust: number; // Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
    };
    rain?: {
        //
        '1h'?: number; // Rain volume for the last 1 hour, mm
        '3h'?: number; // Rain volume for the last 3 hours, mm
    };
    snow?: {
        '1h'?: number; // Snow volume for the last 1 hour, mm
        '3h'?: number; // Snow volume for the last 3 hour, mm
    };
    clouds: {
        all: number; // Cloudiness, %
    };
    dt?: number; // Time of data calculation, unix, UTC
    sys: {
        type: number; // Internal parameter
        id: number; // Internal parameter
        message: any; // Internal parameter
        country: string; // Country code (GB, JP etc.)
        sunrise: number; // Sunrise time, unix, UTC
        sunset: number; // Sunset time, unix, UTC
    };
    timezone?: number; // Shift in seconds from UTC
    id?: number; // City ID
    name: string; // City name
    cod?: number; // Internal parameter
}; //

type OWLocationWithGivenName = {
    name: string,
    local_names?: {
        [key: string]: string
    },
    lat: number,
    lon: number,
    country: string
}