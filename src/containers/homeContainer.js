import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { ONE_CALL_API } from '../constants/API';
import { LocationCard } from '../components/LocationCard/LocationCard';
import * as styles from './homeContainer.module.scss';

import { Header } from '../components/Header/Header';
import { Days } from '../components/Days/Days';
import { RequestsList } from '../components/RequestsList/RequestsList';
import { DayInfo } from '../components/DayInfo/DayInfo';

export const Home = observer(() => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [coords, setCoords] = React.useState(null);
  const [requests, setRequests] = React.useState([]);
  const [curInput, setCurInput] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const saveCurRequest = () => {
    setRequests((prev) => [curInput, ...prev]);
    setInputValue('');
    setCurInput('');
  };

  const saveCurInput = ({ target }) => {
    setCurInput(target.value);
    setInputValue(target.value);
  };

  const handleKeyPress = ({ target }) => {
    if (target.keyCode === 13) {
      saveCurRequest();
    }
  };

  React.useEffect(() => {
    console.log('weatherData', weatherData);
  }, [weatherData]);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => {
      setCoords({
        latitude: 53.8826,
        longitude: 27.5362,
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
      <div className={styles.Body}>
        <Header
          changed={saveCurInput}
          clicked={saveCurRequest}
          value={inputValue}
          onkey={handleKeyPress}
        />
        <div className={styles.container}>
          <RequestsList requests={requests} />
          <LocationCard weather={weatherData} />
          <DayInfo weather={weatherData} />
        </div>
        <Days forecast={weatherData?.daily.slice(0, 7)} />
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
});
