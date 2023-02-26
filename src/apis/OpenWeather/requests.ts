import axios from 'axios';
import { coordinatesByLocationNameLink, currentWeatherLink } from './urlBuilders';

export const getCurrentWeather = async (
    latitude: number,
    longitude: number
): Promise<OWCurrentWeatherResponse> => (await axios.get(currentWeatherLink(latitude, longitude))).data;

export const getCitiesWithGivenName = async (
    cityName: string,
    limit?: number
): Promise<OWLocationWithGivenName[]> => (await axios.get(coordinatesByLocationNameLink(cityName, limit))).data