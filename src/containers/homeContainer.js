import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { ONE_CALL_API } from '../constants/API';

export const Home = observer(({ store }) => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [coords, setCoords] = React.useState(null);

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
        .get(
          ONE_CALL_API(
            coords.latitude,
            coords.longitude,
            'daily,hourly,minutely'
          )
        )
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

  return weatherData ? <p>Home component</p> : <p>Loading...</p>;
});
