import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { ONE_CALL_API } from '../constants/API';
import { LocationCard } from '../components/LocationCard/LocationCard';
import * as styles from './homeContainer.module.scss';

import { Header } from '../components/Header/Header';
import { Days } from '../components/Days/Days';
import { RequestsList } from '../components/RequestsList/RequestsList';
import KelvinOrCelsius from '../components/KelvinOrCelsius/KelvinOrCelsius';
import { DayInfo } from '../components/DayInfo/DayInfo';
import { convertKelvinToCelsius } from '../utils/index';

export const Home = observer(() => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [coords, setCoords] = React.useState(null);
  const [requests, setRequests] = React.useState([]);
  const [curInput, setCurInput] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [temperature, setTemperature] = React.useState('');
  const [temperatureUnit, setTemperatureUnit] = React.useState('\u2103');

  const saveCurRequest = () => {
    setRequests((prev) => [curInput, ...prev]);
    setInputValue('');
    setCurInput('');
  };

  const saveCurInput = ({ target }) => {
    setCurInput(target.value);
    setInputValue(target.value);
  };

  const searchByKeyPress = (event) => {
    if (event.key == 'Enter') {
      saveCurRequest();
    }
  };

  const toggleKelvinCelsius = ({ target }) => {
    if (target.value === 'kelvin') {
      setTemperature(weatherData.current.feels_like.toFixed(0));
      setTemperatureUnit('K');
    } else {
      setTemperature(
        convertKelvinToCelsius(weatherData.current.feels_like).toFixed(1)
      );
      setTemperatureUnit('\u2103');
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
              setTemperature(
                convertKelvinToCelsius(res.data.current.feels_like).toFixed(1)
              );
            }
          },
          (err) => {
            console.log('err: ', err);
          }
        );
    }
  }, [coords]);

  // React.useEffect(() => {
  //   console.log(weatherData);
  //   setTemperature(
  //     convertKelvinToCelsius(weatherData?.current.feels_like).toFixed(1)
  //   );
  // }, []);

  return weatherData ? (
    <>
      <div className={styles.Body}>
        <Header
          changed={saveCurInput}
          clicked={saveCurRequest}
          value={inputValue}
          onkey={searchByKeyPress}
        />
        <div className={styles.container}>
          <RequestsList requests={requests} />
          <LocationCard weather={weatherData} />
          <DayInfo
            weather={weatherData}
            temp={temperature}
            tempUnit={temperatureUnit}
          />
          <KelvinOrCelsius
            changed={toggleKelvinCelsius}
            temp={temperature}
            weather={weatherData}
          />
        </div>
        <Days
          forecast={weatherData?.daily.slice(0, 7)}
          weather={weatherData}
          temp={temperature}
          tempUnit={temperatureUnit}
        />
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
});
