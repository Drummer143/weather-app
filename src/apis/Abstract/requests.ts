import axios, { AxiosPromise } from "axios";
import { aGeolocationUrl } from './urlBuilders';

export const aGeolocation = async (fields?: string[] | string): AxiosPromise<AGeolocationResponse> => axios.get(aGeolocationUrl(fields));
