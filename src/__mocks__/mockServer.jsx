import { Server } from 'miragejs';
import { currentWeather } from './response/currentWeather';

export function startMockServer({ environment = 'development' } = {}) {
  return new Server({
    environment,

    routes() {
      this.get('https://api.openweathermap.org/data/2.5/onecall', () => {
        return currentWeather;
      });
    },
  });
}
