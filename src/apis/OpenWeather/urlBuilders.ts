const defaultUrl = 'https://api.openweathermap.org';
const appID = `appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

export const owCurrentWeather = (latitude: number, longitude: number, units: 'metric' | 'standard' | 'imperial' = 'metric', lang = navigator.language) =>
    `${defaultUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&${appID}`;


export const owWeatherImage = (imageName?: string, zoom: '2' | '4' | '' = '') =>
    imageName ? `http://openweathermap.org/img/wn/${imageName}${zoom && `@${zoom}x`}.png` : undefined;