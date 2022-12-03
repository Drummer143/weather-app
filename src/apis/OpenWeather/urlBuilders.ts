const defaultUrl = 'https://api.openweathermap.org';
const appID = `appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

export const owCurrentWeather = (latitude: number, longitude: number) =>
    `${defaultUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&${appID}`;

export const weatherImage = (imageName: string, zoom?: '1' | '2' | '4') =>
    `http://openweathermap.org/img/wn/${imageName}${zoom && `@${zoom}x`}.png`;
