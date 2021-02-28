import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { routes } from './constants/utilConstants';
import { Home } from './containers/homeContainer';
import { store } from './store/Store';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path={routes.HOME}>
          <Home store={store} />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
