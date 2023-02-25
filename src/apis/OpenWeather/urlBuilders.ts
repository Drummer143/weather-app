const defaultUrl = 'https://api.openweathermap.org';
const appIDQuery = `appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

export const currentWeatherLink = (latitude: number, longitude: number, units: 'metric' | 'standard' | 'imperial' = 'metric', lang = navigator.language) =>
    `${defaultUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&${appIDQuery}`;


export const weatherImageLink = (imageName?: string, zoom: '2' | '4' | '' = '') =>
    imageName ? `http://openweathermap.org/img/wn/${imageName}${zoom && `@${zoom}x`}.png` : undefined;

export const coordinatesByLocationNameLink = (cityName: string, limit = 5/* , stateCode?: string | number, countrCode?: string | number */) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&${appIDQuery}`