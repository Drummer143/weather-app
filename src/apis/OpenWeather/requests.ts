import axios, { AxiosPromise } from 'axios';
import { coordinatesByLocationNameLink, currentWeatherLink } from './urlBuilders';

export const getCurrentWeather = (
    latitude: number,
    longitude: number
): AxiosPromise<OWCurrentWeatherResponse> => axios.get(currentWeatherLink(latitude, longitude));

export const getCoordinatesByLocationName = (
    cityName: string,
    limit?: number
): AxiosPromise<OWCoordinatesByLocationNameResponse> => axios.get(coordinatesByLocationNameLink(cityName, limit))