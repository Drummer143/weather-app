const domain = 'http://dataservice.accuweather.com/';

export const minuteForecast = (lat: number, lon: number) => `${domain}/forecasts/v1/minute?apikey=${import.meta.env.VITE_API_KEY}&q=${lat},${lon}`;