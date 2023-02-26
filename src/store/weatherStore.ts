import { makeAutoObservable } from 'mobx';

import { aGeolocation } from '../apis/Abstract/requests';
import { countryCodeFormatter } from '../utils/constants';
import { getCitiesWithGivenName as OWGetCitiesWithGivenName, getCurrentWeather } from '../apis/OpenWeather';

class WeatherStore {
    latitude = 0;
    longitude = 0;
    currentWeather?: OWCurrentWeatherResponse;
    suggestedCities: OWLocationWithGivenName[] = [];
    city?: string;
    country?: string;

    constructor() {
        makeAutoObservable(this);
    }

    setCity(cityName: string) {
        this.city = cityName;
    }

    setCountry(countryCode: string) {
        try {
            this.country = countryCodeFormatter.of(countryCode);
        } catch (error) {
            console.error(error);
        }
    }

    setPosition(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    async requestPosition() {
        try {
        const { latitude, longitude } = (await aGeolocation(['latitude', 'longitude'])).data;

        this.latitude = latitude;
        this.longitude = longitude;
        } catch (error) {
            console.error(error);
        }
    }

    async requestCurrentWeather(latitude: number, longitude: number) {
        const currentWeather = await getCurrentWeather(latitude, longitude);

        this.currentWeather = currentWeather;

        return currentWeather;
    }

    async getCitiesWithGivenName(cityName: string) {
        const cities = await OWGetCitiesWithGivenName(cityName);

        this.suggestedCities = cities;

        return cities;
    }

    clearSuggestedCities() {
        this.suggestedCities = [];
    }
}

export default new WeatherStore();