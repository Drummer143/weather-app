import { makeAutoObservable } from 'mobx';

class GeolocationStore {
    latitude = 0;
    longitude = 0;
    country: string | undefined;
    city: string | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    setPosition(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    setCity(cityName: string) {
        this.city = cityName;
    }

    setCountry(countryName: string) {
        this.country = countryName;
    }

    setGeolocation({ city, country, latitude, longitude }: Pick<GeolocationStore, 'city' | 'country' | 'latitude' | 'longitude'>) {
        this.city = city;
        this.country = country;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default new GeolocationStore();
