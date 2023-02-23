import { makeAutoObservable } from 'mobx';

import { aGeolocation } from '../apis/Abstract/requests';
import { countryCodeFormatter } from '../utils/constants';

class GeolocationStore {
    latitude = 0;
    longitude = 0;
    country: string | undefined;
    city: string | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    async requestPosition() {
        try {
        const { latitude, longitude } = (await aGeolocation(['latitude', 'longitude'])).data;

        this.latitude = latitude;
        this.longitude = longitude;
        } catch (error) {
            console.log(error);
        }
    }

    setPosition(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
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

    setGeolocation({ city, country, latitude, longitude }: Pick<GeolocationStore, 'city' | 'country' | 'latitude' | 'longitude'>) {
        this.city = city;
        this.country = country;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default new GeolocationStore();
