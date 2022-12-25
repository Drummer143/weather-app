import axios, { AxiosPromise } from "axios";
import { aGeolocationUrl } from './urlBuilders';

export const aGeolocation = async (): AxiosPromise<AGeolocationResponse> => axios.get(aGeolocationUrl);
