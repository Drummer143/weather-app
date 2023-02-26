import { makeAutoObservable } from 'mobx';

import { getCitiesWithGivenName as OWGetCitiesWithGivenName, getCurrentWeather } from '../apis/OpenWeather';

class WeatherStore {
    currentWeather?: OWCurrentWeatherResponse | undefined;
    suggestedCities: OWLocationWithGivenName[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async requestCurrentWeather(latitude: number, longitude: number) {
        const currentWeather = await getCurrentWeather(latitude, longitude);

        console.log(currentWeather);

        this.currentWeather = currentWeather;

        return currentWeather;
    }

    async getCitiesWithGivenName(cityName: string) {
        const cities = await OWGetCitiesWithGivenName(cityName);

        console.log(cities);

        this.suggestedCities = cities;

        return cities;
    }

    clearSuggestedCities() {
        this.suggestedCities = [];
    }
}

export default new WeatherStore();