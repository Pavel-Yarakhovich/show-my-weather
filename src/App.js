import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { routes } from './constants/utilConstants';
import { Home } from './containers/homeContainer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path={routes.HOME} component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
