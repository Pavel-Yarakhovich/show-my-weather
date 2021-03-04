import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { ONE_CALL_API } from '../constants/API';
import { LocationCard } from '../components/LocationCard/LocationCard';
import * as styles from './homeContainer.module.scss';

import { Header } from '../components/Header/Header';
import { Days } from '../components/Days/Days';

export const Home = observer(({ store }) => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [coords, setCoords] = React.useState(null);

  React.useEffect(() => {
    console.log('weatherData', weatherData);
  }, [weatherData]);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  React.useEffect(() => {
    if (coords?.latitude && coords?.longitude) {
      axios
        .get(ONE_CALL_API(coords.latitude, coords.longitude, 'hourly,minutely'))
        .then(
          (res) => {
            if (res.data) {
              setWeatherData(res.data);
            }
          },
          (err) => {
            console.log('err: ', err);
          }
        );
    }
  }, [coords]);

  return weatherData ? (
    <>
      <Header />
      <div className={styles.container}>
        <LocationCard weather={weatherData} />
      </div>
      <Days forecast={weatherData?.daily.slice(0, 7)} />
    </>
  ) : (
    <p>Loading...</p>
  );
});
