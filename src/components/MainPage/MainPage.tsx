import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { minuteForecast } from '../../api/urlBuilders';

import styles from './MainPage.module.scss';

function MainPage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            axios.get(minuteForecast(latitude, longitude))
                .then(res => {
                    const data = res.data as MinuteForecastResponse;
                    console.log(data);
                    navigate('/minute', { state: { data } })
                })
                .catch(error => console.error(error));
        }, error => {
            console.error(error);
        })

    })

    return (
        <div className={styles.wrapper}>
            Main
        </div>
    )
}

export default MainPage;