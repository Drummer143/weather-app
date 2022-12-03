import { makeAutoObservable } from 'mobx';

class PositionStore {
    latitude = 0;
    longitude = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setPosition(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default new PositionStore();
