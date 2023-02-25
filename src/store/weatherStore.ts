import { makeAutoObservable } from 'mobx';

import { getCurrentWeather } from '../apis/OpenWeather';

class WeatherStore {
    currentWeather: OWCurrentWeatherResponse | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    async requestCurrentWeather(latitude: number, longitude: number) {
        const currentWeather = (await getCurrentWeather(latitude, longitude)).data;

        console.log(currentWeather);

        this.currentWeather = currentWeather;

        return currentWeather;
    }
}

export default new WeatherStore();