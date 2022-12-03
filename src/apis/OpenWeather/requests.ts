import axios, { AxiosPromise } from 'axios';
import { owCurrentWeather } from './urlBuilders';

export const getCurrentWeather = async (latitude: number, longitude: number): AxiosPromise<OWCurrentWeatherResponse> => axios.get(owCurrentWeather(latitude, longitude));